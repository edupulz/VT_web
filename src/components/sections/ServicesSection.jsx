import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { gsap, prefersReducedMotion } from '../../utils/gsap';

export default function ServicesSection() {
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const progressRef = useRef({ value: 0 });
  const targetProgressRef = useRef(0);
  const lastIndexRef = useRef(1);
  const [activeIndex, setActiveIndex] = useState(1);

  const total = SERVICES.length;
  const stackOffset = 14;
  const gap = 24;

  const renderCards = useCallback(
    (progress) => {
      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return;
      const cardWidth = cards[0].offsetWidth || 500;
      const step = cardWidth + gap;
      const t = progress * (total - 1);

      cards.forEach((card, i) => {
        const pos = i - t;
        if (pos >= 0) {
          const x = Math.min(i, t) * stackOffset + pos * step;
          gsap.set(card, {
            x,
            scale: 1,
            zIndex: i + 1,
            force3D: true,
          });
        } else {
          const depth = -pos;
          const scale = Math.max(0.88, 1 - Math.min(depth, 5) * 0.024);
          gsap.set(card, {
            x: i * stackOffset,
            scale,
            zIndex: i + 1,
            force3D: true,
          });
        }
      });
    },
    [total]
  );

  const animateToProgress = useCallback(
    (nextProgress) => {
      const clamped = Math.max(0, Math.min(1, nextProgress));
      targetProgressRef.current = clamped;

      const nextIdx = Math.min(total, Math.max(1, Math.round(clamped * (total - 1)) + 1));
      if (nextIdx !== lastIndexRef.current) {
        lastIndexRef.current = nextIdx;
        setActiveIndex(nextIdx);
      }

      if (prefersReducedMotion()) {
        progressRef.current.value = clamped;
        renderCards(clamped);
        return;
      }

      gsap.to(progressRef.current, {
        value: clamped,
        duration: 0.45,
        ease: 'power2.out',
        overwrite: 'auto',
        onUpdate: () => renderCards(progressRef.current.value),
      });
    },
    [renderCards, total]
  );

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    renderCards(progressRef.current.value);

    const observer = new ResizeObserver(() => {
      renderCards(progressRef.current.value);
    });
    observer.observe(stage);

    const handleWheel = (e) => {
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (delta === 0) return;

      const current = targetProgressRef.current;
      const atStart = current <= 0.001 && delta < 0;
      const atEnd = current >= 0.999 && delta > 0;
      if (atStart || atEnd) return;

      e.preventDefault();
      const stepDelta = delta / ((total - 1) * 420);
      animateToProgress(current + stepDelta);
    };

    stage.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      observer.disconnect();
      stage.removeEventListener('wheel', handleWheel);
    };
  }, [animateToProgress, renderCards, total]);

  const handleStep = (delta) => {
    const nextIdx = Math.min(total, Math.max(1, activeIndex + delta));
    lastIndexRef.current = nextIdx;
    setActiveIndex(nextIdx);
    animateToProgress((nextIdx - 1) / (total - 1));
  };

  const formattedIndex = String(activeIndex).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-[#F7F9FC] border-t border-[#E4E7EC] overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow-label mb-3">Our Services</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.14] text-[#101828]">
              Technology Solutions.{' '}
              <span className="text-[#101828]">
                Designed for <span className="text-[#101828]">Progress.</span>
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <span className="font-display text-sm font-semibold tracking-wider text-[#101828] mr-1">
              <span className="text-[#101828]">{formattedIndex}</span> / {formattedTotal}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleStep(-1)}
                disabled={activeIndex === 1}
                aria-label="Previous service"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-[3px] border border-[#E4E7EC] bg-white text-[#101828] hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white disabled:opacity-40 disabled:pointer-events-none inline-flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => handleStep(1)}
                disabled={activeIndex === total}
                aria-label="Next service"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-[3px] border border-[#E4E7EC] bg-white text-[#101828] hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white disabled:opacity-40 disabled:pointer-events-none inline-flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop: Left-stacked rectangular deck (slides only when cursor is on cards) */}
        <div
          ref={stageRef}
          className="hidden md:block relative overflow-hidden h-[300px] lg:h-[330px] w-full"
        >
          {SERVICES.map((service, index) => (
            <Link
              key={service.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              to={`/services/${service.slug}`}
              style={{ transformOrigin: 'left center' }}
              className="group absolute top-0 left-0 w-[460px] lg:w-[540px] h-full flex flex-col justify-end rounded-none bg-[#101828] border border-[#E4E7EC] hover:border-[#2563EB]/60 overflow-hidden shadow-[0_8px_28px_rgba(16,24,40,0.08)] transition-[border-color,box-shadow] duration-300 will-change-transform"
            >
              <img
                src={service.heroImage}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#101828]/90 via-[#101828]/25 to-transparent"
                aria-hidden="true"
              />

              <div className="relative z-10 p-6 flex items-center gap-3">
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-white tracking-tight shrink-0">
                  {service.title}
                </h3>

                <div className="flex-1 flex items-center min-w-0">
                  <div className="w-0 group-hover:w-full transition-all duration-500 ease-out" />
                  <span className="shrink-0 inline-flex items-center bg-transparent text-white py-1 transition-all duration-300">
                    <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap text-xs font-semibold tracking-wide transition-all duration-300 group-hover:max-w-[90px] group-hover:opacity-100 group-hover:mr-2">
                      Know more
                    </span>
                    <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: Single full-frame card with top-right Back/Front controls */}
        <div className="md:hidden overflow-hidden w-full">
          <div
            style={{ transform: `translateX(-${(activeIndex - 1) * 100}%)` }}
            className="flex transition-transform duration-500 ease-out"
          >
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group relative w-full shrink-0 h-[260px] flex flex-col justify-end rounded-none bg-[#101828] border border-[#E4E7EC] overflow-hidden"
              >
                <img
                  src={service.heroImage}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#101828]/90 via-[#101828]/25 to-transparent"
                  aria-hidden="true"
                />

                <div className="relative z-10 p-5 flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>

                  <span className="shrink-0 inline-flex items-center gap-1.5 bg-transparent text-xs font-semibold text-white">
                    <span>Know more</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
