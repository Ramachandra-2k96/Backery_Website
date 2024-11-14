import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white bg-amber-900">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <h3 className="mb-6 text-2xl font-bold">Visit Us</h3>
            <div className="flex gap-4 items-start mb-4">
              <MapPin className="flex-shrink-0 mt-1 w-5 h-5" />
              <p>Katpadi, Near NH 66<br />Udupi, Karnataka 576226</p>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <Phone className="w-5 h-5" />
              <p>8877669900</p>
            </div>
            <div className="flex gap-4 items-center">
              <Mail className="w-5 h-5" />
              <p>hello@artisanbakery.com</p>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold">Hours</h3>
            <p className="mb-2">Mon - Fri: 7am - 7pm</p>
            <p className="mb-2">Saturday: 8am - 8pm</p>
            <p>Sunday: 8am - 6pm</p>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold">Newsletter</h3>
            <p className="mb-4">Subscribe for updates and special offers</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-lg transition-colors duration-300 outline-none bg-white/10 focus:bg-white/20"
              />
              <button className="px-6 py-2 bg-amber-500 rounded-lg transition-colors duration-300 hover:bg-amber-600">
                Join
              </button>
            </form>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="transition-colors duration-300 hover:text-amber-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-amber-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-amber-500">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center border-t border-white/20">
          <p>&copy; 2024 Artisan Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}