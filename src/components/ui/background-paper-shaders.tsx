"use client";

import React, { useEffect, useState, useRef } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

export function BackgroundPaperShaders() {
  const [speed, setSpeed] = useState(0.5);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setSpeed(0.1);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setSpeed(e.matches ? 0.1 : 0.5);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientWidth, clientHeight } = document.documentElement;
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / clientWidth) * 2 - 1;
      const y = (e.clientY / clientHeight) * 2 - 1;
      
      // Use requestAnimationFrame to avoid blocking
      requestAnimationFrame(() => {
        setMousePosition({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate subtle parallax based on mouse
  const transformStyle = {
    transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px) scale(1.05)`,
    transition: "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-black"
    >
      <div className="absolute inset-0 w-full h-full" style={transformStyle}>
        <MeshGradient
          colors={["#000000", "#0A0A0A", "#141414", "#1F1F1F", "#333333"]}
          speed={speed}
          distortion={0.6}
          swirl={0.8}
          grainMixer={0.5}
          grainOverlay={0} // We will use a separate noise layer as requested
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
