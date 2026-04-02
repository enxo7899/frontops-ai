"use client";

import { motion } from "framer-motion";
import { Section, Container, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

// Logo icon component matching the header logo
function LogoIcon({ className, accentColor = "fill-accent" }: { className?: string; accentColor?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("h-6 w-6", className)}>
      <rect x="2" y="2" width="28" height="28" rx="8" className="fill-primary/20" />
      <rect x="2" y="2" width="28" height="28" rx="8" className="stroke-primary/40" strokeWidth="1" />
      <path d="M10 11h12M10 16h8M10 21h10" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="21" r="3" className={accentColor} />
    </svg>
  );
}

const iconAccents = [
  "fill-accent",
  "fill-green-400",
  "fill-violet-400", 
  "fill-amber-400",
];

interface InvestorProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    points: { title: string; description: string }[];
  };
}

export function InvestorSection({ dict }: InvestorProps) {
  return (
    <Section dark className="relative bg-dark overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        
        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-violet-500/5 blur-[150px]" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-50" />
      </div>

      <Container className="relative z-10">
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} dark />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {dict.points.map((point, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-dark-border/50 bg-dark-card/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute -top-px left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <LogoIcon accentColor={iconAccents[i]} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{point.title}</h3>
                <p className="text-sm leading-relaxed text-dark-muted">{point.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}