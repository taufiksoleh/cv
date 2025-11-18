"use client";

import { useEffect, useRef } from "react";

export default function CloudAnimation() {
  const cloudsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add slight parallax effect on scroll
    const handleScroll = () => {
      if (cloudsRef.current) {
        const scrolled = window.scrollY;
        cloudsRef.current.style.transform = `translateX(-${scrolled * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-48 pointer-events-none z-0 overflow-hidden">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 via-blue-100/20 to-transparent dark:from-blue-900/20 dark:via-blue-800/10 dark:to-transparent" />

      {/* Clouds container */}
      <div ref={cloudsRef} className="relative w-full h-full">
        {/* Cloud 1 - Large */}
        <div className="cloud absolute top-8 animate-cloud-1">
          <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25" cy="25" rx="15" ry="12" fill="white" fillOpacity="0.8" />
            <ellipse cx="45" cy="20" rx="20" ry="15" fill="white" fillOpacity="0.8" />
            <ellipse cx="65" cy="25" rx="15" ry="12" fill="white" fillOpacity="0.8" />
            <ellipse cx="50" cy="28" rx="25" ry="10" fill="white" fillOpacity="0.8" />
          </svg>
        </div>

        {/* Cloud 2 - Medium */}
        <div className="cloud absolute top-16 animate-cloud-2">
          <svg width="80" height="35" viewBox="0 0 80 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="20" cy="20" rx="12" ry="10" fill="white" fillOpacity="0.7" />
            <ellipse cx="36" cy="17" rx="16" ry="12" fill="white" fillOpacity="0.7" />
            <ellipse cx="52" cy="20" rx="12" ry="10" fill="white" fillOpacity="0.7" />
            <ellipse cx="40" cy="23" rx="20" ry="8" fill="white" fillOpacity="0.7" />
          </svg>
        </div>

        {/* Cloud 3 - Small */}
        <div className="cloud absolute top-4 animate-cloud-3">
          <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="15" cy="16" rx="10" ry="8" fill="white" fillOpacity="0.6" />
            <ellipse cx="28" cy="14" rx="12" ry="9" fill="white" fillOpacity="0.6" />
            <ellipse cx="40" cy="16" rx="10" ry="8" fill="white" fillOpacity="0.6" />
            <ellipse cx="30" cy="18" rx="15" ry="6" fill="white" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Cloud 4 - Large */}
        <div className="cloud absolute top-12 animate-cloud-4">
          <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25" cy="25" rx="15" ry="12" fill="white" fillOpacity="0.75" />
            <ellipse cx="45" cy="20" rx="20" ry="15" fill="white" fillOpacity="0.75" />
            <ellipse cx="65" cy="25" rx="15" ry="12" fill="white" fillOpacity="0.75" />
            <ellipse cx="50" cy="28" rx="25" ry="10" fill="white" fillOpacity="0.75" />
          </svg>
        </div>

        {/* Cloud 5 - Medium */}
        <div className="cloud absolute top-20 animate-cloud-5">
          <svg width="70" height="32" viewBox="0 0 70 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="18" cy="18" rx="11" ry="9" fill="white" fillOpacity="0.65" />
            <ellipse cx="32" cy="16" rx="14" ry="11" fill="white" fillOpacity="0.65" />
            <ellipse cx="46" cy="18" rx="11" ry="9" fill="white" fillOpacity="0.65" />
            <ellipse cx="35" cy="20" rx="18" ry="7" fill="white" fillOpacity="0.65" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes cloud-drift-1 {
          0% {
            transform: translateX(-10%);
          }
          100% {
            transform: translateX(110vw);
          }
        }

        @keyframes cloud-drift-2 {
          0% {
            transform: translateX(-15%);
          }
          100% {
            transform: translateX(115vw);
          }
        }

        @keyframes cloud-drift-3 {
          0% {
            transform: translateX(-20%);
          }
          100% {
            transform: translateX(120vw);
          }
        }

        @keyframes cloud-drift-4 {
          0% {
            transform: translateX(-5%);
          }
          100% {
            transform: translateX(105vw);
          }
        }

        @keyframes cloud-drift-5 {
          0% {
            transform: translateX(-12%);
          }
          100% {
            transform: translateX(112vw);
          }
        }

        .animate-cloud-1 {
          animation: cloud-drift-1 60s linear infinite;
        }

        .animate-cloud-2 {
          animation: cloud-drift-2 45s linear infinite;
          animation-delay: -10s;
        }

        .animate-cloud-3 {
          animation: cloud-drift-3 80s linear infinite;
          animation-delay: -25s;
        }

        .animate-cloud-4 {
          animation: cloud-drift-4 70s linear infinite;
          animation-delay: -35s;
        }

        .animate-cloud-5 {
          animation: cloud-drift-5 55s linear infinite;
          animation-delay: -15s;
        }
      `}</style>
    </div>
  );
}
