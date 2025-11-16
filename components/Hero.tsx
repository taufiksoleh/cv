"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Scene3D from './3d/Scene3D';
import { personalInfo, socialLinks } from '@/data/cv-data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-primary-400 text-lg md:text-xl">Hello, I'm</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-800/50 rounded-full hover:bg-primary-600 transition-colors glow-on-hover"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-800/50 rounded-full hover:bg-primary-600 transition-colors glow-on-hover"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href={socialLinks.email}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-800/50 rounded-full hover:bg-primary-600 transition-colors glow-on-hover"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary-600 rounded-full text-white font-semibold hover:bg-primary-700 transition-colors glow-on-hover"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary-600 rounded-full text-white font-semibold hover:bg-primary-600/10 transition-colors"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown size={32} className="text-primary-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
