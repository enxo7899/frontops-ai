"use client";

import { motion } from "framer-motion";
import { DollarSign, MessageSquareOff, Clock, Fingerprint, UserMinus, TrendingDown } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const icons = [DollarSign, MessageSquareOff, Clock, Fingerprint, UserMinus, TrendingDown];

interface ProblemProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    problems: { title: string; description: string }[];
  };
}

export function ProblemSection({ dict }: ProblemProps) {
  return (
    <Section className="bg-muted bg-grid">
      <Container>
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.problems.map((problem, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SpotlightCard className="h-full">
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{problem.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
