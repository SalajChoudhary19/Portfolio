"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Dock from "./Dock";
import { Home, User, Briefcase, FileText, Mail } from "lucide-react";

export const Navbar = () => {
  const router = useRouter();

  const items = [
    { icon: <Home size={18} />, label: "Home", href: "/", onClick: () => router.push("/", { scroll: false }) },
    { icon: <User size={18} />, label: "About", href: "/about", onClick: () => router.push("/about", { scroll: false }) },
    { icon: <Briefcase size={18} />, label: "Projects", href: "/projects", onClick: () => router.push("/projects", { scroll: false }) },
    { icon: <FileText size={18} />, label: "Resume", href: "/resume", onClick: () => router.push("/resume", { scroll: false }) },
    { icon: <Mail size={18} />, label: "Contact", href: "/contact", onClick: () => router.push("/contact", { scroll: false }) },
  ];

  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
      className="bottom-0 sm:bottom-auto sm:top-0 mb-6 sm:mb-0 sm:mt-6"
    />
  );
};
