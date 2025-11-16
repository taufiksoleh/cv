"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/cv-data';

export default function Projects() {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary-600/20 to-purple-600/20 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/40 to-purple-500/40"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="text-6xl font-bold gradient-text opacity-30"
                    >
                      {project.title.charAt(0)}
                    </motion.div>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary-600/20 text-primary-300 rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-semibold">Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm font-semibold">Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-2xl transition-all duration-300 pointer-events-none"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/taufiksoleh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
