"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BlobCursor() {
  const blobsRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const blobs = useRef<Array<HTMLDivElement>>([]);

  useEffect(() => {
    const container = blobsRef.current;
    if (!container) return;

    // Create blob elements
    const blobCount = 12;
    for (let i = 0; i < blobCount; i++) {
      const blob = document.createElement("div");
      blob.className = "blob-trail";
      blob.style.cssText = `
        position: fixed;
        width: ${20 - i * 1.5}px;
        height: ${20 - i * 1.5}px;
        background: radial-gradient(circle, rgba(255, 107, 157, ${0.6 - i * 0.05}), rgba(157, 132, 255, ${0.4 - i * 0.03}));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        mix-blend-mode: screen;
        filter: blur(${i * 2}px);
        transform: translate(-50%, -50%);
      `;
      container.appendChild(blob);
      blobs.current.push(blob);
    }

    let animationFrameId: number;

    const animate = () => {
      blobs.current.forEach((blob, index) => {
        const delay = index * 0.05;
        const targetX = mousePos.current.x;
        const targetY = mousePos.current.y;

        gsap.to(blob, {
          x: targetX,
          y: targetY,
          duration: 0.3 + delay,
          ease: "power2.out",
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      blobs.current.forEach((blob) => blob.remove());
      blobs.current = [];
    };
  }, []);

  return <div ref={blobsRef} className="blob-cursor-container hidden md:block" />;
}
