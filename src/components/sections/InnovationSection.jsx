import { useEffect, useRef, lazy, Suspense } from 'react';
import ActionButton from '../ActionButton';
import { gsap, isMobileViewport, prefersReducedMotion } from '../../utils/gsap';
import innovationBgImg from '../../assets/images/innovation-bg.jpg';

const ThreeNetworkCanvas = lazy(() => import('../ThreeNetworkCanvas'));

export default function InnovationSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || isMobileViewport() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: -24, scale: 1.06 },
        {
          y: 24,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="innovation"
      className="py-20 sm:py-28 bg-white border-t border-[#E4E7EC] overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-7 space-y-5">
            <p className="eyebrow-label">Technology &amp; Innovation</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.14] text-[#101828]">
              Building Intelligent{' '}
              <span className="text-[#101828]">
                Digital <span className="text-[#101828]">Experiences.</span>
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#101828] leading-relaxed max-w-2xl">
              From distributed cloud topologies to production-grade AI pipelines, we engineer
              resilient infrastructure that transforms complexity into decisive operational speed.
            </p>
            <div className="pt-2">
              <ActionButton href="#approach" className="px-6 py-3.5 text-sm">
                Explore Our Approach
              </ActionButton>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-[300px] h-[240px] rounded-2xl bg-[#F8FAFC] border border-[#E4E7EC] relative flex items-center justify-center overflow-hidden">
              <Suspense fallback={null}>
                <ThreeNetworkCanvas className="w-full h-full" />
              </Suspense>
              <span className="absolute bottom-3 left-4 text-[11px] font-medium tracking-wider uppercase text-[#101828]">
                Global Node Mesh
              </span>
            </div>
          </div>
        </div>

        {/* Full-width Editorial Parallax Image */}
        <div className="rounded-2xl overflow-hidden border border-[#E4E7EC] bg-[#F7F9FC]">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              ref={imageRef}
              src={innovationBgImg}
              alt="High-density enterprise data center and cloud computing infrastructure"
              loading="lazy"
              className="w-full h-full object-cover object-center will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
