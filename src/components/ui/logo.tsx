import { cn } from "@/lib/utils";

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
          <rect x="2" y="2" width="28" height="28" rx="8" className={cn(light ? "fill-white/10" : "fill-primary/10")} />
          <rect x="2" y="2" width="28" height="28" rx="8" className={cn(light ? "stroke-white/30" : "stroke-primary/30")} strokeWidth="1" />
          <path d="M10 11h12M10 16h8M10 21h10" className={cn(light ? "stroke-white" : "stroke-primary")} strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="21" r="3" className="fill-accent" />
        </svg>
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className={cn("text-lg font-bold tracking-tight", light ? "text-white" : "text-foreground")}>
          FrontOps
        </span>
        <span className="text-lg font-bold tracking-tight text-gradient">
          AI
        </span>
      </div>
    </div>
  );
}
