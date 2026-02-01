"use client";

import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineConnector } from "@/components/timeline/TimelineConnector";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import { careerTimeline } from "@/data/career-timeline";

export function Timeline() {
  return (
    <section
      id="timeline"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <SectionHeading
            title="My Journey"
            subtitle="A timeline of my professional experience and education"
          />
        </AnimatedWrapper>

        <div className="max-w-6xl mx-auto mt-16 relative">
          <TimelineConnector />

          {careerTimeline.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
