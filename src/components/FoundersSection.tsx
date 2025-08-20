import { useState } from 'react';
import { Quote } from 'lucide-react';

const FoundersSection = () => {
  const [activeFounder, setActiveFounder] = useState(0);

  const founders = [
    {
      name: "Ana Silva",
      style: "Vintage Elegante",
      bio: "Apaixonada por peças clássicas que nunca saem de moda. Ana traz ao S.A.M.B.A o olhar refinado para vintage autêntico.",
      quote: "Cada peça vintage tem uma alma. Meu papel é encontrar essa alma e conectá-la com quem vai amá-la.",
      specialty: "Peças clássicas dos anos 70-90",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Beatriz Santos",
      style: "Minimalista Urbano",
      bio: "Designer de formação, Bia enxerga beleza na simplicidade e funcionalidade. Curadora das peças atemporais do S.A.M.B.A.",
      quote: "Menos é mais quando cada peça foi escolhida com propósito e cuidado.",
      specialty: "Básicos atemporais e peças funcionais",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Clara Oliveira",
      style: "Artístico Contemporâneo",
      bio: "Artista visual que vê na moda uma tela para expressão. Clara traz as peças mais criativas e ousadas para o S.A.M.B.A.",
      quote: "A moda é arte que vestimos. Cada look é uma oportunidade de contar nossa história.",
      specialty: "Peças criativas e estampas únicas",
      avatar: "https://images.unsplash.com/photo-1488508872907-592763824245?w=400&h=400&fit=crop&crop=face"
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
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="group bg-card rounded-3xl overflow-hidden card-hover border border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={founder.avatar}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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