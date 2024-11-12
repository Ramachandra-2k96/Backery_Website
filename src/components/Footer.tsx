import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>123 Bakery Street<br />New York, NY 10001</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="w-5 h-5" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5" />
              <p>hello@artisanbakery.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Hours</h3>
            <p className="mb-2">Mon - Fri: 7am - 7pm</p>
            <p className="mb-2">Saturday: 8am - 8pm</p>
            <p>Sunday: 8am - 6pm</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
            <p className="mb-4">Subscribe for updates and special offers</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-white/10 focus:bg-white/20 transition-colors duration-300 outline-none flex-grow"
              />
              <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors duration-300">
                Join
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p>&copy; 2024 Artisan Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}