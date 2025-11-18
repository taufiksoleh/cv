"use client";

import { useState } from "react";
import { User, Briefcase, Award, FolderGit2, Mail as MailIcon, Github, Linkedin } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/cv-data";
import AppIcon from "./AppIcon";
import AppModal from "./AppModal";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

type AppType = "about" | "experience" | "skills" | "projects" | "contact" | null;

const apps = [
  { id: "about" as AppType, icon: User, label: "About Me", color: "#1E88E5" },
  { id: "experience" as AppType, icon: Briefcase, label: "Experience", color: "#43A047" },
  { id: "skills" as AppType, icon: Award, label: "Skills", color: "#FB8C00" },
  { id: "projects" as AppType, icon: FolderGit2, label: "Projects", color: "#8E24AA" },
  { id: "contact" as AppType, icon: MailIcon, label: "Contact", color: "#E53935" },
];

export default function Hero() {
  const [activeApp, setActiveApp] = useState<AppType>(null);

  const closeModal = () => setActiveApp(null);

  const getModalTitle = () => {
    const app = apps.find(a => a.id === activeApp);
    return app?.label || "";
  };

  const renderModalContent = () => {
    switch (activeApp) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col pt-8 z-10"
      >
        <div className="oneui-container flex-1 flex flex-col">
          {/* Header Section - Top Third */}
          <div className="pt-12 pb-8">
            <div className="stagger-children">
              <p className="text-lg md:text-xl text-[var(--foreground-secondary)] mb-2 drop-shadow-sm">
                Welcome to
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-3 drop-shadow-md">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-[var(--primary)] font-semibold mb-4 drop-shadow-sm">
                {personalInfo.title}
              </p>
              <p className="oneui-body max-w-2xl mb-8 drop-shadow-sm">
                {personalInfo.description}
              </p>

              {/* Quick Social Links */}
              <div className="flex gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[var(--background-secondary)] hover:bg-[var(--primary)] hover:text-white text-[var(--foreground)] rounded-oneui-md transition-all shadow-oneui-sm"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[var(--background-secondary)] hover:bg-[var(--primary)] hover:text-white text-[var(--foreground)] rounded-oneui-md transition-all shadow-oneui-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* App Icons Grid - Bottom Two Thirds */}
          <div className="flex-1 flex items-start pt-8">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 w-full">
              {apps.map((app, index) => (
                <div
                  key={app.id}
                  className="fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AppIcon
                    icon={app.icon}
                    label={app.label}
                    color={app.color}
                    onClick={() => setActiveApp(app.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Hint */}
          <div className="py-6 text-center">
            <p className="text-sm text-[var(--foreground-tertiary)]">
              Tap any icon to explore
            </p>
          </div>
        </div>
      </section>

      {/* Modal for App Content */}
      <AppModal
        isOpen={activeApp !== null}
        onClose={closeModal}
        title={getModalTitle()}
      >
        {renderModalContent()}
      </AppModal>
    </>
  );
}
