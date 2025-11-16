"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured?: boolean;
  };
  colorGradient: string;
}

export default function ProjectCard({ project, colorGradient }: ProjectCardProps) {
  const cardRef = useTilt<HTMLDivElement>({
    maxTilt: 15,
    perspective: 1000,
    scale: 1.03,
    speed: 0.5,
  });

  return (
    <div
      ref={cardRef}
      className="group relative glass-dark rounded-3xl overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Project Image/Preview */}
      <div
        className={`relative h-52 bg-gradient-to-br ${colorGradient} overflow-hidden`}
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-8xl font-black text-white opacity-20 rotate-slow">
            {project.title.charAt(0)}
          </div>
        </div>

        {project.featured && (
          <div className="absolute top-4 right-4 px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-black rounded-full flex items-center gap-1 pulse">
            <Star size={16} fill="currentColor" />
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-2xl font-black mb-3 gradient-text">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-4 font-medium line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm bg-white/40 text-gray-800 font-bold rounded-full backdrop-blur-sm scale-hover"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold rounded-full scale-hover magnetic"
          >
            <ExternalLink size={18} />
            Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass text-gray-800 font-bold rounded-full scale-hover magnetic"
          >
            <Github size={18} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
