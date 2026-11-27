import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import CtaSection from '../components/sections/CtaSection';
import { MOBILE_APPS, PORTFOLIO_PROJECTS } from '../data/portfolio';
import { prefersReducedMotion } from '../utils/gsap';

const LOOPED_PROJECTS = [...PORTFOLIO_PROJECTS, ...PORTFOLIO_PROJECTS];

export default function PortfolioPage() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    let offset = 0;
    let rafId = 0;
    let lastTime = performance.now();
    const reduced = prefersReducedMotion();
    const speedPxPerSec = 55;

    const tick = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const halfWidth = track.scrollWidth / 2;
      if (!reduced && !isPausedRef.current && halfWidth > 0) {
        offset += speedPxPerSec * dt;
        if (offset >= halfWidth) {
          offset -= halfWidth;
        }
        track.style.transform = `translate3d(-${offset}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    track.style.transform = 'translate3d(0, 0, 0)';
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <PageHead
        title="Portfolio | Vijayan Tech"
        description="Explore recent web, e-commerce, education, manufacturing, and enterprise digital projects delivered by Vijayan Tech."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 bg-white border-b border-[#E4E7EC]">
        <PageHeroBackground />
        <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow-label mb-4">Our Portfolio</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#101828]">
              Recent Projects.{' '}
              <span className="text-[#101828]">
                Delivered with <span className="text-[#101828]">Precision.</span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-[#101828] leading-relaxed">
              A selection of recent digital platforms, corporate websites, and e-commerce
              experiences engineered for clients across manufacturing, education, energy, retail,
              and agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Applications Showcase */}
      <section className="py-16 sm:py-24 bg-[#F7F9FC]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow-label mb-3">Our Mobile Applications</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              Apps Designed to Make Everyday Life Smarter.
            </h2>
            <p className="mt-4 text-base text-[#101828] leading-relaxed">
              From education and fitness to logistics and digital services, we build powerful
              mobile applications that simplify everyday experiences and help businesses connect
              with their users.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOBILE_APPS.map((app) => (
              <div
                key={app.name}
                className="group flex flex-col justify-between rounded-none bg-white border border-[#E4E7EC] hover:border-[#2563EB]/50 hover:shadow-[0_12px_30px_rgba(16,24,40,0.06)] transition-all duration-300 overflow-hidden"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#101828] border-b border-[#E4E7EC]">
                    <img
                      src={app.image}
                      alt={`${app.name} mobile application`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 space-y-2.5">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#2563EB]">
                      {app.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#101828]">{app.name}</h3>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#E4E7EC]/70 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {app.playStoreUrl && (
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#101828] hover:text-[#2563EB] transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          fill="#4285F4"
                          d="M3.61 1.814L13.793 12 3.61 22.186a1.75 1.75 0 0 1-.46-1.19V3.004c0-.448.165-.87.46-1.19z"
                        />
                        <path
                          fill="#34A853"
                          d="M17.207 8.586L13.793 12l3.414 3.414 3.854-2.192a1.4 1.4 0 0 0 0-2.444l-3.854-2.192z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M3.61 22.186L13.793 12l3.414 3.414-12.14 6.906c-.535.304-1.132.256-1.457-.134z"
                        />
                        <path
                          fill="#EA4335"
                          d="M17.207 8.586L5.067 1.68c-.535-.304-1.132-.256-1.457.134L13.793 12l3.414-3.414z"
                        />
                      </svg>
                      <span>View on Google Play</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden="true" />
                    </a>
                  )}

                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#101828] hover:text-[#2563EB] transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 shrink-0 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                      </svg>
                      <span>View on App Store</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Spinning Projects Showcase */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#E4E7EC] overflow-hidden">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              Recent CMS/Website Development
            </h2>
            <p className="mt-3 text-base text-[#101828] leading-relaxed">
              Explore custom-designed corporate websites, CMS platforms, and digital storefronts
              built for growing businesses across diverse industries.
            </p>
          </div>

          <div
            ref={viewportRef}
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
            className="w-full overflow-hidden"
          >
            <div ref={trackRef} className="flex flex-nowrap gap-6 w-max will-change-transform">
              {LOOPED_PROJECTS.map((project, idx) => (
                <div
                  key={`${project.id}-${idx}`}
                  className="relative w-[320px] sm:w-[420px] lg:w-[460px] aspect-[16/9] shrink-0 rounded-none bg-[#101828] border border-[#E4E7EC] overflow-hidden shadow-[0_8px_28px_rgba(16,24,40,0.08)]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#101828]/90 via-[#101828]/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
