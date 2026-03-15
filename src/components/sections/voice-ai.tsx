"use client";

import { motion } from "framer-motion";
import { Phone, Mic, Calendar, Globe, ArrowRightLeft } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/section";

const icons = [Phone, Mic, Calendar, Globe, ArrowRightLeft];

interface VoiceAiProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    features: string[];
    cta: string;
  };
}

export function VoiceAiSection({ dict }: VoiceAiProps) {
  return (
    <Section className="relative bg-gradient-to-b from-background to-muted">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} />
          <div className="relative mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-border bg-white p-8 shadow-xl shadow-primary/5"
            >
              <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {dict.features.map((feature, i) => {
                  const Icon = icons[i];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 rounded-xl bg-muted/80 p-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-foreground">{feature}</span>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent border border-accent/20">
                  {dict.cta}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
