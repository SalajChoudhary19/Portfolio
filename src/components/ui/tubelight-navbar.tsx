"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import { usePathname, useRouter } from "next/navigation"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  action?: () => void
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const router = useRouter()
  
  const [activeTab, setActiveTab] = useState(() => {
    // Handle initial load directly without useEffect to prevent flash
    const currentItem = items.find(item => item.url === pathname)
    return currentItem ? currentItem.name : items[0].name
  })
  
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Sync active tab if route changes via browser history
    const currentItem = items.find(item => item.url === pathname)
    if (currentItem && currentItem.url !== '#') {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  const [lampStyle, setLampStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const tabsRef = React.useRef<(HTMLAnchorElement | null)[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Wait a tiny tick for the DOM to render the tabs before measuring
    requestAnimationFrame(() => {
      const activeIndex = items.findIndex(item => item.name === activeTab)
      const activeElement = tabsRef.current[activeIndex]
      if (activeElement) {
        setLampStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
          opacity: 1
        })
        
        // Enable animations only after the initial placement is complete
        setTimeout(() => setIsInitialized(true), 50)
      }
    })
  }, [activeTab, items, isMobile, pathname])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-[60] mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="relative flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        
        {/* Single mathematical lamp indicator that ignores window scroll */}
        <motion.div
          className="absolute top-1 bottom-1 bg-primary/5 rounded-full -z-10"
          animate={{ left: lampStyle.left, width: lampStyle.width, opacity: lampStyle.opacity }}
          initial={false}
          transition={isInitialized ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
            <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
            <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
          </div>
        </motion.div>

        {items.map((item, idx) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              ref={(el) => { tabsRef.current[idx] = el }}
              href={item.url}
              scroll={false}
              onClick={(e) => {
                e.preventDefault()
                if (item.url === '#') {
                  return
                }
                if (item.action) {
                  item.action()
                }
                
                // If clicking the current tab, do nothing
                if (activeTab === item.name) return;
                
                setActiveTab(item.name)
                
                // Route manually to allow our manual highlight animation to start
                setTimeout(() => {
                  router.push(item.url, { scroll: false })
                }, 350)
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
