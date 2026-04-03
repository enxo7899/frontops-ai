"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n/dictionaries";

interface FooterProps {
  lang: Locale;
  dict: {
    description: string;
    product: string;
    company: string;
    legal: string;
    links: Record<string, string>;
    copyright: string;
    madeIn: string;
  };
}

export function Footer({ lang, dict }: FooterProps) {
  const productLinks = [
    { label: dict.links.platform, href: `/${lang}/product` },
    { label: dict.links.features, href: `/${lang}/product#features` },
    { label: dict.links.integrations, href: `/${lang}/product#integrations` },
  ];

  const companyLinks = [
    { label: dict.links.about, href: `/${lang}/about` },
    { label: dict.links.pilot, href: `/${lang}/pilot` },
    { label: dict.links.contact, href: `/${lang}/contact` },
  ];

  const legalLinks = [
    { label: dict.links.privacy, href: `/${lang}/privacy` },
    { label: dict.links.terms, href: `/${lang}/terms` },
  ];

  return (
    <footer className="relative bg-dark text-dark-foreground">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/95 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-dark-border/50 py-16 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Logo light className="mb-4" />
            <p className="text-sm leading-relaxed text-dark-muted max-w-xs mb-6">
              {dict.description}
            </p>
            <div className="flex items-center gap-2 text-xs">
              <div className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </div>
              <span className="text-green-400 font-medium">AI Systems Online</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              {dict.product}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              {dict.company}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              {dict.legal}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-xs text-dark-muted">{dict.copyright}</p>
          <div className="flex items-center gap-2">
            <p className="text-xs text-dark-muted">{dict.madeIn}</p>
            <span className="text-xs text-dark-muted/50">•</span>
            <p className="text-xs text-dark-muted/70">Powered by Advanced AI</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
