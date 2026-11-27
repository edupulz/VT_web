import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import PageHeroImage from '../components/PageHeroImage';
import SplitHeading from '../components/SplitHeading';
import { SERVICES } from '../data/services';
import { SERVICE_PAGES } from '../data/servicePages';
import Icon from '../components/Icon';
import ActionButton from '../components/ActionButton';
import ProcessSection from '../components/sections/ProcessSection';
import CtaSection from '../components/sections/CtaSection';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  const service = SERVICES.find((s) => s.slug === slug);
  const page = SERVICE_PAGES[slug];

  if (!service || !page) {
    return (
      <section className="pt-40 pb-28 max-w-3xl mx-auto px-5 text-center">
        <h1 className="font-display text-3xl font-bold text-[#101828] mb-4">
          Service Not Found
        </h1>
        <p className="text-[#667085] mb-8">
          The requested capability could not be found. Explore our full suite of services below.
        </p>
        <ActionButton to="/services" arrow="left" className="px-6 py-3 text-sm">
          Back to Services
        </ActionButton>
      </section>
    );
  }

  return (
    <>
      <PageHead title={page.metaTitle} description={page.metaDescription} />

      {/* 1. Hero Section */}
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

      {/* 2. Services Overview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow-label mb-3">Services Overview</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              <SplitHeading text={page.overview.heading} />
            </h2>
            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              {page.overview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.overview.items.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-none bg-[#F8FAFC] border border-[#E4E7EC] hover:border-[#2563EB]/40 hover:bg-white transition-all duration-300 space-y-4"
              >
                <div className="w-11 h-11 rounded-none bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center">
                  <Icon name={item.iconName} className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#101828]">{item.title}</h3>
                <p className="text-sm sm:text-[15px] text-[#667085] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Capabilities */}
      <section className="py-20 sm:py-24 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow-label mb-3">Our Capabilities</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              <SplitHeading text={page.expertise.heading} />
            </h2>
            {page.expertise.description && (
              <p className="mt-4 text-base text-[#101828] leading-relaxed">
                {page.expertise.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {page.expertise.items.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-none bg-white border border-[#E4E7EC] flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-none bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
                  <Icon name={item.iconName} className="w-5 h-5" />
                </div>
                <span className="font-display text-sm sm:text-base font-semibold text-[#101828]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-none border border-[#E4E7EC] bg-[#F7F9FC]">
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
                <p className="eyebrow-label mb-3">Why Choose Us?</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
                  <SplitHeading text={page.whyChoose.heading} />
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {page.whyChoose.items.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-none bg-[#F8FAFC] border border-[#E4E7EC] space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0" aria-hidden="true" />
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

      {/* 6. Our Development Process (Existing Approach Section) */}
      <ProcessSection />

      {/* 7. Featured Projects */}
      <section
        id="featured-projects"
        className="py-20 sm:py-28 bg-[#F7F9FC] border-t border-[#E4E7EC]"
      >
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow-label mb-3">Featured Projects</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              <SplitHeading text={page.projects.heading} />
            </h2>
            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              {page.projects.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {page.projects.items.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col justify-between rounded-none bg-white border border-[#E4E7EC] overflow-hidden hover:border-[#2563EB]/50 hover:shadow-[0_12px_30px_rgba(16,24,40,0.06)] transition-all duration-300"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#101828]">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        project.imagePosition || 'object-center'
                      }`}
                    />
                  </div>

                  <div className="p-7 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {project.badges.map((badge) => (
                          <span
                            key={badge}
                            className="px-2.5 py-0.5 text-[11px] font-semibold bg-[#EAF2FF] text-[#2563EB]"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#101828]">
                      {project.name}
                    </h3>

                    <div className="space-y-2">
                      {project.details.map((detail) => (
                        <p key={detail.label} className="text-sm text-[#667085] leading-relaxed">
                          <span className="font-semibold text-[#101828]">{detail.label}: </span>
                          {detail.text}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-[#F8FAFC] border border-[#E4E7EC] text-[#475467]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-4 border-t border-[#F1F3F6]">
                  <Link
                    to={project.to || '/portfolio'}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#101828] group-hover:text-[#2563EB] transition-colors"
                  >
                    <span>{page.projects.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow-label mb-3">FAQs</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              <SplitHeading text="Frequently Asked Questions" />
            </h2>
          </div>

          <div className="divide-y divide-[#E4E7EC] border-y border-[#E4E7EC]">
            {page.faqs.map((faq, idx) => {
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

      {/* 9. CTA Section */}
      {page.customCta ? (
        <section className="py-20 sm:py-28 bg-[#EAF2FF] border-t border-[#D6E4FF]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <p className="eyebrow-label mb-4">Start Your Next Initiative</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-[#101828]">
              <SplitHeading text={page.customCta.headline} highlightLastWord />
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
              {page.customCta.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ActionButton to="/contact" className="px-7 py-4 text-sm sm:text-base">
                {page.customCta.primaryLabel}
              </ActionButton>
              <ActionButton
                to="/contact"
                variant="secondary"
                className="px-7 py-4 text-sm sm:text-base"
              >
                {page.customCta.secondaryLabel}
              </ActionButton>
            </div>
          </div>
        </section>
      ) : page.ctaSecondaryLabel ? (
        <section className="py-20 sm:py-28 bg-[#EAF2FF] border-t border-[#D6E4FF]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <p className="eyebrow-label mb-4">Start Your Next Initiative</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-[#101828]">
              Have an Idea?
              <span className="block mt-1 text-[#667085]">
                Let&apos;s Build It <span className="text-[#101828]">Together.</span>
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
              Let&apos;s build something extraordinary together with technology that drives your
              business forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ActionButton to="/contact" className="px-7 py-4 text-sm sm:text-base">
                Start a Conversation
              </ActionButton>
              <ActionButton
                to="/contact"
                variant="secondary"
                className="px-7 py-4 text-sm sm:text-base"
              >
                {page.ctaSecondaryLabel}
              </ActionButton>
            </div>
          </div>
        </section>
      ) : (
        <CtaSection />
      )}
    </>
  );
}
