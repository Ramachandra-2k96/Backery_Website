import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex overflow-hidden relative justify-center items-center h-screen">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source
            src="https://videos.pexels.com/video-files/13078815/13078815-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative px-4 text-center text-white">
        <div className="flex justify-center items-center mb-6">
          <ChefHat className="w-12 h-12 animate-bounce" />
        </div>
        <h1 className="mb-6 text-5xl font-bold md:text-7xl animate-fade-in">
          <span className="block animate-slide-up">Indulge in</span>
          <span className="block delay-150 animate-slide-up">Freshness,</span>
          <span className="block delay-300 animate-slide-up">Baked Daily</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl delay-500 md:text-2xl animate-fade-in">
          Experience artisanal perfection in every bite. Our master bakers craft each piece with passion and precision.
        </p>
        <button 
          onClick={() => navigate('/marketplace')}
          className="px-8 py-4 text-lg font-semibold text-white bg-amber-500 rounded-full transition-all duration-300 delay-700 transform hover:bg-amber-600 hover:scale-105 hover:shadow-xl animate-fade-in"
        >
          Order Now
        </button>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150"
            alt=""
            className="object-cover absolute top-1/4 left-1/4 w-16 h-16 rounded-full animate-float"
          />
          <img
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=150"
            alt=""
            className="object-cover absolute right-1/4 bottom-1/4 w-20 h-20 rounded-full delay-1000 animate-float"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 animate-bounce transform -translate-x-1/2">
        <div className="flex justify-center items-center w-8 h-12 rounded-full border-2 border-white">
          <div className="w-2 h-2 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
}