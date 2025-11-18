"use client";

import { useEffect, useRef } from "react";

export default function CarAnimation() {
  const roadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add subtle parallax effect on scroll
    const handleScroll = () => {
      if (roadRef.current) {
        const scrolled = window.scrollY;
        roadRef.current.style.transform = `translateX(${scrolled * 0.05}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-0 overflow-hidden">
      {/* Road background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-600/40 via-gray-500/30 to-transparent dark:from-gray-800/50 dark:via-gray-700/30 dark:to-transparent">
        {/* Road markings container */}
        <div ref={roadRef} className="absolute bottom-0 w-full h-16">
          {/* Road marking lines */}
          <div className="absolute bottom-8 w-full h-1 flex items-center animate-road-lines">
            <div className="flex gap-8 w-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="h-1 w-12 bg-white/60 dark:bg-white/40"
                  style={{ marginLeft: i === 0 ? "0" : "" }}
                />
              ))}
            </div>
          </div>

          {/* Car 1 - Sports car */}
          <div className="absolute bottom-4 animate-car-1">
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Car body */}
              <path
                d="M10 25 L20 15 L45 15 L55 25 L70 25 L70 32 L10 32 Z"
                fill="#E53935"
                stroke="#C62828"
                strokeWidth="1"
              />
              {/* Car roof */}
              <path
                d="M25 15 L30 8 L48 8 L50 15 Z"
                fill="#C62828"
                stroke="#B71C1C"
                strokeWidth="1"
              />
              {/* Windows */}
              <path
                d="M27 14 L31 10 L42 10 L45 14 Z"
                fill="#64B5F6"
                fillOpacity="0.6"
              />
              {/* Wheels */}
              <circle cx="20" cy="32" r="5" fill="#212121" />
              <circle cx="20" cy="32" r="3" fill="#757575" />
              <circle cx="60" cy="32" r="5" fill="#212121" />
              <circle cx="60" cy="32" r="3" fill="#757575" />
              {/* Headlight */}
              <circle cx="68" cy="27" r="2" fill="#FFF59D" fillOpacity="0.9" />
            </svg>
          </div>

          {/* Car 2 - City car */}
          <div className="absolute bottom-4 animate-car-2">
            <svg width="70" height="38" viewBox="0 0 70 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Car body */}
              <rect x="8" y="20" width="54" height="12" rx="2" fill="#1E88E5" stroke="#1565C0" strokeWidth="1" />
              {/* Car roof */}
              <path
                d="M20 20 L25 12 L45 12 L50 20 Z"
                fill="#1565C0"
                stroke="#0D47A1"
                strokeWidth="1"
              />
              {/* Windows */}
              <path
                d="M23 19 L26 14 L44 14 L47 19 Z"
                fill="#64B5F6"
                fillOpacity="0.6"
              />
              {/* Wheels */}
              <circle cx="18" cy="32" r="5" fill="#212121" />
              <circle cx="18" cy="32" r="3" fill="#757575" />
              <circle cx="52" cy="32" r="5" fill="#212121" />
              <circle cx="52" cy="32" r="3" fill="#757575" />
              {/* Headlight */}
              <circle cx="60" cy="24" r="2" fill="#FFF59D" fillOpacity="0.9" />
            </svg>
          </div>

          {/* Car 3 - SUV */}
          <div className="absolute bottom-4 animate-car-3">
            <svg width="85" height="45" viewBox="0 0 85 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Car body */}
              <rect x="10" y="18" width="65" height="16" rx="2" fill="#43A047" stroke="#2E7D32" strokeWidth="1" />
              {/* Car roof */}
              <rect x="20" y="8" width="45" height="10" rx="2" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
              {/* Windows */}
              <rect x="23" y="11" width="18" height="7" rx="1" fill="#64B5F6" fillOpacity="0.6" />
              <rect x="44" y="11" width="18" height="7" rx="1" fill="#64B5F6" fillOpacity="0.6" />
              {/* Wheels */}
              <circle cx="22" cy="34" r="6" fill="#212121" />
              <circle cx="22" cy="34" r="4" fill="#757575" />
              <circle cx="63" cy="34" r="6" fill="#212121" />
              <circle cx="63" cy="34" r="4" fill="#757575" />
              {/* Headlight */}
              <circle cx="73" cy="25" r="2.5" fill="#FFF59D" fillOpacity="0.9" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes road-lines {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-80px);
          }
        }

        @keyframes car-drive-1 {
          0% {
            transform: translateX(-10%);
          }
          100% {
            transform: translateX(110vw);
          }
        }

        @keyframes car-drive-2 {
          0% {
            transform: translateX(-15%);
          }
          100% {
            transform: translateX(115vw);
          }
        }

        @keyframes car-drive-3 {
          0% {
            transform: translateX(-20%);
          }
          100% {
            transform: translateX(120vw);
          }
        }

        .animate-road-lines {
          animation: road-lines 2s linear infinite;
        }

        .animate-car-1 {
          animation: car-drive-1 12s linear infinite;
        }

        .animate-car-2 {
          animation: car-drive-2 15s linear infinite;
          animation-delay: -5s;
        }

        .animate-car-3 {
          animation: car-drive-3 18s linear infinite;
          animation-delay: -10s;
        }
      `}</style>
    </div>
  );
}
