"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/cv-data';
import { Code, Database, Wrench } from 'lucide-react';

const categoryIcons = {
  frontend: Code,
  backend: Database,
  tools: Wrench,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const renderSkillCategory = (category: string, skillList: any[], Icon: any) => (
    <motion.div variants={itemVariants} className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="text-primary-400" size={28} />
        <h3 className="text-2xl font-bold capitalize">{category}</h3>
      </div>

      <div className="space-y-4">
        {skillList.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ x: 10 }}
            className="group"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 font-medium">{skill.name}</span>
              <span className="text-primary-400 font-semibold">{skill.level}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-primary-600 to-purple-600 rounded-full relative"
              >
                <motion.div
                  animate={{
                    x: [-20, 220],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-20">
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
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {renderSkillCategory('frontend', skills.frontend, categoryIcons.frontend)}
            {renderSkillCategory('backend', skills.backend, categoryIcons.backend)}
            {renderSkillCategory('tools', skills.tools, categoryIcons.tools)}
          </div>

          {/* 3D Skill Visualization */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                ...skills.frontend.slice(0, 3),
                ...skills.backend.slice(0, 3),
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-6 py-4 bg-gradient-to-br from-primary-600/20 to-purple-600/20 rounded-xl border border-primary-500/30 glow-on-hover cursor-pointer"
                >
                  <p className="text-lg font-semibold gradient-text">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
