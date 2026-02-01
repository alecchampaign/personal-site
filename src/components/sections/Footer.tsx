"use client";

import { Github, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com/alecchampaign"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-600 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/50"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com/in/alec-champaign"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-600 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mb-6 group inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-600 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-accent-500 hover:bg-accent-500 hover:text-white hover:shadow-lg hover:shadow-accent-500/50"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 transition-transform group-hover:scale-110" />
          </button>

          {/* Name */}
          <p className="text-gray-400 text-sm">Alec Champaign</p>
        </div>
      </div>
    </footer>
  );
}
