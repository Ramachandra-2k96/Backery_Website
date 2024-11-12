import React from 'react';
import { Clock, Leaf, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: 'Organic Ingredients',
    description: 'We use only the finest organic and locally sourced ingredients'
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Everything is baked fresh every morning'
  },
  {
    icon: ThumbsUp,
    title: 'Customer Favorite',
    description: 'Voted best bakery in the city 5 years running'
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 to-amber-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-5xl font-extrabold text-center text-gray-800">Why Choose Us</h2>
        
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-10 text-center transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 transition-transform duration-500 ease-in-out transform rounded-full shadow-md bg-amber-100 hover:scale-110 hover:rotate-6 hover:bg-amber-200">
                <reason.icon className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-amber-500">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
