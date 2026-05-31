'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const comingPosts = [
  { tag: "Recovery", title: "Starting over: what forced rest teaches about building systems" },
  { tag: "Training", title: "Applying progressive overload principles to technology learning" },
  { tag: "Mindset", title: "Why physical routine is the most underrated executive tool" },
]

export function Fitness() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="fitness"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ background: "#0E0C09" }}
    >
      {/* Warm radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(200,169,110,0.06)_0%,transparent_65%)] pointer-events-none" />

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
                01 · Fitness
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
              <p className="font-mono text-[11px] text-accent tracking-[0.3em] uppercase">Fitness</p>
            </motion.div>

            {/* Main editorial block */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-8">
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="font-cormorant font-light text-[clamp(2.8rem,6vw,5rem)] text-foreground leading-[1.05] tracking-[-0.01em]"
                >
                  The pace of change
                  <br />
                  <span className="italic text-accent">is the challenge.</span>
                </motion.h2>

                <motion.blockquote
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="border-l-2 border-accent pl-8 py-1"
                >
                  <p className="font-cormorant italic text-xl lg:text-2xl text-foreground/75 leading-relaxed">
                    &ldquo;Every month brings a new model, a new platform, a new framework. The
                    question isn&rsquo;t whether to keep up — it&rsquo;s how to keep up without
                    losing yourself in the process.&rdquo;
                  </p>
                </motion.blockquote>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5 font-sans text-muted-foreground leading-relaxed"
              >
                <p>
                  Technology is compressing the time between invention and obsolescence. What
                  used to take a decade now takes eighteen months. For senior leaders, the
                  gap between what&rsquo;s technically possible and what your organisation can
                  actually absorb is widening every quarter.
                </p>
                <p>
                  Staying current isn&rsquo;t just professional hygiene — it&rsquo;s a survival skill.
                  But the way most people try to keep up is unsustainable: tab overload,
                  newsletter subscriptions, endless podcasts, FOMO-driven context-switching.
                  That&rsquo;s not learning; that&rsquo;s anxiety dressed up as productivity.
                </p>
                <p>
                  Physical discipline helps. The same principles that make training work —
                  progressive overload, deliberate recovery, consistency over intensity —
                  apply to navigating technological change. You don&rsquo;t absorb everything.
                  You build a system that lets you absorb the right things.
                </p>
              </motion.div>
            </div>

            {/* Life Time Frisco */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-8 items-center border border-[rgba(200,169,110,0.08)] hover:border-[rgba(200,169,110,0.18)] transition-colors duration-500 overflow-hidden"
              style={{ background: "#0E1014" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#131318]">
                <img
                  src="https://placehold.co/600x450/131318/C8A96E?text=Life+Time+Frisco"
                  alt="Life Time Frisco"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E1014]/60" />
              </div>

              {/* Info */}
              <div className="space-y-5 p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-accent" />
                  <p className="font-mono text-[11px] text-accent tracking-[0.25em] uppercase">Where I train</p>
                </div>
                <h3 className="font-cormorant font-semibold text-3xl lg:text-4xl text-foreground tracking-[-0.01em]">
                  Life Time Frisco
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  More athletic resort than gym. Life Time Frisco is where the discipline happens —
                  a 100,000+ sq ft facility with everything from free weights and machines to
                  indoor pools, group training, and a full spa. It&rsquo;s the kind of place that
                  makes excuses harder to sustain.
                </p>
                <p className="font-sans text-sm text-muted-foreground/60 leading-relaxed">
                  Frisco, TX &mdash; open daily
                </p>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-px bg-[rgba(200,169,110,0.1)] origin-left"
            />

            {/* Posts preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between mb-8">
                <p className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">
                  Posts · Coming soon
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse" />
                  <span className="font-mono text-[10px] text-muted-foreground/50 tracking-[0.15em] uppercase">
                    Updates in progress
                  </span>
                </div>
              </div>

              <div className="space-y-px">
                {comingPosts.map((post, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.45 + 0.08 * i }}
                    className="group flex items-start gap-6 p-5 border border-[rgba(200,169,110,0.06)] hover:border-[rgba(200,169,110,0.15)] hover:bg-[rgba(200,169,110,0.02)] transition-all duration-400 cursor-default"
                  >
                    <span className="font-mono text-[10px] text-accent/60 tracking-[0.2em] uppercase shrink-0 pt-0.5 w-20">
                      {post.tag}
                    </span>
                    <p className="font-cormorant text-lg text-foreground/50 group-hover:text-foreground/75 transition-colors duration-300 leading-snug">
                      {post.title}
                    </p>
                    <span className="font-mono text-[10px] text-muted-foreground/30 tracking-[0.15em] uppercase shrink-0 ml-auto pt-0.5">
                      Draft
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
