"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "@/data/cv-data";
import { Heart, Coffee, Code2, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Avatar animation with rotation
      gsap.fromTo(
        avatarRef.current,
        { x: -200, opacity: 0, rotation: -180 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: avatarRef.current,
            start: "top 80%",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

      // Stats cards animation with stagger
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { y: 100, opacity: 0, scale: 0.5, rotation: 10 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(2)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Continuous avatar rotation on hover
      if (avatarRef.current) {
        const avatarElement = avatarRef.current.querySelector(".avatar-initials");
        if (avatarElement) {
          gsap.to(avatarElement, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "none",
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Code2, value: "5+", label: "Years Experience", color: "from-pink-400 to-purple-500" },
    { icon: Rocket, value: "50+", label: "Projects Completed", color: "from-blue-400 to-cyan-500" },
    { icon: Heart, value: "30+", label: "Happy Clients", color: "from-yellow-400 to-orange-500" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee", color: "from-green-400 to-teal-500" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-black mb-16 text-center"
        >
          About <span className="gradient-text">Me</span> 🎨
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Animated avatar */}
          <div ref={avatarRef} className="relative">
            <div className="aspect-square rounded-3xl glass-dark flex items-center justify-center overflow-hidden glow-hover relative group">
              <div className="avatar-initials text-9xl gradient-text font-black">
                {personalInfo.name.split(" ").map((n) => n[0]).join("")}
              </div>

              {/* Floating icons */}
              <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center float-slow">
                <Code2 className="text-white" size={28} />
              </div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center float-fast">
                <Rocket className="text-white" size={28} />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div ref={contentRef} className="space-y-6">
            <h3 className="text-4xl font-black gradient-text">
              {personalInfo.title}
            </h3>
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              {personalInfo.description}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I love creating beautiful, interactive websites that make people smile!
              When I'm not coding, you'll find me exploring new animation techniques
              and pushing the boundaries of what's possible on the web. ✨
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass p-6 rounded-2xl text-center card-3d group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center scale-hover`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h4 className="text-4xl font-black gradient-text mb-2 rainbow-text">
                  {stat.value}
                </h4>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
