import { useEffect, useRef, useState } from 'react';
import { PROCESS_STEPS } from '../../data/company';
import { gsap, isMobileViewport, prefersReducedMotion } from '../../utils/gsap';

const STEP_DURATION_MS = 2800;

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion() || !isInView) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, STEP_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isInView]);

  useEffect(() => {
    if (prefersReducedMotion() || isMobileViewport() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        y: 22,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="py-20 sm:py-28 bg-white border-t border-[#E4E7EC]"
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow-label mb-3">Our Approach</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.14] text-[#101828]">
            From Vision <span className="text-[#667085]">to Value.</span>
          </h2>
        </div>

        <div className="process-grid relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeIndex;
              const isCompleted = idx < activeIndex;
              const hasNext = idx < PROCESS_STEPS.length - 1;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIndex(idx);
                    }
                  }}
                  aria-current={isActive ? 'step' : undefined}
                  className={`process-step relative cursor-pointer select-none transition-all duration-500 ease-out origin-top-left focus:outline-none ${
                    isActive
                      ? 'opacity-100 lg:scale-[1.04]'
                      : isCompleted
                        ? 'opacity-90 hover:opacity-100'
                        : 'opacity-70 hover:opacity-95'
                  }`}
                >
                  {/* Connecting horizontal track + video-like loading fill on desktop */}
                  {hasNext && (
                    <div
                      className="hidden lg:block absolute top-[24px] left-[24px] w-[calc(100%+1.5rem)] h-[2px] bg-[#E4E7EC] z-0 overflow-hidden"
                      aria-hidden="true"
                    >
                      {isCompleted && <div className="h-full w-full bg-[#2563EB]" />}
                      {isActive && isInView && (
                        <div
                          key={`line-${activeIndex}`}
                          className="h-full w-full bg-[#2563EB] animate-process-line"
                        />
                      )}
                    </div>
                  )}

                  {/* Step Number Point with circular loading ring & zoom on active */}
                  <div className="relative inline-flex items-center justify-center w-12 h-12 mb-6 z-10">
                    {isActive && isInView && (
                      <svg
                        key={`ring-${activeIndex}`}
                        className="absolute -inset-1.5 w-[60px] h-[60px] -rotate-90 pointer-events-none"
                        viewBox="0 0 60 60"
                        aria-hidden="true"
                      >
                        <circle
                          cx="30"
                          cy="30"
                          r="26"
                          fill="none"
                          stroke="#DBEAFE"
                          strokeWidth="2.5"
                        />
                        <circle
                          cx="30"
                          cy="30"
                          r="26"
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          className="animate-process-ring"
                        />
                      </svg>
                    )}

                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-display text-sm font-bold transition-all duration-500 ease-out ${
                        isActive
                          ? 'bg-[#2563EB] text-white border border-[#2563EB] scale-[1.16] shadow-[0_6px_20px_rgba(37,99,235,0.28)]'
                          : isCompleted
                            ? 'bg-[#EAF2FF] text-[#2563EB] border border-[#BFDBFE] scale-100'
                            : 'bg-white text-[#2563EB] border border-[#E4E7EC] scale-100'
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  <h3
                    className={`font-display text-xl sm:text-[1.375rem] font-semibold mb-2.5 transition-colors duration-300 ${
                      isActive ? 'text-[#2563EB]' : 'text-[#101828]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-[#344054]' : 'text-[#667085]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
