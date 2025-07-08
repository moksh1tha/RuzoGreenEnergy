import React from 'react';
import { Leaf, Users, Award, Target } from 'lucide-react';

const Verdex: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">About RUZO GREEN ENERGY</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Founded on the principle that renewable energy should be accessible to all. 
              We're building the clean energy solutions of tomorrow, today.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To revolutionize how businesses and communities approach energy by creating innovative, 
                renewable energy solutions that drive growth while protecting our planet for future generations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that environmental responsibility and business success go hand in hand. 
                Our team of experts works tirelessly to develop renewable energy solutions that prove this philosophy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Leaf, title: 'Environmental Focus', value: '100%' },
                { icon: Users, title: 'Global Team', value: '500+' },
                { icon: Award, title: 'Awards Won', value: '25+' },
                { icon: Target, title: 'Carbon Neutral', value: '2020' }
              ].map(({ icon: Icon, title, value }) => (
                <div key={title} className="bg-gray-50 p-6 rounded-xl text-center space-y-3">
                  <div className="bg-green-500 p-3 rounded-lg inline-block">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-600">{title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our approach to sustainable innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sustainability First',
                description: 'Every decision we make considers its environmental impact. We\'re committed to creating technology that heals rather than harms.'
              },
              {
                title: 'Innovation Excellence',
                description: 'We push the boundaries of what\'s possible, combining creativity with technical expertise to solve complex challenges.'
              },
              {
                title: 'Transparent Partnership',
                description: 'We build trust through honest communication, reliable delivery, and genuine partnership with our clients and communities.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Join Our Mission</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Be part of the sustainable technology revolution. Let's build a better future together.
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verdex;