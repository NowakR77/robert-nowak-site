interface StatBlockProps {
  stat: string
  label: string
  note: string
}

export function StatBlock({ stat, label, note }: StatBlockProps) {
  return (
    <div className="bg-surface p-8 h-full group hover:bg-[#16161C] transition-colors duration-300 cursor-default">
      <p className="font-cormorant font-light text-5xl text-accent tracking-[-0.02em] leading-none mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
        {stat}
      </p>
      <p className="font-sans text-sm text-foreground/80 leading-snug mb-2">{label}</p>
      <p className="font-mono text-[10px] text-muted-foreground/50 tracking-[0.1em] uppercase">
        {note}
      </p>
    </div>
  )
}
