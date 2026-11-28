<?php

declare(strict_types=1);

/**
 * Server-side SMTP configuration template for VijayanTech Contact Us backend.
 *
 * Deployment steps:
 * 1. Copy this file to `server/mail-config.php` (above your webroot, never inside `public/`).
 * 2. Fill in your verified SMTP credentials (or set equivalent environment variables on your host).
 * 3. Ensure file permissions restrict read access to the web server user only (e.g. chmod 640).
 */
return [
    'smtp_host' => 'smtp.example.com',
    'smtp_port' => 465, // 465 for SSL/SMTPS, 587 for STARTTLS
    'smtp_encryption' => 'ssl', // 'ssl' or 'tls'
    'smtp_username' => 'support@vijayantech.com',
    'smtp_password' => 'REPLACE_WITH_SMTP_PASSWORD',
    'from_email' => 'support@vijayantech.com',
    'from_name' => 'VijayanTech',
    'recipient_email' => 'support@vijayantech.com',
    'site_url' => 'https://vijayantech.com/',
    'allowed_origins' => [
        'https://vijayantech.com',
        'https://www.vijayantech.com',
    ],
];
