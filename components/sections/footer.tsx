'use client'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-16 bg-[#09090C] border-t border-[rgba(200,169,110,0.08)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-end">
          {/* Name */}
          <div>
            <p className="font-cormorant text-3xl text-foreground tracking-[-0.02em]">
              Robert Nowak
            </p>
            <p className="font-mono text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-2">
              Head of Finance · AI Builder · Munich
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[10px] text-muted-foreground/50 tracking-[0.25em] uppercase mb-4">
              Sections
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Fitness", href: "#fitness" },
                { label: "AI Projects", href: "#ai" },
                { label: "CFO Tools", href: "#tools" },
                { label: "Market Developments", href: "#market" },
                { label: "Building a House", href: "#house" },
                { label: "Tobi & Benny", href: "#dogs" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + copyright */}
          <div className="lg:text-right">
            <p className="font-mono text-[10px] text-muted-foreground/50 tracking-[0.25em] uppercase mb-4">
              Contact
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              robert.nowak.30
              <br />
              @googlemail.com
            </p>
            <p className="font-mono text-[10px] text-muted-foreground/30 tracking-[0.15em] uppercase mt-8">
              © {year} Robert Nowak
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
