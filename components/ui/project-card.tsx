'use client'

import { cn } from "@/lib/utils"

interface ProjectCardProps {
  name: string
  subtitle: string
  description: string
  tags: string[]
  status: string
  statusColor: "accent" | "muted"
  className?: string
}

export function ProjectCard({
  name,
  subtitle,
  description,
  tags,
  status,
  statusColor,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-surface border border-[rgba(200,169,110,0.08)] rounded-sm p-8 overflow-hidden",
        "hover:border-[rgba(200,169,110,0.3)] transition-all duration-500",
        "hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(200,169,110,0.08)]",
        className
      )}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(200,169,110,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-cormorant font-semibold text-2xl text-foreground tracking-[-0.01em]">
              {name}
            </h3>
            <p className="font-mono text-[11px] text-muted-foreground tracking-[0.15em] uppercase mt-1">
              {subtitle}
            </p>
          </div>
          <span
            className={cn(
              "font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm border shrink-0",
              statusColor === "accent"
                ? "text-accent border-[rgba(200,169,110,0.3)] bg-[rgba(200,169,110,0.06)]"
                : "text-muted-foreground border-[rgba(150,150,150,0.2)]"
            )}
          >
            {status}
          </span>
        </div>

        <p className="font-sans text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-muted-foreground/70 tracking-[0.15em] uppercase border border-[rgba(150,150,150,0.12)] px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
