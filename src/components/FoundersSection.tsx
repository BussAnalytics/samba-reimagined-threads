import { useState } from 'react';
import { Quote } from 'lucide-react';

const FoundersSection = () => {
  const [activeFounder, setActiveFounder] = useState(0);

  const founders = [
    {
      name: "Debora Caminha",
      style: "Vintage Elegante",
      bio: "Débora transforma sua paixão pelo vintage em curadoria única, escolhendo peças atemporais que unem simplicidade, funcionalidade e estilo para o S.A.M.B.A.",
      quote: "Cada peça vintage tem uma alma. Meu papel é encontrar essa alma e conectá-la com quem vai amá-la.",
      specialty: "Peças clássicas dos anos 70-90",
      avatar: "/lovable-uploads/7d933f55-012b-43f1-b152-8b2c0950bbd9.png"
    },
    {
      name: "Natalia Faria",
      style: "Minimalista Urbano",
      bio: "Natalia é formada em Design de Moda e vê nas roupas um território de expressão, transformação e afeto. No S.A.M.B.A., atua com olhar criativo e autoral, trazendo peças de upcycling. Sua curadoria une ousadia e identidade, valorizando a liberdade de ser e vestir com propósito.",
      quote: "Menos é mais quando cada peça foi escolhida com propósito e cuidado.",
      specialty: "Básicos atemporais e peças funcionais",
      avatar: "/lovable-uploads/d120b554-c035-4b38-a9c7-b1945d6d4e75.png"
    },
    {
      name: "Rosane Brizola",
      style: "Artístico Contemporâneo",
      bio: "Apaixonada por peças clássicas que nunca saem de moda, Rosane traz ao S.A.M.B.A.,elegância atemporal e estilo único.",
      quote: "A moda é arte que vestimos. Cada look é uma oportunidade de contar nossa história.",
      specialty: "Peças criativas e estampas únicas",
      avatar: "/lovable-uploads/fa9f2894-4d4c-4f77-9e5d-2c48ccbf8f06.png"
    }
  ];

  return (
    <section id="mulheres" className="section-padding">
      <div className="container-samba">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
            As Mulheres do S.A.M.B.A
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Três mulheres, três brechós, um só propósito: fazer da moda uma forma de resistência, arte e expressão.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block w-full">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8 lg:space-y-8 xl:space-y-0">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="group bg-card rounded-3xl card-hover border border-border/50 w-full mx-auto max-w-md xl:max-w-none"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={founder.avatar}
                  alt={founder.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <span className="font-poppins text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {founder.style}
                  </span>
                </div>
                
                <p className="font-poppins text-muted-foreground mb-4 leading-relaxed">
                  {founder.bio}
                </p>
                
                <div className="bg-muted/50 rounded-xl p-4 mb-4">
                  <Quote className="w-5 h-5 text-primary mb-2" />
                  <p className="font-poppins text-sm italic text-foreground leading-relaxed">
                    "{founder.quote}"
                  </p>
                </div>
                
                <div className="text-center">
                  <span className="font-poppins text-xs text-muted-foreground">
                    Especialidade: {founder.specialty}
                  </span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Founder Selection Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            {founders.map((founder, index) => (
              <button
                key={index}
                onClick={() => setActiveFounder(index)}
                className={`w-16 h-16 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                  activeFounder === index 
                    ? 'border-primary scale-110' 
                    : 'border-border/50 hover:border-primary/50'
                }`}
              >
                <img 
                  src={founder.avatar}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Active Founder Card */}
          <div className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-elegant">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={founders[activeFounder].avatar}
                alt={founders[activeFounder].name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  {founders[activeFounder].name}
                </h3>
                <span className="font-poppins text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {founders[activeFounder].style}
                </span>
              </div>
              
              <p className="font-poppins text-muted-foreground mb-4 leading-relaxed">
                {founders[activeFounder].bio}
              </p>
              
              <div className="bg-muted/50 rounded-xl p-4 mb-4">
                <Quote className="w-5 h-5 text-primary mb-2" />
                <p className="font-poppins text-sm italic text-foreground leading-relaxed">
                  "{founders[activeFounder].quote}"
                </p>
              </div>
              
              <div className="text-center">
                <span className="font-poppins text-xs text-muted-foreground">
                  Especialidade: {founders[activeFounder].specialty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;