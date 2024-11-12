import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const products = [
  {
    id: 1,
    name: 'Artisan Sourdough',
    description: 'Naturally fermented for 24 hours with our century-old starter',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800'
  },
  {
    id: 2,
    name: 'Butter Croissants',
    description: 'Flaky, buttery layers made with French butter',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800'
  },
  {
    id: 3,
    name: 'Chocolate Danish',
    description: 'Filled with rich Belgian chocolate and almond cream',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800'
  },
  {
    id: 4,
    name: 'Rustic Baguette',
    description: 'Traditional French recipe with crispy crust',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1568471173242-461f0a730452?auto=format&fit=crop&w=800'
  },
  {
    id: 5,
    name: 'Cinnamon Rolls',
    description: 'Soft, fluffy rolls with premium Ceylon cinnamon',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1509365390695-33acd7879a95?auto=format&fit=crop&w=800'
  },
  {
    id: 6,
    name: 'Artisan Cookies',
    description: 'Handcrafted cookies with premium ingredients',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800'
  }
];

export default function Marketplace() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOrder = () => {
    setShowSuccess(true);
    setSelectedProduct(null);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container px-4 mx-auto">
        <h1 className="mb-12 text-5xl font-extrabold text-center text-gray-800">Our Products</h1>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ScrollReveal
              key={product.id}
              animation="animate-fade-in"
              delay={index * 100}
            >
              <motion.div
                className="relative overflow-hidden bg-white shadow-lg group rounded-2xl"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <div className="overflow-hidden aspect-square">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-700 transform"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-800">{product.name}</h3>
                  <p className="mb-4 text-gray-500">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-amber-600">${product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 text-white transition-colors duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-full max-w-lg p-8 transition-transform transform bg-white shadow-xl rounded-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-800">{selectedProduct.name}</h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="object-cover w-full mb-6 rounded-lg shadow-md h-60"
              />
              
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg text-gray-600">Total:</span>
                <span className="text-3xl font-bold text-amber-600">
                  ${(selectedProduct.price * quantity).toFixed(2)}
                </span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 text-white transition-colors duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                onClick={handleOrder}
              >
                Confirm Order
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed px-8 py-4 text-lg font-semibold text-white transform -translate-x-1/2 bg-green-500 rounded-lg shadow-xl bottom-8 left-1/2"
          >
            🎉 Order Complete! Thank you for your purchase.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}