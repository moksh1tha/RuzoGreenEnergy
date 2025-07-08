import React from 'react';
import { Satellite, Shield, Zap, Clock, DollarSign, CheckCircle, Globe, TrendingUp, Users, Award } from 'lucide-react';

const Verdex: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-gray-300 text-sm font-semibold mb-4">
              A Ruzo Green Energy Initiative
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">VerdeX</h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              India's first AI-driven carbon credit platform that integrates satellite monitoring, 
              blockchain, and predictive analytics to deliver fast, transparent, and cost-effective 
              carbon offset solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: '60-Day Verification',
                subtitle: 'vs 6-12 months industry standard',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: DollarSign,
                title: '1% Platform Fee',
                subtitle: 'Lowest in the industry',
                color: 'from-gray-800 to-black'
              },
              {
                icon: Zap,
                title: '97% Accuracy',
                subtitle: 'AI-powered verification',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Satellite,
                title: '0.5 ppm Precision',
                subtitle: 'NASA-grade monitoring',
                color: 'from-orange-500 to-orange-600'
              }
            ].map(({ icon: Icon, title, subtitle, color }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-br ${color} p-3 rounded-lg inline-block mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced technology stack delivering unprecedented speed, accuracy, and transparency 
              in carbon credit verification and trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Satellite,
                title: 'NASA-grade Satellite Monitoring',
                description: 'Advanced satellite technology with 0.5 ppm CO₂ precision for accurate carbon measurement and monitoring.',
                features: ['Real-time monitoring', 'High-resolution imaging', 'Global coverage']
              },
              {
                icon: Shield,
                title: 'Blockchain-based Tokenization',
                description: 'ERC-1155 standard tokenization ensuring full traceability and eliminating double-counting risks.',
                features: ['Immutable records', 'Smart contracts', 'Full transparency']
              },
              {
                icon: Zap,
                title: 'AI-powered Verification',
                description: 'Machine learning algorithms delivering 97% accuracy in emission verification and prediction.',
                features: ['Predictive analytics', 'Automated processing', 'Continuous learning']
              },
              {
                icon: Globe,
                title: 'Hybrid Verification System',
                description: 'Comprehensive verification combining satellite data, IoT sensors, and onsite audits.',
                features: ['Multi-source validation', 'IoT integration', 'Field verification']
              }
            ].map(({ icon: Icon, title, description, features }) => (
              <div key={title} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-gray-800 to-black p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                    <ul className="space-y-2">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-black mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VerdeX Stands Out */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why VerdeX Stands Out</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revolutionary approach to carbon credit verification and trading that transforms 
              the industry standard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: '80% Faster Verification',
                description: 'Reduces verification time from 6-12 months to just 60 days through AI and satellite technology.',
                highlight: '80% Time Reduction'
              },
              {
                icon: DollarSign,
                title: 'Lowest Transaction Fees',
                description: 'Industry-leading 1% platform fee ensures maximum value for your carbon credit investments.',
                highlight: '1% Platform Fee'
              },
              {
                icon: Shield,
                title: 'Blockchain Transparency',
                description: 'Eliminates double-counting risks through immutable blockchain records and smart contracts.',
                highlight: 'Zero Double-Counting'
              }
            ].map(({ icon: Icon, title, description, highlight }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-full inline-block mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  {highlight}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Market Coverage</h3>
              <p className="text-lg text-gray-600">
                Unlike traditional platforms, VerdeX supports both compliance and voluntary markets—ensuring 
                maximum flexibility and faster ROI for businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-semibold">
                  Compliance Markets
                </div>
                <div className="bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold">
                  Voluntary Markets
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple, secure, and transparent process from registration to compliance reporting.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Register & KYC',
                description: 'Users onboard through our secure platform and link their bank accounts for seamless transactions.',
                icon: Users
              },
              {
                step: '02',
                title: '60-Day Credit Verification',
                description: 'Our AI systems, satellite monitoring, and IoT sensors verify carbon credits in just 60 days.',
                icon: Satellite
              },
              {
                step: '03',
                title: 'Blockchain Tokenization',
                description: 'Verified credits are converted to secure digital tokens using ERC-1155 standard for full traceability.',
                icon: Shield
              },
              {
                step: '04',
                title: 'Buy/Sell Transactions',
                description: 'Escrow-backed trading system ensures secure settlement and transparent pricing.',
                icon: DollarSign
              },
              {
                step: '05',
                title: 'Compliance & Reporting',
                description: 'Automatic updates sent to regulatory authorities and recorded on blockchain for audit trails.',
                icon: Award
              }
            ].map(({ step, title, description, icon: Icon }, index) => (
              <div key={step} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-800 to-black text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg">
                    {step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white p-3 rounded-lg shadow-md">
                        <Icon className="h-6 w-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {index < 4 && (
                  <div className="absolute left-8 mt-16 w-0.5 h-8 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Enterprise Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              VerdeX helps enterprises meet CCTS compliance, achieve ESG goals, and accelerate 
              their net-zero transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'CCTS Compliance',
                description: 'Meet regulatory requirements with verified, traceable carbon credits.',
                benefits: ['Regulatory compliance', 'Audit-ready documentation', 'Real-time reporting']
              },
              {
                title: 'ESG Goals Achievement',
                description: 'Accelerate your environmental, social, and governance objectives.',
                benefits: ['Sustainability metrics', 'Impact measurement', 'Stakeholder reporting']
              },
              {
                title: 'Net-Zero Transition',
                description: 'Fast-track your journey to carbon neutrality and beyond.',
                benefits: ['Carbon offsetting', 'Emission reduction', 'Future-ready solutions']
              }
            ].map(({ title, description, benefits }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 mb-6">{description}</p>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-black mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Ready to Transform Your Carbon Strategy?</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join the future of carbon credit trading with VerdeX. Fast, transparent, 
              and cost-effective solutions for your sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="text-sm text-gray-300 space-y-1 mt-8">
              <p>Contact us: ceo@ruzogreenenergy.com</p>
              <p>Phone: +91 99568 14433 | Mobile: +91 94736 76618</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verdex;