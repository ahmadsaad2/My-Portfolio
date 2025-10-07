import React from 'react';
import {  Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    
    <footer className="bg-gray-900 text-white py-12">
           <div className="border-t border-gray-800 mt-8 pt-8">
</div>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Ahmad  Saad
              </h3>
              <p className="text-gray-400 mb-4">
  A passionate Computer Engineering  focused on Quality Assurance, Software Testing, and building reliable, user-centered digital solutions.
              </p>
            
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block w-full text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </div>
     
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
  © 2025 Ahmad Saad — Built with passion, precision, and continuous learning.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;