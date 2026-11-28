<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception as PHPMailerException;
use PHPMailer\PHPMailer\PHPMailer;

const RATE_WINDOW_SECONDS = 900;     // 15 minutes
const MAX_ATTEMPTS_PER_WINDOW = 5;   // Max 5 submissions per IP per 15 minutes
const MIN_COOLDOWN_SECONDS = 15;     // Minimum 15s between attempts from same IP
const DUPLICATE_WINDOW_SECONDS = 600; // Block identical resend within 10 minutes
const MIN_FORM_FILL_MS = 2500;       // Reject bot submissions completed under 2.5s

const ALLOWED_SERVICES = [
    'Mobile App Development',
    'Custom Software Development',
    'eCommerce Solutions',
    'AI Solutions',
    'Website Development',
    'Cloud Solutions',
    'Digital Marketing',
];

const ALLOWED_BUDGETS = [
    'Under ₹1,00,000',
    '₹1,00,000 – ₹5,00,000',
    '₹5,00,000 – ₹15,00,000',
    '₹15,00,000+',
    'Not sure yet',
];

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

/**
 * Emit a JSON HTTP response and terminate execution.
 */
function sendJsonResponse(int $statusCode, array $payload): never
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

/**
 * Escape dynamic strings safely for HTML email output.
 */
function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

/**
 * Parse simple KEY=VALUE lines from an out-of-webroot .env file when available.
 */
