import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Message from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`.trim()
    );

    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitStatus('success');
    setIsSubmitting(false);

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together on your next project.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12 items-start">
            {/* Contact Info (Left) */}
            <div className="flex flex-col items-center space-y-6 w-full md:w-1/2">
              {/* Email */}
              <div className="flex items-center w-full max-w-md bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 shadow hover:shadow-lg transition-all">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center w-full max-w-md bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 shadow hover:shadow-lg transition-all">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center w-full max-w-md bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 shadow hover:shadow-lg transition-all">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex items-center w-full max-w-md bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 shadow hover:shadow-lg transition-all">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Send className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Connect with me</p>
                  <div className="flex space-x-4">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-xl transition-colors duration-200"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-colors duration-200"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition-colors duration-200"
                      title="Email"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right) */}
            <form
              onSubmit={handleSubmit}
              className="mt-12 md:mt-0 w-full md:w-1/2 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow ml-auto"
            >
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 dark:text-green-400 text-center">
                  Message sent! Your email client should open shortly.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600 dark:text-red-400 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;