import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronDown,
  Code2,
  CreditCard,
  Layers,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from 'lucide-react';
import PageHead from '../components/PageHead';
import PageHeroBackground from '../components/PageHeroBackground';
import ActionButton from '../components/ActionButton';
import ProcessSection from '../components/sections/ProcessSection';
import CtaSection from '../components/sections/CtaSection';
import mobileHeroImg from '../assets/images/service-mobile.jpg';
import mobileWhyChooseImg from '../assets/images/mobile-why-choose.jpg';
import project1Img from '../assets/images/mobile-project-1.jpg';
import project2Img from '../assets/images/mobile-project-2.jpg';
import project3Img from '../assets/images/mobile-project-3.jpg';

const MOBILE_SERVICES = [
  {
    icon: Smartphone,
    title: 'Android App Development',
    description: 'Feature-rich applications designed for Android devices.',
  },
  {
    icon: Sparkles,
    title: 'iOS App Development',
    description: 'Smooth and intuitive applications for Apple devices.',
  },
  {
    icon: Layers,
    title: 'Cross-Platform App Development',
    description: 'Efficient applications for multiple platforms.',
  },
  {
    icon: Code2,
    title: 'Custom Mobile App Development',
    description: 'Applications built around your unique business requirements.',
  },
  {
    icon: Palette,
    title: 'UI/UX App Design',
    description: 'Engaging interfaces and seamless user journeys.',
  },
  {
    icon: Wrench,
    title: 'App Maintenance & Support',
    description: 'Continuous improvements and technical assistance.',
  },
];

const EXPERTISE_ITEMS = [
  { icon: Smartphone, label: 'Android & iOS Development' },
  { icon: Layers, label: 'Cross-Platform Development' },
  { icon: Code2, label: 'Flutter & React Native' },
  { icon: Palette, label: 'Mobile UI/UX Design' },
  { icon: Server, label: 'API & Backend Integration' },
  { icon: Bell, label: 'Push Notifications' },
  { icon: CreditCard, label: 'Payment Gateway Integration' },
  { icon: ShieldCheck, label: 'App Security & Performance Optimisation' },
];

const WHY_CHOOSE_ITEMS = [
  {
    title: 'User-Centred Design',
    description: 'Easy-to-use and engaging application experiences.',
  },
  {
    title: 'Custom Functionality',
    description: 'Features tailored to your business.',
  },
  {
    title: 'Cross-Platform Reach',
    description: 'Reach users across multiple devices.',
  },
  {
    title: 'High Performance',
    description: 'Smooth application performance.',
  },
  {
    title: 'Secure Architecture',
    description: 'Designed with data protection in mind.',
  },
  {
    title: 'Continuous Support',
    description: 'Assistance with updates and improvements.',
  },
];

const FEATURED_PROJECTS = [
  {
    name: 'CampusConnect ERP',
    category: 'Education & Operations',
    platforms: ['Android', 'iOS'],
    image: project1Img,
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Firebase'],
    summary:
      'Unified mobile companion for attendance, fee payments, live announcements, and parent-teacher communication.',
  },
  {
    name: 'LoadTrack Fleet',
    category: 'Logistics & Supply Chain',
    platforms: ['Android', 'iOS'],
    image: project2Img,
    technologies: ['React Native', 'Go', 'Google Maps API', 'REST APIs'],
    summary:
      'Real-time dispatch tracking, digital proof of delivery, and route updates built for drivers and fleet managers.',
  },
  {
    name: 'GymPro Member',
    category: 'Fitness & Lifestyle',
    platforms: ['Android', 'iOS'],
    image: project3Img,
    technologies: ['Flutter', 'TypeScript', 'Razorpay', 'Push Notifications'],
    summary:
      'Seamless class booking, membership renewals, workout logs, and automated renewal reminders in one app.',
  },
];

