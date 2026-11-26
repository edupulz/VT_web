import PageHead from '../components/PageHead';
import HeroSection from '../components/sections/HeroSection';
import TrustPartnersSection from '../components/sections/TrustPartnersSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import ProductsSection from '../components/sections/ProductsSection';
import ProcessSection from '../components/sections/ProcessSection';
import CtaSection from '../components/sections/CtaSection';

export default function HomePage() {
  return (
    <>
      <PageHead
        title="Vijayan Tech | Engineering Tomorrow. Building What's Next."
        description="Vijayan Tech is a global IT solutions and digital engineering company transforming ambitious ideas into intelligent, scalable enterprise technology."
      />
      <HeroSection />
      <TrustPartnersSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <ProductsSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
