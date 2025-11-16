"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
