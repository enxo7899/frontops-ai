"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Globe, AudioLines } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/section";

const icons = [Layers, Cpu, Globe, AudioLines];

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
    <Section dark className="bg-noise">
      <Container>
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} dark />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {dict.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card/50 p-8 transition-all duration-300 hover:border-primary/20"
              >
                <div className="absolute -top-px left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
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
