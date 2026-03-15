"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare, UserCheck, RefreshCw, ShoppingCart, Calendar, Inbox,
  FileText, ArrowRightLeft, Mic, Brain, Sparkles, ArrowRight, Zap,
} from "lucide-react";
import Link from "next/link";
import { Section, Container, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/dictionaries";

const capabilityIcons = [
  MessageSquare, UserCheck, Brain, ShoppingCart, RefreshCw, Calendar,
  Inbox, FileText, ArrowRightLeft, Mic,
];

export default function ProductPage() {
  const params = useParams();
  const lang = params.lang as Locale;
  const [dict, setDict] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    import(`@/lib/i18n/${lang}.json`).then((m) => setDict(m.default));
  }, [lang]);

  if (!dict) return <div className="min-h-screen bg-dark" />;

  const product = dict.product;

  return (
    <>
      <section className="relative overflow-hidden bg-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute top-1/3 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/3 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
        </div>
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                {product.hero.badge}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {product.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-dark-muted"
            >
              {product.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Link href={`/${lang}/pilot`}>
                <Button variant="accent" size="lg" className="group">
                  {dict.hero.cta1}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={`/${lang}/contact`}>
                <Button variant="secondary" size="lg">
                  {dict.hero.cta3}
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            badge={product.capabilities.title}
            title={product.capabilities.title}
            subtitle={lang === "en" ? "A comprehensive suite of AI-powered capabilities designed to handle every aspect of customer operations." : "Një gamë e plotë aftësish të mundësuara nga AI të dizajnuara për të menaxhuar çdo aspekt të operacioneve me klientë."}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.capabilities.items.map((item: { title: string; description: string }, i: number) => {
              const Icon = capabilityIcons[i] || Zap;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden bg-dark py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />
        </div>
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {dict.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-muted">
              {dict.cta.subtitle}
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link href={`/${lang}/pilot`}>
                <Button variant="accent" size="lg" className="group">
                  {dict.cta.cta1}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={`/${lang}/contact`}>
                <Button variant="secondary" size="lg">
                  {dict.cta.cta3}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
