"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/ui/3d-box-loader-animation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // If the pathname changes, instantly set loading to true DURING render 
  // before the browser paints the new page. This eliminates the page flash.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsLoading(true);
  }

  // Handle the loading timer
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
        setIsLoading(false);
      }, pathname === "/" ? 1500 : 1000); // slightly longer on first load if needed
      return () => clearTimeout(timer);
    }
  }, [isLoading, pathname]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50] flex items-center justify-center bg-transparent"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* We simply hide the children entirely via opacity-0 while loading. No AnimatePresence wrapper on children, 
          which avoids the exit/enter rendering flash. They just fade in cleanly once loading finishes. */}
      <div className={`w-full flex-grow flex flex-col ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}`}>
        {children}
      </div>
    </>
  );
}
