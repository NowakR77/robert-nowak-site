'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const companies = [
  {
    name: "Mendix",
    role: "Head of Finance",
    hq: "Rotterdam, Netherlands",
    summary:
      "The world's leading enterprise low-code platform. Mendix enables large organisations to build, iterate, and deploy applications at a speed that traditional development cannot match. Thousands of enterprise customers — from financial services to manufacturing — use Mendix to close the gap between business needs and IT capacity.",
    detail: "Part of Siemens since 2018. Headquartered in Rotterdam with a global engineering and go-to-market presence.",
    tags: ["Low-Code", "Enterprise SaaS", "Digital Transformation"],
  },
  {
    name: "Supplyframe",
    role: "Head of Finance",
    hq: "Pasadena, California",
    summary:
      "Intelligence-driven sourcing and design platform for the global electronics supply chain. Supplyframe connects component manufacturers, distributors, and engineers — giving procurement and design teams the data they need to make faster, more resilient sourcing decisions.",
    detail: "Acquired by Siemens in 2021. Headquartered in Pasadena, CA, with deep reach across the electronics ecosystem.",
    tags: ["Supply Chain", "Intelligence Platform", "Electronics"],
  },
]

export function Work() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ background: "#09090C" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(200,169,110,0.04)_0%,transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Vertical label */}
          <div className="hidden lg:block lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-32"
            >
              <div className="w-8 h-px bg-accent mb-4" />
              <p className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">
                00 · Work
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-10 space-y-16">

            {/* Mobile label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 lg:hidden"
            >
              <div className="w-6 h-px bg-accent" />
              <p className="font-mono text-[11px] text-accent tracking-[0.3em] uppercase">Work</p>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6 max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-cormorant font-light text-[clamp(2.8rem,6vw,5rem)] text-foreground leading-[1.05] tracking-[-0.01em]"
              >
                Head of Finance, Siemens Software.
                <br />
                <span className="italic text-accent">Two businesses. Two continents.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-muted-foreground text-lg leading-relaxed"
              >
                I lead finance for Mendix and Supplyframe — two distinct software businesses
                within Siemens, operating across Europe and the United States. Different markets,
                different growth profiles, one financial lens.
              </motion.p>
            </div>

            {/* Company cards */}
            <div className="grid lg:grid-cols-2 gap-5">
              {companies.map((company, i) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + 0.12 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex flex-col border border-[rgba(200,169,110,0.1)] hover:border-[rgba(200,169,110,0.25)] transition-all duration-500 p-8 lg:p-10 space-y-6"
                  style={{ background: "#0E1014" }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-cormorant font-semibold text-4xl text-foreground tracking-[-0.01em]">
                        {company.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase">
                          {company.role}
                        </span>
                        <span className="text-muted-foreground/30">·</span>
                        <span className="font-mono text-[10px] text-muted-foreground/60 tracking-[0.15em] uppercase">
                          {company.hq}
                        </span>
                      </div>
                    </div>
                    {/* Location pin */}
                    <span className="font-mono text-[10px] text-muted-foreground/30 tracking-[0.1em] uppercase border border-[rgba(200,169,110,0.08)] px-3 py-1.5 shrink-0">
                      {company.hq.split(",")[1]?.trim()}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="font-sans text-muted-foreground leading-relaxed flex-1">
                    {company.summary}
                  </p>

                  {/* Detail */}
                  <p className="font-sans text-sm text-muted-foreground/50 leading-relaxed border-l border-[rgba(200,169,110,0.15)] pl-4 italic">
                    {company.detail}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {company.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-muted-foreground/50 tracking-[0.12em] uppercase border border-[rgba(150,150,150,0.1)] px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
