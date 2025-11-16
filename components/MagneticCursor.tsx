"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursor || !cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move cursor dot immediately
      gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      });

      // Move cursor outline with delay for smooth trailing effect
      gsap.to(cursorOutline, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Handle magnetic effect on interactive elements
    const handleMagneticEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      gsap.to(cursorDot, {
        scale: 3,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(cursorOutline, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
      });

      const handleMouseMoveOnElement = (e: MouseEvent) => {
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(target, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      target.addEventListener("mousemove", handleMouseMoveOnElement as EventListener);
      target.addEventListener(
        "mouseleave",
        () => {
          target.removeEventListener("mousemove", handleMouseMoveOnElement as EventListener);
        },
        { once: true }
      );
    };

    const handleMagneticLeave = (e: Event) => {
      const target = e.currentTarget as HTMLElement;

      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(cursorOutline, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add magnetic effect to buttons and links
    const magneticElements = document.querySelectorAll("a, button, .magnetic");

    magneticElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMagneticEnter);
      el.addEventListener("mouseleave", handleMagneticLeave);
    });

    // Handle click effect
    const handleClick = () => {
      gsap.to(cursorOutline, {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      magneticElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMagneticEnter);
        el.removeEventListener("mouseleave", handleMagneticLeave);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor-container hidden md:block pointer-events-none">
      <div
        ref={cursorDotRef}
        className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-pink-500 rounded-full mix-blend-difference z-[10000]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={cursorOutlineRef}
        className="cursor-outline fixed top-0 left-0 w-8 h-8 border-2 border-purple-500 rounded-full mix-blend-difference z-[10000]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
