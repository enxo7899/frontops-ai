"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail, MapPin, Send, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Locale } from "@/lib/i18n/dictionaries";

export default function ContactPage() {
  const params = useParams();
  const lang = params.lang as Locale;
  const [dict, setDict] = useState<Record<string, any> | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    import(`@/lib/i18n/${lang}.json`).then((m) => setDict(m.default));
  }, [lang]);

  if (!dict) return <div className="min-h-screen bg-dark" />;

  const contact = dict.contactPage;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute top-1/3 right-1/3 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                {contact.hero.badge}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {contact.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-dark-muted"
            >
              {contact.hero.subtitle}
            </motion.p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  {lang === "en" ? "Contact Information" : "Informacioni i Kontaktit"}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">{contact.info.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{lang === "en" ? "Location" : "Lokacioni"}</p>
                      <p className="text-sm font-medium text-foreground">{contact.info.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 p-6">
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {lang === "en" ? "Quick Response" : "Përgjigje e Shpejtë"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lang === "en"
                    ? "We typically respond within 24 hours. For urgent inquiries, mention it in your message."
                    : "Zakonisht përgjigjemi brenda 24 orëve. Për pyetje urgjente, përmendeni në mesazhin tuaj."}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border bg-white p-8 shadow-lg shadow-primary/5">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                      <Check className="h-8 w-8 text-success" />
                    </div>
                    <p className="text-lg font-medium text-foreground">{contact.form.success}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">{contact.form.name}</label>
                        <Input placeholder={contact.form.name} required />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">{contact.form.email}</label>
                        <Input type="email" placeholder={contact.form.email} required />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">{contact.form.company}</label>
                        <Input placeholder={contact.form.company} />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">{contact.form.phone}</label>
                        <Input placeholder={contact.form.phone} />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">{contact.form.interest}</label>
                      <select className="flex h-11 w-full rounded-xl border border-border bg-white px-4 py-2 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                        {contact.form.interestOptions.map((option: string) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">{contact.form.message}</label>
                      <textarea
                        placeholder={contact.form.message}
                        rows={4}
                        className="flex w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <Button type="submit" variant="accent" size="lg" className="w-full group">
                      <Send className="mr-2 h-4 w-4" />
                      {contact.form.submit}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
