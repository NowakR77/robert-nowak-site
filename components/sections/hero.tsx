'use client'

import { motion } from "framer-motion"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#09090C] overflow-hidden flex items-center"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10 pt-16">
        {/* Left: Text content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-accent text-[11px] tracking-[0.35em] uppercase mb-5">
              Personal Portfolio
            </p>
            <h1 className="font-cormorant font-light text-[clamp(4rem,10vw,8rem)] text-foreground leading-[0.9] tracking-[-0.02em]">
              Robert
              <br />
              <span className="italic text-accent">Nowak</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-2"
          >
            {["Head of Finance · Siemens", "AI Builder", "In Progress"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase border border-[rgba(200,169,110,0.18)] px-3 py-1.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-muted-foreground text-base lg:text-lg max-w-md leading-relaxed"
          >
            Head of Finance at Siemens Software. Building AI systems that run in production.
            Recovering. Building a house. Learning in public.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#recovery"
              className="group inline-flex items-center gap-2 font-mono text-[11px] text-accent tracking-[0.25em] uppercase hover:text-foreground transition-colors duration-300"
            >
              <span>Explore</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right: 3D Scene */}
        <div className="flex-1 w-full h-[400px] lg:h-[580px] relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] text-muted-foreground/60 tracking-[0.35em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent" />
      </motion.div>
    </section>
  )
}
