import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FoundersSection from '@/components/FoundersSection';
import CollectionSection from '@/components/CollectionSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-full">
      <Header />
      <HeroSection />
      <AboutSection />
      <FoundersSection />
      <CollectionSection />
      <SustainabilitySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
