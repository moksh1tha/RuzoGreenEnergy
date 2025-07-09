import React, { useState } from 'react';
import { Calendar, User, Globe, TrendingUp, Handshake, Zap } from 'lucide-react';

const News: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Latest News</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Stay updated with our latest partnerships, innovations, and milestones 
              in renewable energy development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News - Strategic Collaboration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Breaking News
                  </span>
                  <div className="flex items-center text-gray-600 text-sm space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Latest Update</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-4 w-4" />
                      <span>Global Partnership</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Strategic Global Collaboration: Ruzo Green Energy India & Arciplug Ltd Finland
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are excited to announce a strategic global collaboration between Ruzo Green Energy India 
                  and Arciplug Ltd Finland! By leveraging Arciplug's patented technology, we are setting new 
                  standards for advanced CBG (Compressed Bio-Gas) production globally.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <span>Read Full Story</span>
                  <TrendingUp className="h-5 w-5" />
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* Detailed Article */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="space-y-8">
              <header className="text-center space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Ruzo Green Energy Partners with Arciplug Ltd for Advanced CBG Production
                </h1>
                <div className="flex justify-center items-center space-x-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>RUZO GREEN ENERGY</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Latest Update</span>
                  </div>
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This partnership will power our upcoming facility, designed to be the most advanced 
                    CBG unit in the world, and aligns with our vision to set a benchmark for innovation, 
                    sustainability, and operational excellence.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technology Leadership</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Arciplug Ltd's expertise and patented technology are instrumental in helping us realize 
                  our ambition of building a future-ready, world-class green energy asset. Together, we are 
                  not just advancing clean energy in India but also strengthening the bridge between European 
                  innovation and Indian implementation.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Timing</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This collaboration comes at a pivotal time as the Government of India and the European Union 
                  are moving closer to a landmark Free Trade Agreement, aiming to boost market access, innovation, 
                  and investment flows between our regions.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Partnership Impact</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our partnership exemplifies the spirit of this new era of EU-India cooperation, driving 
                    sustainable growth, technology transfer, and global competitiveness in the renewable energy sector.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Looking Forward</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stay tuned as we embark on this journey to redefine the CBG landscape in Asia, setting new 
                  standards for sustainable energy production and international collaboration.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Partnership Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key benefits and outcomes of this strategic collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Advanced CBG Technology',
                description: 'Leveraging Arciplug\'s patented technology for world-class biogas production.',
                highlight: 'Patented Innovation'
              },
              {
                icon: Globe,
                title: 'Global Standards',
                description: 'Setting new benchmarks for CBG production and operational excellence worldwide.',
                highlight: 'World-Class Facility'
              },
              {
                icon: Handshake,
                title: 'EU-India Bridge',
                description: 'Strengthening cooperation between European innovation and Indian implementation.',
                highlight: 'Strategic Alliance'
              }
            ].map(({ icon: Icon, title, description, highlight }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg inline-block mb-6">
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Stay Connected</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Follow our journey as we continue to innovate and lead in renewable energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowContactModal(true)}
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
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

export default News;