function loadDotEnvIfPresent(): void
{
    $candidates = [
        dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . '.env',
        dirname(__DIR__, 3) . DIRECTORY_SEPARATOR . '.env',
    ];

    foreach ($candidates as $path) {
        if (!is_file($path) || !is_readable($path)) {
            continue;
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if ($lines === false) {
            continue;
        }

        foreach ($lines as $line) {
            $trimmed = trim($line);
            if ($trimmed === '' || str_starts_with($trimmed, '#') || !str_contains($trimmed, '=')) {
                continue;
            }

            [$key, $val] = explode('=', $trimmed, 2);
            $key = trim($key);
            $val = trim($val);

            if ($key === '') {
                continue;
            }

            if (
                (str_starts_with($val, '"') && str_ends_with($val, '"')) ||
                (str_starts_with($val, "'") && str_ends_with($val, "'"))
            ) {
                $val = substr($val, 1, -1);
            }

            if (getenv($key) === false && !array_key_exists($key, $_ENV)) {
                $_ENV[$key] = $val;
            }
        }

        break;
    }
}

/**
 * Read a configuration variable from environment or fallback map.
 */
function envValue(string $key, ?string $default = null): ?string
{
    $val = $_ENV[$key] ?? $_SERVER[$key] ?? getenv($key);
    if ($val === false || $val === null || $val === '') {
        return $default;
    }
    return trim((string) $val);
}

/**
 * Load SMTP credentials strictly from server-side configuration or environment variables.
 * Never loads credential files from inside the web-served directory tree.
 */
function loadMailConfig(): array
{
    loadDotEnvIfPresent();

    $fileConfig = [];
    $configCandidates = [
        dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'server' . DIRECTORY_SEPARATOR . 'mail-config.php',
        dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'mail-config.php',
        dirname(__DIR__, 3) . DIRECTORY_SEPARATOR . 'mail-config.php',
    ];

    foreach ($configCandidates as $candidate) {
        if (is_file($candidate) && is_readable($candidate)) {
            $loaded = require $candidate;
            if (is_array($loaded)) {
                $fileConfig = $loaded;
            }
            break;
        }
    }

    $allowedOriginsRaw = envValue('ALLOWED_ORIGINS');
    $allowedOrigins = $allowedOriginsRaw !== null
        ? array_values(array_filter(array_map('trim', explode(',', $allowedOriginsRaw))))
        : ($fileConfig['allowed_origins'] ?? ['https://vijayantech.com', 'https://www.vijayantech.com']);

    $config = [
        'smtp_host' => envValue('SMTP_HOST', $fileConfig['smtp_host'] ?? null),
        'smtp_port' => (int) envValue('SMTP_PORT', isset($fileConfig['smtp_port']) ? (string) $fileConfig['smtp_port'] : '465'),
        'smtp_encryption' => strtolower((string) envValue('SMTP_ENCRYPTION', $fileConfig['smtp_encryption'] ?? 'ssl')),
        'smtp_username' => envValue('SMTP_USERNAME', $fileConfig['smtp_username'] ?? null),
        'smtp_password' => envValue('SMTP_PASSWORD', $fileConfig['smtp_password'] ?? null),
        'from_email' => envValue('SMTP_FROM_EMAIL', $fileConfig['from_email'] ?? 'support@vijayantech.com'),
        'from_name' => envValue('SMTP_FROM_NAME', $fileConfig['from_name'] ?? 'VijayanTech'),
        'recipient_email' => envValue('CONTACT_RECIPIENT_EMAIL', $fileConfig['recipient_email'] ?? 'support@vijayantech.com'),
        'site_url' => envValue('SITE_URL', $fileConfig['site_url'] ?? 'https://vijayantech.com/'),
        'allowed_origins' => $allowedOrigins,
    ];

    $missingOrPlaceholder = empty($config['smtp_host'])
        || empty($config['smtp_username'])
        || empty($config['smtp_password'])
        || empty($config['from_email'])
        || empty($config['recipient_email'])
        || $config['smtp_host'] === 'smtp.example.com'
        || str_contains((string) $config['smtp_password'], 'REPLACE_WITH')
        || $config['smtp_password'] === 'replace-with-app-password';

    if ($missingOrPlaceholder) {
        error_log('[VijayanTech Contact API] Incomplete or placeholder SMTP configuration.');
        sendJsonResponse(500, [
            'success' => false,
            'message' => 'Contact mail service is not configured on the server yet. Please email us directly at support@vijayantech.com.',
        ]);
    }

    return $config;
}

/**
 * Locate and load PHPMailer via Composer autoloader or bundled source directory.
 */
function loadPhpMailer(): void
{
    $autoloadPaths = [
        __DIR__ . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php',
        dirname(__DIR__) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php',
        dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php',
        dirname(__DIR__, 3) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php',
    ];

    foreach ($autoloadPaths as $autoloadPath) {
        if (is_file($autoloadPath) && is_readable($autoloadPath)) {
            require_once $autoloadPath;
            if (class_exists(PHPMailer::class)) {
                return;
            }
        }
    }

    $manualDirs = [
        __DIR__ . DIRECTORY_SEPARATOR . 'phpmailer' . DIRECTORY_SEPARATOR . 'src',
        dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'phpmailer' . DIRECTORY_SEPARATOR . 'src',
        dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'server' . DIRECTORY_SEPARATOR . 'phpmailer' . DIRECTORY_SEPARATOR . 'src',
    ];

    foreach ($manualDirs as $dir) {
        $exceptionFile = $dir . DIRECTORY_SEPARATOR . 'Exception.php';
        $mailerFile = $dir . DIRECTORY_SEPARATOR . 'PHPMailer.php';
        $smtpFile = $dir . DIRECTORY_SEPARATOR . 'SMTP.php';

        if (is_file($exceptionFile) && is_file($mailerFile) && is_file($smtpFile)) {
            require_once $exceptionFile;
            require_once $mailerFile;
            require_once $smtpFile;
            if (class_exists(PHPMailer::class)) {
                return;
            }
        }
    }

    error_log('[VijayanTech Contact API] PHPMailer dependency not found. Run `composer install`.');
    sendJsonResponse(500, [
        'success' => false,
        'message' => 'Mail delivery service is temporarily unavailable. Please email us directly at support@vijayantech.com.',
    ]);
}

/**
 * Enforce CORS headers for allowed origins and validate the HTTP request method.
 */
function handleRequestHeadersAndMethod(array $allowedOrigins): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $host = $_SERVER['HTTP_HOST'] ?? '';

    if ($origin !== '') {
        $parsedOrigin = parse_url($origin);
        $originHost = $parsedOrigin['host'] ?? '';
        $originPort = isset($parsedOrigin['port']) ? ':' . $parsedOrigin['port'] : '';
        $isSameHost = $host !== '' && strcasecmp($originHost . $originPort, $host) === 0;
        $isConfiguredOrigin = in_array($origin, $allowedOrigins, true);

        if ($isSameHost || $isConfiguredOrigin) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Vary: Origin');
            header('Access-Control-Allow-Methods: POST, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
        } elseif ($_SERVER['REQUEST_METHOD'] !== 'OPTIONS') {
            sendJsonResponse(403, [
                'success' => false,
                'message' => 'Request origin is not permitted.',
            ]);
        }
    }

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        header('Allow: POST, OPTIONS');
        sendJsonResponse(405, [
            'success' => false,
            'message' => 'Method not allowed.',
        ]);
    }
}

