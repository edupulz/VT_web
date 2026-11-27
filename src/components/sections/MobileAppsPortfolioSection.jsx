import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Icon from '../Icon';
import { MOBILE_APP_FILTERS, MOBILE_APPS } from '../../data/mobileApps';

const TONE_CLASSES = {
  emerald: 'bg-[#DCFCE7] text-[#047857]',
  blue: 'bg-[#DBEAFE] text-[#1D4ED8]',
  amber: 'bg-[#FEF3C7] text-[#B45309]',
};

function GooglePlayIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M3.61 1.814L13.793 12 3.61 22.186a1.77 1.77 0 0 1-.41-1.15V2.964c0-.436.153-.84.41-1.15z"
      />
      <path
        fill="#34A853"
        d="M17.27 8.523L13.793 12l-10.183-10.186c.385-.314.92-.39 1.404-.112l12.256 6.821z"
      />
      <path
        fill="#FBBC05"
        d="M20.69 10.425c1.05.584 1.05 2.566 0 3.15l-3.42 1.902L13.793 12l3.477-3.477 3.42 1.902z"
      />
      <path
        fill="#EA4335"
        d="M17.27 15.477L5.014 22.298c-.484.278-1.019.202-1.404-.112L13.793 12l3.477 3.477z"
      />
    </svg>
  );
}

