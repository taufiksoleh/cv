"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
  href,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;

    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const handleMouseEnter = () => {
    const button = buttonRef.current;
    if (!button) return;

    gsap.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const commonProps = {
    ref: buttonRef as any,
    className: `magnetic ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
  };

  if (href) {
    return (
      <a {...commonProps} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button {...commonProps} onClick={onClick}>
      {children}
    </button>
  );
}
