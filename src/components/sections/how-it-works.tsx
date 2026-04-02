"use client";

import { motion } from "framer-motion";
import { Section, Container, SectionHeader } from "@/components/ui/section";

interface HowItWorksProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    steps: { step: string; title: string; description: string }[];
  };
}

export function HowItWorksSection({ dict }: HowItWorksProps) {
  return (
    <Section dark className="relative bg-dark overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        
        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[150px]" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-50" />
      </div>

      <Container className="relative z-10">
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} dark />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-accent/20 hidden md:block" />
          <div className="space-y-8 md:space-y-12">
            {dict.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-bold text-lg shadow-lg shadow-primary/20 border border-white/10">
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}