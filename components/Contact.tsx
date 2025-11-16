"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Phone, Linkedin, Github } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/cv-data';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (EmailJS, etc.)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">Let's talk about everything!</h3>
                <p className="text-gray-400 text-lg">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                >
                  <div className="p-3 bg-primary-600/20 rounded-lg">
                    <Mail className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">{personalInfo.email}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                >
                  <div className="p-3 bg-primary-600/20 rounded-lg">
                    <Phone className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">{personalInfo.phone}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                >
                  <div className="p-3 bg-primary-600/20 rounded-lg">
                    <MapPin className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-primary-500/50 transition-colors glow-on-hover"
                >
                  <Linkedin className="text-primary-400" size={24} />
                </motion.a>
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-primary-500/50 transition-colors glow-on-hover"
                >
                  <Github className="text-primary-400" size={24} />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
