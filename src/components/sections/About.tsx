"use client";

import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <SectionHeading
            title="About Me"
            subtitle="A bit about who I am and what I do"
          />
        </AnimatedWrapper>

        <div className="max-w-4xl mx-auto">
          <AnimatedWrapper delay={0.2}>
            <div className="prose prose-lg mx-auto text-center mb-12">
              <p className="text-gray-700 leading-relaxed">
                [Placeholder: Add a compelling paragraph about yourself here.
                Share your passion for software engineering, your approach to
                problem-solving, what drives you in your career, and what
                you&apos;re currently focused on or excited about. This is your
                chance to give visitors a sense of who you are beyond your
                resume.]
              </p>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.4}>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary-500">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-secondary-500">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-accent-500">
                    DevOps & Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.devops.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
