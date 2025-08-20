import heroImage from '@/assets/hero-samba.jpg';
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <img 
        src="/lovable-uploads/128b40b2-330e-4532-9433-050aeb10b20a.png" 
        alt="S.A.M.B.A Hero Background" 
        className="absolute inset-0 w-full h-full object-cover object-center scale-110"
      />
      <img 
        src="" 
        alt="Overlay" 
        className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40"
      />

      {/* Floating Elements */}
      <img 
        src="" 
        alt="Floating element" 
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"
      />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-ferrugem/25 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="text-gradient">S.A.M.B.A</span>
        </h1>
        
        <p className="font-playfair text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-4 animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          mais que moda, um manifesto
        </p>
        
        <p className="font-poppins text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          Sustentável. Autêntico. Em movimento.
        </p>

        <div style={{
        animationDelay: '0.6s'
      }} className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up mx-0">
          
          <button onClick={() => scrollToSection('sobre')} className="btn-samba-outline mx-0">
            Nossa história
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center mx-0 py-0 my-0 px-0">
            <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;