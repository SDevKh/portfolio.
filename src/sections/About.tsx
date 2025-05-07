import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const experiences = [
    {
      title: 'Devloped a website for local perfume shop',
      company: 'Pure Fragnance',
      period: '2025',
      description: 'Created a responsive website using React and Tailwind CSS. Integrated Chart.js for data visualization and Weather API for real-time updates.'
    },
    {
      title: 'Created a website for finding best AI tools',
      period: '2023 - 2024',
      description: 'Developed a comprehensive platform to help users discover the best AI tools. Implemented user reviews and ratings features using React and Firebase.'
    },
    {
      title: 'Auto Trading Bot',
      period: '2024 - 2015',
      description: 'Built an automated trading bot that executes trades based on predefined strategies. Integrated with various trading platforms using Python.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science in AIML',
      institution: 'Bharati Vidhyapeeth Deemed University',
      year: '2024 - Current'
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="About Me"
          subtitle="Get to know my background and expertise in web development"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                <img 
                  src="pics/21.jpeg" 
                  alt="Dev Khandelwal" 
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl transform rotate-3 shadow-lg">
                <Code size={30} />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="heading-sm mb-4">My Journey</h3>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              I'm a passionate Web developer with over 3 years of experience creating 
              robust web applications. My journey in tech began at the age of 18, when I 
              discovered my passion for coding and problem-solving.
            </p>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              Till Now, I've worked with various technologies and frameworks, 
              allowing me to develop a versatile skill set. I specialize in building responsive, 
              user-friendly interfaces and efficient backend systems.
            </p>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through technical articles and 
              mentorship.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Briefcase size={24} className="text-primary-600 mr-3" />
              <h3 className="heading-sm">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-secondary-200 pb-6"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600"></div>
                  <h4 className="font-semibold text-lg">{exp.title}</h4>
                  <p className="text-primary-600 mb-1">{exp.company}</p>
                  <p className="text-secondary-400 text-sm mb-2">{exp.period}</p>
                  <p className="text-secondary-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap size={24} className="text-primary-600 mr-3" />
              <h3 className="heading-sm">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-secondary-200 pb-6"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600"></div>
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-primary-600 mb-1">{edu.institution}</p>
                  <p className="text-secondary-400 text-sm">{edu.year}</p>
                </div>
              ))}
              
              <div className="pt-6">
                <h4 className="font-semibold text-lg mb-3">Certifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 mr-2"></div>
                    <span>AWS Certified Developer Associate</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 mr-2"></div>
                    <span>Professional Scrum Master I (PSM I)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 mr-2"></div>
                    <span>Google Cloud Professional Developer</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};