/**
 * Decode JSON or form-encoded POST payload cleanly.
 */
function readRequestPayload(): array
{
    $contentType = strtolower($_SERVER['CONTENT_TYPE'] ?? '');
    $rawBody = file_get_contents('php://input', false, null, 0, 32769);

    if ($rawBody !== false && strlen($rawBody) > 32768) {
        sendJsonResponse(413, [
            'success' => false,
            'message' => 'Submission payload is too large.',
        ]);
    }

    if (str_contains($contentType, 'application/json')) {
        $decoded = json_decode($rawBody ?: '', true);
        if (!is_array($decoded)) {
            sendJsonResponse(400, [
                'success' => false,
                'message' => 'Invalid JSON request payload.',
            ]);
        }
        return $decoded;
    }

    if (!empty($_POST)) {
        return $_POST;
    }

    sendJsonResponse(400, [
        'success' => false,
        'message' => 'Unsupported or empty request payload.',
    ]);
}

/**
 * Detect potential header-injection patterns in single-line inputs.
 */
function containsHeaderInjection(string $value): bool
{
    return (bool) preg_match('/[\r\n\0]|%0[ad]|(?:^|[\r\n])\s*(?:content-type|bcc|cc|to)\s*:/i', $value);
}

/**
 * Validate and sanitize all submitted fields plus anti-spam traps.
 *
 * @return array{
 *   name: string,
 *   company: string,
 *   email: string,
 *   phone: string,
 *   service: string,
 *   budget: string,
 *   message: string
 * }
 */
function validateAndSanitizeInput(array $payload): array
{
    // 1. Honeypot check (should always stay empty)
    $honeypot = trim((string) ($payload['website'] ?? ''));
    if ($honeypot !== '') {
        sendJsonResponse(400, [
            'success' => false,
            'message' => 'Unable to process this submission.',
        ]);
    }

    // 2. Minimum form fill duration check against automated bots
    if (isset($payload['elapsedMs']) && is_numeric($payload['elapsedMs'])) {
        if ((int) $payload['elapsedMs'] < MIN_FORM_FILL_MS) {
            sendJsonResponse(400, [
                'success' => false,
                'message' => 'Please take a moment to complete the form before submitting.',
            ]);
        }
    }

    $name = trim((string) ($payload['name'] ?? ''));
    $company = trim((string) ($payload['company'] ?? ''));
    $email = trim((string) ($payload['email'] ?? ''));
    $phone = trim((string) ($payload['phone'] ?? ''));
    $service = trim((string) ($payload['service'] ?? ''));
    $budget = trim((string) ($payload['budget'] ?? ''));
    $message = trim(str_replace(["\r\n", "\r"], "\n", (string) ($payload['message'] ?? '')));

    $errors = [];

    if ($name === '' || mb_strlen($name) < 2 || mb_strlen($name) > 100 || containsHeaderInjection($name)) {
        $errors['name'] = 'Please enter a valid full name (2–100 characters).';
    }

    if ($company !== '' && (mb_strlen($company) > 120 || containsHeaderInjection($company))) {
        $errors['company'] = 'Company name must be 120 characters or fewer.';
    }

    if (
        $email === '' ||
        mb_strlen($email) > 254 ||
        containsHeaderInjection($email) ||
        filter_var($email, FILTER_VALIDATE_EMAIL) === false
    ) {
        $errors['email'] = 'Please enter a valid email address.';
    }

    $phoneDigits = preg_replace('/\D+/', '', $phone) ?? '';
    if (
        $phone === '' ||
        mb_strlen($phone) > 30 ||
        containsHeaderInjection($phone) ||
        !preg_match('/^[+\d\s().-]+$/', $phone) ||
        strlen($phoneDigits) < 7 ||
        strlen($phoneDigits) > 15
    ) {
        $errors['phone'] = 'Please enter a valid phone number (7–15 digits).';
    }

    if ($service === '' || containsHeaderInjection($service) || !in_array($service, ALLOWED_SERVICES, true)) {
        $errors['service'] = 'Please select a valid service from the list.';
    }

    if ($budget !== '' && (containsHeaderInjection($budget) || !in_array($budget, ALLOWED_BUDGETS, true))) {
        $errors['budget'] = 'Please select a valid budget range.';
    }

    if ($message === '' || mb_strlen($message) < 10 || mb_strlen($message) > 5000) {
        $errors['message'] = 'Please describe your project requirements (10–5,000 characters).';
    }

    if (!empty($errors)) {
        sendJsonResponse(422, [
            'success' => false,
            'message' => 'Please review the highlighted fields and try again.',
            'errors' => $errors,
        ]);
    }

    return [
        'name' => $name,
        'company' => $company,
        'email' => $email,
        'phone' => $phone,
        'service' => $service,
        'budget' => $budget,
        'message' => $message,
    ];
}

