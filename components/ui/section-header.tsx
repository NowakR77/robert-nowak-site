'use client'

import { motion } from "framer-motion"

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  isInView: boolean
}

export function SectionHeader({ label, title, subtitle, isInView }: SectionHeaderProps) {
  return (
    <div className="space-y-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4"
      >
        <div className="w-8 h-px bg-accent" />
        <p className="font-mono text-[11px] text-accent tracking-[0.3em] uppercase">{label}</p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-cormorant font-light text-5xl lg:text-6xl text-foreground leading-[1.05] tracking-[-0.01em]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-muted-foreground text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
