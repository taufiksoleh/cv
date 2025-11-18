"use client";

import { Wifi, Battery, Signal } from "lucide-react";
import { useEffect, useState } from "react";

export default function AndroidStatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-[var(--background)] border-b border-[var(--border)] flex items-center justify-between px-4 z-40 text-[var(--foreground)] text-xs">
      <div className="flex items-center gap-2">
        <span className="font-medium">{time}</span>
      </div>
      <div className="flex items-center gap-2">
        <Signal size={14} />
        <Wifi size={14} />
        <Battery size={14} />
      </div>
    </div>
  );
}
