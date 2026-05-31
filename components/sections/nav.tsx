'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Fitness", href: "#fitness" },
  { label: "AI Projects", href: "#ai" },
  { label: "CFO Tools", href: "#tools" },
  { label: "Market", href: "#market" },
  { label: "House", href: "#house" },
  { label: "Tobi & Benny", href: "#dogs" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(9,9,12,0.88)] backdrop-blur-2xl border-b border-[rgba(200,169,110,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-cormorant text-xl text-foreground tracking-[-0.02em] hover:text-accent transition-colors duration-300"
        >
          RN
        </a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-[11px] text-muted-foreground hover:text-accent tracking-[0.2em] uppercase transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden font-mono text-[11px] text-muted-foreground hover:text-accent tracking-[0.2em] uppercase transition-colors duration-300"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[rgba(9,9,12,0.96)] backdrop-blur-2xl border-b border-[rgba(200,169,110,0.08)]"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-mono text-sm text-muted-foreground hover:text-accent tracking-[0.2em] uppercase transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
