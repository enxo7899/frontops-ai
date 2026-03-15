"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Eye, ArrowRight, Shield, Heart, Lightbulb, MapPin } from "lucide-react";
import Link from "next/link";
import { Section, Container, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/dictionaries";

const valueIcons = [Shield, Heart, Lightbulb, MapPin];

export default function AboutPage() {
  const params = useParams();
  const lang = params.lang as Locale;
  const [dict, setDict] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    import(`@/lib/i18n/${lang}.json`).then((m) => setDict(m.default));
  }, [lang]);

  if (!dict) return <div className="min-h-screen bg-dark" />;

  return (
    <>
      <section className="relative overflow-hidden bg-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                {dict.about.hero.badge}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {dict.about.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-dark-muted"
            >
              {dict.about.hero.subtitle}
            </motion.p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-border bg-white p-8 shadow-lg shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">{dict.about.mission.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{dict.about.mission.description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-border bg-white p-8 shadow-lg shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">{dict.about.vision.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{dict.about.vision.description}</p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHeader
            badge={lang === "en" ? "Our Values" : "Vlerat Tona"}
            title={lang === "en" ? "What Drives Us" : "Çfarë Na Motivon"}
            dark
          />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {dict.about.values.map((value: { title: string; description: string }, i: number) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-dark-border bg-dark-card/50 p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-dark-muted">{value.description}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{dict.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-muted">{dict.cta.subtitle}</p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link href={`/${lang}/pilot`}>
                <Button variant="accent" size="lg" className="group">
                  {dict.cta.cta1}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={`/${lang}/contact`}>
                <Button variant="secondary" size="lg">{dict.cta.cta3}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
