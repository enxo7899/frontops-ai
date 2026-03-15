"use client";

import { motion } from "framer-motion";
import {
  MessageCircle, Target, RefreshCw, Brain, Users, LayoutDashboard, Mic, Phone,
} from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const icons = [MessageCircle, Target, RefreshCw, Brain, Users, LayoutDashboard, Mic, Phone];
const accents = [
  "from-green-400 to-emerald-600",
  "from-primary to-violet-600",
  "from-amber-400 to-orange-600",
  "from-cyan-400 to-blue-600",
  "from-pink-400 to-rose-600",
  "from-indigo-400 to-primary",
  "from-accent to-teal-600",
  "from-purple-400 to-fuchsia-600",
];

interface FeaturesProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
}

export function FeaturesSection({ dict }: FeaturesProps) {
  return (
    <Section dark className="bg-noise">
      <Container>
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} dark />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((feature, i) => {
            const Icon = icons[i];
            const isLarge = i === 0 || i === 3;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={isLarge ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <SpotlightCard dark className="h-full">
                  <div className="p-6">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accents[i]} text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-dark-muted">{feature.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
