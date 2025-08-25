import React from 'react';
import { Store, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg animate-pulse">
                <div className="flex items-center">
                  <span className="text-white text-lg mr-1">🐘</span>
                  <Store className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold">Amardevi</span>
                <span className="text-sm text-orange-400 block -mt-1 font-medium">GenralStore 🙏</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              🌺 Your trusted neighborhood supermarket providing fresh groceries, 
              quality products, and exceptional service since 1995. 
              Celebrating festivals with divine blessings! 🌺
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Products</a></li>
              <li><a href="/products?filter=sale" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Offers</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Talegaon Dabhade,410507<br />
                  
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">+91 9767010787</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">info@amardevisupermarket.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Amardevi Supermarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;