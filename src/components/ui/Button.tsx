"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50",
      secondary:
        "bg-gradient-to-r from-accent-500 to-energy-500 text-white hover:from-accent-600 hover:to-energy-600 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/50",
      outline:
        "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white hover:scale-105",
      ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
    };

    const sizes = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
