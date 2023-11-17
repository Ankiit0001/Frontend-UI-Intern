"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/shared/nav-links";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Call handleScroll on initial render
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-2xl" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <Image 
            src="/logo.png" 
            alt="logo" 
            width={40} 
            height={40} 
            className="logo"
          />
        <div className="flex items-center gap-x-12 z-50">
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLinks />
          </div>
        </div>
        <Button>
          Download App
        </Button>
      </nav>
    </motion.header>
  );
}
