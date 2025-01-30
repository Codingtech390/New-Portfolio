"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiGit,
} from "react-icons/si";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import BackToTopButton from "@/components/BackToTopButton";

ChartJS.register(ArcElement, Tooltip, Legend);

const skills = {
  Frontend: [
    { name: "React", level: 90, icon: <FaReact /> },
    { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
    { name: "TypeScript", level: 80, icon: <SiTypescript /> },
    { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss /> },
  ],
  Backend: [
    { name: "Node.js", level: 85, icon: <FaNodeJs /> },
    { name: "Python", level: 75, icon: <FaPython /> },
    { name: "PostgreSQL", level: 80, icon: <SiPostgresql /> },
    { name: "GraphQL", level: 70, icon: <SiGraphql /> },
  ],
  Tools: [
    { name: "Git", level: 90, icon: <SiGit /> },
    { name: "Docker", level: 75, icon: <FaDocker /> },
    { name: "AWS", level: 70, icon: <FaAws /> },
  ],
};

// Function to generate chart data dynamically
const createPieChartData = (level: number) => ({
  labels: ["Completed", "Remaining"],
  datasets: [
    {
      data: [level, 100 - level],
      backgroundColor: ["#4c51bf", "#edf2f7"], // More appealing colors
      borderWidth: 0,
    },
  ],
});

export default function Skills() {
  return (
    <div className="container py-2 space-y-16 ml-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center w-full"
        >
          <img
            src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?t=st=1738224054~exp=1738227654~hmac=a496d0a0ec43966f3c3e819525cad6a1b2e5e7300d4ea494517c8973832c9367&w=740" // Replace with your image path
            alt="Contact Illustration"
            className="w-72 h-72 rounded-full object-cover"
          />
        </motion.div>      
      {" "}
      {/* Adjusted left margin for better alignment */}
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center"
      >
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Skills & Expertise
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Here's a glimpse of my expertise—proficient in front-end, back-end, and essential development tools, enabling me to craft efficient and innovative solutions
        </p>
      </motion.div>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {Object.entries(skills).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">{category}</h2>

            {/* Pie Charts for Skills */}
            <div className="space-y-6">
              {items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.1 + index * 0.1,
                  }}
                  className="space-y-2 flex items-center gap-6"
                >
                  {/* Increased Icon Size */}
                  <div className="w-24 h-24 flex justify-center items-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full">
                    {skill.icon}
                  </div>

                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Pie Chart */}
                    <Pie
                      data={createPieChartData(skill.level)}
                      options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                          tooltip: {
                            callbacks: {
                              label: (context) =>
                                `${context.label}: ${context.raw}%`,
                            },
                          },
                        },
                      }}
                      height={76} // Kept as reduced height from previous update
                      width={76} // Kept as reduced width from previous update
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {/* =====================
          ⭐ BackToTopButton
      ===================== */}
      <BackToTopButton />
    </div>
  );
}
