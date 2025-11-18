"use client";

import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, Move, Minus } from "lucide-react";
import { useEffect, useState } from "react";

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize?: () => void;
  title: string;
  children: React.ReactNode;
  zIndex?: number;
  onFocus?: () => void;
}

export default function AppModal({
  isOpen,
  onClose,
  onMinimize,
  title,
  children,
  zIndex = 50,
  onFocus
}: AppModalProps) {
  const [isDragging, setIsDragging] = useState(false);

  // Don't prevent body scroll when multiple modals can be open
  useEffect(() => {
    // Allow page scrolling with multiple windows
    document.body.style.overflow = "unset";
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Modal - Draggable - No backdrop for multi-window support */}
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.1}
            dragConstraints={{
              top: -window.innerHeight / 3,
              left: -window.innerWidth / 3,
              right: window.innerWidth / 3,
              bottom: window.innerHeight / 3,
            }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onPointerDown={onFocus}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.3, bounce: 0.25 }}
            className={`fixed inset-4 md:inset-8 lg:inset-16 bg-[var(--background)] rounded-oneui-xl shadow-oneui-xl overflow-hidden flex flex-col ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              touchAction: "none",
              zIndex: zIndex
            }}
          >
            {/* Modal Header - Samsung One UI Style with Drag Handle */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--background-secondary)]">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-oneui-md bg-[var(--background-tertiary)] text-[var(--foreground-secondary)]">
                  <Move size={18} />
                </div>
                <h2 className="text-2xl font-bold text-[var(--foreground)]">{title}</h2>
              </div>
              <div className="flex items-center gap-2">
                {onMinimize && (
                  <button
                    onClick={onMinimize}
                    className="p-2 rounded-oneui-md hover:bg-[var(--background-tertiary)] text-[var(--foreground)] transition-colors"
                    aria-label="Minimize"
                  >
                    <Minus size={24} />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-oneui-md hover:bg-[var(--background-tertiary)] text-[var(--foreground)] transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div
              className="flex-1 overflow-y-auto"
              onPointerDown={(e) => e.stopPropagation()}
              style={{ touchAction: "pan-y" }}
            >
              <div className="oneui-container py-6">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
