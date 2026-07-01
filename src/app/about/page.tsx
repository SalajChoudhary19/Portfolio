"use client";

import { PortfolioHeroBackground } from "@/components/backgrounds/PortfolioHeroBackground";
import { motion } from "framer-motion";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0, perspective: 1000 },
    visible: {
      opacity: 1,
      perspective: 1000,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], // Custom ease out
      },
    },
  };

  const highlightClass = "text-white font-medium transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] cursor-pointer inline-block";

  return (
    <main className="min-h-screen bg-black">
      <PortfolioHeroBackground>
        <div className="flex flex-col items-center justify-center min-h-screen p-6 py-24 relative z-30">
          <motion.div 
            className="max-w-4xl w-full mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-12 text-center tracking-tight drop-shadow-2xl"
            >
              About Me
            </motion.h1>
            
            <div className="text-lg md:text-xl text-white/70 space-y-4 text-left leading-relaxed font-light">
              {[
              
              ].map((text, idx) => (
                <motion.p 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="p-5 rounded-2xl border border-transparent hover:border-white/10 cursor-default transition-colors duration-300"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </PortfolioHeroBackground>
    </main>
  );
}
