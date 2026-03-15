"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/dictionaries";

interface CtaProps {
  lang: Locale;
  dict: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    cta3: string;
  };
}

export function CtaSection({ lang, dict }: CtaProps) {
  return (
    <section className="relative overflow-hidden bg-dark py-20 md:py-28">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-muted">
            {dict.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
