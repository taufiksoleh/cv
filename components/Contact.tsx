"use client";

import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/cv-data';

export default function Contact() {
  return (
    <div className="space-y-6">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="oneui-card text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-oneui-md bg-[var(--primary)] flex items-center justify-center">
            <Mail className="text-white" size={28} />
          </div>
          <p className="text-sm text-[var(--foreground-tertiary)] mb-2">Email</p>
          <a
            href="mailto:taufikhope@gmail.com"
            className="text-lg font-semibold text-[var(--primary)] hover:underline"
          >
            taufikhope@gmail.com
          </a>
        </div>

        <div className="oneui-card text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-oneui-md bg-[var(--primary)] flex items-center justify-center">
            <MapPin className="text-white" size={28} />
          </div>
          <p className="text-sm text-[var(--foreground-tertiary)] mb-2">Location</p>
          <p className="text-lg font-semibold text-[var(--foreground)]">{personalInfo.location}</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="oneui-card-elevated">
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Connect with me</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-[var(--background-secondary)] hover:bg-[var(--background-tertiary)] rounded-oneui-md transition-colors"
          >
            <div className="w-12 h-12 rounded-oneui-md bg-[#333] flex items-center justify-center">
              <Github className="text-white" size={24} />
            </div>
            <div>
              <p className="text-xs text-[var(--foreground-tertiary)] mb-1">GitHub</p>
              <p className="text-sm font-semibold text-[var(--foreground)]">@taufiksoleh</p>
            </div>
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-[var(--background-secondary)] hover:bg-[var(--background-tertiary)] rounded-oneui-md transition-colors"
          >
            <div className="w-12 h-12 rounded-oneui-md bg-[#0077B5] flex items-center justify-center">
              <Linkedin className="text-white" size={24} />
            </div>
            <div>
              <p className="text-xs text-[var(--foreground-tertiary)] mb-1">LinkedIn</p>
              <p className="text-sm font-semibold text-[var(--foreground)]">Taufik Soleh</p>
            </div>
          </a>
        </div>
      </div>

      {/* Additional Info */}
      <div className="oneui-card text-center">
        <p className="text-[var(--foreground-secondary)]">
          Feel free to reach out for collaboration opportunities or just to connect!
        </p>
      </div>
    </div>
  );
}
