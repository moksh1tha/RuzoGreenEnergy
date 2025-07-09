import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, Sun, Droplets, Trees, Wind } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold">Sustainability</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Our commitment to environmental stewardship drives everything we do. 
                Discover how we're building a more sustainable future for all.
              </p>
            </div>
            <div className="relative">
              {/* Image Placeholder - Replace src with your image URL */}
              <div className="bg-gray-700 rounded-2xl h-96 flex items-center justify-center border-2 border-dashed border-gray-500">
                <div className="text-center space-y-2">
                  <div className="text-gray-400 text-lg font-semibold">Sustainability Image</div>
                  <div className="text-gray-500 text-sm">Replace with your image</div>
                </div>
              </div>
              {/* Uncomment and replace URL when you have your image:
              <img 
                src="YOUR_IMAGE_URL_HERE" 
                alt="Sustainability Solutions"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Environmental Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable results in our mission to create technology that heals the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trees,
                title: 'Trees Planted',
                value: '50,000+',
                description: 'Through our reforestation partnerships'
              },
              {
                icon: Sun,
                title: 'Solar Energy',
                value: '100%',
                description: 'Of our operations powered by renewables'
              },
              {
                icon: Droplets,
                title: 'Water Saved',
                value: '2.5M gallons',
                description: 'Through efficient cooling systems'
              },
              {
                icon: Recycle,
                title: 'Waste Diverted',
                value: '98%',
                description: 'From landfills through recycling'
              }
            ].map(({ icon: Icon, title, value, description }) => (
              <div key={title} className="text-center space-y-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full inline-block">
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

      {/* Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Sustainability Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to environmental responsibility across all operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Sun,
                title: 'Renewable Energy Program',
                description: 'All Verdex facilities run on 100% renewable energy, with excess power fed back to the grid.',
                achievements: [
                  '15 MW solar installation',
                  '5 MW wind capacity',
                  'Carbon neutral since 2020'
                ]
              },
              {
                icon: Recycle,
                title: 'Circular Economy',
                description: 'We design products for longevity and create closed-loop recycling systems.',
                achievements: [
                  '98% waste diversion rate',
                  'Zero single-use plastics',
                  'Cradle-to-cradle design'
                ]
              },
              {
                icon: Droplets,
                title: 'Water Conservation',
                description: 'Advanced water management systems minimize consumption and protect local watersheds.',
                achievements: [
                  '40% reduction in water use',
                  'Rainwater harvesting',
                  'Greywater recycling'
                ]
              },
              {
                icon: Wind,
                title: 'Carbon Negative Goals',
                description: 'Beyond net-zero: we actively remove more carbon than we produce.',
                achievements: [
                  'Carbon negative by 2025',
                  'Direct air capture',
                  'Verified offset programs'
                ]
              }
            ].map(({ icon: Icon, title, description, achievements }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                    <ul className="space-y-2">
                      {achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {achievement}
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

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Certifications & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Third-party validated commitments to environmental excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'B Corp Certified',
              'ISO 14001',
              'LEED Platinum',
              'Carbon Trust',
              'Green Business',
              'ENERGY STAR',
              'Cradle to Cradle',
              'Climate Neutral'
            ].map((cert) => (
              <div key={cert} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-green-50 transition-colors duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-gray-900">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Join Our Sustainability Mission</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Partner with us to create technology solutions that benefit both your business and the environment.
            </p>
            <Link to="/technology" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;