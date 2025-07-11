import React from 'react';
import { Mail, Phone, MapPin, Leaf, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="https://ik.imagekit.io/6ilngyaqa/1752046455008-Screenshot_2025-07-08_185844_9rYvD5IkxC.png" 
                alt="RUZO GREEN ENERGY" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white ml-2">
                Ruzo Green Energy
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading the future of renewable energy with innovative solutions 
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
                    ceo@ruzogreenenergy.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-800 p-2 rounded-lg group-hover:bg-green-700 transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-300">Telephone</p>
                  <a href="tel:+919956814433" className="text-white hover:text-green-400 transition-colors duration-300">
                    +91 99568 14433
                  </a>
                  <br />
                  <p className="text-gray-300 mt-1">Mobile</p>
                  <a href="tel:+919473676618" className="text-white hover:text-green-400 transition-colors duration-300">
                    +91 94736 76618
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
                    Green Energy Solutions<br />
                    Renewable Technology Hub
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
              <a
                href="https://www.linkedin.com/company/ruzo-green-energy/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 p-3 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                aria-label="Ruzo Green Energy LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/verdexruzo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 p-3 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                aria-label="VerdeX Ruzo LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Ruzo Green Energy. All rights reserved.
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