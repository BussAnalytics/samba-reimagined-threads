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
  return <section id="inicio" className="min-h-screen flex items-end justify-center relative overflow-hidden pb-20">
      {/* Background Image - Otimizada para mobile */}
      <img src="/lovable-uploads/8491829f-b8a7-406c-acab-dd8f4bd0e5d8.png" alt="S.A.M.B.A Hero Background" className="absolute inset-0 w-full h-full object-contain md:object-cover md:object-top" />
      

      {/* Floating Elements */}
      <img src="/lovable-uploads/877b1cdc-3923-4267-94b0-0c9f2e3fcffa.png" alt="S.A.M.B.A Logo" className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{
      animationDelay: '1s'
    }}></div>
      

      {/* S.A.M.B.A Title positioned above the image */}
      <div className="absolute top-50 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold animate-fade-in-up">
          <span className="text-gradient my-0 mx-px px-0 py-0 text-6xl">S.A.M.B.A</span>
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-playfair text-xl md:text-2xl lg:text-3xl text-black mb-4 animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          mais que moda, um manifesto
        </p>
        
        <p className="font-poppins text-lg md:text-xl text-black mb-8 animate-fade-in-up" style={{
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
          
        </div>
      </div>
    </section>;
};
export default HeroSection;
