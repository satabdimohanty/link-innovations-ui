"use client";

import { ReactNode, useRef, useState } from "react";

interface GlareHoverProps {
  children: ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
}

export default function GlareHover({
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 200,
  transitionDuration = 500,
  playOnce = false,
}: GlareHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const percentX = (x / width) * 100;
    const percentY = (y / height) * 100;

    setGlareStyle({
      background: `linear-gradient(${glareAngle}deg, rgba(255,255,255,${glareOpacity}) 0%, transparent 80%)`,
      left: `${percentX}%`,
      top: `${percentY}%`,
      width: `${glareSize}px`,
      height: `${glareSize}px`,
      transform: `translate(-50%, -50%)`,
      position: "absolute",
      pointerEvents: "none",
      borderRadius: "50%",
      transition: `all ${transitionDuration}ms ease-out`,
    });
  };

  const handleMouseLeave = () => {
    if (!playOnce) setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      {children}
      <div style={glareStyle}></div>
    </div>
  );
}
