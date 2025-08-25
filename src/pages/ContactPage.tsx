import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-green-100">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products, services, or need assistance? 
              We're here to help! Reach out to us through any of the following channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Market Street<br />
                    New Delhi, 110001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 7498362762</p>
                  <p className="text-gray-600">+91 7498362762</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">amardevigenralstore@gamil.com</p>
                  <p className="text-gray-600">amardevigenralstore@gamil.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Store Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Saturday: 8:00 AM - 10:00 PM</p>
                    <p>Closed:15th and 30th of every month</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 h-64 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">Talegaon Dabhade</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm">Orders are delivered within 5-10 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 disabled:bg-gray-400 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              * Required fields. We'll never share your information with third parties.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer home delivery?</h3>
              <p className="text-gray-600 mb-4">
                Yes! We offer free home delivery on orders above ₹400. Delivery takes 5-10 hours.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">What are your payment methods?</h3>
              <p className="text-gray-600 mb-4">
                We accept cash on delivery (COD) and online payments including 
                UPI, credit/debit cards, and digital wallets.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Can I return products?</h3>
              <p className="text-gray-600">
                We don't have any return policy.
                For more details contact us.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How fresh are your products?</h3>
              <p className="text-gray-600 mb-4">
                We receive fresh produce daily from trusted suppliers. 
                Our motto is "Freshness Delivered Daily!"
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Do you have a loyalty program?</h3>
              <p className="text-gray-600 mb-4">
                Yes! We offer special discounts and early access to sales for 
                our regular customers. Ask our staff for details.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Can I place bulk orders?</h3>
              <p className="text-gray-600">
                Absolutely! We offer special pricing for bulk orders. 
                Contact us directly to discuss your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;