import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { gsap, prefersReducedMotion } from '../../utils/gsap';

export default function ProductsSection() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideTo = (nextIndex) => {
    const clamped = Math.max(0, Math.min(PRODUCTS.length - 1, nextIndex));
    setActiveIndex(clamped);

    if (!trackRef.current || !viewportRef.current || !cardRefs.current[0]) return;

    const cardWidth = cardRefs.current[0].offsetWidth || 480;
    const gap = 24;
    const step = cardWidth + gap;
    const maxOffset = Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth);
    const targetX = Math.min(clamped * step, maxOffset);

    if (prefersReducedMotion()) {
      gsap.set(trackRef.current, { x: -targetX });
    } else {
      gsap.to(trackRef.current, {
        x: -targetX,
        duration: 0.65,
        ease: 'power3.out',
        force3D: true,
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (!trackRef.current || !viewportRef.current || !cardRefs.current[0]) return;
      const cardWidth = cardRefs.current[0].offsetWidth || 480;
      const gap = 24;
      const step = cardWidth + gap;
      const maxOffset = Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth);
      const targetX = Math.min(activeIndex * step, maxOffset);
      gsap.set(trackRef.current, { x: -targetX });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  const formattedIndex = String(activeIndex + 1).padStart(2, '0');
  const formattedTotal = String(PRODUCTS.length).padStart(2, '0');

  return (
    <section id="products" className="py-16 sm:py-24 bg-white border-t border-[#E4E7EC] overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow-label mb-3">Our Products</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.14] text-[#101828]">
              Enterprise Platforms.{' '}
              <span className="text-[#667085]">
                Built to <span className="text-[#101828]">Scale.</span>
              </span>
            </h2>
          </div>

          {/* Right Top Controls: Counter + Back & Front Arrows (Desktop & Mobile) */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <span className="font-display text-sm font-semibold tracking-wider text-[#667085] mr-1">
              <span className="text-[#101828]">{formattedIndex}</span> / {formattedTotal}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => slideTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous product"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-[3px] border border-[#E4E7EC] bg-white text-[#101828] hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white disabled:opacity-40 disabled:pointer-events-none inline-flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => slideTo(activeIndex + 1)}
                disabled={activeIndex === PRODUCTS.length - 1}
                aria-label="Next product"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-[3px] border border-[#E4E7EC] bg-white text-[#101828] hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white disabled:opacity-40 disabled:pointer-events-none inline-flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop: Smooth Horizontal Sliding Track */}
        <div ref={viewportRef} className="hidden md:block overflow-hidden w-full">
          <div ref={trackRef} className="flex flex-nowrap gap-6 w-max will-change-transform">
            {PRODUCTS.map((product, index) => (
              <Link
                key={product.slug}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                to="/contact"
                className="group relative w-[460px] lg:w-[540px] h-[300px] lg:h-[330px] shrink-0 flex flex-col justify-end rounded-none bg-[#101828] border border-[#E4E7EC] hover:border-[#2563EB]/60 overflow-hidden shadow-[0_8px_28px_rgba(16,24,40,0.08)] transition-[border-color,box-shadow] duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#101828]/90 via-[#101828]/25 to-transparent"
                  aria-hidden="true"
                />

                <div className="relative z-10 p-6 flex items-center gap-3">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-white tracking-tight shrink-0">
                    {product.title}
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
        </div>

        {/* Mobile: Single full-frame card controlled by top-right Back/Front buttons */}
        <div className="md:hidden overflow-hidden w-full">
          <div
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            className="flex transition-transform duration-500 ease-out"
          >
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                to="/contact"
                className="group relative w-full shrink-0 h-[260px] flex flex-col justify-end rounded-none bg-[#101828] border border-[#E4E7EC] overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#101828]/90 via-[#101828]/25 to-transparent"
                  aria-hidden="true"
                />

                <div className="relative z-10 p-5 flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-white tracking-tight">
                    {product.title}
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
