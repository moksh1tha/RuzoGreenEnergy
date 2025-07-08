import React from 'react';
import { Mail, Phone, MapPin, Leaf, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Verdex</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading the future of sustainable technology with innovative solutions 
              that create positive environmental impact while driving business growth.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-800 p-2 rounded-lg group-hover:bg-green-700 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:contact@verdex.com" className="text-white hover:text-green-400 transition-colors duration-300">
                    contact@verdex.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-800 p-2 rounded-lg group-hover:bg-green-700 transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-green-400 transition-colors duration-300">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="bg-green-800 p-2 rounded-lg group-hover:bg-green-700 transition-colors duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-300">Address</p>
                  <p className="text-white">
                    123 Green Innovation Drive<br />
                    Sustainability City, SC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-400">Quick Links</h3>
            <div className="space-y-3">
              {['About Verdex', 'Our Technology', 'Sustainability', 'Investors', 'Careers', 'News & Updates'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-green-400">Stay Connected</h3>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="bg-green-800 p-3 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-gray-300">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 rounded-r-lg hover:from-green-500 hover:to-green-600 transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Verdex. All rights reserved. Building a sustainable future through innovation.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;