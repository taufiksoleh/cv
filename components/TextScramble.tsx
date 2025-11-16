"use client";

import { useEffect, useRef, useState } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  revealSpeed?: number;
}

export default function TextScramble({
  text,
  className = "",
  scrambleSpeed = 50,
  revealSpeed = 100,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("");
  const frameRef = useRef(0);
  const queueRef = useRef<Array<{ from: string; to: string; start: number; end: number }>>([]);

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    const setText = (newText: string) => {
      const oldText = displayText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise<void>((resolve) => {
        queueRef.current = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          queueRef.current.push({ from, to, start, end });
        }
        cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
        update();

        function update() {
          let output = "";
          let complete = 0;
          for (let i = 0, n = queueRef.current.length; i < n; i++) {
            const { from, to, start, end } = queueRef.current[i];
            if (frameRef.current >= end) {
              complete++;
              output += to;
            } else if (frameRef.current >= start) {
              if (!to || Math.random() < 0.28) {
                output += chars[Math.floor(Math.random() * chars.length)];
              } else {
                output += to;
              }
            } else {
              output += from;
            }
          }
          setDisplayText(output);
          if (complete === queueRef.current.length) {
            resolve();
          } else {
            frameRef.current++;
            setTimeout(() => {
              requestAnimationFrame(update);
            }, scrambleSpeed);
          }
        }
      });
      return promise;
    };

    setText(text);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, scrambleSpeed]);

  return <span className={className}>{displayText}</span>;
}