/**
 * Compute deterministic duplicate signature for an enquiry payload.
 */
function buildSubmissionHash(array $data): string
{
    $normalizedMessage = preg_replace('/\s+/', ' ', mb_strtolower($data['message'])) ?? '';
    $canonical = implode('|', [
        mb_strtolower($data['email']),
        mb_strtolower($data['service']),
        $normalizedMessage,
    ]);

    return hash('sha256', $canonical);
}

/**
 * Path helper for file-backed spam/duplicate guard storage (no database required).
 */
function getGuardFilePath(string $clientIp): string
{
    $guardDir = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'vijayantech_contact_guard';
    if (!is_dir($guardDir)) {
        @mkdir($guardDir, 0750, true);
    }

    $ipKey = hash('sha256', $clientIp);
    return $guardDir . DIRECTORY_SEPARATOR . $ipKey . '.json';
}

/**
 * Enforce IP rate limiting and recent duplicate-submission checks.
 */
function enforceRateLimitAndDuplicateGuard(string $clientIp, string $submissionHash): void
{
    $guardFile = getGuardFilePath($clientIp);
    $now = time();

    $handle = @fopen($guardFile, 'c+');
    if ($handle === false) {
        return; // Fail open cleanly if temp storage is unavailable on host
    }

    if (flock($handle, LOCK_EX)) {
        $raw = stream_get_contents($handle);
        $state = json_decode($raw ?: '', true);
        if (!is_array($state)) {
            $state = ['attempts' => [], 'recent_hashes' => []];
        }

        $attempts = array_values(array_filter(
            $state['attempts'] ?? [],
            static fn ($ts): bool => is_int($ts) && ($now - $ts) < RATE_WINDOW_SECONDS
        ));

        $recentHashes = array_filter(
            $state['recent_hashes'] ?? [],
            static fn ($ts): bool => is_int($ts) && ($now - $ts) < DUPLICATE_WINDOW_SECONDS
        );

        if (isset($recentHashes[$submissionHash])) {
            flock($handle, LOCK_UN);
            fclose($handle);
            sendJsonResponse(409, [
                'success' => false,
                'message' => 'This enquiry was already submitted recently. Our team has received it and will reach out soon.',
            ]);
        }

        $lastAttempt = !empty($attempts) ? max($attempts) : 0;
        if ($lastAttempt > 0 && ($now - $lastAttempt) < MIN_COOLDOWN_SECONDS) {
            $retryAfter = MIN_COOLDOWN_SECONDS - ($now - $lastAttempt);
            flock($handle, LOCK_UN);
            fclose($handle);
            header('Retry-After: ' . $retryAfter);
            sendJsonResponse(429, [
                'success' => false,
                'message' => 'Please wait a few seconds before sending another request.',
            ]);
        }

        if (count($attempts) >= MAX_ATTEMPTS_PER_WINDOW) {
            flock($handle, LOCK_UN);
            fclose($handle);
            header('Retry-After: ' . RATE_WINDOW_SECONDS);
            sendJsonResponse(429, [
                'success' => false,
                'message' => 'Too many enquiries submitted from your network. Please try again in a few minutes.',
            ]);
        }

        $attempts[] = $now;
        $updated = json_encode(['attempts' => $attempts, 'recent_hashes' => $recentHashes]);

        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, $updated !== false ? $updated : '{}');
        fflush($handle);
        flock($handle, LOCK_UN);
    }

    fclose($handle);
}

/**
 * Mark a payload hash as sent only after both email deliveries succeed.
 */
