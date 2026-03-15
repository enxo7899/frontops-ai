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
    <Section className="bg-grid">
      <Container>
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} />
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
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{sector.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{sector.description}</p>
                  <div className="rounded-xl bg-muted/80 border border-border/50 p-4">
                    <p className="text-xs font-medium text-primary mb-1">Scenario</p>
                    <p className="text-xs leading-relaxed text-muted-foreground italic">&quot;{sector.scenario}&quot;</p>
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
