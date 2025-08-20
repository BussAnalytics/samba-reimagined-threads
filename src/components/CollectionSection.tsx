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
  return;
};
export default CollectionSection;