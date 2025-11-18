"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AppIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  color?: string;
}

export default function AppIcon({ icon: Icon, label, onClick, color = "var(--primary)" }: AppIconProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-4 rounded-oneui-lg hover:bg-[var(--background-secondary)] transition-colors group"
    >
      <div
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-oneui-xl shadow-oneui-md group-hover:shadow-oneui-lg transition-all"
        style={{ backgroundColor: color }}
      >
        <Icon size={32} className="text-white md:w-10 md:h-10" />
      </div>
      <span className="text-sm md:text-base font-medium text-[var(--foreground)] text-center max-w-[5rem] truncate">
        {label}
      </span>
    </motion.button>
  );
}
