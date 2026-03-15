"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  dark?: boolean;
  noPadding?: boolean;
}

export function Section({ className, dark, noPadding, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        !noPadding && "py-20 md:py-28 lg:py-32",
        dark && "bg-dark text-dark-foreground",
        !dark && "bg-background text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function Container({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  dark,
  center = true,
  className,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12 md:mb-16", center && "text-center", className)}
    >
      {badge && (
        <span
          className={cn(
            "mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase",
            dark
              ? "bg-white/10 text-white/80 border border-white/10"
              : "bg-primary/10 text-primary border border-primary/20"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-3xl text-lg leading-relaxed",
            center && "mx-auto",
            dark ? "text-dark-muted" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
