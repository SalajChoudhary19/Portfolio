"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  toggle: () => void;
  layoutId?: string;
}

export const MenuToggle = ({ isOpen, toggle, layoutId }: MenuToggleProps) => {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}>
      <motion.button
        layoutId={layoutId}
        onClick={toggle}
        className="relative z-50 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-colors hover:bg-white/20 focus:outline-none"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="relative flex h-5 w-5 flex-col items-center justify-center gap-[5px]"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 7 },
            }}
            className="h-[2px] w-5 rounded-full bg-foreground"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="h-[2px] w-5 rounded-full bg-foreground"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -7 },
            }}
            className="h-[2px] w-5 rounded-full bg-foreground"
          />
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
};
