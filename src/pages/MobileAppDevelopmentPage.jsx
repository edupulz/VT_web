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
import PageHeroImage from '../components/PageHeroImage';
import SplitHeading from '../components/SplitHeading';
import ActionButton from '../components/ActionButton';
import ProcessSection from '../components/sections/ProcessSection';
import CtaSection from '../components/sections/CtaSection';
import { MOBILE_APPS } from '../data/portfolio';
import mobileHeroImg from '../assets/images/service-mobile.jpg';
import mobileWhyChooseImg from '../assets/images/mobile-why-choose.jpg';

const MOBILE_SERVICES = [
  {
    icon: Smartphone,
    title: 'Android App Development',
    description: 'Develop feature-rich applications for Android devices.',
  },
  {
    icon: Sparkles,
    title: 'iOS App Development',
    description: 'Create intuitive applications for Apple devices.',
  },
  {
    icon: Layers,
    title: 'Cross-Platform App Development',
    description: 'Build applications for multiple platforms using suitable shared technologies.',
  },
  {
    icon: Code2,
    title: 'Custom Mobile App Development',
    description: 'Develop applications around your unique business requirements.',
  },
  {
    icon: Palette,
    title: 'Mobile UI/UX Design',
    description: 'Create intuitive interfaces and user journeys.',
  },
  {
    icon: Wrench,
    title: 'App Maintenance & Support',
    description: 'Maintain, update, and enhance your applications.',
  },
];

const EXPERTISE_ITEMS = [
  { icon: Smartphone, label: 'Native Android & iOS Development' },
  { icon: Code2, label: 'Flutter & React Native Development' },
  { icon: Palette, label: 'Mobile UI/UX Design & Prototyping' },
  { icon: Server, label: 'Backend & API Integration' },
  { icon: Bell, label: 'Push Notification Implementation' },
  { icon: CreditCard, label: 'Payment & Authentication Integration' },
  { icon: ShieldCheck, label: 'Mobile Application Security' },
  { icon: Layers, label: 'App Performance Testing & Optimisation' },
];

const WHY_CHOOSE_ITEMS = [
  {
    title: 'User-Focused Interfaces',
    description: 'Make application interactions intuitive and convenient.',
  },
  {
    title: 'Purpose-Built Features',
    description: 'Align app functionality with your business objectives.',
  },
  {
    title: 'Platform Flexibility',
    description: 'Choose native or cross-platform development according to your needs.',
  },
  {
    title: 'Reliable Performance',
    description: 'Optimise applications for supported devices and operating systems.',
  },
  {
    title: 'Secure Data Handling',
    description: 'Apply appropriate authentication and data protection practices.',
  },
  {
    title: 'Continuous Improvements',
    description: 'Support updates, enhancements, and future releases.',
  },
];

const mobileAppByName = Object.fromEntries(MOBILE_APPS.map((item) => [item.name, item]));

const FEATURED_PROJECTS = [
  {
    name: mobileAppByName['Smart School ERP'].name,
    category: mobileAppByName['Smart School ERP'].category,
    platforms: ['Android', 'iOS'],
    image: mobileAppByName['Smart School ERP'].image,
    to: '/products/school-erp',
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Firebase'],
    summary:
      'Unified school companion for attendance, fee payments, live announcements, and parent-teacher communication.',
  },
  {
    name: mobileAppByName['Load Tracker'].name,
    category: mobileAppByName['Load Tracker'].category,
    platforms: ['Android'],
    image: mobileAppByName['Load Tracker'].image,
    to: '/products/load-tracker',
    technologies: ['React Native', 'Go', 'Google Maps API', 'REST APIs'],
    summary:
      'Real-time dispatch tracking, digital proof of delivery, and route updates built for drivers and fleet managers.',
  },
  {
    name: mobileAppByName['Gym Pro'].name,
    category: mobileAppByName['Gym Pro'].category,
    platforms: ['Android'],
    image: mobileAppByName['Gym Pro'].image,
    to: '/products/gym-pro',
    technologies: ['Flutter', 'TypeScript', 'Razorpay', 'Push Notifications'],
    summary:
      'Seamless member check-ins, membership renewals, workout logs, and automated renewal reminders in one app.',
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
        description="Connect your business with customers through intuitive, high-performing mobile applications that simplify interactions and support business operations."
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 bg-white border-b border-[#E4E7EC]">
        <PageHeroBackground />
        <div className="relative z-10 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="eyebrow-label">MOBILE APP DEVELOPMENT</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#101828]">
                <SplitHeading text="Turn Ideas Into Powerful Mobile Experiences." highlightLastWord />
              </h1>
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                Connect your business with customers through intuitive, high-performing mobile
                applications. We design and develop mobile experiences that simplify interactions,
                support business operations, and keep your services accessible on the go.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <ActionButton to="/contact" className="px-7 py-4 text-sm sm:text-base">
                  Build Your Mobile App
                </ActionButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PageHeroImage
                src={mobileHeroImg}
                alt="Mobile application development for iOS and Android"
              />
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
              <SplitHeading text="Mobile Applications Built Around Your Goals." />
            </h2>
            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              Whether you&apos;re launching a new product or extending your digital platform, we
              develop mobile applications tailored to your users, features, and business
              requirements.
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

      {/* 3. Our Capabilities */}
      <section className="py-20 sm:py-24 bg-[#F7F9FC] border-t border-[#E4E7EC]">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow-label mb-3">Our Capabilities</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
              <SplitHeading text="From Interface Design to App Deployment." />
            </h2>
            <p className="mt-4 text-base text-[#667085] leading-relaxed">
              We bring together mobile technologies and essential application components to create
              complete mobile experiences.
            </p>
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
                <p className="eyebrow-label mb-3">Why Choose Us?</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
                  <SplitHeading text="Better Mobile Experiences. Stronger Customer Connections." />
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
                    to={project.to || '/portfolio'}
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
              <SplitHeading text="Frequently Asked Questions" />
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
