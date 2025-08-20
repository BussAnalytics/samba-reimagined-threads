import { Instagram, Mail, Heart } from 'lucide-react';
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-card border-t border-border/50">
      <div className="container-samba">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="font-playfair text-3xl font-bold text-gradient mb-4">
                S.A.M.B.A
              </h3>
              <p className="font-poppins text-muted-foreground leading-relaxed mb-6 max-w-md">
                Mais que um brechó, somos um movimento de moda consciente. 
                Três mulheres, três estilos, um só propósito: ressignificar a moda com alma.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://instagram.com/sambabreu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="mailto:contato@sambabrechó.com.br" className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">
                Navegação
              </h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('inicio')} className="font-poppins text-muted-foreground hover:text-primary transition-colors duration-300">
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('sobre')} className="font-poppins text-muted-foreground hover:text-primary transition-colors duration-300">
                    Sobre o S.A.M.B.A
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('mulheres')} className="font-poppins text-muted-foreground hover:text-primary transition-colors duration-300">
                    As Fundadoras
                  </button>
                </li>
                <li>
                  
                </li>
                <li>
                  <button onClick={() => scrollToSection('contato')} className="font-poppins text-muted-foreground hover:text-primary transition-colors duration-300">
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Values Column */}
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">
                Nossos Valores
              </h4>
              <ul className="space-y-3">
                <li className="font-poppins text-muted-foreground">
                  ♻️ Sustentabilidade
                </li>
                <li className="font-poppins text-muted-foreground">
                  ✨ Autenticidade
                </li>
                <li className="font-poppins text-muted-foreground">
                  🌍 Movimento
                </li>
                <li className="font-poppins text-muted-foreground">
                  👗 Brechó
                </li>
                <li className="font-poppins text-muted-foreground">
                  🧵 Autoral
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span className="font-poppins text-sm">
                © 2024 S.A.M.B.A Brechó. Todos os direitos reservados.
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span className="font-poppins text-sm">Feito com</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span className="font-poppins text-sm">para um mundo mais sustentável</span>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="text-center py-8 border-t border-border/50">
          <p className="font-playfair text-xl md:text-2xl font-medium text-gradient">
            "Vista sua história. Vista S.A.M.B.A."
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;