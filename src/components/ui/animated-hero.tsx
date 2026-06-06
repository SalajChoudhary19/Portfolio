"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Developer", "Designer", "Engineer", "Creator", "Innovator"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl tracking-tighter text-center font-regular flex flex-col items-center justify-center gap-2">
              <span className="text-white py-2">Hi, I'm Salaj.</span>
              <span className="relative grid overflow-hidden text-center text-white px-2 py-6 leading-tight">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="col-start-1 row-start-1 font-semibold"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? "-150%" : "150%",
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

          </div>
          <div className="flex flex-row gap-3">
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
