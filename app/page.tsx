"use client";

// ✅ UI Components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Testimonials } from "@/components/testimonials";
import { Timeline } from "@/components/timeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import BackToTopButton from "@/components/BackToTopButton";

// ✅ Animations & Icons
import { motion } from "framer-motion";
import { ArrowRight, Code2, Layout, Server } from "lucide-react";
import { GiGears } from "react-icons/gi";
import { GrDeploy } from "react-icons/gr";
import { IoLogoReact, IoMail } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin, FaGlobe } from "react-icons/fa";

// ✅ Next.js Components
import Image from "next/image";
import Link from "next/link";
import TypewriterEffect from "@/components/TypewriterEffect";

/* ===========================
   🚀 Services Data
=========================== */
const services = [
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Frontend Development",
    description:
      "Creating responsive and intuitive user interfaces with modern frameworks.",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Backend Development",
    description: "Building scalable server-side solutions and RESTful APIs.",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Full-Stack Solutions",
    description:
      "End-to-end development of web applications with modern technologies.",
  },
];

/* ===========================
   🎨 Projects Data
=========================== */
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with Stripe payments and Next.js.",
    image: "https://images.unsplash.com/photo-1671586950156-123d3c4a",
  },
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot built with OpenAI API and Botpress.",
    image: "https://images.unsplash.com/photo-1671586950156-223d3c4a",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing projects and skills.",
    image: "https://images.unsplash.com/photo-1671586950156-323d3c4a",
  },
];

/* ===========================
   🏡 Home Component
=========================== */
export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 p-8">
      {/* =====================
          🏆 Hero Section
      ===================== */}
      <section className="container mt-0 pt-0 md:pt-1 py-1 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-4xl md:text-6xl font-bold flex flex-col">
              <span className="block mb-2">Hi 👋</span>
              <span className="block">I'm Abhijeet</span>
              <span className="text-primary block">
                <TypewriterEffect />
              </span>
              <p className="text-xl text-muted-foreground mt-4">
                Crafting visually stunning, user-friendly interfaces with over 5
                years of experience.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/work">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { href: "https://github.com", icon: FaGithubSquare },
                { href: "https://linkedin.com", icon: FaLinkedin },
                { href: "mailto:john@example.com", icon: IoMail },
                { href: "https://example.com", icon: FaGlobe },
              ].map(({ href, icon: Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-accent text-muted-foreground hover:text-foreground transition-colors rounded-full p-2"
                >
                  <Icon className="h-7 w-7" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-overlay rounded-full scale-110"></div>
            <Image
              src="https://img.freepik.com/free-vector/it-job-concept-illustration_114360-27000.jpg?t=st=1738224895~exp=1738228495~hmac=b1e2fd65c65d798d7d6cbfd8c15849bd45bb67bd779dd2649c1836ff8219ecda&w=740"
              alt="Profile Image"
              fill
              className="object-cover rounded-full scale-50"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* =====================
          🎯 Services Section
      ===================== */}
      <section className="container space-y-12 py-16 text-white rounded-md pb-10">
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-extrabold leading-tight text-shadow-md text-black dark:text-white">
            What I Do
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-800 dark:text-gray-300">
            I specialize in building modern web applications that are
            user-centric, scalable, and high-performance. My expertise includes
            utilizing cutting-edge technologies to deliver impactful solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-8">
          {services.map(({ icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="p-8 space-y-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="p-4 w-fit rounded-full bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-400 text-black">
                  {icon}
                </div>
                <h3 className="text-2xl font-semibold text-black">{title}</h3>
                <p className="text-gray-800 font-medium">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================
          🎓 Education & Experience
      ===================== */}
      <section className="container space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Education & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of academic knowledge and hands-on experience.
          </p>
        </div>
        <Timeline />
      </section>

      {/* =====================
          🚀 Featured Projects
      ===================== */}
      <section className="container space-y-12">
        <FeaturedProjects />
      </section>

      {/* =====================
          ⭐ Testimonials
      ===================== */}
      <section className="container space-y-12">
        <Testimonials />
      </section>

      {/* =====================
          ⭐ BackToTopButton
      ===================== */}

      <BackToTopButton />
    </div>
  );
}
