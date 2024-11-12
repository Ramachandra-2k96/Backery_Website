import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChefHat, Wheat, Heart, Star, Instagram, ArrowRight } from 'lucide-react';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;