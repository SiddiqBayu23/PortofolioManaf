import React from 'react';
import { portfolioData } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];
  
  const getSkillsByCategory = (category: string) => {
    return portfolioData.skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: 'from-blue-500 to-purple-600',
      Backend: 'from-green-500 to-teal-600',
      Database: 'from-orange-500 to-red-600',
      DevOps: 'from-indigo-500 to-blue-600',
      Tools: 'from-gray-500 to-gray-700'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-700';
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const categorySkills = getSkillsByCategory(category);
            if (categorySkills.length === 0) return null;
            
            return (
              <div key={category} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getCategoryColor(category)}`}></div>
                  <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                </div>
                
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(category)} transition-all duration-1000 ease-out group-hover:shadow-md`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills as Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GraphQL', 'REST APIs', 'Webpack', 'Vite', 'Jest', 'Cypress',
              'Sass', 'Material-UI', 'Tailwind CSS', 'Figma', 'Adobe XD',
              'Agile', 'Scrum', 'CI/CD', 'Kubernetes', 'Linux'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full text-sm font-medium hover:from-teal-100 hover:to-blue-100 hover:text-teal-800 transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;