"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timelineItems = [
  {
    year: "2023",
    title: "Senior Full-Stack Developer",
    organization: "Tech Innovations Inc.",
    description: "Leading development of enterprise-scale web applications.",
    icon: <Briefcase className="h-6 w-6 text-blue-500" />,
  },
  {
    year: "2021",
    title: "Full-Stack Developer",
    organization: "Digital Solutions Ltd.",
    description: "Developed and maintained multiple client projects.",
    icon: <Briefcase className="h-6 w-6 text-green-500" />,
  },
  {
    year: "2020",
    title: "Master's in Computer Science",
    organization: "Tech University",
    description: "Specialized in Web Technologies and Cloud Computing.",
    icon: <GraduationCap className="h-6 w-6 text-purple-500" />,
  },
  {
    year: "2018",
    title: "Bachelor's in Software Engineering",
    organization: "State University",
    description: "Foundation in software development principles.",
    icon: <GraduationCap className="h-6 w-6 text-yellow-500" />,
  },
];

export function Timeline() {
  return (
    <div className="relative space-y-12">
      {timelineItems.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-center gap-8 relative"
        >
          {/* Timeline Vertical Line */}
          {index !== timelineItems.length - 1 && (
            <div className="absolute left-[32px] top-8 w-0.5 h-full bg-gray-300 dark:bg-gray-500" />
          )}

          {/* Year & Icon */}
          <div className="relative flex flex-col items-center">
            <div
              className={`h-16 w-16 flex items-center justify-center rounded-full border-4 border-gray-300 bg-background shadow-xl transform transition-transform hover:scale-110 z-10`}
            >
              {item.icon}
            </div>
          </div>

          {/* Glassmorphism Card with Reverted Colors */}
          <Card
            className={`relative p-8 space-y-4 flex-1 bg-opacity-30 backdrop-blur-lg border-0 shadow-md hover:shadow-2xl transition duration-300 
              bg-background dark:bg-opacity-30 dark:bg-gray-900`}  // Background color reverted to previous state
          >
            <h3 className="text-xl font-semibold flex items-center gap-3 text-gray-900 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {item.organization}
            </p>
            <p className="text-muted-foreground text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
          </Card>

          {/* Floating Year Badge moved to the right */}
          <div
            className={`absolute -top-4 -right-4 bg-background px-4 py-2 rounded-full border-2 border-gray-300 text-sm font-semibold text-gray-900 dark:text-gray-100`}
          >
            {item.year}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
