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
    <Section dark className="relative bg-dark overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-50" />
      </div>

      <Container className="relative z-10">
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} dark />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-red-500/20 bg-dark-card/80 backdrop-blur-sm p-8 shadow-2xl shadow-red-500/5"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20 border border-red-500/30">
                <X className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white/80">{dict.comparison.chatbot.title}</h3>
            </div>
            <ul className="space-y-4">
              {dict.comparison.chatbot.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 border border-red-500/30">
                    <X className="h-3 w-3 text-red-400" />
                  </div>
                  <span className="text-sm text-dark-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-dark-card/80 to-accent/10 backdrop-blur-sm p-8 glow-primary shadow-2xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white">{dict.comparison.frontops.title}</h3>
            </div>
            <ul className="space-y-4">
              {dict.comparison.frontops.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
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
