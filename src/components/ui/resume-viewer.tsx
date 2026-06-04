"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveLeft, Download } from "lucide-react";
import { ContainerScroll } from "./container-scroll-animation";

interface ResumeViewerProps {
  onClose: () => void;
}

export const ResumeViewer = ({ onClose }: ResumeViewerProps) => {
  // Force window to top when opening so the absolute positioning aligns perfectly
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Hide body overflow to prevent double scrollbars if the main app is long, 
    // actually we WANT the body to scroll for ContainerScroll to work.
    // So we make sure the body can scroll.
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 bg-background min-h-screen pb-10"
    >
      {/* Fixed Header with Back Button */}
      <div className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between p-6 bg-gradient-to-b from-background to-transparent pointer-events-none">
        <button
          onClick={onClose}
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/10"
        >
          <MoveLeft className="h-4 w-4" />
          Back to Portfolio
        </button>
        <a
          href="/Resumemain.pdf"
          download="Salaj_Choudhary_Resume.pdf"
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </div>

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground">
              Explore my professional journey <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-primary">
                Resume
              </span>
            </h1>
          </>
        }
      >
        {/* Render the actual PDF inside the 3D cinematic tablet screen */}
        <div className="h-full w-full overflow-hidden rounded-[2rem] bg-zinc-900/40">
          <iframe 
            src="/Resumemain.pdf#toolbar=0&navpanes=0&scrollbar=0" 
            className="w-full h-full border-none rounded-[2rem]"
            title="Salaj Choudhary Resume"
          />
        </div>
      </ContainerScroll>
    </motion.div>
  );
};
