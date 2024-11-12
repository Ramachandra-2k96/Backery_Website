import React from 'react';

const bakers = [
  {
    name: 'Aarav Mehta',
    role: 'Master Baker',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=800',
    quote: 'Every loaf tells a story of passion and tradition.'
  },
  {
    name: 'Sneha Sharma',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800',
    quote: 'Innovation meets classical techniques in every creation.'
  },
  {
    name: 'Rahul Nair',
    role: 'Artisan Baker',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800',
    quote: 'Crafting breads with love and the finest ingredients.'
  },
];

export default function Bakers() {
  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-5xl font-extrabold text-center text-gray-800">Meet Our Master Bakers</h2>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {bakers.map((baker, index) => (
            <div
              key={index}
              className="w-full group perspective"
            >
              <div className="relative w-full h-[400px] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <img
                    src={baker.image}
                    alt={baker.name}
                    className="object-cover w-full h-full shadow-xl rounded-2xl"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100 rounded-2xl">
                    <h3 className="text-3xl font-bold text-white">{baker.name}</h3>
                    <p className="text-lg font-medium text-gray-200">{baker.role}</p>
                  </div>
                </div>
                
                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full transform shadow-xl rotate-y-180 backface-hidden bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center text-white">
                    <h3 className="mb-2 text-3xl font-bold">{baker.name}</h3>
                    <p className="mb-4 text-lg font-medium">{baker.role}</p>
                    <blockquote className="text-lg italic">"{baker.quote}"</blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
