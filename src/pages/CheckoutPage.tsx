import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, CheckCircle, Smartphone, Building2, Copy } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CheckoutPage = () => {
  const { state, dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    phone: '',
    address: '',
    paymentMethod: 'cod'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [copiedField, setCopiedField] = useState('');

  // Bank Details
  const bankDetails = {
    accountName: 'Amardevi General Store',
    accountNumber: '1234567890123456',
    ifscCode: 'SBIN0001234',
    bankName: 'State Bank of India',
    branch: 'Talegaon Dabhade'
  };

  // UPI Details
  const upiDetails = {
    phonepe: '7498362762@ybl',
    googlepay: '7498362762@okaxis',
    paytm: '7498362762@paytm'
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true);
      dispatch({ type: 'CLEAR_CART' });
      setIsLoading(false);
      
      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  if (state.items.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
          <div className="text-green-500 mb-4">
            <CheckCircle className="h-16 w-16 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order. {formData.paymentMethod === 'online' ? 'Please complete the payment using the details provided. ' : ''}We'll contact you soon with delivery details.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Order ID: #ORD{Date.now()}</p>
          </div>
        </div>
      </div>
    );
  }

  const deliveryFee = state.total >= 500 ? 0 : 40;
  const finalTotal = state.total + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Delivery Information</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50"
                    readOnly={!!user?.displayName}
                    placeholder="Enter your full name"
                  />
                  {user?.displayName && (
                    <p className="text-xs text-gray-500 mt-1">Auto-filled from your Google account</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50"
                    readOnly={!!user?.email}
                    placeholder="Enter your email"
                  />
                  {user?.email && (
                    <p className="text-xs text-gray-500 mt-1">Auto-filled from your Google account</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <div className="ml-3 flex items-center">
                        <Truck className="h-5 w-5 text-gray-500 mr-2" />
                        <span>Cash on Delivery</span>
                      </div>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={formData.paymentMethod === 'online'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <div className="ml-3 flex items-center">
                        <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
                        <span>Online Payment</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 disabled:bg-gray-400 transition-colors duration-200 font-semibold"
                >
                  {isLoading ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </form>
          </div>

          {/* Payment Details - Only show when online payment is selected */}
          {formData.paymentMethod === 'online' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Details</h2>
              
              {/* UPI Payment Options */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Smartphone className="h-5 w-5 mr-2 text-blue-600" />
                  UPI Payment
                </h3>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold mr-3">
                          PhonePe
                        </div>
                        <span className="font-mono text-sm">{upiDetails.phonepe}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(upiDetails.phonepe, 'phonepe')}
                        className="text-purple-600 hover:text-purple-700 p-1"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                    {copiedField === 'phonepe' && (
                      <p className="text-green-600 text-xs mt-1">Copied to clipboard!</p>
                    )}
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold mr-3">
                          Google Pay
                        </div>
                        <span className="font-mono text-sm">{upiDetails.googlepay}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(upiDetails.googlepay, 'googlepay')}
                        className="text-blue-600 hover:text-blue-700 p-1"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                    {copiedField === 'googlepay' && (
                      <p className="text-green-600 text-xs mt-1">Copied to clipboard!</p>
                    )}
                  </div>

                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-cyan-600 text-white px-3 py-1 rounded text-sm font-semibold mr-3">
                          Paytm
                        </div>
                        <span className="font-mono text-sm">{upiDetails.paytm}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(upiDetails.paytm, 'paytm')}
                        className="text-cyan-600 hover:text-cyan-700 p-1"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                    {copiedField === 'paytm' && (
                      <p className="text-green-600 text-xs mt-1">Copied to clipboard!</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bank Transfer Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-green-600" />
                  Bank Transfer
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Account Name:</span>
                    <div className="flex items-center">
                      <span className="font-mono text-sm">{bankDetails.accountName}</span>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountName, 'accountName')}
                        className="ml-2 text-gray-600 hover:text-gray-700 p-1"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  {copiedField === 'accountName' && (
                    <p className="text-green-600 text-xs text-right">Copied!</p>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Account Number:</span>
                    <div className="flex items-center">
                      <span className="font-mono text-sm">{bankDetails.accountNumber}</span>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountNumber, 'accountNumber')}
                        className="ml-2 text-gray-600 hover:text-gray-700 p-1"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  {copiedField === 'accountNumber' && (
                    <p className="text-green-600 text-xs text-right">Copied!</p>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">IFSC Code:</span>
                    <div className="flex items-center">
                      <span className="font-mono text-sm">{bankDetails.ifscCode}</span>
                      <button
                        onClick={() => copyToClipboard(bankDetails.ifscCode, 'ifscCode')}
                        className="ml-2 text-gray-600 hover:text-gray-700 p-1"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  {copiedField === 'ifscCode' && (
                    <p className="text-green-600 text-xs text-right">Copied!</p>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Bank Name:</span>
                    <span className="font-mono text-sm">{bankDetails.bankName}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Branch:</span>
                    <span className="font-mono text-sm">{bankDetails.branch}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Payment Instructions:</strong>
                </p>
                <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                  <li>• Transfer the exact amount: ₹{finalTotal.toFixed(2)}</li>
                  <li>• Use your order ID as reference</li>
                  <li>• Send payment screenshot to WhatsApp: +91 7498362762</li>
                  <li>• Your order will be confirmed after payment verification</li>
                </ul>
              </div>
            </div>
          )}

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-semibold">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>{state.total >= 400 ? 'Free' : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery Time</span>
                  <span>5-10 hours</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {formData.paymentMethod === 'online' && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">
                    Amount to Pay: ₹{finalTotal.toFixed(2)}
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Use payment details shown on the left
                  </p>
                </div>
              )}

              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  📦 Delivery: 5-10 hours
                </p>
                <p className="text-xs text-green-700 mt-1">
                  Your order will be delivered within 5-10 hours of confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;