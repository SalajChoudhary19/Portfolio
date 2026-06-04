"use client";

import React, { ReactNode } from "react";
import dynamic from "next/dynamic";

// Dynamically import the shader to avoid blocking initial render
const BackgroundPaperShaders = dynamic(
  () =>
    import("@/components/ui/background-paper-shaders").then(
      (mod) => mod.BackgroundPaperShaders
    ),
  { ssr: false }
);

interface PortfolioHeroBackgroundProps {
  children: ReactNode;
}

export function PortfolioHeroBackground({
  children,
}: PortfolioHeroBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Layer 1: Shader background */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaperShaders />
      </div>

      {/* Layer 2: Gradient overlays (to ensure text readability) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80 pointer-events-none" />

      {/* Layer 3: Noise texture (opacity 2-5%) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Layer 4 & 5: Content */}
      <div className="relative z-30 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
