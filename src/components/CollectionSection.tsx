import { useState } from 'react';
import { Filter, Heart, ShoppingBag } from 'lucide-react';
import vintagePieces from '@/assets/vintage-pieces.jpg';
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Nosso Acervo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peças únicas selecionadas com carinho. Cada item conta uma história
            e está pronto para começar uma nova jornada com você.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-foreground border-border hover:border-primary/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPieces.map((piece) => (
            <div key={piece.id} className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold text-card-foreground">
                    {piece.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">
                    {piece.price}
                  </span>
                </div>
                <p className="text-sm text-primary/80 mb-3">
                  Curadoria de {piece.curator}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {piece.description}
                </p>
                <button className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CollectionSection;