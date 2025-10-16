import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FoundersSection from '@/components/FoundersSection';
import WhatsAppButton from '@/components/WhatsAppButton';
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
      
      <SustainabilitySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
