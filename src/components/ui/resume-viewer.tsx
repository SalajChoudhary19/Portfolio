"use client";

import React from "react";
import { Download } from "lucide-react";

export const ResumeViewer = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen pb-32 pt-20 px-4 md:px-8 flex flex-col items-center">
      <div className="flex w-full max-w-7xl items-center justify-between mb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
          Resume
        </h1>
        <a
          href="/mainresume.pdf"
          download="Salaj_Choudhary_Resume.pdf"
          className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download PDF</span>
          <span className="sm:hidden">Download</span>
        </a>
      </div>

      <div className="w-full max-w-7xl flex-grow h-[80vh] min-h-[700px] overflow-hidden rounded-2xl bg-zinc-900/40 border border-border shadow-2xl">
        <iframe 
          src="/mainresume.pdf#toolbar=0&navpanes=0" 
          className="w-full h-full border-none rounded-2xl"
          title="Salaj Choudhary Resume"
        />
      </div>
    </div>
  );
};
