'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const dogs = [
  {
    name: "Tobi",
    breed: "Havapoo",
    description:
      "The elder statesman. Calm, deliberate, and completely convinced he is in charge. He is.",
    image: "https://placehold.co/480x600/100E0A/C8A96E?text=Tobi",
  },
  {
    name: "Benny",
    breed: "Havapoo",
    description:
      "Pure enthusiasm in a small package. Benny approaches every morning like it's the best thing that has ever happened to him. He is usually right.",
    image: "https://placehold.co/480x600/100E0A/C8A96E?text=Benny",
  },
]

export function Dogs() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="dogs"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      style={{ background: "#0C0A07" }}
    >
      {/* Warm ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(200,169,110,0.07)_0%,transparent_65%)] pointer-events-none" />

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
                05 · Dogs
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
              <p className="font-mono text-[11px] text-accent tracking-[0.3em] uppercase">Dogs</p>
            </motion.div>

            {/* Heading block */}
            <div className="max-w-2xl space-y-7">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-cormorant font-light text-[clamp(2.8rem,6vw,5rem)] text-foreground leading-[1.05] tracking-[-0.01em]"
              >
                Tobi &amp; Benny.
                <br />
                <span className="italic text-accent">The constants.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-muted-foreground leading-relaxed text-base lg:text-lg"
              >
                Two Havapoos. One agenda: wherever you are, they are there first. In a life
                built around abstract systems, quarterly targets, and infrastructure that
                runs in the cloud, having something that greets you at the door — unconditionally,
                immediately, every single time — is not a small thing.
              </motion.p>
            </div>

            {/* Dog cards */}
            <div className="grid md:grid-cols-2 gap-5">
              {dogs.map((dog, i) => (
                <motion.div
                  key={dog.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + 0.15 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative overflow-hidden border border-[rgba(200,169,110,0.1)] hover:border-[rgba(200,169,110,0.25)] transition-all duration-500"
                >
                  {/* Photo */}
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={dog.image}
                      alt={dog.name}
                      className="w-full h-full object-cover opacity-45 group-hover:opacity-60 group-hover:scale-[1.03] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A07] via-[#0C0A07]/30 to-transparent" />

                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="font-cormorant font-light text-4xl text-foreground tracking-[-0.01em] leading-none">
                            {dog.name}
                          </h3>
                          <p className="font-mono text-[10px] text-accent/70 tracking-[0.25em] uppercase mt-1.5">
                            {dog.breed}
                          </p>
                        </div>
                        {/* Paw print accent */}
                        <span className="text-accent/20 text-2xl select-none">🐾</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-6 border-t border-[rgba(200,169,110,0.07)]">
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/75 transition-colors duration-500">
                      {dog.description}
                    </p>
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
