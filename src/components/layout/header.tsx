"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/dictionaries";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  lang: Locale;
  nav: {
    home: string;
    product: string;
    solutions: string;
    about: string;
    pilot: string;
    contact: string;
    earlyAccess: string;
    language: string;
  };
}

export function Header({ lang, nav }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: nav.home, href: `/${lang}` },
    { label: nav.product, href: `/${lang}/product` },
    { label: nav.solutions, href: `/${lang}/solutions` },
    { label: nav.about, href: `/${lang}/about` },
    { label: nav.pilot, href: `/${lang}/pilot` },
    { label: nav.contact, href: `/${lang}/contact` },
  ];

  const otherLang = lang === "en" ? "sq" : "en";
  const langSwitchHref = pathname.replace(`/${lang}`, `/${otherLang}`);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-18">
          <Link href={`/${lang}`} className="relative z-10">
            <Logo light={!isScrolled} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? isScrolled
                      ? "text-primary bg-primary/5"
                      : "text-white bg-white/10"
                    : isScrolled
                    ? "text-foreground/70 hover:text-foreground hover:bg-secondary"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={langSwitchHref}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isScrolled
                  ? "text-foreground/70 hover:text-foreground hover:bg-secondary"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              <Globe className="h-4 w-4" />
              {nav.language}
            </Link>
            <Link href={`/${lang}/pilot`}>
              <Button variant={isScrolled ? "default" : "secondary"} size="sm">
                {nav.earlyAccess}
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "relative z-10 rounded-lg p-2 lg:hidden transition-colors",
              isScrolled || isMobileOpen
                ? "text-foreground hover:bg-secondary"
                : "text-white hover:bg-white/10"
            )}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20 lg:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block border-b border-border/50 py-4 text-lg font-medium transition-colors",
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground/70"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-6 flex flex-col gap-3"
              >
                <Link
                  href={langSwitchHref}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground"
                >
                  <Globe className="h-4 w-4" />
                  {nav.language}
                </Link>
                <Link href={`/${lang}/pilot`}>
                  <Button className="w-full" size="lg">
                    {nav.earlyAccess}
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
