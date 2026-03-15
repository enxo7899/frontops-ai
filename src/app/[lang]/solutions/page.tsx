"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Hotel, Scissors, Briefcase, Sparkles, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/dictionaries";

const sectorIcons = [ShoppingBag, Hotel, Scissors, Briefcase];
const sectorGradients = [
  "from-pink-500/20 to-purple-500/20",
  "from-amber-500/20 to-orange-500/20",
  "from-teal-500/20 to-cyan-500/20",
  "from-blue-500/20 to-indigo-500/20",
];

export default function SolutionsPage() {
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
          <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
        </div>
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                {dict.solutions.hero.badge}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {dict.solutions.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-dark-muted"
            >
              {dict.solutions.hero.subtitle}
            </motion.p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-background bg-grid">
        <Container>
          <div className="space-y-16">
            {dict.sectors.items.map((sector: { title: string; description: string; scenario: string }, i: number) => {
              const Icon = sectorIcons[i];
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className={cn("flex flex-col gap-8 md:flex-row md:items-center", !isEven && "md:flex-row-reverse")}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-primary", sectorGradients[i])}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{sector.title}</h2>
                    </div>
                    <p className="mb-6 text-muted-foreground leading-relaxed">{sector.description}</p>
                    <div className="rounded-xl bg-muted border border-border p-5">
                      <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">Scenario</p>
                      <p className="text-sm text-muted-foreground italic leading-relaxed">&quot;{sector.scenario}&quot;</p>
                    </div>
                    <div className="mt-6">
                      <Link href={`/${lang}/pilot`}>
                        <Button className="group">
                          {dict.hero.cta1}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="rounded-2xl border border-border bg-white p-6 shadow-lg shadow-primary/5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-3 w-3 rounded-full bg-red-400" />
                        <div className="h-3 w-3 rounded-full bg-yellow-400" />
                        <div className="h-3 w-3 rounded-full bg-green-400" />
                        <span className="ml-2 text-xs text-muted-foreground font-mono">FrontOps AI — {sector.title}</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          lang === "en" ? "AI handling incoming inquiries" : "AI duke menaxhuar pyetjet hyrëse",
                          lang === "en" ? "Automatic lead qualification" : "Kualifikim automatik i klientëve",
                          lang === "en" ? "Smart follow-up sequences" : "Sekuenca inteligjente ndjekjeje",
                          lang === "en" ? "Conversation summaries" : "Përmbledhje bisedash",
                        ].map((item, j) => (
                          <div key={j} className="flex items-center gap-3 rounded-lg bg-muted p-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                              <Check className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-xs text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

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
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
