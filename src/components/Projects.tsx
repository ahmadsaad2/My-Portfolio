import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { projects as allProjects } from '../data/portfolio';
import { Project } from '../types';
import { Modal } from './Modal';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define categories based on your project data
  const categories = [
    { id: 'all', name: 'All Projects', count: allProjects.length },
    { id: 'qa', name: 'QA & Testing', count: allProjects.filter(p => p.category === 'qa').length },
    { id: 'web', name: 'Web Development', count: allProjects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', count: allProjects.filter(p => p.category === 'mobile').length },
    { id: 'data', name: 'Data Analysis', count: allProjects.filter(p => p.category === 'data').length },
    { id: 'Other', name: 'Other', count: allProjects.filter(p => p.category === 'Other').length },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? allProjects
      : allProjects.filter(project => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject?.screenshots) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.screenshots!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.screenshots) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.screenshots!.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-secondary-50/30 via-white to-accent-50/30 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
  Projects
</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-600 to-accent-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
Explore my projects that showcase the effort, creativity, and learning I’ve put into each one - highlighting how every project helped me grow, improve my technical skills, and turn ideas into real, working solutions.          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300 mr-4">
            <Filter size={20} />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-200 font-medium border-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-secondary-600 via-primary-600 to-accent-600 text-white border-primary-600 shadow-lg scale-105'
                  : 'bg-gradient-to-br from-secondary-50/30 via-white to-accent-50/30 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 text-dark-700 dark:text-dark-300 border-gray-200 dark:border-dark-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-400'
              }`}
              style={{
                boxShadow: selectedCategory === category.id ? '0 4px 20px 0 rgba(59,130,246,0.15)' : undefined
              }}
            >
              {category.name}
              {category.count > 0 && (
                <span className={`ml-2 px-2 py-1 rounded-full text-xs transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-white bg-opacity-30 text-white'
                    : 'bg-gradient-to-br from-secondary-50/30 via-white to-accent-50/30 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 text-dark-700 dark:text-dark-300'
                }`}>
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-secondary-50/80 via-white to-accent-50/80 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-glow-lg transition-all duration-500 cursor-pointer transform hover:-translate-y-3 border border-white/20 dark:border-dark-700/50 hover:border-primary-200 dark:hover:border-primary-800 group"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-medium rounded-full shadow-lg backdrop-blur-sm">
                    {project.category?.toUpperCase()}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-dark-200 dark:bg-dark-700 text-dark-600 dark:text-dark-300 text-xs rounded-md">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="text-primary-600 dark:text-primary-400 font-medium group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors duration-300 flex items-center gap-2">
                  View Details →
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-500 dark:text-dark-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
      
      {/* Project Modal */}
      <Modal isOpen={!!selectedProject} onClose={closeModal}>
        {selectedProject && (
          <div className="max-w-4xl w-full">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedProject.title}
              </h3>
            </div>
            {/* Image carousel */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.screenshots[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-64 md:h-96 object-cover"
                />
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all duration-200"
                    >
                      &lt;
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all duration-200"
                    >
                      &gt;
                    </button>
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProject.screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {selectedProject.description}
              </p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200"
                >
                  GitHub
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;