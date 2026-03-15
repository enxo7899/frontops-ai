"use client";

import { motion } from "framer-motion";
import { Rocket, Globe, Users, Star } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/section";

const icons = [Rocket, Globe, Users, Star];

interface SocialProofProps {
  dict: {
    badge: string;
    title: string;
    items: string[];
  };
}

export function SocialProofSection({ dict }: SocialProofProps) {
  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeader badge={dict.badge} title={dict.title} />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {dict.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">{item}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
