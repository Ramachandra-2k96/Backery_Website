import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Desai',
    rating: 5,
    text: 'Our bakery is the best! The sourdough is unbeatable, seriously!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150'
  },
  {
    name: 'Anika Shetty',
    rating: 5,
    text: 'These croissants are incredible! Feels like being in Paris!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150'
  },
  {
    name: 'Raghav Kumar',
    rating: 5,
    text: 'The quality and attention to detail is unmatched! My favorite bakery!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      />
      
      <div className="container relative z-10 px-4 mx-auto">
        <h2 className="mb-20 text-5xl font-extrabold text-center text-white">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-12 transition-all duration-300 transform shadow-2xl bg-white/20 backdrop-blur-xl rounded-3xl hover:scale-105"
            >
              <div className="flex items-center gap-6 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover w-16 h-16 rounded-full shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-white">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg italic text-white">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
