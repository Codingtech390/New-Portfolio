"use client";

import { Mail, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import BackToTopButton from "./BackToTopButton";


import { IoLogoReact, IoMail } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin, FaGlobe } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-[#1A0B2E] py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Branding Section - Left */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
              Abhijeet
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Full-Stack Developer | UI/UX Enthusiast | Content Creator
            </p>
          </div>

          {/* Social & Contact Section - Right */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center md:text-left">
              Stay Connected
            </h3>
            <div className="flex justify-center md:justify-start gap-6">
              {[
                {
                  Icon: FaGithubSquare,
                  link: "https://github.com",
                  color: "hover:text-gray-700 dark:hover:text-gray-400",
                },
                {
                  Icon: FaLinkedin,
                  link: "https://linkedin.com",
                  color: "hover:text-blue-600",
                },
                {
                  Icon: IoMail,
                  link: "https://codingtech390.com",
                  color: "hover:text-blue-600",
                },
                {
                  Icon: FaGlobe,
                  link: "https://website.com",
                  color: "hover:text-blue-400",
                },
              ].map(({ Icon, link, color }, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  className={`transition-transform hover:rotate-12 hover:scale-110 ${color}`}
                >
                  <Icon className="w-7 h-7 text-gray-800 dark:text-gray-300" />
                </Link>
              ))}
            </div>
            <p className="text-md flex justify-center md:justify-start items-center gap-2 text-gray-600 dark:text-gray-400">
              <Mail className="w-5 h-5 text-gray-500 dark:text-gray-300 transition hover:text-gray-700 dark:hover:text-gray-200" />
              codingtech390@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-md text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Abhijeet. All Rights Reserved.
          </p>
        </div>
      </div>
      {/* =====================
          ⭐ BackToTopButton
      ===================== */}

      <BackToTopButton />
    </footer>
  );
}
