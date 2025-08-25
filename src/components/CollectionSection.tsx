import { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
const CollectionSection = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Vintage', 'Minimalista', 'Artístico', 'Acessórios'];
  const pieces = [{
    id: 1,
    name: "Blazer Vintage 80s",
    category: "Vintage",
    price: "R$ 120",
    description: "Blazer de alfaiataria com ombreiras marcadas. Perfeito para um look executivo com personalidade.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    curator: "Ana"
  }, {
    id: 2,
    name: "Vestido Midi Fluido",
    category: "Minimalista",
    price: "R$ 85",
    description: "Corte minimalista em tecido fluido. Elegância atemporal para qualquer ocasião.",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    curator: "Beatriz"
  }, {
    id: 3,
    name: "Jaqueta Estampada",
    category: "Artístico",
    price: "R$ 95",
    description: "Peça única com estampa artística exclusiva. Para quem não tem medo de ousar.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    curator: "Clara"
  }, {
    id: 4,
    name: "Calça Wide Leg",
    category: "Minimalista",
    price: "R$ 75",
    description: "Modelagem ampla e confortável. O básico sofisticado que não pode faltar no guarda-roupa.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    curator: "Beatriz"
  }, {
    id: 5,
    name: "Bolsa Vintage Couro",
    category: "Acessórios",
    price: "R$ 65",
    description: "Bolsa de couro legítimo com patina natural. História e estilo em cada detalhe.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
    curator: "Ana"
  }, {
    id: 6,
    name: "Camisa Estampada",
    category: "Artístico",
    price: "R$ 55",
    description: "Estampa exclusiva criada por artista local. Moda e arte se encontram nesta peça especial.",
    image: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=400&h=500&fit=crop",
    curator: "Clara"
  }];
  const filteredPieces = activeFilter === 'Todos' ? pieces : pieces.filter(piece => piece.category === activeFilter);
  
  return (
    <section id="acervo" className="section-padding">
      <div className="container-samba">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-6">
            Nossa Coleção
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Peças únicas selecionadas com carinho pelas nossas curadoras.
            Cada item conta uma história e espera para fazer parte da sua.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Pieces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPieces.map((piece, index) => (
            <div 
              key={piece.id}
              className="group bg-card rounded-2xl overflow-hidden card-hover border border-border/50 w-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={piece.image}
                  alt={piece.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                    <Heart className="w-5 h-5 text-foreground" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {piece.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-playfair text-xl font-bold text-foreground">
                    {piece.name}
                  </h3>
                  <span className="font-poppins text-lg font-bold text-primary">
                    {piece.price}
                  </span>
                </div>
                
                <p className="font-poppins text-muted-foreground text-sm leading-relaxed mb-4">
                  {piece.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-xs text-muted-foreground">
                    Curadoria: {piece.curator}
                  </span>
                  <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="font-poppins text-sm font-medium">Ver detalhes</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-card rounded-3xl p-8 md:p-12 border border-border/50">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">
            Gostou do que viu?
          </h3>
          <p className="font-poppins text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entre em contato conosco para saber mais sobre as peças disponíveis ou para agendar uma visita ao nosso espaço.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-samba"
          >
            Entrar em contato
          </button>
        </div>
      </div>
    </section>
  );
};
export default CollectionSection;