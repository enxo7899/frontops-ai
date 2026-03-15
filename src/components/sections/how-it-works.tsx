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
    <Section className="bg-grid">
      <Container>
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} />
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
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white font-bold text-lg shadow-lg shadow-primary/20">
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
