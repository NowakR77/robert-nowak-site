'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ProjectCard } from "@/components/ui/project-card"
import { SectionHeader } from "@/components/ui/section-header"

const projects = [
  {
    name: "Hermes",
    subtitle: "24/7 Personal AI Agent",
    description:
      "A production AI agent running on a Hostinger VPS, accessible via Telegram. Handles tasks, reminders, web research, code execution, and content summarization — always on.",
    tags: ["Python", "Docker", "VPS", "Telegram", "Claude"],
    status: "Live",
    statusColor: "accent" as const,
    href: "https://www.youtube.com/watch?v=gb5TlGw6Uks&list=LL",
    linkLabel: "Watch on YouTube →",
  },
  {
    name: "AI Avatar",
    subtitle: "Personal Digital Twin",
    description:
      "A photorealistic AI avatar built with HeyGen — trained on my likeness and voice. Can deliver briefings, presentations, and updates without me being in the room.",
    tags: ["HeyGen", "AI Video", "Digital Twin"],
    status: "Built",
    statusColor: "accent" as const,
  },
  {
    name: "Call Center Agent",
    subtitle: "Voice AI for Cleaning Service",
    description:
      "A fully automated inbound call agent for a cleaning service. Customers call, the AI answers, qualifies the job, and returns a live quote — no human required.",
    tags: ["n8n", "Vapi", "Voice AI", "LLM"],
    status: "Deployed",
    statusColor: "accent" as const,
    href: "https://www.youtube.com/watch?v=w0H1-b044KY&t=2102s",
    linkLabel: "Watch on YouTube →",
  },
  {
    name: "Face-Tracking Camera",
    subtitle: "Raspberry Pi Computer Vision",
    description:
      "A physical camera mounted on servo motors that detects and follows a human face in real time. Built entirely in Python — from object detection to motor control.",
    tags: ["Python", "OpenCV", "Raspberry Pi", "Servo"],
    status: "Built",
    statusColor: "accent" as const,
    href: "https://www.youtube.com/watch?v=xHK-wv2JG18&list=LL&index=55&t=16s",
    linkLabel: "Watch on YouTube →",
  },
]

export function AIProjects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ai" ref={ref} className="relative py-32 lg:py-48 bg-[#09090C]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(200,169,110,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          label="02 · AI Projects"
          title="Built to run in production."
          subtitle="Not demos. Not prototypes sitting on a hard drive. These are systems with uptime, real users, and bills."
          isInView={isInView}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 * i + 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
