import React from 'react';
import { Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div 
              onClick={scrollToTop}
              className="text-2xl font-bold cursor-pointer hover:text-teal-400 transition-colors"
            >
              {portfolioData.personal.name}
            </div>
            <p className="text-gray-400 leading-relaxed">
              {portfolioData.personal.title} passionate about creating 
              exceptional digital experiences and bringing innovative ideas to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Experience', id: 'experience' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-teal-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>{portfolioData.personal.location}</p>
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="block hover:text-teal-400 transition-colors"
              >
                {portfolioData.personal.email}
              </a>
              <a 
                href={`tel:${portfolioData.personal.phone}`}
                className="block hover:text-teal-400 transition-colors"
              >
                {portfolioData.personal.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} {portfolioData.personal.name}. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of coffee.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;