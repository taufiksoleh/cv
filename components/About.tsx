"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '@/data/cv-data';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image placeholder / 3D element */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-600/20 to-purple-600/20 backdrop-blur-sm border border-primary-500/30 flex items-center justify-center overflow-hidden glow-on-hover">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-9xl gradient-text font-bold"
                >
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-primary-400">
                {personalInfo.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.description}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50"
                >
                  <h4 className="text-4xl font-bold gradient-text mb-2">5+</h4>
                  <p className="text-gray-400">Years Experience</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50"
                >
                  <h4 className="text-4xl font-bold gradient-text mb-2">50+</h4>
                  <p className="text-gray-400">Projects Completed</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50"
                >
                  <h4 className="text-4xl font-bold gradient-text mb-2">30+</h4>
                  <p className="text-gray-400">Happy Clients</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50"
                >
                  <h4 className="text-4xl font-bold gradient-text mb-2">10+</h4>
                  <p className="text-gray-400">Technologies</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
