"use client";

import { useState } from "react";
import { User, Briefcase, Award, FolderGit2, Mail as MailIcon, Github, Linkedin, Minus, X } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/cv-data";
import AppIcon from "./AppIcon";
import AppModal from "./AppModal";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

type AppType = "about" | "experience" | "skills" | "projects" | "contact";

interface OpenWindow {
  id: AppType;
  isMinimized: boolean;
  zIndex: number;
}

const apps = [
  { id: "about" as AppType, icon: User, label: "About Me", color: "#1E88E5" },
  { id: "experience" as AppType, icon: Briefcase, label: "Experience", color: "#43A047" },
  { id: "skills" as AppType, icon: Award, label: "Skills", color: "#FB8C00" },
  { id: "projects" as AppType, icon: FolderGit2, label: "Projects", color: "#8E24AA" },
  { id: "contact" as AppType, icon: MailIcon, label: "Contact", color: "#E53935" },
];

export default function Hero() {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [nextZIndex, setNextZIndex] = useState(100);

  const openApp = (appId: AppType) => {
    // Check if window is already open
    const existingWindow = openWindows.find(w => w.id === appId);

    if (existingWindow) {
      // If minimized, restore it; if already open, bring to front
      if (existingWindow.isMinimized) {
        setOpenWindows(openWindows.map(w =>
          w.id === appId ? { ...w, isMinimized: false, zIndex: nextZIndex } : w
        ));
        setNextZIndex(nextZIndex + 1);
      } else {
        bringToFront(appId);
      }
    } else {
      // Open new window
      setOpenWindows([...openWindows, { id: appId, isMinimized: false, zIndex: nextZIndex }]);
      setNextZIndex(nextZIndex + 1);
    }
  };

  const closeWindow = (appId: AppType) => {
    setOpenWindows(openWindows.filter(w => w.id !== appId));
  };

  const minimizeWindow = (appId: AppType) => {
    setOpenWindows(openWindows.map(w =>
      w.id === appId ? { ...w, isMinimized: true } : w
    ));
  };

  const bringToFront = (appId: AppType) => {
    setOpenWindows(openWindows.map(w =>
      w.id === appId ? { ...w, zIndex: nextZIndex } : w
    ));
    setNextZIndex(nextZIndex + 1);
  };

  const getAppInfo = (appId: AppType) => {
    return apps.find(a => a.id === appId);
  };

  const renderModalContent = (appId: AppType) => {
    switch (appId) {
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
                    onClick={() => openApp(app.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Hint */}
          <div className="py-6 text-center">
            <p className="text-sm text-[var(--foreground-tertiary)]">
              {openWindows.length > 0
                ? "Click app icons to open multiple windows"
                : "Tap any icon to explore"}
            </p>
          </div>
        </div>
      </section>

      {/* Render all open windows */}
      {openWindows.map((window) => {
        const appInfo = getAppInfo(window.id);
        return (
          <AppModal
            key={window.id}
            isOpen={!window.isMinimized}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            title={appInfo?.label || ""}
            zIndex={window.zIndex}
            onFocus={() => bringToFront(window.id)}
          >
            {renderModalContent(window.id)}
          </AppModal>
        );
      })}

      {/* Taskbar for minimized windows */}
      {openWindows.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-[200] bg-[var(--background-secondary)]/95 backdrop-blur-md border-t border-[var(--border)] px-4 py-2">
          <div className="flex gap-2 items-center justify-center flex-wrap max-w-7xl mx-auto">
            {openWindows.map((window) => {
              const appInfo = getAppInfo(window.id);
              const Icon = appInfo?.icon;
              return (
                <button
                  key={window.id}
                  onClick={() => window.isMinimized ? openApp(window.id) : minimizeWindow(window.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-oneui-md transition-all ${
                    window.isMinimized
                      ? "bg-[var(--background-tertiary)] hover:bg-[var(--background-tertiary)]/80"
                      : "bg-[var(--primary)] text-white shadow-oneui-md"
                  }`}
                  title={appInfo?.label}
                >
                  {Icon && <Icon size={18} />}
                  <span className="text-sm font-medium hidden md:inline">{appInfo?.label}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeWindow(window.id);
                    }}
                    className="ml-2 hover:bg-black/20 rounded p-1 transition-colors"
                    title="Close"
                  >
                    <X size={14} />
                  </button>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
