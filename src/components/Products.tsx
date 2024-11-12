import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const products = [
  {
    name: 'Artisan Sourdough',
    description: 'Naturally fermented for 24 hours with our century-old starter',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800'
  },
  {
    name: 'Butter Croissants',
    description: 'Flaky, buttery layers made with French butter',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800'
  },
  {
    name: 'Chocolate Danish',
    description: 'Filled with rich Belgian chocolate and almond cream',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800'
  },
  {
    name: 'Rustic Baguette',
    description: 'Traditional French recipe with crispy crust',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1568471173242-461f0a730452?auto=format&fit=crop&w=800'
  }
];

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            Our Signature Collection
          </h2>
        </ScrollReveal>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <ScrollReveal animation="animate-fade-in">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-8 pb-8"
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="min-w-[280px] md:min-w-[300px] snap-center group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{product.name}</h3>
                        <p className="mb-2">{product.description}</p>
                        <p className="text-lg md:text-xl font-bold">{product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}