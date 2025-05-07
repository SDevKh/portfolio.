import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Dev<span className="text-accent-400">Khandelwal</span></h3>
            <p className="text-secondary-300 mb-6">
              Web Developer specializing in building exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-accent-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-accent-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:deveshkh141@gmail.com" 
                className="text-secondary-300 hover:text-accent-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-secondary-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-secondary-300 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-secondary-300 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-secondary-300 mb-2">deveshkh141@gmail.com</p>
            <p className="text-secondary-300">Navi Mumbai, India</p>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-10 pt-6 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} Dev Khandelwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};