function recordSuccessfulSubmission(string $clientIp, string $submissionHash): void
{
    $guardFile = getGuardFilePath($clientIp);
    $now = time();

    $handle = @fopen($guardFile, 'c+');
    if ($handle === false) {
        return;
    }

    if (flock($handle, LOCK_EX)) {
        $raw = stream_get_contents($handle);
        $state = json_decode($raw ?: '', true);
        if (!is_array($state)) {
            $state = ['attempts' => [], 'recent_hashes' => []];
        }

        $attempts = array_values(array_filter(
            $state['attempts'] ?? [],
            static fn ($ts): bool => is_int($ts) && ($now - $ts) < RATE_WINDOW_SECONDS
        ));

        $recentHashes = array_filter(
            $state['recent_hashes'] ?? [],
            static fn ($ts): bool => is_int($ts) && ($now - $ts) < DUPLICATE_WINDOW_SECONDS
        );

        $recentHashes[$submissionHash] = $now;
        $updated = json_encode(['attempts' => $attempts, 'recent_hashes' => $recentHashes]);

        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, $updated !== false ? $updated : '{}');
        fflush($handle);
        flock($handle, LOCK_UN);
    }

    fclose($handle);
}

/**
 * Create a fresh, authenticated PHPMailer SMTP client instance.
 * Using the authenticated company email as From prevents spoofing and SPF/DMARC failures.
 */
function createConfiguredMailer(array $config, string $fromName): PHPMailer
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->Port = $config['smtp_port'];
    $mail->Timeout = 15;
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    $mail->SMTPSecure = $config['smtp_encryption'] === 'tls'
        ? PHPMailer::ENCRYPTION_STARTTLS
        : PHPMailer::ENCRYPTION_SMTPS;

    $mail->setFrom($config['from_email'], $fromName);

    return $mail;
}

/**
 * Build HTML and plain-text templates for Email 1 (Company Notification).
 */