const FAQS = [
  {
    question: 'Do you develop apps for both Android and iOS?',
    answer:
      'Yes. We develop Android, iOS, and cross-platform applications based on your business needs.',
  },
  {
    question: 'Which technologies do you use?',
    answer:
      'Depending on the project, we use technologies such as Flutter, React Native, and native mobile development frameworks.',
  },
  {
    question: 'Can you convert my business idea into an app?',
    answer:
      'Yes. We can help transform your idea into a structured mobile application through planning, design, development, and deployment.',
  },
  {
    question: 'How long does mobile app development take?',
    answer:
      "The timeline depends on the application's features, integrations, design complexity, and platform requirements.",
  },
  {
    question: 'Do you provide app maintenance?',
    answer:
      'Yes. We can provide maintenance, updates, bug fixes, and feature enhancements based on your requirements.',
  },
];

export default function MobileAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <PageHead
        title="Mobile App Development | Vijayan Tech"
        description="We develop innovative, intuitive, and high-performance Android, iOS, and cross-platform mobile applications tailored to your business."
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 bg-white border-b border-[#E4E7EC]">
        <PageHeroBackground />
        <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="eyebrow-label">Mobile App Development</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#101828]">
                Turning Ideas Into Powerful{' '}
                <span className="text-[#667085]">
                  Mobile <span className="text-[#101828]">Experiences.</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                We develop innovative, intuitive, and high-performance mobile applications that
                connect businesses with their customers. From concept to deployment, we transform
                your ideas into seamless mobile experiences.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <ActionButton to="/contact" className="px-7 py-4 text-sm sm:text-base">
                  Build Your Mobile App
                </ActionButton>
                <ActionButton
                  to="/services/mobile-app-development#featured-projects"
                  variant="secondary"
                  className="px-7 py-4 text-sm sm:text-base"
                >
                  Explore Our Work
                </ActionButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-none border border-[#E4E7EC] bg-white">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={mobileHeroImg}
                    alt="Mobile application development for iOS and Android"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
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
              Everything You Need to{' '}
              <span className="text-[#667085]">Build a Powerful App.</span>
            </h2>
            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              Whether you&apos;re launching a new application or expanding an existing digital
              platform, we provide end-to-end mobile app development solutions tailored to your
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOBILE_SERVICES.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-none bg-[#F8FAFC] border border-[#E4E7EC] hover:border-[#2563EB]/40 hover:bg-white transition-all duration-300 space-y-4"
                >
                  <div className="w-11 h-11 rounded-none bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#101828]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#667085] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Our Expertise */}
      <section className="py-20 sm:py-24 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow-label mb-3">Our Expertise</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              Everything Your <span className="text-[#667085]">App Needs.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EXPERTISE_ITEMS.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.label}
                  className="p-6 rounded-none bg-white border border-[#E4E7EC] flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-none bg-[#EAF2FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-display text-sm sm:text-base font-semibold text-[#101828]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us? */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-none border border-[#E4E7EC] bg-[#F7F9FC]">
                <div className="aspect-[4/5] w-full">
                  <img
                    src={mobileWhyChooseImg}
                    alt="Mobile app interface and user experience design"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="eyebrow-label mb-3">Why Choose Us</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
                  Connecting Your Business{' '}
                  <span className="text-[#667085]">With the Mobile World.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {WHY_CHOOSE_ITEMS.map((item) => (
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
              Mobile Experiences That{' '}
              <span className="text-[#667085]">Make a Difference.</span>
            </h2>
            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              Discover mobile application concepts and projects designed to improve accessibility,
              simplify operations, and connect users with businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col justify-between rounded-none bg-white border border-[#E4E7EC] overflow-hidden hover:border-[#2563EB]/50 hover:shadow-[0_12px_30px_rgba(16,24,40,0.06)] transition-all duration-300"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#101828]">
                    <img
                      src={project.image}
                      alt={`${project.name} mobile application preview`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {project.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="px-2.5 py-0.5 text-[11px] font-semibold bg-[#EAF2FF] text-[#2563EB]"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#101828]">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#667085] leading-relaxed">{project.summary}</p>

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
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#101828] group-hover:text-[#2563EB] transition-colors"
                  >
                    <span>View Project</span>
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
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#E4E7EC] border-y border-[#E4E7EC]">
            {FAQS.map((faq, idx) => {
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

      {/* 9. Existing CTA Section */}
      <CtaSection />
    </>
  );
}
