"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import Link from "next/link";
import React from "react";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex items-center space-x-6 text-md">
      <div
      >
        Emotions
      </div>
      <div
      >
        Manifesto
      </div>
      <div
      >
        Self-awareness test
      </div>
      <div
      >
        Work With Us
      </div>
    </div>
  );
}
