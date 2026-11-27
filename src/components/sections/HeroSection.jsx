import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ActionButton from '../ActionButton';
import { gsap, prefersReducedMotion } from '../../utils/gsap';
import heroBg from '../../assets/hero-bg.png';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        bgRef.current,
        { scale: 1.05, opacity: 0.3 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: 'expo.out',
          clearProps: 'transform,opacity',
        }
      )
        .from(
          headlineRef.current.children,
          {
            y: 28,
            opacity: 0,
            duration: 0.75,
            stagger: 0.12,
            clearProps: 'transform,opacity',
          },
          '-=0.8'
        )
        .from(
          descRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.65,
            clearProps: 'transform,opacity',
          },
          '-=0.45'
        )
        .from(
          ctaRef.current.children,
          {
            y: 16,
            opacity: 0,
            duration: 0.55,
            stagger: 0.1,
            clearProps: 'transform,opacity',
          },
          '-=0.35'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[82vh] flex items-center pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white overflow-hidden"
    >
      {/* Full-bleed Architectural Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Fluid glass technology wave background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle light editorial overlay for crisp text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <p className="eyebrow-label mb-5">Innovation Beyond Technology</p>

          <h1
            ref={headlineRef}
            className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.08] text-[#101828]"
          >
            <span className="block">Creating Digital Solutions</span>
            <span className="block mt-1 text-[#101828]">
              That Move You <span className="text-[#101828]">Forward.</span>
            </span>
          </h1>

          <p
            ref={descRef}
            className="mt-7 text-lg sm:text-xl text-[#101828] leading-relaxed max-w-2xl"
          >
            We transform ambitious ideas into intelligent digital solutions through innovative
            engineering, scalable technology, and meaningful experiences.
          </p>

          <div ref={ctaRef} className="mt-9 flex flex-wrap items-center gap-4">
            <ActionButton to="/services" className="px-6 py-3.5 text-sm sm:text-base">
              Explore Our Services
            </ActionButton>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-[3px] bg-white/95 hover:bg-white text-[#101828] border border-[#E4E7EC] hover:border-[#CFD5DF] text-sm sm:text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
            >
              Let&apos;s Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
