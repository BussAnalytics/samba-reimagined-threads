import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-elegant' : 'bg-transparent'}`}>
      <div className="container-samba px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold text-gradient">
              S.A.M.B.A
            </h1>
          </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-wrap">
            <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-colors duration-300">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary transition-colors duration-300">
              Sobre
            </button>
          <button onClick={() => scrollToSection('mulheres')} className="text-foreground hover:text-primary transition-colors duration-300 text-sm lg:text-base whitespace-nowrap">
            As Mulheres do S.A.M.B.A
          </button>
            
            <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary transition-colors duration-300">
              Contato
            </button>
            
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="flex flex-col space-y-4 py-6">
              <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-colors duration-300 text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary transition-colors duration-300 text-left">
                Sobre
              </button>
              
              <button onClick={() => scrollToSection('acervo')} className="text-foreground hover:text-primary transition-colors duration-300 text-left">
                Peças
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary transition-colors duration-300 text-left">
                Contato
              </button>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;