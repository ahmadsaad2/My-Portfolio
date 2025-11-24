import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <img
                src="https://i.ibb.co/qF9h6Fy9/25.jpg"
                alt="Ahmad Saad"
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">
              {personalInfo.title}
            </h2>
            <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-8">
              <MapPin className="w-5 h-5 mr-2" />
              {personalInfo.location}
            </div>
          </div>
<p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">Passionate Computer Engineer driven by curiosity and problem-solving. I love testing, improving, and building software that makes an impact. With experience in QA, web and mobile development, technical support, and data analysis, I’m always learning and growing in tech.
</p>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://drive.google.com/file/d/1FjDU-GxA14UDTKpvJLWFQFmslLFbvuHr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-200 flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              My Resume
            </a>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <Phone className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;