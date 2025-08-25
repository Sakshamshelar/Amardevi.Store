import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from './ProductCard';
import { ganpatiProducts } from '../data/products';

const GanpatiSpecials = () => {
  const featuredGanpatiProducts = ganpatiProducts.slice(0, 4);

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl animate-pulse">🕉️</div>
        <div className="absolute top-20 right-20 text-6xl animate-bounce">🌺</div>
        <div className="absolute bottom-20 left-20 text-7xl animate-pulse">🪔</div>
        <div className="absolute bottom-10 right-10 text-5xl animate-bounce">🐘</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Star className="h-5 w-5 mr-2 animate-spin" />
            <span className="font-bold text-lg">🐘 Ganpati Specials 🐘</span>
            <Star className="h-5 w-5 ml-2 animate-spin" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Divine Collection for Bappa
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            🌺 Everything you need for a blessed Ganesh Chaturthi celebration - 
            from modak ingredients to pooja essentials! 🌺
          </p>

          {/* Festive Decorative Border */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
            <div className="text-2xl animate-pulse">🙏</div>
            <div className="h-1 w-32 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full"></div>
            <div className="text-2xl animate-bounce">🌸</div>
            <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredGanpatiProducts.map((product) => (
            <div key={product.id} className="transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                {/* Festive Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-xl blur opacity-25"></div>
                <div className="relative">
                  <ProductCard product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border-4 border-gradient-to-r from-orange-200 to-red-200">
            <div className="text-3xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Our Complete Ganpati Collection
            </h3>
            <p className="text-gray-600 mb-6">
              Discover more pooja essentials, fresh ingredients, and festive decorations 
              to make your Ganesh Chaturthi celebration truly special!
            </p>
            
            <Link
              to="/products?category=Ganpati%20Specials"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              <span>🛍️ View All Ganpati Products</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Special Offer Badge */}
            <div className="mt-6 inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
              <span className="animate-pulse mr-2">⚡</span>
              Limited Time: Free Delivery on Ganpati Orders Above ₹400!
              <span className="animate-pulse ml-2">⚡</span>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-8 text-4xl">
          <div className="animate-bounce">🪔</div>
          <div className="animate-pulse">🌸</div>
          <div className="animate-bounce">🕉️</div>
          <div className="animate-pulse">🌺</div>
          <div className="animate-bounce">🪔</div>
        </div>
      </div>
    </section>
  );
};

export default GanpatiSpecials;