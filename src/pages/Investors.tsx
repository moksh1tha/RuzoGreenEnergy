import React from 'react';
import { TrendingUp, DollarSign, Users, Target, BarChart, PieChart } from 'lucide-react';

const Investors: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Investor Relations</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover investment opportunities in sustainable technology. 
              Join us in building the future while generating strong returns.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Financial Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strong performance driven by sustainable innovation and market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Revenue Growth',
                value: '147%',
                period: 'YoY',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: DollarSign,
                title: 'Annual Revenue',
                value: '$2.8B',
                period: '2024',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                title: 'Active Customers',
                value: '50K+',
                period: 'Global',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Target,
                title: 'Market Share',
                value: '23%',
                period: 'Sustainable Tech',
                color: 'from-orange-500 to-orange-600'
              }
            ].map(({ icon: Icon, title, value, period, color }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`bg-gradient-to-br ${color} p-3 rounded-lg inline-block mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
                <div className="text-lg font-semibold text-gray-900">{title}</div>
                <div className="text-sm text-gray-600">{period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Investment Thesis</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Verdex represents a compelling investment opportunity at the intersection 
                of sustainability and technology innovation.
              </p>
              <div className="space-y-4">
                {[
                  'Market-leading position in $500B sustainable tech market',
                  'Proprietary technology with strong IP portfolio',
                  'Recurring revenue model with 95% customer retention',
                  'ESG-compliant investment aligned with global trends'
                ].map((point) => (
                  <div key={point} className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Growth Drivers</h3>
              <div className="space-y-6">
                {[
                  { metric: 'Market Expansion', progress: 85 },
                  { metric: 'Product Innovation', progress: 92 },
                  { metric: 'Customer Acquisition', progress: 78 },
                  { metric: 'Operational Efficiency', progress: 96 }
                ].map(({ metric, progress }) => (
                  <div key={metric}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{metric}</span>
                      <span className="text-sm text-gray-600">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Financial Reports</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access our latest financial information and investor resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart,
                title: 'Annual Report 2024',
                description: 'Comprehensive overview of our financial performance and strategic initiatives.',
                date: 'March 2024'
              },
              {
                icon: PieChart,
                title: 'Q4 2024 Earnings',
                description: 'Quarterly financial results and management commentary.',
                date: 'January 2024'
              },
              {
                icon: TrendingUp,
                title: 'Investor Presentation',
                description: 'Latest investor deck with market outlook and growth strategy.',
                date: 'February 2024'
              }
            ].map(({ icon: Icon, title, description, date }) => (
              <div key={title} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{date}</span>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Ready to Invest in the Future?</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Join leading institutional investors who are backing sustainable technology innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Contact Investor Relations
              </button>
              <div className="text-center text-green-100 text-sm mt-4">
                <p>Email: ceo@ruzogreenenergy.com</p>
                <p>Phone: +91 99568 14433 | Mobile: +91 94736 76618</p>
              </div>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;