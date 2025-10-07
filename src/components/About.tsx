import React from 'react';
import { Code, Database, BarChart3, Users, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Software Development",
      description: "Modern programming practices"
    },
       {
      icon: CheckCircle,
      title: "Software Testing & QA",
      description: "Manual & automated testing"
    },    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Data analysis & models"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "SQL & data management"
    },


    {
      icon: Users,
      title: "Technical Support",
      description: "Troubleshooting & support"
    },

  ];

  return (
    <section id="about" className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto"> {/* Increased from max-w-4xl to max-w-7xl */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              About Me
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {personalInfo.about}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center w-full max-w-[220px] min-h-[180px] flex flex-col justify-between"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <highlight.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;