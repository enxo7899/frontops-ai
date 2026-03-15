"use client";

import { motion } from "framer-motion";
import { X, Check, Sun, Moon } from "lucide-react";
import { Section, Container } from "@/components/ui/section";

interface BeforeAfterProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    before: { title: string; items: string[] };
    after: { title: string; items: string[] };
  };
}

export function BeforeAfterSection({ dict }: BeforeAfterProps) {
  return (
    <Section dark className="bg-noise">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-white/10 text-white/80 border border-white/10">
            {dict.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-dark-muted">
            {dict.subtitle}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                <Moon className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-red-300">{dict.before.title}</h3>
            </div>
            <ul className="space-y-4">
              {dict.before.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                    <X className="h-3 w-3 text-red-400" />
                  </div>
                  <span className="text-sm leading-relaxed text-dark-muted">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 glow-primary"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Sun className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white">{dict.after.title}</h3>
            </div>
            <ul className="space-y-4">
              {dict.after.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed text-dark-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
