"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Hotel, Scissors, Briefcase } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/section";

const icons = [ShoppingBag, Hotel, Scissors, Briefcase];

interface SectorsProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string; scenario: string }[];
  };
}

export function SectorsSection({ dict }: SectorsProps) {
  return (
    <Section dark className="relative bg-dark overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        
        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[150px]" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-50" />
      </div>

      <Container className="relative z-10">
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} dark />
        <div className="grid gap-6 md:grid-cols-2">
          {dict.items.map((sector, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-dark-border/50 bg-dark-card/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{sector.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-dark-muted">{sector.description}</p>
                  <div className="rounded-xl bg-dark-secondary/80 border border-dark-border/50 p-4">
                    <p className="text-xs font-medium text-primary mb-1">Scenario</p>
                    <p className="text-xs leading-relaxed text-dark-muted italic">&quot;{sector.scenario}&quot;</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}