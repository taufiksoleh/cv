"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const movement = 100 * speed;

    let yStart = 0;
    let yEnd = 0;
    let xStart = 0;
    let xEnd = 0;

    switch (direction) {
      case "up":
        yStart = movement;
        yEnd = -movement;
        break;
      case "down":
        yStart = -movement;
        yEnd = movement;
        break;
      case "left":
        xStart = movement;
        xEnd = -movement;
        break;
      case "right":
        xStart = -movement;
        xEnd = movement;
        break;
    }

    gsap.fromTo(
      section,
      {
        y: yStart,
        x: xStart,
      },
      {
        y: yEnd,
        x: xEnd,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
