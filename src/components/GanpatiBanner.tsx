import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const GanpatiBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 text-6xl animate-pulse">🕉️</div>
        <div className="absolute top-8 right-8 text-4xl animate-bounce">🌺</div>
        <div className="absolute bottom-4 left-8 text-5xl animate-pulse">🪔</div>
        <div className="absolute bottom-8 right-4 text-3xl animate-bounce">✨</div>
        <div className="absolute top-1/2 left-1/4 text-4xl animate-pulse">🙏</div>
        <div className="absolute top-1/3 right-1/3 text-5xl animate-bounce">🐘</div>
      </div>

      {/* Animated Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              🐘 गणपति बाप्पा मोरया! 🐘
            </h1>
            <div className="flex items-center justify-center space-x-4 text-2xl md:text-3xl font-semibold">
              <Sparkles className="h-8 w-8 text-yellow-300 animate-spin" />
              <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                Happy Ganesh Chaturthi from Amardevi Store!
                Start Making Your List for this Divine Festival!!
              </span>
              <Sparkles className="h-8 w-8 text-yellow-300 animate-spin" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
            🌺 Celebrate the divine festival with our special collection of pooja essentials, 
            fresh ingredients for modaks, and festive decorations! 🌺
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/products?category=Ganpati%20Specials"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2 group"
            >
              <span>🛍️ Shop Ganpati Specials</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <div className="text-center">
              <div className="text-yellow-200 font-semibold text-lg">🎉 Special Festival Offers! 🎉</div>
              <div className="text-orange-200 text-sm">Up to 20% OFF on Pooja Items</div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-8 text-3xl">
            <div className="animate-bounce">🪔</div>
            <div className="animate-pulse">🌸</div>
            <div className="animate-bounce">🕉️</div>
            <div className="animate-pulse">🌺</div>
            <div className="animate-bounce">🪔</div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default GanpatiBanner;