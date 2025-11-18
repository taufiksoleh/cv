"use client";

import { useEffect, useRef } from "react";

export default function LandscapeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-blue-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-black" />

      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-20"
        style={{
          filter: "brightness(1.1) contrast(0.9)",
          mixBlendMode: "normal"
        }}
      >
        {/* Using a free Pexels landscape video with clouds */}
        <source
          src="https://videos.pexels.com/video-files/4625987/4625987-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        {/* Fallback message */}
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20" />
    </div>
  );
}
