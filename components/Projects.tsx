"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/data/cv-data";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with bounce
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, scale: 0.5 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Project cards with 3D effect
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          {
            y: 150,
            opacity: 0,
            rotationX: 45,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const colorGradients = [
    "from-pink-400 to-purple-500",
    "from-blue-400 to-cyan-500",
    "from-yellow-400 to-orange-500",
    "from-green-400 to-teal-500",
    "from-rose-400 to-red-500",
    "from-indigo-400 to-violet-500",
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-black mb-16 text-center"
        >
          Featured <span className="gradient-text">Projects</span> 💼
        </h2>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative glass-dark rounded-3xl overflow-hidden card-3d"
            >
              {/* Project Image/Preview */}
              <div className={`relative h-52 bg-gradient-to-br ${colorGradients[index % colorGradients.length]} overflow-hidden`}>
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
              <div className="p-6">
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
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold rounded-full scale-hover"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass text-gray-800 font-bold rounded-full scale-hover"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/taufiksoleh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bouncy text-lg px-10 py-5"
          >
            View All Projects 🎉
          </a>
        </div>
      </div>
    </section>
  );
}
