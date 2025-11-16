"use client";

import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
}

export function useTilt<T extends HTMLElement>(
  options: TiltOptions = {}
): RefObject<T> {
  const {
    maxTilt = 20,
    perspective = 1000,
    scale = 1.05,
    speed = 0.4,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.transformStyle = "preserve-3d";
    element.style.perspective = `${perspective}px`;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * maxTilt;
      const rotateY = ((centerX - x) / centerX) * maxTilt;

      gsap.to(element, {
        rotationX: rotateX,
        rotationY: rotateY,
        scale: scale,
        duration: speed,
        ease: "power2.out",
        transformPerspective: perspective,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: speed,
        ease: "power2.out",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt, perspective, scale, speed]);

  return ref;
}
