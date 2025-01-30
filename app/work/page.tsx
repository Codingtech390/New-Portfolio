"use client";

import BackToTopButton from "@/components/BackToTopButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, Stripe, and Supabase.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    tags: ["Next.js", "Stripe", "Supabase", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application for generating marketing content.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Work() {
  return (
    <div className="container py-12 space-y-16 ml-4 mb-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center items-center w-full"
      >
        <img
          src="https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8173.jpg?t=st=1738228288~exp=1738231888~hmac=70b70ec193401ef7f587dd662ebb36b3340519c425ee764fc249a26c9a602203&w=740" // Replace with your image path
          alt="Contact Illustration"
          className="w-72 h-72 rounded-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white font-inter">
          My Work
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
          A selection of my recent projects, showcasing problem-solving skills
          and creativity.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="group rounded-xl bg-white/90 dark:bg-[#1A0B2E]/90 shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-200 dark:border-gray-700 backdrop-blur-md"
          >
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden rounded-t-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-inter">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold uppercase rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Separator Line */}
              <hr className="border-gray-300 dark:border-gray-700 my-4" />

              {/* Buttons */}
              <div className="flex justify-between items-center pt-4">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-teal-600 dark:hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-all"
                >
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* =====================
          ⭐ BackToTopButton
      ===================== */}

      <BackToTopButton />
    </div>
  );
}
