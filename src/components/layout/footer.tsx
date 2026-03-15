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
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-dark-border py-16 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Logo light className="mb-4" />
            <p className="text-sm leading-relaxed text-dark-muted max-w-xs">
              {dict.description}
            </p>
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
          <p className="text-xs text-dark-muted">{dict.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
