import { cn } from "@/lib/utils"

export type MilestoneStatus = "complete" | "active" | "upcoming"

export interface Milestone {
  phase: string
  description: string
  status: MilestoneStatus
  date: string
}

interface TimelineProps {
  milestones: Milestone[]
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="space-y-0">
      {milestones.map((item, i) => (
        <div key={i} className="flex gap-6 group">
          {/* Connector */}
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "w-3 h-3 rounded-full border-2 shrink-0 mt-0.5 z-10 transition-all duration-300",
                item.status === "complete" &&
                  "border-accent bg-accent shadow-[0_0_8px_rgba(200,169,110,0.4)]",
                item.status === "active" &&
                  "border-accent bg-transparent animate-pulse",
                item.status === "upcoming" &&
                  "border-[rgba(200,169,110,0.2)] bg-transparent"
              )}
            />
            {i < milestones.length - 1 && (
              <div
                className={cn(
                  "w-px flex-1 mt-2",
                  item.status === "complete"
                    ? "bg-[rgba(200,169,110,0.35)]"
                    : "bg-[rgba(200,169,110,0.1)]"
                )}
                style={{ minHeight: 36 }}
              />
            )}
          </div>

          {/* Content */}
          <div className="pb-8">
            <div className="flex items-center gap-3 mb-1.5">
              <h4
                className={cn(
                  "font-cormorant text-lg font-semibold leading-none",
                  item.status === "complete" && "text-foreground",
                  item.status === "active" && "text-accent",
                  item.status === "upcoming" && "text-muted-foreground"
                )}
              >
                {item.phase}
              </h4>
              <span className="font-mono text-[10px] text-muted-foreground/50 tracking-[0.15em] uppercase">
                {item.date}
              </span>
              {item.status === "active" && (
                <span className="font-mono text-[9px] text-accent tracking-[0.2em] uppercase border border-[rgba(200,169,110,0.3)] px-1.5 py-0.5 rounded-sm">
                  Now
                </span>
              )}
            </div>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
