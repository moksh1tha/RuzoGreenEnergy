import React from 'react';
import { Users, Heart, Lightbulb, Globe, MapPin, Clock, DollarSign } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Join Our Team</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Build the future of sustainable technology with passionate innovators 
              who are changing the world for the better.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Verdex?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More than just a job - join a mission-driven company where your work makes a real impact.
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
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full inline-block">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Benefits & Perks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our team members with comprehensive benefits and unique perks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Health & Wellness',
                benefits: [
                  'Comprehensive health insurance',
                  'Mental health support',
                  'Fitness membership',
                  'Wellness stipend'
                ]
              },
              {
                category: 'Work-Life Balance',
                benefits: [
                  'Flexible working hours',
                  'Remote work options',
                  'Unlimited PTO',
                  '4-day work week'
                ]
              },
              {
                category: 'Professional Growth',
                benefits: [
                  'Learning & development budget',
                  'Conference attendance',
                  'Mentorship programs',
                  'Career advancement paths'
                ]
              },
              {
                category: 'Financial Security',
                benefits: [
                  'Competitive salary',
                  'Equity participation',
                  'Retirement matching',
                  'Performance bonuses'
                ]
              },
              {
                category: 'Unique Perks',
                benefits: [
                  'Electric vehicle allowance',
                  'Solar panel installation',
                  'Organic meal delivery',
                  'Sustainability projects'
                ]
              },
              {
                category: 'Family Support',
                benefits: [
                  'Parental leave',
                  'Childcare assistance',
                  'Family health coverage',
                  'Adoption support'
                ]
              }
            ].map(({ category, benefits }) => (
              <div key={category} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
                <ul className="space-y-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity to make a difference in sustainable technology.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Senior Software Engineer - AI/ML',
                department: 'Engineering',
                location: 'San Francisco, CA / Remote',
                type: 'Full-time',
                salary: '$150k - $200k',
                description: 'Lead development of AI-powered sustainability optimization algorithms.'
              },
              {
                title: 'Product Manager - Green Tech',
                department: 'Product',
                location: 'Austin, TX / Hybrid',
                type: 'Full-time',
                salary: '$130k - $170k',
                description: 'Drive product strategy for our renewable energy solutions platform.'
              },
              {
                title: 'Sustainability Data Scientist',
                department: 'Research',
                location: 'Remote',
                type: 'Full-time',
                salary: '$120k - $160k',
                description: 'Analyze environmental impact data to optimize our sustainability initiatives.'
              },
              {
                title: 'UX Designer - Environmental Impact',
                department: 'Design',
                location: 'Portland, OR / Remote',
                type: 'Full-time',
                salary: '$100k - $140k',
                description: 'Design intuitive interfaces for environmental monitoring applications.'
              }
            ].map((job) => (
              <div key={job.title} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                      Apply Now
                    </button>
                    <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg transition-colors duration-300">
                      Learn More
                    </button>
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
            <h2 className="text-3xl font-bold">Ready to Make an Impact?</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Join our team of innovators and help build technology that creates a better world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                View All Positions
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Join Talent Network
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;