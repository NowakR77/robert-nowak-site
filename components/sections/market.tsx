'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { StatBlock } from "@/components/ui/stat-block"
import { SectionHeader } from "@/components/ui/section-header"

const stats = [
  {
    stat: "$1.8T",
    label: "AI market cap projection by 2030",
    note: "McKinsey Global Institute, 2024",
  },
  {
    stat: "73%",
    label: "Enterprise software companies deploying AI in core product",
    note: "Gartner, Q4 2024",
  },
  {
    stat: "40%",
    label: "Projected CFO time saved via AI-assisted FP&A",
    note: "Deloitte Finance Survey, 2024",
  },
  {
    stat: "3×",
    label: "ROI differential: AI-native vs AI-augmented workflows",
    note: "BCG, 2025",
  },
]

const perspectives = [
  {
    number: "01",
    title: "The CFO lens",
    body: "Most CFOs see AI through a cost-reduction frame. That's the wrong frame. The real value is in decision velocity — compressing the time between data and action. The ROI isn't in headcount reduction; it's in not being six weeks behind the market.",
  },
  {
    number: "02",
    title: "What the hype misses",
    body: "Every AI demo looks impressive. What gets missed is the operational gap between demo and production. The messy work — data quality, change management, institutional trust — is where most enterprise AI fails. Building on shaky foundations doesn't scale.",
  },
  {
    number: "03",
    title: "Siemens Software context",
    body: "In enterprise software, the AI race is being run by R&D. Finance's role is to fund the winners fast and defund the experiments that aren't working. That requires a rigorous framework for evaluating what 'working' means before it shows up in the P&L.",
  },
]

export function Market() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="market"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ background: "#0B0B0F" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(200,169,110,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          label="03 · Market Developments"
          title="The AI market — through a CFO lens."
          subtitle="Not hype. Not fear. The financial and strategic reality of what's happening and what it means for enterprise software."
          isInView={isInView}
        />

        {/* Stats grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(200,169,110,0.08)]">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 * i + 0.2 }}
            >
              <StatBlock {...item} />
            </motion.div>
          ))}
        </div>

        {/* Perspective cards */}
        <div className="mt-3 space-y-px">
          {perspectives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12 * i + 0.45 }}
              className="group bg-surface p-8 lg:p-10 border border-[rgba(200,169,110,0.07)] hover:border-[rgba(200,169,110,0.2)] transition-colors duration-500 cursor-default"
            >
              <div className="grid lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-3 flex items-start gap-4">
                  <span className="font-mono text-[10px] text-accent/40 tracking-[0.2em]">
                    {item.number}
                  </span>
                  <p className="font-mono text-[11px] text-accent tracking-[0.18em] uppercase">
                    {item.title}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <p className="font-sans text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
