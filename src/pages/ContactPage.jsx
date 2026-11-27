import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import ActionButton from '../components/ActionButton';
import { SERVICES } from '../data/services';

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

function FloatingInput({ id, type = 'text', label, required = false, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || Boolean(value);

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E4E7EC] text-sm text-[#101828] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 transition-colors"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute transition-all duration-200 ${
          isFloating
            ? `-top-2.5 left-3.5 px-1.5 bg-white text-xs font-medium ${
                focused ? 'text-[#2563EB]' : 'text-[#101828]'
              }`
            : 'top-3.5 left-4 text-sm text-[#101828]/80'
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingSelect({ id, label, required = false, value, onChange, options }) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || Boolean(value);

  return (
    <div className="relative">
      <select
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-4 py-3.5 rounded-xl bg-white border border-[#E4E7EC] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 transition-colors ${
          value ? 'text-[#101828]' : 'text-transparent'
        }`}
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-[#101828]">
            {opt}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`pointer-events-none absolute transition-all duration-200 ${
          isFloating
            ? `-top-2.5 left-3.5 px-1.5 bg-white text-xs font-medium ${
                focused ? 'text-[#2563EB]' : 'text-[#101828]'
              }`
            : 'top-3.5 left-4 text-sm text-[#101828]/80'
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [messageFocused, setMessageFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isMessageFloating = messageFocused || Boolean(formData.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            <p className="mt-6 text-lg text-[#101828] leading-relaxed">
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
              <div className="p-6 rounded-2xl bg-[#F8FAFC]">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-display text-lg font-bold text-[#101828]">Head Office</h2>
                    <p className="text-sm text-[#101828] leading-relaxed">
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
              <div className="p-6 rounded-2xl bg-[#F8FAFC]">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
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
                    <p className="text-sm text-[#101828] leading-relaxed">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#F8FAFC]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-sm font-bold text-[#101828]">Email Us</h3>
                      <a
                        href="mailto:sales@vijayantech.com"
                        className="mt-1 block text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] truncate"
                      >
                        sales@vijayantech.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8FAFC]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
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
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E4E7EC] shadow-[0_8px_30px_rgba(16,24,40,0.05)]">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-[#101828]">
                      Inquiry Received
                    </h2>
                    <p className="text-sm sm:text-base text-[#101828] max-w-md mx-auto">
                      Thank you, {formData.name || 'partner'}. Our team will review your project
                      details and get in touch within 24 hours.
                    </p>
                    <ActionButton
                      variant="secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData(INITIAL_FORM);
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
                      <p className="mt-2 text-sm sm:text-base text-[#101828]">
                        Tell us a little about your project. Our team will get in touch with you.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FloatingInput
                          id="name"
                          label="Enter your name *"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />

                        <FloatingInput
                          id="company"
                          label="Company name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FloatingInput
                          id="email"
                          type="email"
                          label="you@example.com *"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />

                        <FloatingInput
                          id="phone"
                          type="tel"
                          label="+91 XXXXX XXXXX *"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <FloatingSelect
                        id="service"
                        label="Select a service *"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        options={SERVICES.map((s) => s.title)}
                      />

                      <FloatingSelect
                        id="budget"
                        label="Select your budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        options={BUDGET_OPTIONS}
                      />

                      {/* Message Textarea with "Message *" on top border line when clicked/filled */}
                      <div className="relative">
                        <textarea
                          id="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          onFocus={() => setMessageFocused(true)}
                          onBlur={() => setMessageFocused(false)}
                          placeholder={
                            isMessageFloating
                              ? 'Tell us about your project, requirements, and goals...'
                              : ' '
                          }
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#E4E7EC] text-sm text-[#101828] placeholder:text-[#101828]/60 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 resize-none transition-colors"
                        />
                        <label
                          htmlFor="message"
                          className={`pointer-events-none absolute transition-all duration-200 ${
                            isMessageFloating
                              ? `-top-2.5 left-3.5 px-1.5 bg-white text-xs font-medium ${
                                  messageFocused ? 'text-[#2563EB]' : 'text-[#101828]'
                                }`
                              : 'top-3.5 left-4 text-sm text-[#101828]/80'
                          }`}
                        >
                          {isMessageFloating
                            ? 'Message *'
                            : 'Tell us about your project, requirements, and goals... *'}
                        </label>
                      </div>

                      <div className="flex items-start gap-2 text-xs text-[#101828] pt-1 leading-relaxed">
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

                      <ActionButton type="submit" className="w-full py-4 text-sm sm:text-base">
                        Send Message
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
