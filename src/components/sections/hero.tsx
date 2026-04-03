"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, Zap, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/ui/animated-text";
import type { Locale } from "@/lib/i18n/dictionaries";

interface HeroProps {
  lang: Locale;
  dict: {
    badge: string;
    title: string;
    titleWords: string[];
    subtitle: string;
    cta1: string;
    cta2: string;
    cta3: string;
    stats: {
      channels: string;
      channelsLabel: string;
      response: string;
      responseLabel: string;
      leads: string;
      leadsLabel: string;
      conversion?: string;
      conversionLabel?: string;
    };
    valueProps?: string[];
  };
}

export function HeroSection({ lang, dict }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {dict.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {dict.title}
            <br />
            <TypingText words={dict.titleWords} className="min-h-[1.2em]" interval={2500} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-dark-muted md:text-xl"
          >
            {dict.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href={`/${lang}/pilot`}>
              <Button variant="accent" size="xl" className="group w-full sm:w-auto">
                {dict.cta1}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href={`/${lang}/pilot`}>
              <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                {dict.cta2}
              </Button>
            </Link>
            <Link href={`/${lang}/contact`}>
              <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                {dict.cta3}
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="relative rounded-2xl border border-dark-border bg-dark-card/80 p-1 backdrop-blur-xl glow-primary">
            <div className="border-beam" />
            <div className="rounded-xl bg-dark-secondary/80 p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-dark-muted font-mono">FrontOps AI — Unified Inbox</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" /></span>
                  <span className="text-[10px] text-green-400 font-medium">AI Active</span>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-lg bg-dark-card border border-dark-border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">WhatsApp</p>
                      <p className="text-[10px] text-dark-muted">12 active</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Klea M.", msg: "Do you have this in size M?", init: "K" },
                      { name: "Andi B.", msg: "I'd like to book for Saturday", init: "A" },
                      { name: "Sara L.", msg: "Thanks! When does it arrive?", init: "S" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 rounded-md bg-dark-secondary/60 p-2">
                        <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-[9px] text-white font-bold">
                          {item.init}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-medium text-white/80 truncate">{item.name}</p>
                          <p className="text-[9px] text-dark-muted truncate">{item.msg}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-dark-card border border-dark-border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">AI Actions</p>
                      <p className="text-[10px] text-dark-muted">Real-time</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { action: "Lead qualified", detail: "Klea M. → Hot lead", color: "text-accent" },
                      { action: "Auto-replied", detail: "Andi B. → Booking confirmed", color: "text-green-400" },
                      { action: "Follow-up sent", detail: "Sara L. → Delivery update", color: "text-primary" },
                    ].map((item, i) => (
                      <div key={i} className="rounded-md bg-dark-secondary/60 p-2">
                        <p className={`text-[10px] font-medium ${item.color}`}>{item.action}</p>
                        <p className="text-[10px] text-dark-muted">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-dark-card border border-dark-border p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">Today&apos;s Results</p>
                      <p className="text-[10px] text-dark-muted">Live</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="text-dark-muted">Messages handled</span>
                        <span className="text-white font-medium">47</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-dark-secondary">
                        <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-primary to-accent" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="text-dark-muted">Leads qualified</span>
                        <span className="text-white font-medium">8</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-dark-secondary">
                        <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-primary to-accent" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="text-dark-muted">Sales closed</span>
                        <span className="text-white font-medium">3</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-dark-secondary">
                        <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-primary to-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: dict.stats.channels, label: dict.stats.channelsLabel, icon: Globe },
            { value: dict.stats.response, label: dict.stats.responseLabel, icon: Zap },
            { value: dict.stats.leads, label: dict.stats.leadsLabel, icon: Sparkles },
            ...(dict.stats.conversion ? [{ value: dict.stats.conversion, label: dict.stats.conversionLabel || '', icon: ArrowRight }] : []),
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-dark-muted md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {dict.valueProps && dict.valueProps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {dict.valueProps.map((prop, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <p className="text-sm text-dark-muted leading-relaxed">{prop}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
