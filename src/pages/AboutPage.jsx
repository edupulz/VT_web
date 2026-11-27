import { Compass, Eye, HeartHandshake, Target } from 'lucide-react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import ProcessSection from '../components/sections/ProcessSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import CtaSection from '../components/sections/CtaSection';
import { COMPANY_STATS } from '../data/company';
import aboutOverviewImg from '../assets/images/about-overview.jpg';
import aboutMissionImg from '../assets/images/about-mission.jpg';
import aboutVisionImg from '../assets/images/about-vision.jpg';
import aboutValuesImg from '../assets/images/about-values.jpg';
import aboutJourneyImg from '../assets/images/about-journey.jpg';

const MISSION_VISION_VALUES = [
  {
    icon: Target,
    eyebrow: 'Purpose',
    title: 'Our Mission',
    image: aboutMissionImg,
    alt: 'Vijayan Tech team aligning on mission and product delivery',
    description:
      'To deliver high-quality, scalable, and accessible web, mobile, and enterprise software solutions that solve real operational challenges and accelerate business growth.',
  },
  {
    icon: Eye,
    eyebrow: 'Direction',
    title: 'Our Vision',
    image: aboutVisionImg,
    alt: 'Global digital connectivity representing Vijayan Tech vision',
    description:
      'To empower organizations—from ambitious local businesses to established institutions—with resilient technology, intuitive design, and a lasting competitive edge.',
  },
  {
    icon: HeartHandshake,
    eyebrow: 'Principles',
    title: 'Our Values',
    image: aboutValuesImg,
    alt: 'Trusted partnership and collaboration at Vijayan Tech',
    description:
      'Built on Integrity & Transparency, Engineering Quality, a Client-First Partnership mindset, and Practical Innovation that delivers measurable business results.',
  },
];

const JOURNEY_MILESTONES = [
  {
    phase: 'Foundation',
    title: 'Roots in Erode',
    description:
      'Established in Vijayamangalam, Erode with a clear goal: helping regional businesses and institutions modernize with reliable, affordable software.',
  },
  {
    phase: 'Ecosystem',
    title: 'Development Center at TBI @ KEC',
    description:
      'Expanded into the Technology Business Incubator at Kongu Engineering College Campus, Perundurai—connecting our engineering team with emerging talent and research.',
  },
  {
    phase: 'Expansion',
    title: 'Full-Stack & Product Engineering',
    description:
      'Grew beyond corporate websites into cross-platform mobile apps, eCommerce ecosystems, and specialized platforms like School ERP, Load Tracker, and Gym Pro.',
  },
  {
    phase: 'Today',
    title: 'Long-Term Digital Partner',
    description:
      'Trusted by educational institutions, manufacturing firms, retail brands, and enterprises for end-to-end digital transformation and ongoing support.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="About Us | Vijayan Tech"
        description="Learn about Vijayan Tech—our company overview, mission, vision, values, journey, and engineering approach."
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 bg-white border-b border-[#E4E7EC]">
        <PageHeroBackground />
        <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow-label mb-4">About Vijayan Tech</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#101828]">
              Innovating Digital Futures.{' '}
              <span className="text-[#667085]">
                Empowering <span className="text-[#101828]">Growing Businesses.</span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-[#667085] leading-relaxed">
              Vijayan Tech builds custom websites, mobile applications, ERP systems, and cloud
              solutions designed for lasting business impact.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="eyebrow-label">Company Overview</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#101828]">
                Turning Bold Ideas into{' '}
                <span className="text-[#667085]">Dependable Digital Products.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#475467] leading-relaxed">
                Vijayan Tech is a full-cycle software and digital engineering studio helping
                businesses modernize operations, launch standout products, and scale with
                confidence.
              </p>
              <p className="text-base text-[#667085] leading-relaxed">
                Whether it&apos;s a high-converting web platform, a cross-platform mobile app, a
                custom ERP, or cloud-native automation, our multidisciplinary team blends clean
                design with rock-solid engineering—so every release is fast, secure, and built for
                real-world growth.
              </p>

              <div className="pt-6 border-t border-[#E4E7EC] grid grid-cols-2 sm:grid-cols-4 gap-6">
                {COMPANY_STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-[#101828]">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-[#667085]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden border border-[#E4E7EC] bg-[#F7F9FC] rounded-none">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={aboutOverviewImg}
                    alt="Vijayan Tech team collaborating around a meeting table"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Values (Sharper edges + Hover slide from down to up) */}
      <section className="py-20 sm:py-28 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow-label mb-3">Mission, Vision &amp; Values</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              Guided by Purpose.{' '}
              <span className="text-[#667085]">Driven by Outcomes.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MISSION_VISION_VALUES.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  tabIndex={0}
                  className="group relative h-[400px] sm:h-[430px] overflow-hidden rounded-none border border-[#E4E7EC] bg-[#101828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/95 via-[#0B1220]/55 to-[#0B1220]/15 group-hover:from-[#0B1220]/95 group-hover:via-[#0B1220]/80 group-focus-within:via-[#0B1220]/80 transition-colors duration-500"
                    aria-hidden="true"
                  />

                  {/* Content sliding up from bottom on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8 flex flex-col justify-end">
                    <div className="transform translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-none bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                          <IconComponent className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#93C5FD]">
                          {item.eyebrow}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>

                      <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 group-focus-within:max-h-48 group-focus-within:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                        <p className="pt-3 text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Our Story / Journey */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div>
                <p className="eyebrow-label mb-3">Our Story &amp; Journey</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
                  From Regional Roots{' '}
                  <span className="text-[#667085]">to Full-Stack Impact.</span>
                </h2>
              </div>

              <div className="space-y-6">
                {JOURNEY_MILESTONES.map((item) => (
                  <div
                    key={item.title}
                    className="relative pl-6 border-l-2 border-[#E4E7EC] hover:border-[#2563EB] transition-colors"
                  >
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                      <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                      {item.phase}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-[#101828]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#667085] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-none border border-[#E4E7EC] bg-[#F7F9FC]">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={aboutJourneyImg}
                    alt="Engineers collaborating on software products during Vijayan Tech's journey"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <ProcessSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* CTA */}
      <CtaSection />
    </>
  );
}
