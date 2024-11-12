import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-amber-500" />
            <span className="text-xl font-bold">Artisan Bakery</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link 
              to="/marketplace"
              className="text-gray-700 hover:text-amber-500 transition-colors duration-300"
            >
              Marketplace
            </Link>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-amber-500 transition-colors duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}