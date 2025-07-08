import React from 'react';
import { ArrowRight, Leaf, Zap, Shield, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Renewable
                <span className="block text-green-400">Energy</span>
                Solutions
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                RUZO GREEN ENERGY is pioneering the future of renewable energy, creating solutions 
                that drive environmental progress while delivering exceptional value for businesses and communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400/20 to-green-600/30 rounded-3xl p-8 backdrop-blur-sm border border-green-400/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Leaf, label: 'Eco-Friendly', value: '100%' },
                    { icon: Zap, label: 'Energy Efficient', value: '95%' },
                    { icon: Shield, label: 'Secure', value: '99.9%' },
                    { icon: Globe, label: 'Global Impact', value: '50+' }
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center space-y-2">
                      <div className="bg-green-500/20 p-4 rounded-full inline-block">
                        <Icon className="h-8 w-8 text-green-400" />
                      </div>
                      <div className="text-2xl font-bold text-green-400">{value}</div>
                      <div className="text-sm text-gray-300">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose RUZO GREEN ENERGY?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge renewable energy technology with environmental responsibility 
              to create solutions that benefit both your business and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Sustainable Technology',
                description: 'Our solutions are designed with environmental impact in mind, using renewable resources and eco-friendly processes.'
              },
              {
                icon: Zap,
                title: 'High Performance',
                description: 'Experience exceptional performance without compromising on sustainability. Our technology delivers results.'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Built with security-first principles, our solutions protect your data and operations with advanced encryption.'
              }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg inline-block mb-6">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Join thousands of companies already using RUZO GREEN ENERGY to create a more sustainable future.
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;