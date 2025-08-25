import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const AboutPage = () => {
  // Team Members
  const team = [
    {
      name: 'Balasaheb Shelar',
      role: 'Store Manager',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'With over 30+ years in retail, he ensures quality and customer satisfaction.'
    },
  ];

  // Achievements / Stats
  const stats = [
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Clock, value: "30+", label: "Years Serving" },
    { icon: Heart, value: "100%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Amardevi General Store</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Your trusted neighborhood General store, serving the community with fresh groceries 
            and quality products since 1994.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide fresh and quality groceries at affordable prices while creating 
                a shopping experience that brings families and communities together.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that everyone deserves access to fresh, healthy food options. 
                Our commitment extends beyond just selling products – we're dedicated to 
                supporting our local community and building lasting relationships with our customers.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Community First</h3>
                  <p className="text-gray-600">Supporting local people and families</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh groceries"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-emerald-600">30+</p>
                <p className="text-gray-600">Years Serving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <IconComponent className="h-8 w-8 text-emerald-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team works tirelessly to ensure you have the best shopping 
              experience every time you visit us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product is carefully selected 
                and quality-checked before reaching our shelves.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We listen, 
                adapt, and continuously improve to serve you better.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Care</h3>
              <p className="text-gray-600">
                We believe in giving back to our community and supporting 
                local farmers and suppliers whenever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Store</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the warmth and quality that has made us a neighborhood favorite 
              for over three decades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Store interior"
              className="rounded-xl shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fresh produce section"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
