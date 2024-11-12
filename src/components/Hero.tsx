import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/476716446.sd.mp4?s=67d1b31b3d8965d484e3359d0c39b6a8c3e4c925&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <div className="flex items-center justify-center mb-6">
          <ChefHat className="w-12 h-12 animate-bounce" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block animate-slide-up">Indulge in</span>
          <span className="block animate-slide-up delay-150">Freshness,</span>
          <span className="block animate-slide-up delay-300">Baked Daily</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-500 max-w-2xl mx-auto">
          Experience artisanal perfection in every bite. Our master bakers craft each piece with passion and precision.
        </p>
        <button 
          onClick={() => navigate('/marketplace')}
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in delay-700"
        >
          Order Now
        </button>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150"
            alt=""
            className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full object-cover animate-float"
          />
          <img
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=150"
            alt=""
            className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full object-cover animate-float delay-1000"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
}