function buildCompanyNotificationTemplates(array $data, string $siteUrl): array
{
    $companyDisplay = $data['company'] !== '' ? $data['company'] : 'Not provided';
    $budgetDisplay = $data['budget'] !== '' ? $data['budget'] : 'Not specified';
    $cleanSiteUrl = rtrim($siteUrl, '/') . '/';

    $safeName = e($data['name']);
    $safeCompany = e($companyDisplay);
    $safeEmail = e($data['email']);
    $safePhone = e($data['phone']);
    $safeService = e($data['service']);
    $safeBudget = e($budgetDisplay);
    $safeMessageHtml = nl2br(e($data['message']), false);
    $safeSiteUrl = e($cleanSiteUrl);

    $html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Enquiry – VijayanTech</title>
</head>
<body style="margin:0;padding:0;background-color:#F4F6FA;font-family:Inter,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#101828;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#F4F6FA;padding:28px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border:1px solid #E4E7EC;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background-color:#101828;padding:24px 32px;border-bottom:3px solid #2563EB;">
              <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#93C5FD;">Website Contact Form</p>
              <h1 style="margin:6px 0 0;font-size:20px;font-weight:700;color:#FFFFFF;">New Contact Enquiry – VijayanTech</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:30px 32px;">
              <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#101828;">Hello Team,</p>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#475467;">
                You have received a new enquiry through the VijayanTech website contact form.
              </p>

              <p style="margin:0 0 10px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#2563EB;">Customer Details</p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;background-color:#F8FAFC;border:1px solid #E4E7EC;border-radius:8px;">
                <tr>
                  <td style="padding:10px 16px;font-size:14px;color:#475467;width:170px;border-bottom:1px solid #E4E7EC;"><strong>Name:</strong></td>
                  <td style="padding:10px 16px;font-size:14px;color:#101828;border-bottom:1px solid #E4E7EC;">{$safeName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:14px;color:#475467;border-bottom:1px solid #E4E7EC;"><strong>Company Name:</strong></td>
                  <td style="padding:10px 16px;font-size:14px;color:#101828;border-bottom:1px solid #E4E7EC;">{$safeCompany}</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:14px;color:#475467;border-bottom:1px solid #E4E7EC;"><strong>Email Address:</strong></td>
                  <td style="padding:10px 16px;font-size:14px;color:#2563EB;border-bottom:1px solid #E4E7EC;"><a href="mailto:{$safeEmail}" style="color:#2563EB;text-decoration:none;">{$safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:14px;color:#475467;"><strong>Phone Number:</strong></td>
                  <td style="padding:10px 16px;font-size:14px;color:#101828;">{$safePhone}</td>
                </tr>
              </table>

              <p style="margin:0 0 10px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#2563EB;">Project Details</p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;background-color:#F8FAFC;border:1px solid #E4E7EC;border-radius:8px;">
                <tr>
                  <td style="padding:10px 16px;font-size:14px;color:#475467;width:170px;border-bottom:1px solid #E4E7EC;"><strong>Service Interested In:</strong></td>
                  <td style="padding:10px 16px;font-size:14px;color:#101828;border-bottom:1px solid #E4E7EC;">{$safeService}</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;font-size:14px;color:#475467;"><strong>Estimated Budget:</strong></td>
                  <td style="padding:10px 16px;font-size:14px;color:#101828;">{$safeBudget}</td>
                </tr>
              </table>

              <p style="margin:0 0 10px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#2563EB;">Project Description</p>
              <div style="margin-bottom:24px;padding:16px;background-color:#F8FAFC;border:1px solid #E4E7EC;border-radius:8px;font-size:14px;line-height:1.65;color:#101828;">
                {$safeMessageHtml}
              </div>

              <hr style="border:none;border-top:1px solid #E4E7EC;margin:24px 0;" />

              <p style="margin:0 0 20px;padding:12px 16px;background-color:#EAF2FF;border-left:3px solid #2563EB;border-radius:4px;font-size:14px;line-height:1.6;color:#101828;">
                <strong>Next Step:</strong> Please review the enquiry and contact the customer using the provided email address or phone number.
              </p>

              <p style="margin:0;font-size:14px;line-height:1.7;color:#475467;">
                Best Regards,<br />
                <strong style="color:#101828;">VijayanTech Website Contact Form</strong><br />
                <a href="{$safeSiteUrl}" style="color:#2563EB;text-decoration:none;">{$safeSiteUrl}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

    $text = "Hello Team,\n\n"
        . "You have received a new enquiry through the VijayanTech website contact form.\n\n"
        . "Customer Details\n"
        . "- Name: {$data['name']}\n"
        . "- Company Name: {$companyDisplay}\n"
        . "- Email Address: {$data['email']}\n"
        . "- Phone Number: {$data['phone']}\n\n"
        . "Project Details\n"
        . "- Service Interested In: {$data['service']}\n"
        . "- Estimated Budget: {$budgetDisplay}\n\n"
        . "Project Description\n"
        . "{$data['message']}\n\n"
        . "---\n\n"
        . "Next Step: Please review the enquiry and contact the customer using the provided email address or phone number.\n\n"
        . "Best Regards,\n"
        . "VijayanTech Website Contact Form\n"
        . "{$cleanSiteUrl}\n";

    return [
        'subject' => 'New Contact Enquiry – VijayanTech',
        'html' => $html,
        'text' => $text,
    ];
}

/**
 * Build branded HTML and plain-text templates for Email 2 (Customer Thank-You Email).
 */
function buildThankYouTemplates(array $data, array $config): array
{
    $cleanSiteUrl = rtrim($config['site_url'], '/') . '/';
    $safeName = e($data['name']);
    $safeService = e($data['service']);
    $safeSiteUrl = e($cleanSiteUrl);
    $safeSupportEmail = e($config['recipient_email']);

    $html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Contacting VijayanTech</title>
</head>
<body style="margin:0;padding:0;background-color:#F4F6FA;font-family:Inter,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#101828;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#F4F6FA;padding:28px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border:1px solid #E4E7EC;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background-color:#101828;padding:28px 32px;border-bottom:3px solid #2563EB;">
              <p style="margin:0;font-size:20px;font-weight:800;letter-spacing:1.2px;color:#FFFFFF;">
                VIJAYAN<span style="color:#60A5FA;">TECH</span>
              </p>
              <p style="margin:6px 0 0;font-size:13px;color:#CBD5E1;">
                Digital Solutions, Enterprise Software &amp; Cloud Engineering
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 18px;font-size:16px;font-weight:600;color:#101828;">
                Dear {$safeName},
              </p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#475467;">
                Thank you for reaching out to <strong style="color:#101828;">VijayanTech</strong>!
              </p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#475467;">
                We have successfully received your enquiry. Our team will review your message and get back to you as soon as possible.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:22px 0;background-color:#F8FAFC;border:1px solid #E4E7EC;border-left:3px solid #2563EB;border-radius:6px;">
                <tr>
                  <td style="padding:14px 18px;">
                    <p style="margin:0 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#2563EB;">
                      Enquiry Confirmation
                    </p>
                    <p style="margin:0;font-size:14px;color:#101828;">
                      <strong>Service Selected:</strong> {$safeService}
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 24px;font-size:15px;line-height:1.65;color:#475467;">
                We appreciate your interest in our services and look forward to connecting with you.
              </p>

              <p style="margin:0 0 22px;">
                <a href="{$safeSiteUrl}" style="display:inline-block;padding:12px 22px;background-color:#2563EB;color:#FFFFFF;font-size:14px;font-weight:600;text-decoration:none;border-radius:4px;">
                  Visit VijayanTech Website
                </a>
              </p>

              <p style="margin:0;font-size:14px;line-height:1.7;color:#475467;">
                Best Regards,<br />
                <strong style="color:#101828;">Team VijayanTech</strong><br />
                Website: <a href="{$safeSiteUrl}" style="color:#2563EB;text-decoration:none;">{$safeSiteUrl}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#F8FAFC;padding:16px 32px;border-top:1px solid #E4E7EC;font-size:12px;line-height:1.5;color:#667085;">
              This is an automated confirmation from VijayanTech. If you need immediate assistance, reply to this email or write to
              <a href="mailto:{$safeSupportEmail}" style="color:#2563EB;text-decoration:none;">{$safeSupportEmail}</a>.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

    $text = "Dear {$data['name']},\n\n"
        . "Thank you for reaching out to VijayanTech!\n\n"
        . "We have successfully received your enquiry. Our team will review your message and get back to you as soon as possible.\n\n"
        . "We appreciate your interest in our services and look forward to connecting with you.\n\n"
        . "Best Regards,\n"
        . "Team VijayanTech\n"
        . "Website: {$cleanSiteUrl}\n";

    return [
        'subject' => 'Thank You for Contacting VijayanTech',
        'html' => $html,
        'text' => $text,
    ];
}

$config = loadMailConfig();
handleRequestHeadersAndMethod($config['allowed_origins']);
loadPhpMailer();

$payload = readRequestPayload();
$cleanData = validateAndSanitizeInput($payload);

$clientIp = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$submissionHash = buildSubmissionHash($cleanData);
enforceRateLimitAndDuplicateGuard($clientIp, $submissionHash);

try {
    // Email 1: Company Notification to support@vijayantech.com
    $companyTemplates = buildCompanyNotificationTemplates($cleanData, $config['site_url']);
    $companyMail = createConfiguredMailer($config, 'VijayanTech Website Contact Form');
    $companyMail->addAddress($config['recipient_email'], 'VijayanTech Support');
    $companyMail->addReplyTo($cleanData['email'], $cleanData['name']);
    $companyMail->isHTML(true);
    $companyMail->Subject = $companyTemplates['subject'];
    $companyMail->Body = $companyTemplates['html'];
    $companyMail->AltBody = $companyTemplates['text'];
    $companyMail->send();

    // Email 2: Customer Thank-You Email to customer's submitted address
    $thankYouTemplates = buildThankYouTemplates($cleanData, $config);
    $customerMail = createConfiguredMailer($config, $config['from_name']);
    $customerMail->addAddress($cleanData['email'], $cleanData['name']);
    $customerMail->addReplyTo($config['recipient_email'], 'VijayanTech Support');
    $customerMail->isHTML(true);
    $customerMail->Subject = $thankYouTemplates['subject'];
    $customerMail->Body = $thankYouTemplates['html'];
    $customerMail->AltBody = $thankYouTemplates['text'];
    $customerMail->send();
} catch (PHPMailerException|\Throwable $exception) {
    error_log('[VijayanTech Contact API] Mail delivery failed: ' . $exception->getMessage());
    sendJsonResponse(500, [
        'success' => false,
        'message' => 'We were unable to send your enquiry right now due to an email delivery error. Please try again later or reach us at support@vijayantech.com.',
    ]);
}

recordSuccessfulSubmission($clientIp, $submissionHash);

sendJsonResponse(200, [
    'success' => true,
    'message' => 'Your enquiry has been sent successfully and a confirmation email has been delivered to your inbox.',
]);
