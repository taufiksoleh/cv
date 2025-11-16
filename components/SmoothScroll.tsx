"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Scroll progress indicator
    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress";
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      if (progressBar && progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
