"use client";

import AndroidStatusBar from "@/components/AndroidStatusBar";
import Hero from "@/components/Hero";
import CloudAnimation from "@/components/CloudAnimation";
import LandscapeVideo from "@/components/LandscapeVideo";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--background)]">
      <LandscapeVideo />
      <CloudAnimation />
      <AndroidStatusBar />
      <Hero />
    </main>
  );
}
