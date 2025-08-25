import React, { useState } from 'react';
import { ShoppingCart, Star, ChevronDown } from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants?.[0] || {
      id: `${product.id}-default`,
      weight: 'Default',
      price: product.price,
      originalPrice: product.originalPrice
    }
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      price: selectedVariant.price,
      originalPrice: selectedVariant.originalPrice
    };
    dispatch({ 
      type: 'ADD_TO_CART', 
      product: productToAdd,
      selectedVariant 
    });
  };

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    setIsDropdownOpen(false);
  };

  const currentDiscount = selectedVariant.discount || 
    (selectedVariant.originalPrice && selectedVariant.originalPrice > selectedVariant.price 
      ? Math.round(((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100)
      : null);

  return (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden ${
      product.category === 'Ganpati Specials' ? 'border-2 border-orange-200 hover:border-orange-300' : ''
    }`}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-70 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.onSale && (
          <div className="absolute top-2 left-2">
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
              SALE
            </span>
          </div>
        )}
        {currentDiscount && (
          <div className="absolute top-2 left-2">
            <span className={`text-white px-2 py-1 text-xs font-semibold rounded-full ${
              product.category === 'Ganpati Specials' ? 'bg-orange-500' : 'bg-green-500'
            }`}>
              {currentDiscount}% OFF
            </span>
          </div>
        )}
        {product.featured && (
          <div className="absolute top-2 right-2">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Weight/Size Dropdown */}
        {product.variants && product.variants.length > 1 && (
          <div className="mb-3">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-700">
                  {selectedVariant.weight}
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => handleVariantSelect(variant)}
                      className={`w-full text-left p-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                        selectedVariant.id === variant.id ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{variant.weight}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-emerald-600">
                            ₹{variant.price}
                          </span>
                          {variant.originalPrice && variant.originalPrice > variant.price && (
                            <span className="text-xs text-gray-500 line-through">
                              ₹{variant.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      {variant.discount && (
                        <div className="mt-1">
                          <span className="text-xs font-semibold text-green-600">
                            {variant.discount}% OFF
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Price Display */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-emerald-600">
              ₹{selectedVariant.price}
            </span>
            {selectedVariant.originalPrice && selectedVariant.originalPrice > selectedVariant.price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{selectedVariant.originalPrice}
              </span>
            )}
          </div>
          {currentDiscount && (
            <span className="text-xs font-semibold text-red-500">
              {currentDiscount}% OFF
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full text-white py-2 px-4 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2 ${
            product.category === 'Ganpati Specials' 
              ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' 
              : 'bg-emerald-500 hover:bg-emerald-600'
          }`}
        >
          <ShoppingCart className="h-4 w-4" />
          <span>
            {product.inStock 
              ? (product.category === 'Ganpati Specials' ? '🛍️ Add to Cart' : 'Add to Cart')
              : 'Out of Stock'
            }
          </span>
        </button>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;