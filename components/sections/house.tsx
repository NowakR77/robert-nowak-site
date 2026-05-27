'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Timeline, type Milestone } from "@/components/ui/timeline"
import { SectionHeader } from "@/components/ui/section-header"

const milestones: Milestone[] = [
  {
    phase: "Planning",
    description: "Architectural design, structural engineering, permits and approvals.",
    status: "complete",
    date: "Q1 2024",
  },
  {
    phase: "Foundation",
    description: "Site clearance, groundwork, concrete pour and curing.",
    status: "complete",
    date: "Q2 2024",
  },
  {
    phase: "Structure",
    description: "Frame, roof structure, external walls and weatherproofing.",
    status: "active",
    date: "Q3 2024",
  },
  {
    phase: "Interior",
    description: "Plumbing rough-in, electrical first fix, insulation, underfloor heating.",
    status: "upcoming",
    date: "Q4 2024",
  },
  {
    phase: "Finishing",
    description: "Flooring, fixtures, tiling, joinery, kitchen and bathroom fit-out.",
    status: "upcoming",
    date: "Q1 2025",
  },
  {
    phase: "Move-in",
    description: "Final inspections, snagging, landscaping, handover.",
    status: "upcoming",
    date: "Q2 2025",
  },
]

const photos = [
  { label: "Site prep", w: "col-span-1", aspect: "aspect-[4/3]" },
  { label: "Foundation", w: "col-span-1", aspect: "aspect-square" },
  { label: "Framing", w: "col-span-1", aspect: "aspect-square" },
  { label: "Progress", w: "col-span-1", aspect: "aspect-[4/3]" },
]

export function House() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="house"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ background: "#0A0907" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_40%,rgba(200,169,110,0.07)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          label="04 · Building a House"
          title="The most physical project I've ever run."
          subtitle="A house build is a masterclass in project management — dependency chains, critical paths, vendor reliability, and scope creep. It's also deeply satisfying in ways that shipping code is not."
          isInView={isInView}
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Timeline milestones={milestones} />
          </motion.div>

          {/* Photo grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className={`${photo.aspect} relative overflow-hidden border border-[rgba(200,169,110,0.08)] group`}
                >
                  <img
                    src={`https://placehold.co/400x300/0A0907/6B5C3E?text=${encodeURIComponent(photo.label)}`}
                    alt={photo.label}
                    className="w-full h-full object-cover opacity-35 group-hover:opacity-55 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0907]/60 to-transparent" />
                  <p className="absolute bottom-2 left-2.5 font-mono text-[9px] text-accent/60 tracking-[0.15em] uppercase">
                    {photo.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] text-muted-foreground/40 tracking-[0.2em] uppercase">
              Photos coming · Munich, Germany
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
