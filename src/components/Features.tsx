import React from 'react';
import { Wheat, Sparkles, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: Wheat,
    title: 'Fresh Ingredients',
    description: 'We source only the finest, locally-grown ingredients for our creations.'
  },
  {
    icon: Sparkles,
    title: 'Unique Recipes',
    description: 'Generations of family secrets blended with modern innovation.'
  },
  {
    icon: Heart,
    title: 'Handcrafted Goods',
    description: 'Every item is made with love and attention to detail.'
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              animation="animate-slide-up"
              delay={index * 200}
              className="group p-6 md:p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <feature.icon className="w-12 md:w-16 h-12 md:h-16 text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}