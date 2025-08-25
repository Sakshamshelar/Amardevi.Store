import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Star, Tag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products';
import { useSearch } from '../context/SearchContext';
import GanpatiBanner from '../components/GanpatiBanner';
import GanpatiSpecials from '../components/GanpatiSpecials';

const HomePage = () => {
  const { setSearchQuery } = useSearch();
  const featuredProducts = allProducts.filter(product => product.featured && product.category !== 'Ganpati Specials').slice(0, 4);
  const saleProducts = allProducts.filter(product => product.onSale && product.category !== 'Ganpati Specials').slice(0, 4);

  const categories = [
    { name: 'Ganpati Specials', icon: '🐘', count: allProducts.filter(p => p.category === 'Ganpati Specials').length, featured: true },
    { name: 'Wheat&Rice', icon: '🌾', count: allProducts.filter(p => p.category === 'Wheat&Rice').length },
    { name: 'Dals', icon: '🍲', count: allProducts.filter(p => p.category === 'Dals').length },   
    { name: 'Kitchen', icon: '🍲', count: allProducts.filter(p => p.category === 'Kitchen').length },
    { name: 'Masala', icon: '🌶️', count: allProducts.filter(p => p.category === 'Masala').length },
    { name: 'Tea&Coffee', icon: '☕', count: allProducts.filter(p => p.category === 'Tea&coffee').length },
    { name: 'Biscuits', icon: '🍪', count: allProducts.filter(p => p.category === 'Biscuits').length },
    { name: 'Dry Fruits', icon: '🥜', count: allProducts.filter(p => p.category === 'Dry Fruits').length }, 
    { name: 'Cleaning', icon: '🪣', count: allProducts.filter(p => p.category === 'Cleaning').length },
    { name: 'Snacks', icon: '😋', count: allProducts.filter(p => p.category === 'Snacks').length },
    { name: 'Dairy', icon: '🥛', count: allProducts.filter(p => p.category === 'Dairy').length },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Ganpati Banner */}
      <GanpatiBanner />

      {/* Ganpati Specials Section */}
      <GanpatiSpecials />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-blue-500 text-white relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 text-4xl animate-pulse">🌺</div>
          <div className="absolute top-8 right-8 text-3xl animate-bounce">✨</div>
          <div className="absolute bottom-4 right-4 text-4xl animate-pulse">🙏</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Freshness Delivered Daily
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-50">
                Your trusted neighborhood supermarket for quality groceries and everyday essentials
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/products"
                  className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/products?filter=sale"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
                >
                  View Offers
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh groceries"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fresh Quality</p>
                    <p className="text-sm text-gray-600">Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-200">
                <Truck className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free home delivery on orders above ₹400 • Delivered in 5-10 hours</p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">100% fresh and quality guaranteed products</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
              <p className="text-gray-600">Fast delivery in 5-10 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Shop by Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                onClick={() => setSearchQuery('')}
                className={`p-6 rounded-xl text-center hover:shadow-md transition-all duration-300 group ${
                  category.featured 
                    ? 'bg-gradient-to-br from-orange-100 to-red-100 border-2 border-orange-300 hover:from-orange-200 hover:to-red-200' 
                    : 'bg-white'
                }`}
              >
                <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-200 ${
                  category.featured ? 'animate-bounce' : ''
                }`}>
                  {category.icon}
                </div>
                <h3 className={`font-semibold mb-1 ${
                  category.featured ? 'text-orange-800' : 'text-gray-900'
                }`}>
                  {category.name}
                </h3>
                <p className={`text-sm ${
                  category.featured ? 'text-orange-600' : 'text-gray-600'
                }`}>
                  {category.count} items
                </p>
                {category.featured && (
                  <div className="mt-2">
                    <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded-full animate-pulse">
                      🎉 Festival Special
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link
              to="/products"
              className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center group"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Offers */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full mb-4">
              <Tag className="h-4 w-4 mr-2" />
              <span className="font-semibold">Weekly Offers</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Discounts</h2>
            <p className="text-gray-600">Don't miss out on these amazing deals!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products?filter=sale"
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 inline-flex items-center"
            >
              View All Offers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, 
            special offers, and exclusive deals.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-500 px-6 py-3 rounded-r-lg hover:bg-emerald-600 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;