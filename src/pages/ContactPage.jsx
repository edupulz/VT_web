import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import ActionButton from '../components/ActionButton';
import { SERVICES } from '../data/services';

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || '/api/contact.php';
const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

const BUDGET_OPTIONS = [
  'Under ₹1,00,000',
  '₹1,00,000 – ₹5,00,000',
  '₹5,00,000 – ₹15,00,000',
  '₹15,00,000+',
  'Not sure yet',
];

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHAR_PATTERN = /^[+\d\s().-]+$/;

function validateContactForm(data) {
  const errors = {};
  const name = data.name.trim();
  const company = data.company.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();
  const service = data.service.trim();
  const budget = data.budget.trim();
  const message = data.message.trim();

  if (name.length < 2 || name.length > 100 || /[\r\n]/.test(name)) {
    errors.name = 'Please enter a valid full name (2–100 characters).';
  }

  if (company && (company.length > 120 || /[\r\n]/.test(company))) {
    errors.company = 'Company name must be 120 characters or fewer.';
  }

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email) || /[\r\n]/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  const phoneDigits = phone.replace(/\D+/g, '');
  if (
    !phone ||
    phone.length > 30 ||
    !PHONE_CHAR_PATTERN.test(phone) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    errors.phone = 'Please enter a valid phone number (7–15 digits).';
  }

  if (!service || !SERVICE_OPTIONS.includes(service)) {
    errors.service = 'Please select a service.';
  }

  if (budget && !BUDGET_OPTIONS.includes(budget)) {
    errors.budget = 'Please select a valid budget range.';
  }

  if (message.length < 10 || message.length > 5000) {
    errors.message = 'Please enter your message (10–5,000 characters).';
  }

  return errors;
}

