"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import { StoryScroll } from "./StoryScroll";
import { ProjectData } from "@/lib/projects-data";

interface ProjectTemplateProps {
  project: ProjectData;
}

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  exit: { 
    opacity: 0, 
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export function ProjectTemplate({ project }: ProjectTemplateProps) {
  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-black text-white" // Using strict primary #000000
    >
      {/* Fixed Back Navigation */}
      <div className="fixed top-8 left-6 md:left-12 z-50 mix-blend-difference">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
        >
          <MoveLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* GSAP Story Scroll Experience */}
      <StoryScroll data={project} />

      {/* Bottom Navigation */}
      <div className="bg-[#0A0A0A] py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {project.prevProject ? (
            <Link href={`/projects/${project.prevProject.id}`} className="group flex flex-col items-start">
              <span className="text-white/40 uppercase tracking-widest text-xs mb-2">Previous Project</span>
              <div className="flex items-center gap-4 text-2xl md:text-4xl text-white font-medium group-hover:text-primary transition-colors">
                <MoveLeft className="w-8 h-8 transition-transform group-hover:-translate-x-2" />
                {project.prevProject.title}
              </div>
            </Link>
          ) : <div />}

          {project.nextProject ? (
            <Link href={`/projects/${project.nextProject.id}`} className="group flex flex-col items-end text-right">
              <span className="text-white/40 uppercase tracking-widest text-xs mb-2">Next Project</span>
              <div className="flex items-center gap-4 text-2xl md:text-4xl text-white font-medium group-hover:text-primary transition-colors">
                {project.nextProject.title}
                <MoveRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </motion.main>
  );
}
