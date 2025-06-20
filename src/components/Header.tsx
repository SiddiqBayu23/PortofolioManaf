import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
  const activeSection = useScrollSpy(sections);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-blue-700 cursor-pointer hover:text-blue-800 transition-colors"
          >
            {portfolioData.personal.name.split(' ').map(name => name[0]).join('')}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-blue-700 ${
                  activeSection === item.id 
                    ? 'text-blue-700 border-b-2 border-blue-700 pb-1' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-200 hover:bg-blue-100 ${
                isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
              }`}
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-200 hover:bg-blue-100 ${
                isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
              }`}
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={`p-2 rounded-full transition-all duration-200 hover:bg-blue-100 ${
                isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
              }`}
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                    activeSection === item.id ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 hover:text-blue-700 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 hover:text-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2 text-gray-700 hover:text-blue-700 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;