function FloatingInput({
  id,
  type = 'text',
  label,
  required = false,
  disabled = false,
  error = '',
  value,
  onChange,
}) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || Boolean(value);

  return (
    <div>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder=" "
          className={`w-full px-4 py-3.5 rounded-none bg-white border text-sm text-[#101828] focus:outline-none focus:ring-2 transition-colors disabled:bg-[#F8FAFC] disabled:text-[#667085] ${
            error
              ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15'
              : 'border-[#E4E7EC] focus:border-[#2563EB] focus:ring-[#2563EB]/15'
          }`}
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute transition-all duration-200 ${
            isFloating
              ? `-top-2.5 left-3.5 px-1.5 bg-white text-xs font-medium ${
                  error ? 'text-[#DC2626]' : focused ? 'text-[#2563EB]' : 'text-[#475467]'
                }`
              : 'top-3.5 left-4 text-sm text-[#667085]/80'
          }`}
        >
          {label}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-[#DC2626]">
          {error}
        </p>
      )}
    </div>
  );
}

function FloatingSelect({
  id,
  label,
  required = false,
  disabled = false,
  error = '',
  value,
  onChange,
  options,
}) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  const isActive = open || focused;
  const isFloating = isActive || Boolean(value);

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
        setFocused(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [open]);

  const selectOption = (opt) => {
    onChange({ target: { value: opt } });
    setOpen(false);
    setFocused(false);
    triggerRef.current?.focus();
  };

  const handleKeyDown = (event) => {
    if (disabled) return;

    if (event.key === 'Escape') {
      if (open) {
        event.preventDefault();
        setOpen(false);
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!open) {
        const selectedIdx = options.indexOf(value);
        setActiveIndex(selectedIdx >= 0 ? selectedIdx : 0);
        setOpen(true);
      } else {
        setActiveIndex((prev) => (prev + 1) % options.length);
      }
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!open) {
        const selectedIdx = options.indexOf(value);
        setActiveIndex(selectedIdx >= 0 ? selectedIdx : options.length - 1);
        setOpen(true);
      } else {
        setActiveIndex((prev) => (prev <= 0 ? options.length - 1 : prev - 1));
      }
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      if (open && activeIndex >= 0 && activeIndex < options.length) {
        event.preventDefault();
        selectOption(options[activeIndex]);
      }
    }
  };

  return (
    <div ref={containerRef} className={open ? 'relative z-30' : 'relative'}>
      <div className="relative">
        <button
          ref={triggerRef}
          id={id}
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-required={required}
          aria-labelledby={`${id}-label ${id}-value`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onClick={() => {
            if (disabled) return;
            const nextOpen = !open;
            if (nextOpen) {
              const selectedIdx = options.indexOf(value);
              setActiveIndex(selectedIdx >= 0 ? selectedIdx : 0);
            }
            setOpen(nextOpen);
          }}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!containerRef.current?.contains(e.relatedTarget)) {
              setFocused(false);
              setOpen(false);
            }
          }}
          onKeyDown={handleKeyDown}
          className={`w-full px-4 py-3.5 rounded-none bg-white border text-sm text-left flex items-center justify-between gap-3 focus:outline-none focus:ring-2 transition-colors disabled:bg-[#F8FAFC] disabled:text-[#667085] cursor-pointer disabled:cursor-not-allowed ${
            error
              ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15'
              : open || focused
                ? 'border-[#2563EB] ring-2 ring-[#2563EB]/15'
                : 'border-[#E4E7EC] hover:border-[#CBD5E1] focus:border-[#2563EB] focus:ring-[#2563EB]/15'
          }`}
        >
          <span
            id={`${id}-value`}
            className={`truncate leading-5 ${value ? 'text-[#101828]' : 'text-transparent select-none'}`}
          >
            {value || label}
          </span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
              open ? 'rotate-180 text-[#2563EB]' : 'text-[#667085]'
            }`}
            aria-hidden="true"
          />
        </button>

        <label
          id={`${id}-label`}
          htmlFor={id}
          className={`pointer-events-none absolute transition-all duration-200 ${
            isFloating
              ? `-top-2.5 left-3.5 px-1.5 bg-white text-xs font-medium ${
                  error ? 'text-[#DC2626]' : isActive ? 'text-[#2563EB]' : 'text-[#475467]'
                }`
              : 'top-3.5 left-4 text-sm text-[#667085]/80'
          }`}
        >
          {label}
        </label>

        {open && (
          <ul
            role="listbox"
            aria-labelledby={`${id}-label`}
            className="absolute left-0 right-0 top-full mt-1.5 z-40 max-h-64 overflow-y-auto bg-white rounded-none border border-[#E4E7EC] shadow-[0_14px_34px_rgba(16,24,40,0.09)] py-1.5"
          >
            {options.map((opt, index) => {
              const isSelected = value === opt;
              const isHighlighted = index === activeIndex;
              return (
                <li key={opt} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => selectOption(opt)}
                    className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#EAF2FF] text-[#2563EB] font-semibold'
                        : isHighlighted
                          ? 'bg-[#F7F9FC] text-[#2563EB] font-medium'
                          : 'text-[#475467] font-medium hover:bg-[#F7F9FC] hover:text-[#2563EB]'
                    }`}
                  >
                    <span>{opt}</span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-[#DC2626]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [honeypot, setHoneypot] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState(null);

  const formStartedAtRef = useRef(0);
  const submittingLockRef = useRef(false);
  const lastSuccessSignatureRef = useRef('');

  useEffect(() => {
    formStartedAtRef.current = Date.now();
  }, []);

  const isMessageFloating = messageFocused || Boolean(formData.message);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submittingLockRef.current || isSubmitting) {
      return;
    }

    const errors = validateContactForm(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitError('Please review the highlighted fields before submitting.');
      return;
    }

    const normalizedSignature = [
      formData.email.trim().toLowerCase(),
      formData.service.trim().toLowerCase(),
      formData.message.trim().replace(/\s+/g, ' ').toLowerCase(),
    ].join('|');

    if (lastSuccessSignatureRef.current && lastSuccessSignatureRef.current === normalizedSignature) {
      setSubmitError('This enquiry has already been submitted. Our team will contact you soon.');
      return;
    }

    submittingLockRef.current = true;
    setIsSubmitting(true);
    setSubmitError('');
    setFieldErrors({});

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service.trim(),
          budget: formData.budget.trim(),
          message: formData.message.trim(),
          website: honeypot,
          elapsedMs: Date.now() - formStartedAtRef.current,
        }),
      });

      let result = null;
      const responseText = await response.text();
      if (responseText) {
        try {
          result = JSON.parse(responseText);
        } catch {
          result = null;
        }
      }

      if (!response.ok || !result || result.success !== true) {
        if (result && result.errors && typeof result.errors === 'object') {
          setFieldErrors(result.errors);
        }
        setSubmitError(
          result?.message ||
            'Unable to send your message right now. Please try again later or email support@vijayantech.com.'
        );
        return;
      }

      lastSuccessSignatureRef.current = normalizedSignature;
      setSubmittedDetails({
        name: formData.name.trim(),
        email: formData.email.trim(),
      });
      setSubmitted(true);
    } catch {
      setSubmitError(
        'Network error while sending your message. Please check your connection and try again.'
      );
    } finally {
      submittingLockRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHead
        title="Contact Us | Vijayan Tech"
        description="Start a conversation with Vijayan Tech. Reach our Head Office or Development Center in Erode, Tamil Nadu, India."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 bg-white border-b border-[#E4E7EC]">
        <PageHeroBackground />
        <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow-label mb-4">Get In Touch</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#101828]">
              Let&apos;s Start a Conversation.
            </h1>
            <p className="mt-6 text-lg text-[#667085] leading-relaxed">
              Have an idea, a project, or a challenge to solve? We&apos;d love to hear from you.
              Get in touch with our team and let&apos;s create something innovative together.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Side: Offices (no outline) + Email & Call */}
            <div className="lg:col-span-5 space-y-6">
              {/* Head Office */}
              <div className="p-6 rounded-none bg-[#F8FAFC]">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-none bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-display text-lg font-bold text-[#101828]">Head Office</h2>
                    <p className="text-sm text-[#667085] leading-relaxed">
                      3/190, Vaipadi Road, Vijayamanagalam,
                      <br />
                      Erode – 638056,
                      <br />
                      Tamil Nadu, India.
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://maps.app.goo.gl/mqqKxuRpvpvsphe49"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group"
                      >
                        <span>Find Our Office</span>
                        <ArrowUpRight
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Center */}
              <div className="p-6 rounded-none bg-[#F8FAFC]">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-none bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-display text-lg font-bold text-[#101828]">
                        Development Center
                      </h2>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EAF2FF] text-[#2563EB]">
                        TBI @ KEC
                      </span>
                    </div>
                    <p className="text-sm text-[#667085] leading-relaxed">
                      Kongu Engineering College Campus,
                      <br />
                      Perundurai – 638 060,
                      <br />
                      Erode, Tamil Nadu, India.
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://maps.app.goo.gl/ob5Zkvrofp1n29Wj7"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group"
                      >
                        <span>Find Our Office</span>
                        <ArrowUpRight
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Us & Call Us */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="p-5 rounded-none bg-[#F8FAFC]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-none bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-sm font-bold text-[#101828]">Email Us</h3>
                      <a
                        href="mailto:support@vijayantech.com"
                        className="mt-1 block text-sm font-semibold text-[#101828] hover:text-[#2563EB] break-words"
                      >
                        support@vijayantech.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-none bg-[#F8FAFC]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-none bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-[#101828]">Call Us</h3>
                      <a
                        href="tel:+919840962424"
                        className="mt-1 block text-sm font-semibold text-[#101828] hover:text-[#2563EB]"
                      >
                        +91 98409 62424
                      </a>
                      <a
                        href="tel:+919047562424"
                        className="mt-0.5 block text-sm font-semibold text-[#101828] hover:text-[#2563EB]"
                      >
                        +91 90475 62424
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Project Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-none bg-white border border-[#E4E7EC] shadow-[0_8px_30px_rgba(16,24,40,0.05)]">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-[#101828]">
                      Inquiry Received
                    </h2>
                    <p className="text-sm sm:text-base text-[#667085] max-w-md mx-auto">
                      Thank you, {submittedDetails?.name || formData.name || 'partner'}. We have
                      received your enquiry
                      {submittedDetails?.email
                        ? ` and sent a confirmation email to ${submittedDetails.email}`
                        : ''}
                      . Our team will review your project details and get in touch soon.
                    </p>
                    <ActionButton
                      variant="secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setSubmittedDetails(null);
                        setFormData(INITIAL_FORM);
                        setFieldErrors({});
                        setSubmitError('');
                        setHoneypot('');
                        formStartedAtRef.current = Date.now();
                      }}
                      className="mt-4 px-5 py-2.5 text-sm"
                    >
                      Send another message
                    </ActionButton>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#101828]">
                        Let&apos;s Talk About Your Project
                      </h2>
                      <p className="mt-2 text-sm sm:text-base text-[#667085]">
                        Tell us a little about your project. Our team will get in touch with you.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5 relative">
                      {/* Anti-spam honeypot field (hidden from real users) */}
                      <div
                        aria-hidden="true"
                        className="absolute -left-[9999px] w-px h-px overflow-hidden opacity-0 pointer-events-none"
                      >
                        <label htmlFor="website">Website</label>
                        <input
                          id="website"
                          name="website"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FloatingInput
                          id="name"
                          label="Enter your name *"
                          required
                          disabled={isSubmitting}
                          error={fieldErrors.name}
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                        />

                        <FloatingInput
                          id="company"
                          label="Company name"
                          disabled={isSubmitting}
                          error={fieldErrors.company}
                          value={formData.company}
                          onChange={(e) => updateField('company', e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FloatingInput
                          id="email"
                          type="email"
                          label="you@example.com *"
                          required
                          disabled={isSubmitting}
                          error={fieldErrors.email}
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                        />

                        <FloatingInput
                          id="phone"
                          type="tel"
                          label="+91 XXXXX XXXXX *"
                          required
                          disabled={isSubmitting}
                          error={fieldErrors.phone}
                          value={formData.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                        />
                      </div>

                      <FloatingSelect
                        id="service"
                        label="Select a service *"
                        required
                        disabled={isSubmitting}
                        error={fieldErrors.service}
                        value={formData.service}
                        onChange={(e) => updateField('service', e.target.value)}
                        options={SERVICE_OPTIONS}
                      />

                      <FloatingSelect
                        id="budget"
                        label="Select your budget"
                        disabled={isSubmitting}
                        error={fieldErrors.budget}
                        value={formData.budget}
                        onChange={(e) => updateField('budget', e.target.value)}
                        options={BUDGET_OPTIONS}
                      />

                      {/* Message Textarea with "Message *" on top border line when clicked/filled */}
                      <div>
                        <div className="relative">
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            disabled={isSubmitting}
                            aria-invalid={Boolean(fieldErrors.message)}
                            aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                            value={formData.message}
                            onChange={(e) => updateField('message', e.target.value)}
                            onFocus={() => setMessageFocused(true)}
                            onBlur={() => setMessageFocused(false)}
                            placeholder={
                              isMessageFloating
                                ? 'Tell us about your project, requirements, and goals...'
                                : ' '
                            }
                            className={`w-full px-4 py-3.5 rounded-none bg-white border text-sm text-[#101828] placeholder:text-[#667085]/60 focus:outline-none focus:ring-2 resize-none transition-colors disabled:bg-[#F8FAFC] disabled:text-[#667085] ${
                              fieldErrors.message
                                ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-[#DC2626]/15'
                                : 'border-[#E4E7EC] focus:border-[#2563EB] focus:ring-[#2563EB]/15'
                            }`}
                          />
                          <label
                            htmlFor="message"
                            className={`pointer-events-none absolute transition-all duration-200 ${
                              isMessageFloating
                                ? `-top-2.5 left-3.5 px-1.5 bg-white text-xs font-medium ${
                                    fieldErrors.message
                                      ? 'text-[#DC2626]'
                                      : messageFocused
                                        ? 'text-[#2563EB]'
                                        : 'text-[#475467]'
                                  }`
                                : 'top-3.5 left-4 text-sm text-[#667085]/80'
                            }`}
                          >
                            {isMessageFloating
                              ? 'Message *'
                              : 'Tell us about your project, requirements, and goals... *'}
                          </label>
                        </div>
                        {fieldErrors.message && (
                          <p id="message-error" className="mt-1.5 text-xs text-[#DC2626]">
                            {fieldErrors.message}
                          </p>
                        )}
                      </div>

                      <div className="flex items-start gap-2 text-xs text-[#667085] pt-1 leading-relaxed">
                        <ShieldCheck
                          className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>
                          The information you provide will be used solely to respond to your
                          enquiry, in line with our{' '}
                          <Link
                            to="/privacy-policy"
                            className="text-[#2563EB] hover:underline font-medium"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </span>
                      </div>

                      {submitError && (
                        <div
                          role="alert"
                          className="flex items-start gap-2.5 p-3.5 rounded-none bg-red-50 border border-red-200 text-xs sm:text-sm text-[#B42318]"
                        >
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{submitError}</span>
                        </div>
                      )}

                      <ActionButton
                        type="submit"
                        disabled={isSubmitting}
                        arrow={isSubmitting ? 'none' : 'right'}
                        className="w-full py-4 text-sm sm:text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </ActionButton>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
