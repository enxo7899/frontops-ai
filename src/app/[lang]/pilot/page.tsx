"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, HeadphonesIcon, MessageSquare, Tag, Check, ArrowRight, Send } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Locale } from "@/lib/i18n/dictionaries";

const benefitIcons = [Rocket, HeadphonesIcon, MessageSquare, Tag];

export default function PilotPage() {
  const params = useParams();
  const lang = params.lang as Locale;
  const [dict, setDict] = useState<Record<string, any> | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    import(`@/lib/i18n/${lang}.json`).then((m) => setDict(m.default));
  }, [lang]);

  if (!dict) return <div className="min-h-screen bg-dark" />;

  const pilot = dict.pilotPage;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute top-1/3 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
        </div>
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                {pilot.hero.badge}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {pilot.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-dark-muted"
            >
              {pilot.hero.subtitle}
            </motion.p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilot.benefits.map((benefit: { title: string; description: string }, i: number) => {
              const Icon = benefitIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                badge={pilot.ideal.title}
                title={pilot.ideal.title}
                subtitle={pilot.ideal.description}
                dark
                center={false}
              />
              <ul className="space-y-3">
                {pilot.ideal.criteria.map((criterion: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-dark-muted">{criterion}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl border border-dark-border bg-dark-card/80 p-8">
                <h3 className="mb-6 text-xl font-bold text-white">
                  {lang === "en" ? "Apply for the Pilot Program" : "Apliko për Programin Pilot"}
                </h3>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                      <Check className="h-8 w-8 text-success" />
                    </div>
                    <p className="text-lg font-medium text-white">{dict.contactPage.form.success}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input placeholder={dict.contactPage.form.name} className="bg-dark-secondary border-dark-border text-white placeholder:text-dark-muted" required />
                    <Input type="email" placeholder={dict.contactPage.form.email} className="bg-dark-secondary border-dark-border text-white placeholder:text-dark-muted" required />
                    <Input placeholder={dict.contactPage.form.company} className="bg-dark-secondary border-dark-border text-white placeholder:text-dark-muted" required />
                    <Input placeholder={dict.contactPage.form.phone} className="bg-dark-secondary border-dark-border text-white placeholder:text-dark-muted" />
                    <textarea
                      placeholder={dict.contactPage.form.message}
                      rows={3}
                      className="flex w-full rounded-xl border border-dark-border bg-dark-secondary px-4 py-3 text-sm text-white transition-colors placeholder:text-dark-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <Button type="submit" variant="accent" size="lg" className="w-full group">
                      <Send className="mr-2 h-4 w-4" />
                      {lang === "en" ? "Apply Now" : "Apliko Tani"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
