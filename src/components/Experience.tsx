import React from 'react';
import { Calendar } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My professional journey showcasing growth in technical support, software development, and data analysis.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-700"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                          {experience.position}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">{experience.duration}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                        {experience.company}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;