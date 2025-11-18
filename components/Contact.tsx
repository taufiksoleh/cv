"use client";

import { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { personalInfo } from '@/data/cv-data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="oneui-card text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-oneui-md bg-[var(--primary)] flex items-center justify-center">
            <Mail className="text-white" size={20} />
          </div>
          <p className="text-xs text-[var(--foreground-tertiary)] mb-1">Email</p>
          <p className="text-sm font-semibold text-[var(--foreground)]">{personalInfo.email}</p>
        </div>

        <div className="oneui-card text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-oneui-md bg-[var(--primary)] flex items-center justify-center">
            <Phone className="text-white" size={20} />
          </div>
          <p className="text-xs text-[var(--foreground-tertiary)] mb-1">Phone</p>
          <p className="text-sm font-semibold text-[var(--foreground)]">{personalInfo.phone}</p>
        </div>

        <div className="oneui-card text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-oneui-md bg-[var(--primary)] flex items-center justify-center">
            <MapPin className="text-white" size={20} />
          </div>
          <p className="text-xs text-[var(--foreground-tertiary)] mb-1">Location</p>
          <p className="text-sm font-semibold text-[var(--foreground)]">{personalInfo.location}</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="oneui-card-elevated">
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Send me a message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--foreground)]">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="oneui-input"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--foreground)]">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="oneui-input"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--foreground)]">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="oneui-input resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="oneui-btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
