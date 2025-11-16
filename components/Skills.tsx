"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/cv-data";
import { Code, Database, Wrench, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categoryIcons = {
  frontend: { Icon: Code, color: "from-pink-400 to-purple-500" },
  backend: { Icon: Database, color: "from-blue-400 to-cyan-500" },
  tools: { Icon: Wrench, color: "from-yellow-400 to-orange-500" },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, rotation: -5 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Category cards animation with stagger
      if (categoriesRef.current) {
        gsap.fromTo(
          categoriesRef.current.children,
          { y: 150, opacity: 0, rotation: 15 },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(2)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: "top 80%",
            },
          }
        );

        // Animate skill bars
        const skillBars = categoriesRef.current.querySelectorAll(".skill-bar");
        skillBars.forEach((bar) => {
          const level = bar.getAttribute("data-level");
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${level}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 90%",
              },
            }
          );
        });
      }

      // Tags animation with bounce
      if (tagsRef.current) {
        gsap.fromTo(
          tagsRef.current.children,
          { scale: 0, rotation: 180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(3)",
            stagger: 0.05,
            scrollTrigger: {
              trigger: tagsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderSkillCategory = (
    categoryKey: "frontend" | "backend" | "tools",
    skillList: any[]
  ) => {
    const { Icon, color } = categoryIcons[categoryKey];
    return (
      <div className="glass-dark p-8 rounded-3xl space-y-6 card-3d">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center rotate-slow`}>
            <Icon className="text-white" size={28} />
          </div>
          <h3 className="text-3xl font-black capitalize gradient-text">
            {categoryKey}
          </h3>
        </div>

        <div className="space-y-5">
          {skillList.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-800 font-bold text-lg">
                  {skill.name}
                </span>
                <span className="text-2xl font-black gradient-text">
                  {skill.level}%
                </span>
              </div>
              <div className="h-4 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className={`skill-bar h-full bg-gradient-to-r ${color} rounded-full relative overflow-hidden`}
                  data-level={skill.level}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shine" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-black mb-16 text-center"
        >
          Skills & <span className="gradient-text">Technologies</span> 🚀
        </h2>

        <div ref={categoriesRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {renderSkillCategory("frontend", skills.frontend)}
          {renderSkillCategory("backend", skills.backend)}
          {renderSkillCategory("tools", skills.tools)}
        </div>

        {/* Core Competencies Tags */}
        <div className="glass p-10 rounded-3xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Zap className="text-yellow-500 animate-pulse" size={32} />
            <h3 className="text-3xl font-black text-center gradient-text">
              Core Superpowers
            </h3>
            <Zap className="text-yellow-500 animate-pulse" size={32} />
          </div>
          <div
            ref={tagsRef}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              ...skills.frontend.slice(0, 3),
              ...skills.backend.slice(0, 3),
            ].map((skill) => (
              <div
                key={skill.name}
                className="px-8 py-4 glass-dark rounded-full cursor-pointer scale-hover wiggle"
              >
                <p className="text-xl font-black gradient-text">
                  {skill.name} ✨
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
