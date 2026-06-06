"use client";
import React from "react";
import { NavBar, NavItem } from "./tubelight-navbar";
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';

export const Navbar = () => {
  const navItems: NavItem[] = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Resume', url: '/resume', icon: FileText },
    { name: 'Contact', url: '/contact', icon: Mail }
  ];

  return <NavBar items={navItems} />;
};
