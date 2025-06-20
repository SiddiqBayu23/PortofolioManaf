import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through different roles and responsibilities
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-600 transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full transform -translate-x-2 md:-translate-x-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    {/* Company & Role */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg text-white">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                        <h4 className="text-lg font-semibold text-blue-600">{exp.company}</h4>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 mb-4 text-gray-600">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-600" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV CTA */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-6">
            Want to know more about my professional background?
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <Briefcase size={20} />
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;