"use client";
import React, { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { MenuToggle } from "./menu-toggle";
import { AnimatedNavigationOverlay } from "./animated-navigation-overlay";
import { ResumeViewer } from "./resume-viewer";

import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const router = useRouter();

  const handleClose = (id?: string) => {
    setIsOpen(false);
    if (id === "resume") {
      setIsResumeOpen(true);
    } else if (id === "projects") {
      router.push("/projects");
    }
  };

  React.useEffect(() => {
    const handleOpenNav = () => setIsOpen(true);
    window.addEventListener("open-nav", handleOpenNav);
    return () => window.removeEventListener("open-nav", handleOpenNav);
  }, []);

  return (
    <LayoutGroup>
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-6 pointer-events-none">
        {/* Removed top right toggle */}
        <div className="relative w-12 h-12 pointer-events-auto">
          {/* Hamburger menu removed as per user request */}
        </div>
      </div>

      <AnimatedNavigationOverlay isOpen={isOpen} onClose={handleClose} />
      
      <AnimatePresence>
        {isResumeOpen && <ResumeViewer onClose={() => setIsResumeOpen(false)} />}
      </AnimatePresence>
    </LayoutGroup>
  );
};
