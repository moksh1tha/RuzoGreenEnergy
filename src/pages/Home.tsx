import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Zap, Shield, Globe, Heart, Lightbulb, Users } from 'lucide-react';

const Home: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Renewable
                <span className="block text-green-200">Energy</span>
                Solutions
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                RUZO GREEN ENERGY is pioneering the future of renewable energy, creating solutions 
                that drive environmental progress while delivering exceptional value for businesses and communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/technology" className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-300/20 to-green-400/30 rounded-3xl p-8 backdrop-blur-sm border border-green-300/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Leaf, label: 'Eco-Friendly', value: '100%' },
                    { icon: Zap, label: 'Energy Efficient', value: '95%' },
                    { icon: Shield, label: 'Secure', value: '99.9%' },
                    { icon: Globe, label: 'Global Impact', value: '50+' }
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center space-y-2">
                      <div className="bg-green-400/20 p-4 rounded-full inline-block">
                        <Icon className="h-8 w-8 text-green-200" />
                      </div>
                      <div className="text-2xl font-bold text-green-200">{value}</div>
                      <div className="text-sm text-gray-300">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Advanced Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive technology platform combines AI, satellite monitoring, and blockchain 
              to deliver unprecedented efficiency in renewable energy solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'AI-Powered Optimization',
                description: 'Machine learning algorithms that optimize energy consumption and reduce waste in real-time.',
                highlight: '40% Energy Savings'
              },
              {
                icon: Globe,
                title: 'Satellite Monitoring',
                description: 'NASA-grade satellite technology with 0.5 ppm CO₂ precision for accurate environmental monitoring.',
                highlight: '0.5 ppm Precision'
              },
              {
                icon: Shield,
                title: 'Blockchain Security',
                description: 'Enterprise-grade security with blockchain transparency for all energy transactions.',
                highlight: '99.9% Uptime'
              }
            ].map(({ icon: Icon, title, description, highlight }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-green-400 to-green-500 p-3 rounded-lg inline-block mb-6">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Environmental Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable results in our mission to create technology that heals the planet 
              and drives sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Carbon Reduced',
                value: '1,200 tons',
                description: 'CO₂ emissions prevented'
              },
              {
                icon: Zap,
                title: 'Clean Energy',
                value: '2.5M kWh',
                description: 'Renewable energy generated'
              },
              {
                icon: Globe,
                title: 'Projects Active',
                value: '50+',
                description: 'Sustainable initiatives worldwide'
              },
              {
                icon: Shield,
                title: 'Efficiency Gain',
                value: '95%',
                description: 'System optimization achieved'
              }
            ].map(({ icon: Icon, title, value, description }) => (
              <div key={title} className="text-center space-y-4">
                <div className="bg-gradient-to-br from-green-400 to-green-500 p-4 rounded-full inline-block">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{value}</div>
                <div className="font-semibold text-gray-900">{title}</div>
                <div className="text-sm text-gray-600">{description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VerdeX Platform Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                Introducing VerdeX
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                India's First AI-Driven Carbon Credit Platform
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                VerdeX integrates satellite monitoring, blockchain, and predictive analytics 
                to deliver fast, transparent, and cost-effective carbon offset solutions.
              </p>
              <div className="space-y-4">
                {[
                  '60-day verification vs 6-12 months industry standard',
                  '1% platform fee - lowest in the industry',
                  '97% accuracy with AI-powered verification',
                  'NASA-grade satellite monitoring with 0.5 ppm precision'
                ].map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/careers" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block">
                Learn More About VerdeX
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Platform Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Verification Time', value: '60 Days' },
                    { label: 'Platform Fee', value: '1%' },
                    { label: 'AI Accuracy', value: '97%' },
                    { label: 'CO₂ Precision', value: '0.5 ppm' }
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <div className="text-2xl font-bold text-green-600">{value}</div>
                      <div className="text-sm text-gray-600">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build the future of renewable energy with passionate innovators 
              who are changing the world for the better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Purpose-Driven',
                description: 'Every project contributes to environmental sustainability and positive change.'
              },
              {
                icon: Lightbulb,
                title: 'Innovation First',
                description: 'Work with cutting-edge technology and contribute to breakthrough solutions.'
              },
              {
                icon: Users,
                title: 'Collaborative Team',
                description: 'Join diverse, talented teams that support each other\'s growth and success.'
              },
              {
                icon: Globe,
                title: 'Global Impact',
                description: 'See your work create positive change across communities worldwide.'
              }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center space-y-4">
                <div className="bg-gradient-to-br from-green-400 to-green-500 p-4 rounded-full inline-block">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              We're not hiring right now, but we're always excited to connect with passionate individuals.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Join Our Talent Network
            </button>
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
                <div className="bg-gradient-to-br from-green-400 to-green-500 p-3 rounded-lg inline-block mb-6">
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
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Join thousands of companies already using RUZO GREEN ENERGY to create a more sustainable future.
            </p>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get Started Today
            </button>
            <div className="text-sm text-green-100 space-y-1 mt-8">
              <p>Contact us: ceo@ruzogreenenergy.com</p>
              <p>Phone: +91 99568 14433 | Mobile: +91 94736 76618</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowContactModal(false)}>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>ceo@ruzogreenenergy.com</p>
                </div>
                <div>
                  <p className="font-semibold">Telephone:</p>
                  <p>+91 99568 14433</p>
                </div>
                <div>
                  <p className="font-semibold">Mobile:</p>
                  <p>+91 94736 76618</p>
                </div>
              </div>
              <button 
                onClick={() => setShowContactModal(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;