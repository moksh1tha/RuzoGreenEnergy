import React from 'react';
import { TrendingUp } from 'lucide-react';

const Investors: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Investor Relations</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Investment updates and funding milestones for RUZO GREEN ENERGY.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Seed Announcement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-16 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-full inline-block">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  RUZO GREEN ENERGY HAS RAISED PRE SEED ROUND
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We're excited to announce the successful completion of our pre-seed funding round, 
                    marking a significant milestone in our journey to revolutionize renewable energy solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Investor Inquiries</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              For more information about investment opportunities and company updates.
            </p>
            <div className="space-y-2 text-green-100">
              <p>Email: ceo@ruzogreenenergy.com</p>
              <p>Telephone: +91 99568 14433</p>
              <p>Mobile: +91 94736 76618</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;