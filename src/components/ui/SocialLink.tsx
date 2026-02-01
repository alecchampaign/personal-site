"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

export function SocialLink({ href, icon, label, className }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group inline-flex h-12 w-12 items-center justify-center rounded-full",
        "border-2 border-gray-300 text-gray-700 transition-all duration-300",
        "hover:scale-110 hover:border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/50",
        className
      )}
    >
      <span className="transition-transform group-hover:scale-110">{icon}</span>
    </Link>
  );
}
