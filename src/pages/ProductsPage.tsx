import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, SortAsc, Search, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { allProducts, categories } from '../data/products';
import { Product } from '../types';
import { useSearch } from '../context/SearchContext';

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useSearch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    const filterParam = searchParams.get('filter');
    const searchParam = searchParams.get('search');

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else if (filterParam === 'sale') {
      setSelectedCategory('Sale');
    }

    if (searchParam) {
      setSearchQuery(searchParam);
      setLocalSearchQuery(searchParam);
    }
  }, [location.search]);

  useEffect(() => {
    let filtered = [...allProducts];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (selectedCategory === 'Sale' && !searchQuery.trim()) {
      filtered = filtered.filter(product => product.onSale);
    } else if (selectedCategory !== 'All' && !searchQuery.trim()) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy, searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
    setLocalSearchQuery('');
    setSelectedCategory('All');
  };

  const categoryOptions = [...categories, 'Sale'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {searchQuery.trim() ? `Search Results for "${searchQuery}"` :
               selectedCategory === 'All' ? 'All Products' : 
               selectedCategory === 'Sale' ? 'Special Offers' : 
               selectedCategory}
            </h1>
            {searchQuery.trim() && (
              <button
                onClick={clearSearch}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <X className="h-4 w-4" />
                <span>Clear Search</span>
              </button>
            )}
          </div>
          <p className="text-gray-600">
            Showing {filteredProducts.length} products
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Category Filter */}
            <div className="w-full lg:w-auto">
              {!searchQuery.trim() ? (
                <div className="flex flex-wrap gap-2">
                  {categoryOptions.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Search className="h-4 w-4" />
                  <span>Search results are shown below</span>
                </div>
              )}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <SortAsc className="h-5 w-5 text-gray-500" />
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              {searchQuery.trim() ? (
                <Search className="h-12 w-12 mx-auto" />
              ) : (
                <Filter className="h-12 w-12 mx-auto" />
              )}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchQuery.trim() ? 'No products found for your search' : 'No products found'}
            </h3>
            <p className="text-gray-600">
              {searchQuery.trim() 
                ? 'Try searching with different keywords or browse all products.'
                : 'Try adjusting your filters or browse all products.'
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setLocalSearchQuery('');
                setSelectedCategory('All');
                setSortBy('name');
              }}
              className="mt-4 bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
            >
              {searchQuery.trim() ? 'Clear Search & Browse All' : 'Reset Filters'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;