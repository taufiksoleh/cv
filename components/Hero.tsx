"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/cv-data";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const floatingShapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation with elastic bounce
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.5,
          rotation: -10,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.6)",
          delay: 0.2,
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 0.6,
        }
      );

      // Description animation
      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 1,
        }
      );

      // Social links animation with stagger
      if (socialsRef.current) {
        gsap.fromTo(
          socialsRef.current.children,
          { scale: 0, rotation: 180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(2)",
            stagger: 0.1,
            delay: 1.3,
          }
        );
      }

      // CTA buttons animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { y: 50, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            delay: 1.6,
          }
        );
      }

      // Floating shapes animation
      if (floatingShapesRef.current) {
        const shapes = floatingShapesRef.current.children;
        Array.from(shapes).forEach((shape, i) => {
          gsap.fromTo(
            shape,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: [0.3, 0.4, 0.35][i % 3],
              duration: 1,
              ease: "back.out(1.7)",
              delay: i * 0.1,
            }
          );

          gsap.to(shape, {
            y: `random(-80, 80)`,
            x: `random(-60, 60)`,
            rotation: `random(-180, 180)`,
            scale: `random(0.8, 1.2)`,
            duration: `random(4, 8)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }

      // Mouse parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(titleRef.current, {
          x: xPos * 0.3,
          y: yPos * 0.3,
          duration: 0.8,
          ease: "power2.out",
        });

        gsap.to(floatingShapesRef.current?.children || [], {
          x: (i) => xPos * (i + 1) * 0.15,
          y: (i) => yPos * (i + 1) * 0.15,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated floating decorative shapes */}
      <div
        ref={floatingShapesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl" />
        <div className="absolute top-40 right-32 w-56 h-56 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-40 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-44 h-44 bg-gradient-to-br from-green-400 to-teal-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-gradient-to-br from-rose-400 to-red-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 gradient-text leading-tight"
        >
          {personalInfo.name.split(" ")[0]}{" "}
          <span className="inline-block">
            {personalInfo.name.split(" ").slice(1).join(" ")} <Sparkles className="inline-block w-12 h-12 md:w-16 md:h-16 text-yellow-400 animate-pulse" />
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800"
        >
          {personalInfo.title} <span className="rainbow-text">✨</span>
        </p>

        <p
          ref={descRef}
          className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          {personalInfo.description}
        </p>

        {/* Social links */}
        <div ref={socialsRef} className="flex gap-6 justify-center mb-12">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center glass rounded-full scale-hover wiggle"
          >
            <Github className="text-2xl text-gray-800" size={28} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center glass rounded-full scale-hover wiggle"
          >
            <Linkedin className="text-2xl text-blue-600" size={28} />
          </a>
          <a
            href={socialLinks.email}
            className="w-16 h-16 flex items-center justify-center glass rounded-full scale-hover wiggle"
          >
            <Mail className="text-2xl text-pink-600" size={28} />
          </a>
        </div>

        {/* CTA buttons */}
        <div ref={ctaRef} className="flex flex-wrap gap-6 justify-center items-center mb-16">
          <a href="#projects" className="btn-bouncy text-lg px-10 py-5 shine">
            View My Work ✨
          </a>
          <a
            href="#contact"
            className="glass px-10 py-5 rounded-full font-bold text-gray-800 hover:scale-105 transition-transform text-lg"
          >
            Let's Talk 💬
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20">
          <div className="flex flex-col items-center gap-3 float">
            <span className="text-sm font-bold text-gray-800 tracking-wider uppercase">
              Scroll to explore
            </span>
            <div className="w-7 h-12 border-3 border-gray-800 rounded-full flex items-start justify-center p-2">
              <div className="w-2 h-4 bg-gray-800 rounded-full pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
