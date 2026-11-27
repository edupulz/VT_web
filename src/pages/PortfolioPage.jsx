import { useEffect, useRef } from 'react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import CtaSection from '../components/sections/CtaSection';
import MobileAppsPortfolioSection from '../components/sections/MobileAppsPortfolioSection';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
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
              <span className="text-[#667085]">
                Delivered with <span className="text-[#101828]">Precision.</span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-[#667085] leading-relaxed">
              A selection of recent digital platforms, corporate websites, and e-commerce
              experiences engineered for clients across manufacturing, education, energy, retail,
              and agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Spinning Projects Showcase */}
      <section className="py-16 sm:py-24 bg-[#F7F9FC] overflow-hidden">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              Recent CMS/Website Development
            </h2>
            <p className="mt-3 text-base text-[#667085] leading-relaxed">
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

      <MobileAppsPortfolioSection />

      <CtaSection />
    </>
  );
}
