"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProjectData } from "@/lib/projects-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function StoryScroll({ data }: { data: ProjectData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const panels = panelsRef.current;
    if (!panels || panels.length === 0) return;

    // Pin the container so scrolling triggers the animation over the panels
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${panels.length * 100}%`,
      pin: true,
      scrub: true,
    });

    // Setup timeline for panels sliding over
    panels.forEach((panel, i) => {
      if (i === 0) return; // First panel is initially visible

      // The animation: slides up from bottom and rotates from back
      gsap.fromTo(
        panel,
        { 
          yPercent: 100, 
          rotationX: -15, 
          transformPerspective: 1000, 
          opacity: 0.5 
        },
        {
          yPercent: 0,
          rotationX: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `top+=${(i - 1) * window.innerHeight} top`,
            end: () => `top+=${i * window.innerHeight} top`,
            scrub: true,
          }
        }
      );
      
      // Dim the previous panel as the new one covers it to enhance depth
      if (panels[i - 1]) {
        gsap.to(panels[i - 1], {
          opacity: 0.2,
          scale: 0.95,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `top+=${(i - 1) * window.innerHeight} top`,
            end: () => `top+=${i * window.innerHeight} top`,
            scrub: true,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black text-white perspective-[1000px]">
      {data.sections.map((section, idx) => {
        const isDarker = idx % 2 !== 0;
        return (
          <div 
            key={section.id}
            ref={(el) => { if (el) panelsRef.current[idx] = el; }}
            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-between px-6 md:px-12 xl:px-24 py-12 md:py-24 ${isDarker ? 'bg-[#0A0A0A]' : 'bg-[#000000]'}`}
            style={{ zIndex: idx }}
          >
            {/* Top: Section Number */}
            <div className="text-white/40 tracking-widest uppercase text-xs md:text-sm font-medium border-b border-white/5 pb-4 mb-8 md:mb-12">
              {section.label} — {section.heading}
            </div>

            {/* Middle: Main Content */}
            <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
              {section.layout === "hero" ? (
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    {data.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed">
                    {data.tagline}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {data.technologies.map(tech => (
                      <span key={tech} className="px-4 py-2 rounded-full border border-white/10 bg-[#111111] text-sm text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center`}>
                  
                  {/* Content Column */}
                  <div className={`flex flex-col ${section.layout === 'right-content' ? 'lg:order-2' : ''}`}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white">
                      {section.heading}
                    </h2>
                    <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/60 leading-relaxed">
                      {section.content.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* Visual Column / Image Placeholder */}
                  <div className={`relative h-[30vh] lg:h-[60vh] w-full rounded-2xl border border-white/10 bg-[#111111] overflow-hidden flex items-center justify-center ${section.layout === 'right-content' ? 'lg:order-1' : ''}`}>
                    {/* Placeholder for architecture diagram / screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                    <span className="text-white/20 font-mono tracking-widest text-xs md:text-sm relative z-10 px-4 text-center">
                      [ {section.heading} Visual ]
                    </span>
                  </div>

                </div>
              )}
            </div>

            {/* Bottom: Supporting Information */}
            <div className="mt-8 md:mt-12 text-white/40 text-xs md:text-sm flex items-center justify-between border-t border-white/5 pt-6 md:pt-8">
              <span>{data.title}</span>
              <span>Engineering Case Study</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
