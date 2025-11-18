"use client";

import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '@/data/cv-data';

export default function Experience() {
  return (
    <div className="space-y-4">
      {experience.map((exp, index) => (
        <div
          key={exp.id}
          className="oneui-card-elevated stagger-children"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-oneui-md bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
              <Briefcase size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
                {exp.position}
              </h3>
              <p className="text-lg font-semibold text-[var(--primary)] mb-2">
                {exp.company}
              </p>
              <div className="flex items-center gap-4 text-sm text-[var(--foreground-tertiary)] mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-[var(--foreground-secondary)] flex items-start gap-2 text-sm">
                    <span className="text-[var(--primary)] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="oneui-chip oneui-chip-primary text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
