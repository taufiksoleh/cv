"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/data/cv-data";

const projectColors = ["#1E88E5", "#43A047", "#FB8C00", "#8E24AA", "#E53935", "#00ACC1"];

export default function Projects() {
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="oneui-card-elevated stagger-children"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Project Header with Color Indicator */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-oneui-lg flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
              style={{ backgroundColor: projectColors[index % projectColors.length] }}
            >
              {project.title.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-bold text-[var(--foreground)]">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold rounded-oneui-sm">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </span>
                )}
              </div>
              <p className="oneui-body mt-2">
                {project.description}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="oneui-chip text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white text-sm font-semibold rounded-oneui-full hover:bg-[var(--primary-dark)] transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--background-secondary)] text-[var(--foreground)] text-sm font-semibold rounded-oneui-full hover:bg-[var(--background-tertiary)] transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          </div>
        </div>
      ))}

      <div className="text-center pt-4">
        <a
          href="https://github.com/taufiksoleh"
          target="_blank"
          rel="noopener noreferrer"
          className="oneui-btn-outline oneui-btn"
        >
          View All on GitHub
        </a>
      </div>
    </div>
  );
}
