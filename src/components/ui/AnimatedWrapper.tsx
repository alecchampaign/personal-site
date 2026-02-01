"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedWrapper({
  children,
  delay = 0,
  className,
}: AnimatedWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
