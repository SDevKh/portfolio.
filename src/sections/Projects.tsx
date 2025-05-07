import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  video?: string; // Optional property for video
  image?: string; // Optional property for image
  tags: string[];
  liveUrl?: string; // Optional property for live URL
  githubUrl: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with HTML/CSS, Node.js, and MongoDB. Features include user authentication, product catalog, cart functionality, payment integration, and order management.',
      video: 'pics/hayman.mp4', // Example video link
      tags: ['JS', 'Node.js', 'MongoDB', 'CSS', 'HTML'],
      liveUrl: 'https://haymandk.netlify.app',
      githubUrl: 'https://github.com/SDevKh/E-commerce'
    },
    {
      title: 'A Website for finding best ai tools',
      description: 'A comprehensive website that helps users discover the best AI tools available. Features include user reviews, ratings, and a comparison tool.',
      video: 'pics/allinai.mp4', // Example video link
      tags: ['React', 'TypeScript', 'Firebase', 'Material UI'],
      liveUrl: 'https://allinai.netlify.app',
      githubUrl: 'https://github.com/SDevKh/ALLINAI'
    },
    {
      title: 'Auto Trading Bot',
      description: 'An automated trading bot that executes trades based on predefined strategies. Built with Python and integrated with various trading platforms.',
      video: 'auto.mp4', // Example video link
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/SDevKh/Auto-trading-Bot'
    },
    {
      title: 'A website for local Purfume shop',
      description: 'A simple yet elegant website for a local perfume shop. Features include product listings, user reviews, and a contact form.',
      tags: ['React', 'TypeScript', 'Chart.js', 'Weather API'],
      video: 'pics/purefrganance.mp4', // Example video link
      liveUrl: 'https://purefragnance.in',
      githubUrl: 'https://github.com/SDevKh/Perfume'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="section bg-secondary-50">
      <div className="container-custom">
        <SectionTitle 
          title="My Projects"
          subtitle="Explore some of my recent work"
          centered
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} variants={item} />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary-600 mb-6">
            These are just a few examples of my work. I'm always working on new projects!
          </p>
          <a 
            href="https://github.com/SDevKh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={18} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  variants: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants }) => {
  return (
    <motion.div 
      className="card group h-full flex flex-col"
      variants={variants}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden h-60">
        {project.video ? (
          <video 
            src={project.video} 
            controls 
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 flex gap-4">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-secondary-800 hover:bg-primary-100 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-secondary-800 hover:bg-primary-100 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="heading-sm mb-3">{project.title}</h3>
        <p className="text-secondary-600 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="skill-badge bg-primary-50 text-primary-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};