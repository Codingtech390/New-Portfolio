"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, Star, User } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "John's expertise in full-stack development helped us launch our platform ahead of schedule. His attention to detail and problem-solving skills are exceptional.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: "Working with John was a great experience. He brought innovative solutions to our project and was always responsive to our needs.",
  },
  {
    name: "Emily Davis",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "John's full-stack expertise transformed our idea into a successful product. His technical skills and project management are top-notch.",
  },
]

export function Testimonials() {
  return (
    <section className="container space-y-12 py-16">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-primary">
          What Clients Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-lg">
          Testimonials from people I've had the pleasure of working with.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="relative p-8 space-y-6 h-full border border-gray-300 dark:border-gray-700 shadow-md dark:shadow-lg rounded-2xl bg-white dark:bg-gray-900 transition-all hover:shadow-xl dark:hover:shadow-2xl">
              
              {/* Quote Icon & Stars */}
              <div className="flex justify-between items-center">
                <Quote className="text-gray-500 dark:text-gray-400 opacity-50 w-8 h-8" />
                <div className="flex space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" />
                  ))}
                </div>
              </div>

              {/* Avatar & Name */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border border-gray-400 dark:border-gray-600 shadow-md">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
