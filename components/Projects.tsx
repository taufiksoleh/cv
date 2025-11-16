"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/cv-data";
import MagneticButton from "@/components/MagneticButton";
import ProjectCard from "@/components/ProjectCard";

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
            <ProjectCard
              key={project.id}
              project={project}
              colorGradient={colorGradients[index % colorGradients.length]}
            />
          ))}
        </div>

        <div className="text-center">
          <MagneticButton
            href="https://github.com/taufiksoleh"
            className="btn-bouncy text-lg px-10 py-5"
            strength={0.4}
          >
            View All Projects 🎉
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
