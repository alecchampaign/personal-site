"use client";

import { Card } from "@/components/ui/Card";
import { TimelineItem as TimelineItemType } from "@/types/timeline";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;
  const isEducation = item.type === "education";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center mb-16 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-white shadow-lg" />
      </div>

      {/* Content Card */}
      <div className="w-full md:w-[calc(50%-3rem)]">
        <Card className="text-left">
          {/* Icon and Date */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${
                  isEducation
                    ? "bg-accent-100 text-accent-600"
                    : "bg-primary-100 text-primary-600"
                }`}
              >
                {isEducation ? (
                  <GraduationCap className="w-6 h-6" />
                ) : (
                  <Briefcase className="w-6 h-6" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.company}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.startDate} — {item.endDate}
                </p>
              </div>
            </div>
          </div>

          {/* Title and Location */}
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            {item.title}
          </h4>
          {item.location && (
            <div className="flex items-center gap-1 text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{item.location}</span>
            </div>
          )}

          {/* Description */}
          <p className="text-gray-600 mb-4 italic">{item.description}</p>

          {/* Achievements */}
          {item.achievements && item.achievements.length > 0 && (
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-gray-700 mb-2">
                Key Achievements:
              </h5>
              <ul className="space-y-2">
                {item.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="text-primary-500 mt-1">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      </div>
    </motion.div>
  );
}
