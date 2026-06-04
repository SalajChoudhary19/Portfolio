"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DisplayCards } from "./display-cards";
import { MenuToggle } from "./menu-toggle";

import { Sparkles, User, Briefcase, Mail, FileText, Award } from "lucide-react";
import { DisplayCardProps } from "./display-cards";

interface AnimatedNavigationOverlayProps {
  isOpen: boolean;
  onClose: (id?: string) => void;
}

const baseCardClassName = "before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0";

const generateNavItems = (onClose: (id?: string) => void): DisplayCardProps[] => [
  {
    icon: <User className="size-4 text-white" />,
    title: "About",
    description: "Learn more about my background.",
    date: "01",
    onClick: () => onClose("about"),
    className: `[grid-area:stack] hover:-translate-y-10 ${baseCardClassName}`,
  },
  {
    icon: <Briefcase className="size-4 text-white" />,
    title: "Projects",
    description: "View my recent work.",
    date: "02",
    onClick: () => onClose("projects"),
    className: `[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 ${baseCardClassName}`,
  },
  {
    icon: <Mail className="size-4 text-white" />,
    title: "Contact",
    description: "Get in touch with me.",
    date: "03",
    onClick: () => onClose("contact"),
    className: `[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 ${baseCardClassName}`,
  },
  {
    icon: <FileText className="size-4 text-white" />,
    title: "Resume",
    description: "View my professional experience.",
    date: "04",
    onClick: () => onClose("resume"),
    className: `[grid-area:stack] translate-x-36 translate-y-30 hover:translate-y-20 ${baseCardClassName}`,
  },
];

const overlayVariants = {
  hidden: { 
    opacity: 0, 
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] // Quintic ease out
    }
  },
  visible: { 
    opacity: 1, 
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.04,
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const AnimatedNavigationOverlay = ({ isOpen, onClose }: AnimatedNavigationOverlayProps) => {
  // Prevent scrolling when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onClose()}
            className="fixed inset-0 z-40 bg-[#000000]/60 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Navigation Container */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Bottom Center Toggle */}
            <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
              <MenuToggle isOpen={isOpen} toggle={() => onClose()} layoutId="aether-menu-toggle" />
            </div>

            {/* Cards Stack */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-full max-w-sm px-4 pointer-events-auto">
              {/* Offset by exactly half the total cascade distance (4.5rem X, 3.75rem Y) to visually center the 4-tile stack */}
              <div className="relative flex justify-center items-center h-[400px] w-full -ml-[4.5rem] -mt-[3.75rem]">
                <DisplayCards 
                  cards={generateNavItems(onClose)} 
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
