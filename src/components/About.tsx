import React from 'react';
import { MapPin, Code, Coffee, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: MapPin, label: 'Years Experience', value: '5+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image & Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-teal-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 flex items-center justify-center">
                  <div className="text-6xl font-bold text-gray-400">
                    {portfolioData.personal.name.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={20} className="text-teal-600" />
                  <span className="font-semibold">{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg text-white">
                      <stat.icon size={20} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio & Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Building the Future, One Line at a Time
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {portfolioData.personal.bio}
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or mentoring aspiring developers. I believe in the power of clean code and user-centered design to 
                create applications that not only work flawlessly but also provide delightful user experiences.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">What drives me:</h4>
              <div className="space-y-3">
                {[
                  'Creating intuitive and accessible user interfaces',
                  'Writing clean, maintainable, and scalable code',
                  'Staying up-to-date with the latest web technologies',
                  'Collaborating with teams to solve complex problems',
                  'Mentoring junior developers and sharing knowledge'
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;