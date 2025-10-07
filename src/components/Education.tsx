import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My educational background that laid the foundation for my technical expertise and professional growth.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start md:items-center mb-4 md:mb-0">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl mr-4 flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {edu.institution}
                      </h4>
                      {edu.description && (
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;