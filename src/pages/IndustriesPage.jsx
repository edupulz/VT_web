import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import { INDUSTRIES } from '../data/industries';
import CtaSection from '../components/sections/CtaSection';

export default function IndustriesPage() {
  return (
    <>
      <PageHead
        title="Industries We Serve | Vijayan Tech"
        description="Domain-focused digital engineering across Education, Finance & Banking, Retail & eCommerce, Manufacturing, and Logistics."
      />
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 bg-white border-b border-[#E4E7EC]">
        <PageHeroBackground />
        <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow-label mb-4">Industries</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#101828]">
              Domain Precision{' '}
              <span className="text-[#101828]">
                Across Global <span className="text-[#101828]">Sectors.</span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-[#101828] leading-relaxed">
              We pair deep architectural engineering with regulatory, operational, and customer
              context across five core industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 space-y-10">
          {INDUSTRIES.map((industry, index) => (
            <div
              key={industry.id}
              id={industry.id}
              className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 items-stretch rounded-none border border-[#E4E7EC] bg-white hover:border-[#2563EB]/50 hover:shadow-[0_12px_30px_rgba(16,24,40,0.06)] transition-all duration-300 overflow-hidden"
            >
              <div
                className={`lg:col-span-5 bg-[#F7F9FC] overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[340px] w-full">
                  <img
                    src={industry.image}
                    alt={`${industry.name} enterprise technology`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5 ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#101828]">
                  {industry.name}
                </h2>
                <p className="text-base sm:text-lg text-[#101828] leading-relaxed">
                  {industry.description}
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                  >
                    <span>Discuss {industry.name} solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
