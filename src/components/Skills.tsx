import React from 'react';
import { Code, Database, Settings, Wrench, CheckCircle, ClipboardList } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const categoryIcons = {
    "Programming Languages": Code,
    "Databases": Database,
    "Testing & QA Tools": CheckCircle,
    "Development & Collaboration Tools": Settings,
    "Testing Types & Techniques": ClipboardList,
    "Other Skills": Wrench
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to create innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = categoryIcons[skillGroup.category as keyof typeof categoryIcons];
              
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg text-center hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200 group"
                      >
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
             
I always believe learning never stops. Every day, I try to improve my skills and learn something new - whether it’s a new testing tool, coding concept, or better way to solve problems.
Technology changes fast, and I enjoy keeping up with it through online courses, hands-on projects, and self-learning.
I’m always curious, motivated, and ready to adapt - because every new skill brings me one step closer to becoming better at what I do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;