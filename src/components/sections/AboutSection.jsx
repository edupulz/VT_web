import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COMPANY_STATS } from '../../data/company';
import { gsap, isMobileViewport, prefersReducedMotion } from '../../utils/gsap';
import aboutHomeImg from '../../assets/images/about-home.jpg';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (!isMobileViewport()) {
        gsap.from('.about-reveal', {
          y: 26,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            once: true,
          },
        });
      }

      statsRef.current.forEach((el, idx) => {
        if (!el) return;
        const targetVal = COMPANY_STATS[idx].value;
        const suffix = COMPANY_STATS[idx].suffix;
        const counter = { val: 0 };

        gsap.to(counter, {
          val: targetVal,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.val)}${suffix}`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 space-y-6">
            <p className="eyebrow-label about-reveal">About Vijayan Tech</p>

            <h2 className="about-reveal font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.14] text-[#101828]">
              Technology with Purpose.{' '}
              <span className="text-[#667085]">
                Innovation with <span className="text-[#101828]">Impact.</span>
              </span>
            </h2>

            <p className="about-reveal text-base sm:text-lg text-[#667085] leading-relaxed">
              We partner with businesses to solve complex challenges, modernize operations, and
              create technology that drives meaningful growth.
            </p>

            <div className="about-reveal pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group"
              >
                <span>More about us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Company Statistics */}
            <div className="about-reveal pt-8 mt-8 border-t border-[#E4E7EC]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {COMPANY_STATS.map((stat, idx) => (
                  <div key={stat.label}>
                    <div
                      ref={(el) => {
                        statsRef.current[idx] = el;
                      }}
                      className="font-display text-2xl sm:text-3xl font-bold text-[#101828] tracking-tight"
                    >
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-[#667085]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Photography Column */}
          <div className="lg:col-span-6 about-reveal">
            <div className="rounded-none overflow-hidden border border-[#E4E7EC] bg-[#F7F9FC]">
              <div className="aspect-[4/3] w-full">
                <img
                  src={aboutHomeImg}
                  alt="Contemporary corporate glass architecture representing enterprise scale"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
