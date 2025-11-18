"use client";

import { personalInfo } from "@/data/cv-data";
import { Heart, Coffee, Code2, Rocket } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Code2, value: "5+", label: "Years Experience", color: "#1E88E5" },
    { icon: Rocket, value: "50+", label: "Projects Completed", color: "#43A047" },
    { icon: Heart, value: "30+", label: "Happy Clients", color: "#FB8C00" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee", color: "#8E24AA" },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className="oneui-card-elevated">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-3xl font-bold">
            {personalInfo.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)]">{personalInfo.title}</h3>
            <p className="text-[var(--foreground-secondary)]">{personalInfo.name}</p>
          </div>
        </div>
        <p className="oneui-body">
          {personalInfo.description}
        </p>
        <div className="mt-4">
          <hr className="oneui-divider" />
          <p className="oneui-body mt-4">
            I love creating beautiful, interactive websites that make people smile!
            When I'm not coding, you'll find me exploring new animation techniques
            and pushing the boundaries of what's possible on the web.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="oneui-card text-center stagger-children"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-12 h-12 mx-auto mb-3 rounded-oneui-md flex items-center justify-center"
                style={{ backgroundColor: stat.color }}
              >
                <Icon className="text-white" size={24} />
              </div>
              <h4 className="text-3xl font-bold text-[var(--foreground)] mb-1">
                {stat.value}
              </h4>
              <p className="oneui-caption">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
