import React from 'react';
import { Calendar, User, Tag, ArrowRight, TrendingUp } from 'lucide-react';

const News: React.FC = () => {
  const featuredNews = {
    title: 'Verdex Announces $500M Series C Funding for Global Expansion',
    excerpt: 'Leading venture capital firms invest in our mission to accelerate sustainable technology adoption worldwide.',
    date: '2024-03-15',
    author: 'Sarah Chen',
    category: 'Funding',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  };

  const newsArticles = [
    {
      title: 'Revolutionary AI Algorithm Reduces Energy Consumption by 40%',
      excerpt: 'Our latest machine learning breakthrough optimizes energy usage across data centers worldwide.',
      date: '2024-03-10',
      author: 'Dr. Michael Rodriguez',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      title: 'Partnership with Global Fortune 500 Companies',
      excerpt: 'Strategic alliances formed to implement sustainable technology solutions at enterprise scale.',
      date: '2024-03-05',
      author: 'Jennifer Park',
      category: 'Partnerships',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      title: 'Carbon Negative Achievement: Milestone Reached',
      excerpt: 'Verdex becomes the first tech company to achieve verified carbon negative status across all operations.',
      date: '2024-02-28',
      author: 'Alex Thompson',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/9324304/pexels-photo-9324304.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      title: 'New R&D Facility Opens in Copenhagen',
      excerpt: 'State-of-the-art research center focuses on renewable energy integration and smart grid technology.',
      date: '2024-02-20',
      author: 'Emma Nielsen',
      category: 'Company',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      title: 'Industry Recognition: Green Tech Innovation Award',
      excerpt: 'Verdex receives prestigious award for outstanding contribution to sustainable technology development.',
      date: '2024-02-15',
      author: 'David Kim',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      title: 'Open Source Initiative: Green Development Tools',
      excerpt: 'Launching comprehensive toolkit to help developers build more environmentally conscious applications.',
      date: '2024-02-10',
      author: 'Lisa Chang',
      category: 'Open Source',
      image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">News & Updates</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Stay informed about our latest innovations, partnerships, and impact 
              in sustainable technology development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <div className="flex items-center text-gray-600 text-sm space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>March 15, 2024</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredNews.author}</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {featuredNews.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <span>Read Full Story</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <div className="relative">
                <img 
                  src={featuredNews.image}
                  alt="Featured news"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>Trending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our recent achievements, partnerships, and innovations in sustainable technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      article.category === 'Technology' ? 'bg-blue-100 text-blue-800' :
                      article.category === 'Sustainability' ? 'bg-green-100 text-green-800' :
                      article.category === 'Partnerships' ? 'bg-purple-100 text-purple-800' :
                      article.category === 'Awards' ? 'bg-yellow-100 text-yellow-800' :
                      article.category === 'Company' ? 'bg-gray-100 text-gray-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Stay Updated</h2>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest news, insights, and updates 
                from the world of sustainable technology.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-r-lg font-semibold transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <div className="text-sm text-green-200 space-y-1">
                <p>Contact us: ceo@ruzogreenenergy.com</p>
                <p>Phone: +91 99568 14433 | Mobile: +91 94736 76618</p>
              </div>
              <p className="text-sm text-green-200">
                Join 10,000+ professionals already receiving our updates
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;