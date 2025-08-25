import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', productId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
    }
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <ShoppingBag className="h-24 w-24 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link
              to="/products"
              className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors duration-200 inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <Link
            to="/products"
            className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {state.items.map((item) => (
                <div key={item.id} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {item.name}
                      </h3>
                      {item.selectedVariant && (
                        <p className="text-sm text-gray-500 mt-1">
                          Weight: {item.selectedVariant.weight}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                      <p className="text-lg font-bold text-emerald-600 mt-2">
                        ₹{item.price}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 mt-2 p-1 rounded transition-colors duration-200"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">
                    {state.total >= 400 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      '₹40'
                    )}
                  </span>
                </div>
                {state.total < 400 && (
                  <p className="text-sm text-gray-500">
                    Add ₹{(400 - state.total).toFixed(2)} more for free delivery
                  </p>
                )}
                {state.total < 400 && (
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                    <p className="text-sm text-yellow-800 font-medium">
                      Minimum order: ₹400 required
                    </p>
                    <p className="text-xs text-yellow-700 mt-1">
                      Add ₹{(400 - state.total).toFixed(2)} more to place your order
                    </p>
                  </div>
                )}
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{(state.total + (state.total >= 400 ? 0 : 40)).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {state.total >= 400 ? (
                <Link
                  to="/checkout"
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors duration-200 font-semibold text-center block"
                >
                  Proceed to Checkout
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-400 text-white py-3 rounded-lg cursor-not-allowed font-semibold"
                >
                  Minimum ₹400 Required
                </button>
              )}

              <p className="text-xs text-gray-500 mt-4 text-center">
                Delivery in 5-10 hours • Secure checkout powered by SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;