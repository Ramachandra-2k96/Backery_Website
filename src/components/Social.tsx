import React from 'react';
import { Instagram, Heart } from 'lucide-react';

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600',
    likes: 234,
    caption: 'Fresh out of the oven! 🥖✨'
  },
  {
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=600',
    likes: 456,
    caption: 'Morning perfection ☕️🥐'
  },
  {
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=600',
    likes: 789,
    caption: 'Weekend treats! 🍪❤️'
  },
  {
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600',
    likes: 321,
    caption: 'Buttery goodness 🥐✨'
  }
];

export default function Social() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-16">
          <Instagram className="w-8 h-8" />
          <h2 className="text-4xl font-bold text-center">Follow Our Journey</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 fill-current" />
                    <span>{post.likes}</span>
                  </div>
                  <p className="text-center">{post.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}