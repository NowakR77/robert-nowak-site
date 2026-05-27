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
  },
  {
    name: "YouTube Intelligence",
    subtitle: "Content Analysis Pipeline",
    description:
      "Automated pipeline that ingests YouTube content, extracts insights, and surfaces patterns. Built on the WAT framework — AI orchestrates, deterministic code executes.",
    tags: ["Python", "YouTube API", "yt-dlp", "Google Sheets"],
    status: "Production",
    statusColor: "accent" as const,
  },
  {
    name: "Executive Presentations",
    subtitle: "CFO Deck Automation",
    description:
      "Python-powered system for generating board-level presentations from raw data and notes. From source material to polished PPTX in minutes, not hours.",
    tags: ["Python", "python-pptx", "Automation", "PowerShell"],
    status: "Internal",
    statusColor: "muted" as const,
  },
  {
    name: "Tennis Booking App",
    subtitle: "Full-Stack Web Application",
    description:
      "Real court booking system with authentication, a Postgres database, and modern UI. Not a demo — an actual working application people use.",
    tags: ["Next.js", "TypeScript", "Drizzle ORM", "NeonDB"],
    status: "Deployed",
    statusColor: "accent" as const,
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
