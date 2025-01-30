"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackToTopButton from "@/components/BackToTopButton";
import {
  Briefcase,
  Code,
  Github,
  PenTool,
  Monitor,
  Layers,
  Rocket,
  Shield,
} from "lucide-react";

export default function About() {
  return (
    <div className="container py-4 space-y-16 ml-4 mb-8">
      <div className="flex flex-col items-center mb-12">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center w-full"
        >
          <img
            src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-52233.jpg" // Replace with your image path
            alt="Contact Illustration"
            className="w-72 h-72 rounded-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-6"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            A Little About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto mt-6">
            I am a passionate Full Stack Software Developer 🚀 having a special
            interest in Frontend technologies and experience of building Web
            applications with JavaScript / Reactjs / Nodejs and some other cool
            libraries and frameworks.
          </p>
        </motion.div>
      </div>

      {/* My Expertise Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <h2 className="text-5xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Expertise Cards */}
          {[
            {
              icon: <Code className="w-12 h-12 text-blue-500 mx-auto" />,
              title: "Full-Stack Development",
              desc: "Building scalable front-end & back-end solutions.",
            },
            {
              icon: <PenTool className="w-12 h-12 text-pink-500 mx-auto" />,
              title: "UI/UX Design",
              desc: "Crafting user-friendly experiences with modern UI.",
            },
            {
              icon: (
                <Github className="w-12 h-12 text-gray-800 dark:text-white mx-auto" />
              ),
              title: "Open-Source Contributions",
              desc: "Actively contributing to community projects.",
            },
            {
              icon: <Briefcase className="w-12 h-12 text-yellow-500 mx-auto" />,
              title: "Freelance Projects",
              desc: "Delivering high-quality web solutions globally.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center"
            >
              {card.icon}
              <h3 className="text-xl font-semibold mt-3 text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <h2 className="text-5xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
          Additional Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Skills Cards */}
          {[
            {
              icon: <Rocket className="w-12 h-12 text-red-500 mx-auto" />,
              title: "Web Performance",
              desc: "Optimizing websites for speed & efficiency.",
            },
            {
              icon: <Shield className="w-12 h-12 text-green-500 mx-auto" />,
              title: "Cybersecurity",
              desc: "Implementing security best practices.",
            },
            {
              icon: <Monitor className="w-12 h-12 text-blue-500 mx-auto" />,
              title: "Frontend Frameworks",
              desc: "Expert in React.js, Next.js & UI libraries.",
            },
            {
              icon: <Layers className="w-12 h-12 text-yellow-500 mx-auto" />,
              title: "Backend Technologies",
              desc: "Proficient in Node.js, Express.js & databases.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center"
            >
              {card.icon}
              <h3 className="text-xl font-semibold mt-3 text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* =====================
          ⭐ BackToTopButton
      ===================== */}

      <BackToTopButton />
    </div>
  );
}
