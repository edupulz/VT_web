import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import { INDUSTRIES } from '../data/industries';
import CtaSection from '../components/sections/CtaSection';

export default function IndustriesPage() {
  return (
    <>
      <PageHead
        title="Industries We Serve | Vijayan Tech"
        description="Domain-focused digital engineering across Healthcare, Finance & Banking, Education, Retail & eCommerce, Manufacturing, and Logistics."
      />
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 bg-white border-b border-[#E4E7EC]">
        <PageHeroBackground />
        <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow-label mb-4">Industries</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#101828]">
              Domain Precision{' '}
              <span className="text-[#667085]">
                Across Global <span className="text-[#101828]">Sectors.</span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-[#667085] leading-relaxed">
              We pair deep architectural engineering with regulatory, operational, and customer
              context across six core industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
          {INDUSTRIES.map((industry, index) => (
            <div
              key={industry.id}
              id={industry.id}
              className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-[#E4E7EC] last:border-b-0 last:pb-0"
            >
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="rounded-2xl overflow-hidden border border-[#E4E7EC] bg-[#F7F9FC]">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={industry.image}
                      alt={`${industry.name} enterprise technology`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div
                className={`lg:col-span-7 space-y-5 ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#101828]">
                  {industry.name}
                </h2>
                <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
                  {industry.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {industry.highlights.map((hl) => (
                    <div
                      key={hl}
                      className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E4E7EC]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#101828]">{hl}</span>
                    </div>
                  ))}
                </div>
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
