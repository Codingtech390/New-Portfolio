"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { FaEye, FaCode } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "A fast and secure online shopping platform built with Next.js, Tailwind CSS, and Stripe for payments.",
    imageUrl: "/Ecom.png", // Ensure this image exists in public/projects/
  },
  {
    id: 2,
    title: "Movie Streaming App",
    description: "A sleek and intuitive movie streaming platform featuring authentication, watchlists, and real-time recommendations.",
    imageUrl: "/movie.png",
  },
  {
    id: 3,
    title: "Social Media Platform",
    description: "A full-fledged social media app with user profiles, posts, comments, and real-time chat using WebSockets.",
    imageUrl: "/social.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="container space-y-12">
      {/* Section Heading */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">🚀 Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of my best work, showcasing my skills and expertise.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl border bg-card shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Project Image */}
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
{/* Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
  <div>
    <h3 className="text-xl font-bold">{project.title}</h3>
    <p className="mt-1 text-sm text-gray-300">{project.description}</p>
  </div>
  {/* Icons for Live Demo & View Code */}
  <div className="flex items-center gap-4 mt-4">
    <Link href={"project.liveUrl"} target="_blank" className="flex items-center gap-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
      <FaEye className="h-5 w-5" />
      <span className="text-sm">Live Demo</span>
    </Link>
    <Link href={"project.codeUrl"} target="_blank" className="flex items-center gap-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
      <FaCode className="h-5 w-5" />
      <span className="text-sm">View Code</span>
    </Link>
  </div>
</div>

          </div>
        ))}
      </motion.div>

      {/* View All Button */}
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/work">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
