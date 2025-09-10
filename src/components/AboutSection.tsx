import { Recycle, Sparkles, Zap, ShoppingBag, Palette } from 'lucide-react';
const AboutSection = () => {
  const sambaLetters = [{
    letter: 'S',
    word: 'Sustentabilidade',
    icon: Recycle,
    description: 'Consumo consciente',
    color: 'text-accent'
  }, {
    letter: 'A',
    word: 'Autenticidade',
    icon: Sparkles,
    description: 'Como quem dança sem plateia.',
    color: 'text-primary'
  }, {
    letter: 'M',
    word: 'Movimento',
    icon: Zap,
    description: 'Que gira ideias, corpos e histórias.',
    color: 'text-ferrugem'
  }, {
    letter: 'B',
    word: 'Brechó',
    icon: ShoppingBag,
    description: 'Reusar é reinventar',
    color: 'text-accent'
  }, {
    letter: 'A',
    word: 'Autoral',
    icon: Palette,
    description: 'Estilo próprio que nasce da união de três visões criativas.',
    color: 'text-primary'
  }];
  return <section id="sobre" className="section-padding bg-gradient-subtle">
      <div className="container-samba">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
            O que é S.A.M.B.A.?
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-responsive">
            Um brechó colaborativo que une três estilos, três histórias e um só propósito: 
            ressignificar a moda com alma, cuidado e consciência.
          </p>
        </div>

        {/* Grid responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {sambaLetters.map((item, index) => {
          const Icon = item.icon;
          return <div key={index} className="group bg-card rounded-2xl p-6 lg:p-8 card-hover border border-border/50 w-full" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-primary to-ferrugem flex items-center justify-center mr-4`}>
                    <span className="font-playfair text-xl font-bold text-white">
                      {item.letter}
                    </span>
                  </div>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                
                <h3 className="font-playfair text-xl font-bold mb-3 text-foreground">
                  {item.word}
                </h3>
                
                <p className="font-poppins text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>;
        })}
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-elegant">
          <div className="text-center">
            <blockquote className="font-playfair text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
              "Mais que roupas usadas, histórias reescritas."
            </blockquote>
            
            <p className="font-poppins text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed text-responsive">O S.A.M.B.A. nasceu da união de três paixões por moda e propósito. Aqui, cada peça é escolhida com carinho e cada detalhe conta uma história — a sua e a nossa. Acreditamos que a moda pode ser uma forma de resistência, arte e expressão, sempre com consciência e responsabilidade. 
       E os pontos entre as letras ? São as agulhas costurando esse manifesto.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;