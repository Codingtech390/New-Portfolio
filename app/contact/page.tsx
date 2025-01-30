"use client";

import BackToTopButton from "@/components/BackToTopButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container py-4 space-y-16 mb-8">
      {/* New Section with Centered Image, Text, and Icons Below Text */}
      <div className="flex flex-col items-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 mb-8"
        >
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1738213595~exp=1738217195~hmac=2e7e8c4afdc0c599ed4138a76bc934ae97d17d5c28eb1f3763290805c69b3a38&w=740" // Replace with your image path
            alt="Contact Illustration"
            className="w-72 h-72 rounded-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Feel free to reach out to me for any inquiries or collaborations!
            Whether it's a project, a question, or simply a chat, I would love
            to hear from you. Let's connect and create something great together!
          </p>
        </motion.div>

        {/* Social Icons below text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center gap-6 text-gray-600 dark:text-gray-300"
        >
          <Link
            href="mailto:john@example.com"
            className="text-xl hover:text-blue-500"
          >
            <Mail className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="ml-4 space-y-6 dark:bg-slate-900 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium dark:dark:text-white"
            >
              Name
            </label>
            <Input
              id="name"
              placeholder="John Smith"
              className="rounded-lg bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium dark:text-white"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="rounded-lg bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium dark:text-white"
            >
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell me about your project..."
              rows={6}
              className="rounded-lg bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>
          <Button
            size="lg"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition-all"
          >
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </motion.form>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-8 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Connect With Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              I'm always open to new opportunities and discussions. Reach out to
              me via any of these platforms.
            </p>
          </div>
          <div className="space-y-4">
            <Link
              href="mailto:john@example.com"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span>john@example.com</span>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6 text-gray-900 dark:text-gray-200" />
              <span>github.com/johndoe</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6 text-blue-700 dark:text-blue-400" />
              <span>linkedin.com/in/johndoe</span>
            </Link>
          </div>

          {/* Map Section Inside Card */}
          <div className="mt-8 space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Find Me on Google Maps
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Here's where you can find me. Feel free to visit, or you can
              always reach out online!
            </p>
            <div className="w-full h-56 bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              {/* Placeholder for map */}
              <img
                src="https://via.placeholder.com/600x300?text=Map+Placeholder"
                alt="Map Location Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      {/* =====================
          ⭐ BackToTopButton
      ===================== */}

      <BackToTopButton />
    </div>
  );
}
