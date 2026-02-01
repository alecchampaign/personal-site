"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-20 animate-gradient bg-[length:200%_200%]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-spin-slow" />
              <div className="absolute inset-1 rounded-full bg-white p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Alec Champaign"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Alec Champaign
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium mb-4">
              Software Development Engineer
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              Amazon Web Services
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
          >
            Building scalable cloud solutions and elegant user experiences
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 mb-10"
          >
            <a
              href="https://github.com/alecchampaign"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 transition-all duration-300 hover:scale-110 hover:border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/50"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com/in/alec-champaign"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 transition-all duration-300 hover:scale-110 hover:border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 transition-transform group-hover:scale-110" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("timeline")}
            >
              View My Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("about")}
            >
              About Me
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="flex flex-col items-center text-gray-500 hover:text-primary-500 transition-colors"
              aria-label="Scroll to next section"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
