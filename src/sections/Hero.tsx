import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroBgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroBgRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      heroBgRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Animated background */}
      <div 
        ref={heroBgRef}
        className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-70 z-0"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-300 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-300 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-600 font-medium mb-4">Hello, I'm</p>
          </motion.div>
          
          <motion.h1
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dev Khandelwal
            <span className="block text-gradient">Web Developer</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-secondary-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build exceptional and accessible digital experiences for the web.
            Specialized in creating modern, responsive applications with cutting-edge technologies.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View my work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact me
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <p className="text-secondary-500 mb-2 text-sm">Scroll down</p>
        <div className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-primary-500 rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};