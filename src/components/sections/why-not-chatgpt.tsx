"use client";

import { motion } from "framer-motion";
import { X, Check, Lightbulb, Bot, Cpu } from "lucide-react";
import { Section, Container } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface WhyNotChatgptProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    explanation: string;
    chatgpt: {
      title: string;
      subtitle: string;
      points: string[];
    };
    frontops: {
      title: string;
      subtitle: string;
      points: string[];
    };
    bottomLine: string;
  };
}

export function WhyNotChatgptSection({ dict }: WhyNotChatgptProps) {
  return (
    <Section className="relative bg-gradient-to-b from-muted to-background bg-grid">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary/10 text-primary border border-primary/20">
            {dict.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {dict.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-12 max-w-3xl"
        >
          <div className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <p className="text-base leading-relaxed text-foreground">{dict.explanation}</p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="h-full">
              <div className="p-8">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                    <Bot className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{dict.chatgpt.title}</h3>
                    <p className="text-xs text-muted-foreground">{dict.chatgpt.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {dict.chatgpt.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100">
                        <X className="h-3 w-3 text-red-500" />
                      </div>
                      <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="h-full border-primary/20 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03]">
              <div className="border-beam" />
              <div className="p-8">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{dict.frontops.title}</h3>
                    <p className="text-xs text-primary font-medium">{dict.frontops.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {dict.frontops.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-2xl bg-dark p-8 text-center">
            <div className="absolute inset-0 bg-grid-dark opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full bg-primary/10 blur-[80px]" />
            <p className="relative text-base leading-relaxed text-dark-foreground italic">
              &quot;{dict.bottomLine}&quot;
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
