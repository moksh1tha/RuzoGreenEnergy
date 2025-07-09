import React, { useState } from 'react';
import { Cpu, Database, Cloud, Zap, Shield, Cog } from 'lucide-react';

const Technology: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold">Our Technology</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Cutting-edge solutions built with sustainability at their core. 
                Discover how our technology stack powers a greener future.
              </p>
            </div>
            <div className="relative">
              {/* Image Placeholder - Replace src with your image URL */}
              <div className="bg-gray-700 rounded-2xl h-96 flex items-center justify-center border-2 border-dashed border-gray-500">
                <div className="text-center space-y-2">
                  <div className="text-gray-400 text-lg font-semibold">Technology Image</div>
                  <div className="text-gray-500 text-sm">Replace with your image</div>
                </div>
              </div>
              {/* Uncomment and replace URL when you have your image:
              <img 
                src="https://ik.imagekit.io/6ilngyaqa/1752048140664-Screenshot_2025-07-08_185844_961rs9PQ2z.png" 
                alt="Technology Solutions"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive technology platform combines the latest innovations 
              with proven sustainability practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: 'AI-Powered Optimization',
                description: 'Machine learning algorithms that optimize energy consumption and reduce waste in real-time.',
                features: ['Predictive Analytics', 'Real-time Monitoring', 'Automated Optimization']
              },
              {
                icon: Database,
                title: 'Green Data Management',
                description: 'Sustainable data storage and processing solutions that minimize environmental impact.',
                features: ['Energy-Efficient Storage', 'Carbon-Neutral Hosting', 'Data Compression']
              },
              {
                icon: Cloud,
                title: 'Sustainable Cloud',
                description: 'Cloud infrastructure powered entirely by renewable energy sources.',
                features: ['100% Renewable Energy', 'Carbon Offsetting', 'Green Computing']
              },
              {
                icon: Zap,
                title: 'Smart Energy Systems',
                description: 'Intelligent power management systems that reduce energy consumption by up to 40%.',
                features: ['Load Balancing', 'Peak Shaving', 'Energy Recovery']
              },
              {
                icon: Shield,
                title: 'Secure Architecture',
                description: 'Enterprise-grade security that protects your data while maintaining eco-efficiency.',
                features: ['Zero-Trust Security', 'Encrypted Storage', 'Privacy Protection']
              },
              {
                icon: Cog,
                title: 'Automation Platform',
                description: 'Streamlined processes that reduce manual work and environmental impact.',
                features: ['Workflow Automation', 'Smart Scheduling', 'Resource Optimization']
              }
            ].map(({ icon: Icon, title, description, features }) => (
              <div key={title} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg inline-block mb-6">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 mb-6">{description}</p>
                <ul className="space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Innovation Lab</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our dedicated research and development team constantly explores new ways 
                to make technology more sustainable and efficient.
              </p>
              <div className="space-y-4">
                {[
                  'Quantum-inspired algorithms for optimization',
                  'Biodegradable hardware components',
                  'Carbon-negative data centers',
                  'Renewable energy integration'
                ].map((innovation) => (
                  <div key={innovation} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{innovation}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-2xl text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Tech Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Energy Saved', value: '2.5M kWh' },
                    { label: 'Carbon Reduced', value: '1,200 tons' },
                    { label: 'Efficiency Gain', value: '95%' },
                    { label: 'Uptime', value: '99.99%' }
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <div className="text-2xl font-bold text-green-200">{value}</div>
                      <div className="text-sm text-green-100">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Experience Our Technology</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              See how our sustainable technology solutions can transform your operations.
            </p>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
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

export default Technology;