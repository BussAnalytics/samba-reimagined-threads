import { Recycle, Heart, Zap, Leaf } from 'lucide-react';
import sustainabilityImage from '@/assets/sustainability-concept.jpg';
const SustainabilitySection = () => {
  const impactItems = [{
    icon: Recycle,
    title: "Redução de Resíduos",
    description: "Cada peça que encontra um novo lar é uma peça que não vai para o aterro. Circular é cuidar.",
    stat: "1000+ peças ressignificadas"
  }, {
    icon: Heart,
    title: "Consumo Consciente",
    description: "Compramos menos, escolhemos melhor. Cada aquisição é um voto no mundo que queremos.",
    stat: "95% satisfação dos clientes"
  }, {
    icon: Zap,
    title: "Curadoria Afetiva",
    description: "Selecionamos com carinho, pensando na história de cada peça e na pessoa que vai amá-la.",
    stat: "3 curadoras especialistas"
  }, {
    icon: Leaf,
    title: "Impacto Positivo",
    description: "Moda que regenera: cada compra contribui para um futuro mais sustentável e consciente.",
    stat: "100% moda circular"
  }];
  return <section id="sustentabilidade" className="section-padding">
      <div className="container-samba">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
              Sustentabilidade em Movimento
            </h2>
            
            <p className="font-poppins text-lg text-muted-foreground leading-relaxed mb-8">
              Acreditamos que a moda pode ser uma força de transformação positiva. 
              No S.A.M.B.A, cada peça é um ato de resistência contra o consumo desenfreado 
              e uma celebração da economia circular.
            </p>

            <div className="space-y-6">
              {impactItems.map((item, index) => {
              const Icon = item.icon;
              return <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-muted-foreground leading-relaxed mb-2">
                        {item.description}
                      </p>
                      <span className="font-poppins text-sm font-medium text-primary">
                        {item.stat}
                      </span>
                    </div>
                  </div>;
            })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img src={sustainabilityImage} alt="Conceito de sustentabilidade na moda" className="w-full h-[500px] object-cover rounded-3xl shadow-elegant" />
              
              {/* Overlay Stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-3xl"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="font-playfair text-xl font-bold text-foreground mb-3">
                    Nosso Impacto
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="font-poppins text-2xl font-bold text-primary">2k+</div>
                      <div className="font-poppins text-xs text-muted-foreground">Peças circulando</div>
                    </div>
                    <div className="text-center">
                      <div className="font-poppins text-2xl font-bold text-accent">500+</div>
                      <div className="font-poppins text-xs text-muted-foreground">Clientes felizes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/15 rounded-full animate-float" style={{
            animationDelay: '1s'
          }}></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-card rounded-3xl p-8 md:p-12 border border-border/50">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">
            Faça parte do movimento
          </h3>
          <p className="font-poppins text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Cada compra é um voto no futuro que queremos construir. Junte-se a nós na revolução da moda consciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-samba">
              Descobrir peças
            </button>
            
          </div>
        </div>
      </div>
    </section>;
};
export default SustainabilitySection;