function PhoneMockup({ screen, accentColor, compact = false, className = '' }) {
  return (
    <div
      className={`relative rounded-[26px] bg-[#0F172A] p-[7px] shadow-[0_18px_40px_rgba(15,23,42,0.22)] border border-slate-700/80 select-none ${className}`}
    >
      {/* Dynamic Notch / Speaker */}
      <div className="absolute top-[11px] left-1/2 -translate-x-1/2 z-20 w-12 h-2.5 rounded-full bg-[#0F172A]" />

      {/* Screen */}
      <div className="relative rounded-[20px] bg-white overflow-hidden h-full flex flex-col">
        {/* Status bar */}
        <div className="px-3.5 pt-2 pb-1.5 flex items-center justify-between text-[9px] font-semibold text-slate-500 bg-slate-50/90 border-b border-slate-100">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="w-3 h-1.5 rounded-sm bg-slate-400" />
          </div>
        </div>

        {/* App Header */}
        <div
          className={`${compact ? 'px-3 py-2.5' : 'px-4 py-3'} text-white`}
          style={{
            background: `linear-gradient(135deg, ${accentColor}, #10B981)`,
          }}
        >
          <p className="text-[9px] uppercase tracking-wider text-white/80 font-medium truncate">
            {screen.subtitle}
          </p>
          <p className={`${compact ? 'text-xs' : 'text-sm'} font-display font-bold truncate`}>
            {screen.appTitle}
          </p>
        </div>

        {/* Metric Card */}
        <div className={`${compact ? 'p-2.5 space-y-2' : 'p-3.5 space-y-2.5'} flex-1 bg-[#F8FAFC]`}>
          <div className="rounded-xl bg-white p-2.5 border border-slate-200/80 shadow-xs">
            <p className="text-[9px] font-medium text-slate-500">{screen.metricLabel}</p>
            <p className={`${compact ? 'text-sm' : 'text-base'} font-display font-bold text-[#101828]`}>
              {screen.metricValue}
            </p>
            {screen.metricTrend && (
              <p className="text-[9px] font-medium text-emerald-600 mt-0.5 truncate">
                {screen.metricTrend}
              </p>
            )}
          </div>

          {/* List Items */}
          <div className="space-y-1.5">
            {screen.items.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-1.5 border border-slate-200/70"
              >
                <span className="text-[10px] font-medium text-slate-700 truncate">
                  {item.label}
                </span>
                <span
                  className={`shrink-0 px-1.5 py-0.5 rounded-md text-[8px] font-semibold ${
                    TONE_CLASSES[item.tone] || TONE_CLASSES.blue
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileAppsPortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const featuredApp = MOBILE_APPS[0];

  const filteredApps = useMemo(
    () =>
      activeFilter === 'All'
        ? MOBILE_APPS
        : MOBILE_APPS.filter((app) => app.filterGroup === activeFilter),
    [activeFilter]
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-[#F4F8FF] to-white border-t border-[#E4E7EC] overflow-hidden"
    >
      {/* Subtle decorative gradient orbs behind header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[780px] h-[340px] rounded-full bg-gradient-to-r from-[#2563EB]/10 via-[#10B981]/10 to-[#38BDF8]/10 blur-3xl"
      />

      <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* 1. Section Header */}
        <div
          className={`max-w-3xl mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="eyebrow-label mb-3">OUR MOBILE APPLICATIONS</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.12] text-[#101828]">
            Apps Designed to Make Everyday Life{' '}
            <span className="text-[#2563EB]">Smarter.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
            From education and fitness to logistics and digital services, we build powerful mobile
            applications that simplify everyday experiences and help businesses connect with their
            users.
          </p>
        </div>

        {/* 2. Featured App Showcase */}
        <div
          className={`mb-20 rounded-2xl bg-gradient-to-br from-white via-[#F8FBFF] to-[#ECFDF5]/60 border border-[#DBEAFE] shadow-[0_20px_60px_rgba(37,99,235,0.08)] p-6 sm:p-10 lg:p-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Featured App Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${featuredApp.iconBg} text-white flex items-center justify-center shadow-md`}
                >
                  <Icon name={featuredApp.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#DBEAFE] text-[#1D4ED8] border border-[#BFDBFE]">
                    Featured App • {featuredApp.category}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight">
                {featuredApp.name}
              </h3>

              <p className="text-base text-[#667085] leading-relaxed">
                {featuredApp.shortDescription}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {featuredApp.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm font-medium text-[#344054]"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={featuredApp.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#101828] hover:bg-[#1E293B] text-white px-5 py-3.5 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <GooglePlayIcon className="w-5 h-5" />
                  <span className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] font-normal text-slate-300 uppercase tracking-wider">
                      Get it on
                    </span>
                    <span>Google Play</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 ml-1" />
                </a>
              </div>
            </div>

            {/* Right: Large Smartphone Mockups + Floating UI Badges */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-6 sm:py-8">
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#2563EB]/15 via-[#10B981]/10 to-transparent blur-2xl"
              />

              {/* Floating UI Badge Top-Left */}
              <div className="hidden sm:flex items-center gap-2.5 absolute top-4 left-2 lg:left-4 z-20 rounded-xl bg-white/95 backdrop-blur-xs border border-[#E4E7EC] px-3.5 py-2.5 shadow-lg animate-float-gentle-delayed">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <div className="text-left">
                  <p className="text-[10px] font-medium text-[#667085]">Live Sync</p>
                  <p className="text-xs font-display font-bold text-[#101828]">98.4% Attendance</p>
                </div>
              </div>

              {/* Floating UI Badge Bottom-Right */}
              <div className="hidden sm:flex items-center gap-2.5 absolute bottom-4 right-2 lg:right-4 z-20 rounded-xl bg-white/95 backdrop-blur-xs border border-[#E4E7EC] px-3.5 py-2.5 shadow-lg animate-float-gentle">
                <GooglePlayIcon className="w-4 h-4" />
                <div className="text-left">
                  <p className="text-[10px] font-medium text-[#667085]">Published on</p>
                  <p className="text-xs font-display font-bold text-[#101828]">Google Play Store</p>
                </div>
              </div>

              {/* Overlapping Phones */}
              <div className="relative flex items-center justify-center">
                <PhoneMockup
                  screen={featuredApp.screen}
                  accentColor={featuredApp.accentColor}
                  className="w-[210px] sm:w-[235px] h-[390px] sm:h-[430px] z-10 animate-float-gentle"
                />
                {featuredApp.secondaryScreen && (
                  <PhoneMockup
                    screen={featuredApp.secondaryScreen}
                    accentColor="#059669"
                    compact
                    className="hidden sm:block w-[185px] h-[340px] -ml-10 mt-10 opacity-95 rotate-3 animate-float-gentle-delayed"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-[#101828]">
              Published Android Applications
            </h3>
            <p className="text-sm text-[#667085] mt-1">
              Explore all 8 live applications built by VijayanTech on Google Play.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {MOBILE_APP_FILTERS.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-sm'
                      : 'bg-white text-[#475467] border-[#E4E7EC] hover:border-[#2563EB]/50 hover:text-[#101828]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Mobile App Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <article
              key={app.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-[#E4E7EC] overflow-hidden shadow-[0_6px_24px_rgba(16,24,40,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(37,99,235,0.12)] hover:border-[#2563EB]/40 transition-all duration-300"
            >
              <div>
                {/* Smartphone Mockup Stage */}
                <div
                  className={`relative h-[250px] bg-gradient-to-br ${app.cardGradient} border-b border-[#E4E7EC]/70 flex items-end justify-center pt-5 px-4 overflow-hidden`}
                >
                  <span className="absolute top-3.5 left-4 font-display text-xs font-bold tracking-wider text-[#475467]/80">
                    {app.number}
                  </span>

                  {app.mockupStyle === 'dual' && app.secondaryScreen ? (
                    <div className="relative flex items-end justify-center translate-y-4 group-hover:translate-y-2 transition-transform duration-300">
                      <PhoneMockup
                        screen={app.screen}
                        accentColor={app.accentColor}
                        compact
                        className="w-[148px] h-[220px] z-10 -rotate-2"
                      />
                      <PhoneMockup
                        screen={app.secondaryScreen}
                        accentColor="#10B981"
                        compact
                        className="w-[132px] h-[196px] -ml-8 rotate-3 opacity-95"
                      />
                    </div>
                  ) : (
                    <div className="relative flex items-end justify-center translate-y-4 group-hover:translate-y-2 transition-transform duration-300">
                      <PhoneMockup
                        screen={app.screen}
                        accentColor={app.accentColor}
                        compact
                        className="w-[164px] h-[225px]"
                      />
                    </div>
                  )}
                </div>

                {/* App Details */}
                <div className="p-6 space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.iconBg} text-white flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      <Icon name={app.iconName} className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display text-lg font-bold text-[#101828] truncate">
                        {app.name}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border transition-transform duration-200 group-hover:scale-[1.02] ${app.badgeClasses}`}
                    >
                      {app.category}
                    </span>
                  </div>

                  <p className="text-sm text-[#667085] leading-relaxed line-clamp-3">
                    {app.shortDescription}
                  </p>
                </div>
              </div>

              {/* Google Play Link */}
              <div className="px-6 pb-6 pt-3 border-t border-[#F1F3F6]">
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-between gap-2 rounded-xl bg-[#F8FAFC] hover:bg-[#101828] text-[#101828] hover:text-white border border-[#E4E7EC] hover:border-[#101828] px-4 py-2.5 text-xs font-semibold transition-all duration-200"
                >
                  <span className="inline-flex items-center gap-2">
                    <GooglePlayIcon className="w-4 h-4" />
                    <span>View on Google Play</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
