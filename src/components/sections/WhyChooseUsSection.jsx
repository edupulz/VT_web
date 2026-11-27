import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/company';
import { gsap, isMobileViewport, prefersReducedMotion } from '../../utils/gsap';
import whyChooseUsImg from '../../assets/images/why-choose-us.jpg';

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || isMobileViewport() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.why-item', {
        y: 18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E4E7EC]"
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-[#E4E7EC] bg-white">
              <div className="aspect-[4/5] w-full">
                <img
                  src={whyChooseUsImg}
                  alt="Software engineering team collaborating in a bright modern workspace"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <p className="eyebrow-label mb-3">Why Vijayan Tech</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.14] text-[#101828]">
                Your Technology Partner{' '}
                <span className="text-[#667085]">
                  for <span className="text-[#101828]">What&apos;s Next.</span>
                </span>
              </h2>
            </div>

            <div className="divide-y divide-[#E4E7EC] border-t border-b border-[#E4E7EC]">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item.title} className="why-item py-5 flex items-start gap-4">
                  <CheckCircle2
                    className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-[#101828]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-[15px] text-[#667085] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
