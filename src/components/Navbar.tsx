import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Store, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { state } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();
  const { user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Offers', path: '/products?filter=sale' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/products?filter=sale') {
      return location.pathname === '/products' && location.search === '?filter=sale';
    }
    return location.pathname === path;
  };

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-200 animate-pulse">
              <div className="flex items-center">
                <span className="text-white text-lg mr-1">🐘</span>
                <Store className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Amardevi</span>
              <span className="text-sm text-orange-600 block -mt-1 font-medium">GenralStore 🙏</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path) ? 'text-emerald-600 bg-emerald-50' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-64"
              />
              <button type="submit" className="sr-only">Search</button>
            </form>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            {/* User Authentication */}
            {loading ? (
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            ) : user ? (
              <UserMenu />
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <User className="h-5 w-5" />
                <span className="hidden md:block text-sm font-medium">Sign In</span>
              </button>
            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative mx-3 mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-full"
              />
              <button type="submit" className="sr-only">Search</button>
            </form>

            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path) 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;