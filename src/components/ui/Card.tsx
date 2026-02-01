"use client";

import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({
  className,
  hover = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 border-transparent bg-white p-6 shadow-lg",
        "bg-gradient-to-br from-slate-50 to-white",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/20",
        hover &&
          "hover:border-gradient-to-r hover:from-primary-500 hover:to-accent-500",
        className
      )}
      style={
        hover
          ? {
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }
          : undefined
      }
      {...props}
    >
      {children}
    </div>
  );
}
