import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import PageHeroImage from '../components/PageHeroImage';
import SplitHeading from '../components/SplitHeading';
import Icon from '../components/Icon';
import ActionButton from '../components/ActionButton';
import { PRODUCT_PAGES } from '../data/productPages';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  const page = PRODUCT_PAGES[slug];

  if (!page) {
    return (
      <section className="pt-40 pb-28 max-w-3xl mx-auto px-5 text-center">
        <h1 className="font-display text-3xl font-bold text-[#101828] mb-4">
          Product Not Found
        </h1>
        <p className="text-[#667085] mb-8">
          The requested product could not be found. Explore our full suite of platforms below.
        </p>
        <ActionButton to="/products" arrow="left" className="px-6 py-3 text-sm">
          Back to Products
        </ActionButton>
      </section>
    );
  }

  return (
    <>
      <PageHead
        title={page.metaTitle}
        description={page.metaDescription}
        keywords={page.metaKeywords}
      />

      {/* 01. Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 bg-white border-b border-[#E4E7EC]">
        <PageHeroBackground />
        <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="eyebrow-label">{page.eyebrow}</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#101828]">
                <SplitHeading text={page.hero.headline} highlightLastWord />
              </h1>
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                {page.hero.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <ActionButton to="/contact" className="px-7 py-4 text-sm sm:text-base">
                  {page.hero.primaryCta}
                </ActionButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PageHeroImage src={page.hero.image} alt={page.hero.imageAlt} />
            </div>
          </div>
        </div>
      </section>

      {/* 02. Product Overview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow-label mb-3">Product Overview</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              <SplitHeading text={page.overview.heading} />
            </h2>
            {page.overview.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base text-[#667085] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.overview.highlights.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-none bg-[#F8FAFC] border border-[#E4E7EC] hover:border-[#2563EB]/40 hover:bg-white transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-none bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
                  <Icon name={item.iconName} className="w-5 h-5" />
                </div>
                <span className="font-display text-base font-semibold text-[#101828]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Key Modules & Features */}
      <section
        id="key-modules"
        className="py-20 sm:py-28 bg-[#F7F9FC] border-t border-[#E4E7EC]"
      >
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow-label mb-3">Key Modules &amp; Features</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              <SplitHeading text={page.modules.heading} />
            </h2>
            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              {page.modules.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.modules.items.map((mod) => (
              <div
                key={mod.number}
                className="group relative h-[350px] sm:h-[360px] rounded-none bg-[#101828] border border-[#E4E7EC] hover:border-[#2563EB]/60 overflow-hidden shadow-[0_8px_28px_rgba(16,24,40,0.08)] transition-[border-color,box-shadow] duration-300 flex flex-col"
              >
                {mod.image ? (
                  <img
                    src={mod.image}
                    alt={mod.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#101828] to-[#0B1120]"
                    aria-hidden="true"
                  />
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#101828]/90 via-[#101828]/30 to-transparent group-hover:from-[#101828]/95 group-hover:via-[#101828]/85 group-hover:to-[#101828]/65 transition-colors duration-300"
                  aria-hidden="true"
                />

                <div className="relative z-10 p-7 flex flex-col justify-end flex-1">
                  <div className="mt-auto pt-6">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {mod.title}
                    </h3>

                    <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-[280px] group-hover:opacity-100 group-hover:mt-3">
                      <p className="text-sm text-slate-200 leading-relaxed">{mod.description}</p>
                      <ul className="mt-3 pt-3 border-t border-white/15 space-y-1.5">
                        {mod.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-100"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-[#60A5FA] shrink-0"
                              aria-hidden="true"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Product Benefits */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow-label mb-3">Product Benefits</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              <SplitHeading text={page.benefits.heading} />
            </h2>
            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              {page.benefits.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.benefits.items.map((benefit) => (
              <div
                key={benefit.title}
                className="p-7 rounded-none bg-[#F8FAFC] border border-[#E4E7EC] hover:border-[#2563EB]/40 hover:bg-white transition-all duration-300 space-y-4"
              >
                <div className="w-11 h-11 rounded-none bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center">
                  <Icon name={benefit.iconName} className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#101828]">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#667085] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Why Choose Product */}
      <section className="py-20 sm:py-28 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-none border border-[#E4E7EC] bg-white">
                <div className="aspect-[4/5] w-full">
                  <img
                    src={page.whyChoose.image}
                    alt={page.whyChoose.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="eyebrow-label mb-3">{page.whyChoose.eyebrow}</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
                  <SplitHeading text={page.whyChoose.heading} />
                </h2>
                <p className="mt-4 text-base text-[#667085] leading-relaxed">
                  {page.whyChoose.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {page.whyChoose.items.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-none bg-white border border-[#E4E7EC] space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2
                        className="w-5 h-5 text-[#2563EB] shrink-0"
                        aria-hidden="true"
                      />
                      <h3 className="font-display text-base font-bold text-[#101828]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#667085] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Frequently Asked Questions */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow-label mb-3">FAQs</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              <SplitHeading text={page.faqs.heading} />
            </h2>
          </div>

          <div className="divide-y divide-[#E4E7EC] border-y border-[#E4E7EC]">
            {page.faqs.items.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-[#101828]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#667085] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#2563EB]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm sm:text-base text-[#667085] leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07. Final CTA Section */}
      <section className="py-20 sm:py-28 bg-[#EAF2FF] border-t border-[#D6E4FF]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow-label mb-4">Get Started</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-[#101828]">
            <SplitHeading text={page.cta.headline} highlightLastWord />
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            {page.cta.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ActionButton to="/contact" className="px-7 py-4 text-sm sm:text-base">
              {page.cta.primaryLabel}
            </ActionButton>
            <ActionButton
              to="/contact"
              variant="secondary"
              className="px-7 py-4 text-sm sm:text-base"
            >
              {page.cta.secondaryLabel}
            </ActionButton>
          </div>
        </div>
      </section>
    </>
  );
}
