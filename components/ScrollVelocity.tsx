"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollVelocityProps {
  children: ReactNode;
  speed?: number;
  direction?: "horizontal" | "vertical";
  className?: string;
}

export default function ScrollVelocity({
  children,
  speed = 1,
  direction = "horizontal",
  className = "",
}: ScrollVelocityProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentScroll = 0;
    let targetScroll = 0;
    let ease = 0.075;

    ScrollTrigger.create({
      onUpdate: (self) => {
        targetScroll = self.scroll();
        const delta = targetScroll - currentScroll;
        velocityRef.current = delta * speed;

        // Apply velocity-based transform
        if (direction === "horizontal") {
          gsap.to(container, {
            x: velocityRef.current * 0.5,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(container, {
            y: velocityRef.current * 0.2,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      },
    });

    const animate = () => {
      currentScroll += (targetScroll - currentScroll) * ease;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed, direction]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
