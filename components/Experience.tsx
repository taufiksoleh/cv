"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '@/data/cv-data';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-purple-600 to-primary-600"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:text-right md:pr-[50%]' : 'md:pl-[50%] md:text-left'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className={`absolute top-6 ${
                    index % 2 === 0 ? 'left-6 md:right-[-8px] md:left-auto' : 'left-6 md:left-[-8px]'
                  } w-4 h-4 bg-primary-500 rounded-full border-4 border-black z-10`}
                />

                <motion.div
                  whileHover={{ scale: 1.02, x: index % 2 === 0 ? -10 : 10 }}
                  className="ml-16 md:ml-0 md:mx-8 p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border border-gray-700/50 backdrop-blur-sm glow-on-hover"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={20} className="text-primary-400" />
                    <h3 className="text-2xl font-bold text-primary-400">{exp.position}</h3>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-300 mb-2">{exp.company}</h4>

                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-primary-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary-600/20 text-primary-300 rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
