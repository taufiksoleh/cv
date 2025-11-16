"use client";

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { personalInfo } from '@/data/cv-data';

export default function Footer() {
  return (
    <footer className="relative bg-black/50 backdrop-blur-lg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center gap-2"
          >
            © {new Date().getFullYear()} {personalInfo.name}. Made with{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Heart className="text-red-500" size={18} fill="currentColor" />
            </motion.span>
            and Three.js
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
