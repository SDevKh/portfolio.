import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { useInView } from 'react-intersection-observer';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 50 },
        { name: 'TypeScript', level: 65 },
        { name: 'Next.js', level: 70 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'SQL', level: 90 },
        { name: 'GraphQL', level: 55 },
        { name: 'REST APIs', level: 70 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 55 },
        { name: 'Jest', level: 60 },
      ]
    }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Node.js',
    'MongoDB', 'PostgreSQL', 'Tailwind CSS',
    'Material UI', 'Git', 'GitHub',
    'AWS', 'Firebase', 'Netlify', 'Vercel'
  ];

  return (
    <section id="skills" className="section bg-gradient-to-br from-secondary-900 to-secondary-800 text-white">
      <div className="container-custom">
        <SectionTitle 
          title="Skills & Expertise"
          subtitle="The technologies and tools I work with"
          centered
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <SkillCategory 
              key={idx} 
              title={category.title} 
              skills={category.skills} 
              delay={idx * 0.2}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="heading-sm text-center mb-8">Technologies I've worked with</h3>
          
          <div className="flex flex-wrap justify-center">
            {technologies.map((tech, idx) => (
              <motion.span 
                key={idx}
                className="skill-badge bg-white/10 text-white m-2"
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number }[];
  delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-xl font-semibold mb-6 text-accent-400">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: inView ? `${skill.level}%` : 0 }}
                transition={{ duration: 1, delay: delay + idx * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};