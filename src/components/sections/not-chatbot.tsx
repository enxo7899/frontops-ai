"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/section";

interface NotChatbotProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    comparison: {
      chatbot: { title: string; points: string[] };
      frontops: { title: string; points: string[] };
    };
  };
}

export function NotChatbotSection({ dict }: NotChatbotProps) {
  return (
    <Section dark className="bg-noise">
      <Container>
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} dark />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-dark-border bg-dark-card/50 p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                <X className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white/60">{dict.comparison.chatbot.title}</h3>
            </div>
            <ul className="space-y-4">
              {dict.comparison.chatbot.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                    <X className="h-3 w-3 text-red-400" />
                  </div>
                  <span className="text-sm text-dark-muted">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 glow-primary"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white">{dict.comparison.frontops.title}</h3>
            </div>
            <ul className="space-y-4">
              {dict.comparison.frontops.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-dark-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
