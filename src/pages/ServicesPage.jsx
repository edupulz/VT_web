import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import { SERVICES } from '../data/services';
import CtaSection from '../components/sections/CtaSection';

const BENTO_SPANS = [
  'lg:col-span-2 lg:row-span-1', // 01: Wide top-left
  'lg:col-span-1 lg:row-span-2', // 02: Tall top-right
  'lg:col-span-1 lg:row-span-1', // 03: Middle-left
  'lg:col-span-1 lg:row-span-1', // 04: Middle-center
  'lg:col-span-1 lg:row-span-1', // 05: Row 3 left
  'lg:col-span-2 lg:row-span-2', // 06: Large 2x2 bottom-right
  'lg:col-span-1 lg:row-span-1', // 07: Row 4 left
];

export default function ServicesPage() {
  return (
    <>
      <PageHead
        title="Services | Vijayan Tech"
        description="Explore our enterprise technology services: Website Development, Mobile Apps, eCommerce, Cloud, Custom Software, Digital Marketing, and AI Solutions."
      />
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 bg-white border-b border-[#E4E7EC]">
        <PageHeroBackground />
        <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow-label mb-4">Capabilities</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#101828]">
              Technology Solutions.{' '}
              <span className="text-[#667085]">
                Designed for <span className="text-[#101828]">Progress.</span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-[#667085] leading-relaxed">
              End-to-end engineering, cloud modernization, and applied intelligence tailored to
              growing organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[270px] gap-6">
            {SERVICES.map((service, idx) => {
              const spanClass = BENTO_SPANS[idx] || 'lg:col-span-1 lg:row-span-1';
              const isFeatured = idx === 5;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`group relative flex flex-col justify-end rounded-none bg-[#101828] border border-[#E4E7EC] hover:border-[#2563EB]/60 overflow-hidden shadow-[0_8px_28px_rgba(16,24,40,0.08)] transition-[border-color,box-shadow] duration-300 min-h-[260px] ${spanClass}`}
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

                  <div className="relative z-10 p-6 flex items-end justify-between gap-3">
                    <h2
                      className={`font-display font-semibold text-white tracking-tight min-w-0 leading-snug ${
                        isFeatured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                      }`}
                    >
                      {service.title}
                    </h2>

                    <span className="shrink-0 inline-flex items-center bg-transparent text-white py-1 transition-all duration-300">
                      <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap text-xs font-semibold tracking-wide transition-all duration-300 group-hover:max-w-[90px] group-hover:opacity-100 group-hover:mr-2">
                        Know more
                      </span>
                      <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
