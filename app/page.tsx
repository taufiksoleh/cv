"use client";

import AndroidStatusBar from "@/components/AndroidStatusBar";
import Hero from "@/components/Hero";
import CloudAnimation from "@/components/CloudAnimation";
import CarAnimation from "@/components/CarAnimation";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--background)]">
      <CloudAnimation />
      <AndroidStatusBar />
      <Hero />
      <CarAnimation />
    </main>
  );
}
