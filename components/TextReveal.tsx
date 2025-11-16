"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  animationType?: "fade" | "slide" | "scale" | "chars";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.03,
  animationType = "chars",
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const text = element.textContent || "";

    if (animationType === "chars") {
      // Split text into characters
      element.innerHTML = text
        .split("")
        .map((char) => {
          if (char === " ") return '<span class="char">&nbsp;</span>';
          return `<span class="char inline-block">${char}</span>`;
        })
        .join("");

      const chars = element.querySelectorAll(".char");

      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0,
          rotationX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: stagger,
          delay: delay,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    } else if (animationType === "slide") {
      gsap.fromTo(
        element,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    } else if (animationType === "scale") {
      gsap.fromTo(
        element,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: delay,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    } else {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [delay, stagger, animationType]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
