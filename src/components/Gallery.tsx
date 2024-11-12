import React from 'react';
import ScrollReveal from './ScrollReveal';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800',
    title: 'Artisan Sourdough',
    category: 'Breads'
  },
  {
    url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800',
    title: 'French Croissants',
    category: 'Pastries'
  },
  {
    url: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800',
    title: 'Chocolate Danish',
    category: 'Pastries'
  },
  {
    url: 'https://images.unsplash.com/photo-1568471173242-461f0a730452?auto=format&fit=crop&w=800',
    title: 'Baguettes',
    category: 'Breads'
  },
  {
    url: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800',
    title: 'Morning Selection',
    category: 'Assorted'
  },
  {
    url: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800',
    title: 'Cookie Collection',
    category: 'Cookies'
  }
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            Our Creations
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <ScrollReveal
              key={index}
              animation="animate-zoom-in"
              delay={index * 100}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg md:text-xl font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}