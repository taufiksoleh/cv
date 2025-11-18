"use client";

import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, Move, Minus } from "lucide-react";
import { useEffect, useState, useRef } from "react";

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
  const [isResizing, setIsResizing] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const resizeStart = useRef({ width: 0, height: 0, x: 0, y: 0 });

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
    setPosition({ x: info.point.x, y: info.point.y });
  };

  const handleResizeStart = (e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    resizeStart.current = {
      width: dimensions.width,
      height: dimensions.height,
      x: e.clientX,
      y: e.clientY,
    };

    const handleResizeMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - resizeStart.current.x;
      const deltaY = moveEvent.clientY - resizeStart.current.y;

      let newWidth = resizeStart.current.width;
      let newHeight = resizeStart.current.height;

      if (direction.includes("e")) {
        newWidth = Math.max(400, resizeStart.current.width + deltaX);
      }
      if (direction.includes("s")) {
        newHeight = Math.max(300, resizeStart.current.height + deltaY);
      }
      if (direction.includes("w")) {
        newWidth = Math.max(400, resizeStart.current.width - deltaX);
      }
      if (direction.includes("n")) {
        newHeight = Math.max(300, resizeStart.current.height - deltaY);
      }

      setDimensions({ width: newWidth, height: newHeight });
    };

    const handleResizeEnd = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", handleResizeMove);
      document.removeEventListener("mouseup", handleResizeEnd);
    };

    document.addEventListener("mousemove", handleResizeMove);
    document.addEventListener("mouseup", handleResizeEnd);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Modal - Draggable and Resizable - macOS Style */}
          <motion.div
            ref={modalRef}
            drag
            dragMomentum={false}
            dragElastic={0}
            dragConstraints={{
              top: 0,
              left: -window.innerWidth + 400,
              right: window.innerWidth - 400,
              bottom: window.innerHeight - 100,
            }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onPointerDown={onFocus}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.3, bounce: 0.25 }}
            className={`fixed rounded-xl shadow-2xl overflow-hidden flex flex-col ${
              isDragging ? "cursor-grabbing" : ""
            } ${isResizing ? "select-none" : ""}`}
            style={{
              touchAction: "none",
              zIndex: zIndex,
              width: dimensions.width,
              height: dimensions.height,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(var(--background-rgb, 255, 255, 255), 0.8)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            {/* macOS-Style Header with Traffic Lights */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b border-white/10 cursor-grab active:cursor-grabbing"
              style={{
                backgroundColor: "rgba(var(--background-secondary-rgb, 245, 245, 245), 0.6)",
              }}
            >
              <div className="flex items-center gap-2">
                {/* macOS Traffic Light Buttons */}
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 transition-colors"
                  aria-label="Close"
                />
                {onMinimize && (
                  <button
                    onClick={onMinimize}
                    className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 transition-colors"
                    aria-label="Minimize"
                  />
                )}
                <button
                  className="w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/80 transition-colors"
                  aria-label="Maximize"
                />
              </div>
              <h2 className="absolute left-1/2 transform -translate-x-1/2 text-sm font-semibold text-[var(--foreground)] opacity-80">
                {title}
              </h2>
              <div className="w-16" /> {/* Spacer for centering */}
            </div>

            {/* Modal Content - Scrollable */}
            <div
              className="flex-1 overflow-y-auto"
              onPointerDown={(e) => e.stopPropagation()}
              style={{ touchAction: "pan-y" }}
            >
              <div className="p-6">
                {children}
              </div>
            </div>

            {/* Resize Handles */}
            {/* Corner Handles */}
            <div
              className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
              onMouseDown={(e) => handleResizeStart(e, "se")}
              style={{ touchAction: "none" }}
            />
            <div
              className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize"
              onMouseDown={(e) => handleResizeStart(e, "sw")}
              style={{ touchAction: "none" }}
            />
            <div
              className="absolute top-0 right-0 w-4 h-4 cursor-ne-resize"
              onMouseDown={(e) => handleResizeStart(e, "ne")}
              style={{ touchAction: "none" }}
            />
            <div
              className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize"
              onMouseDown={(e) => handleResizeStart(e, "nw")}
              style={{ touchAction: "none" }}
            />
            {/* Edge Handles */}
            <div
              className="absolute bottom-0 left-4 right-4 h-1 cursor-s-resize"
              onMouseDown={(e) => handleResizeStart(e, "s")}
              style={{ touchAction: "none" }}
            />
            <div
              className="absolute top-0 left-4 right-4 h-1 cursor-n-resize"
              onMouseDown={(e) => handleResizeStart(e, "n")}
              style={{ touchAction: "none" }}
            />
            <div
              className="absolute left-0 top-4 bottom-4 w-1 cursor-w-resize"
              onMouseDown={(e) => handleResizeStart(e, "w")}
              style={{ touchAction: "none" }}
            />
            <div
              className="absolute right-0 top-4 bottom-4 w-1 cursor-e-resize"
              onMouseDown={(e) => handleResizeStart(e, "e")}
              style={{ touchAction: "none" }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
