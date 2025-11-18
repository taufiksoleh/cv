"use client";

import { skills } from "@/data/cv-data";
import { Code, Database, Wrench } from "lucide-react";

const categoryIcons = {
  frontend: { Icon: Code, color: "#1E88E5" },
  backend: { Icon: Database, color: "#43A047" },
  tools: { Icon: Wrench, color: "#FB8C00" },
};

export default function Skills() {
  const renderSkillCategory = (
    categoryKey: "frontend" | "backend" | "tools",
    skillList: any[]
  ) => {
    const { Icon, color } = categoryIcons[categoryKey];
    return (
      <div className="oneui-card">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-oneui-md flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <Icon className="text-white" size={20} />
          </div>
          <h3 className="text-lg font-bold capitalize text-[var(--foreground)]">
            {categoryKey}
          </h3>
        </div>

        <div className="space-y-3">
          {skillList.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-[var(--foreground)]">
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-[var(--primary)]">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-[var(--background-secondary)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {renderSkillCategory("frontend", skills.frontend)}
        {renderSkillCategory("backend", skills.backend)}
        {renderSkillCategory("tools", skills.tools)}
      </div>

      {/* Top Skills */}
      <div className="oneui-card-elevated">
        <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
          Top Competencies
        </h3>
        <div className="flex flex-wrap gap-2">
          {[...skills.frontend.slice(0, 3), ...skills.backend.slice(0, 3)].map((skill) => (
            <span
              key={skill.name}
              className="oneui-chip oneui-chip-primary"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
