"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectData } from "@/lib/projects-data";

interface ProjectTileProps {
  project: Pick<ProjectData, "id" | "title" | "description">;
}

export function ProjectTile({ project }: ProjectTileProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block w-full h-full">
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="group relative h-64 md:h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-2xl transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        
        <div className="relative z-10 flex h-full flex-col justify-end">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm text-zinc-400">
            {project.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
