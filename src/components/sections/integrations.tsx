"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, MessagesSquare, Globe, Mail, Phone } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const channelIcons = [MessageCircle, Instagram, MessagesSquare, Globe, Mail, Phone];
const channelColors = [
  "from-green-400 to-green-600",
  "from-pink-400 to-purple-600",
  "from-blue-400 to-blue-600",
  "from-primary to-accent",
  "from-orange-400 to-red-500",
  "from-accent to-blue-500",
];

interface IntegrationsProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    channels: { name: string; status: string }[];
  };
}

export function IntegrationsSection({ dict }: IntegrationsProps) {
  return (
    <Section dark>
      <Container>
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} dark />
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          {dict.channels.map((channel, i) => {
            const Icon = channelIcons[i];
            const isLive = channel.status === "Live" || channel.status === "Aktiv";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-dark-border bg-dark-card/50 p-6 text-center transition-all duration-300 hover:border-primary/30"
              >
                <div className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white transition-transform group-hover:scale-110",
                  channelColors[i]
                )}>
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-medium text-white">{channel.name}</span>
                <span className={cn(
                  "rounded-full px-3 py-0.5 text-[10px] font-medium",
                  isLive
                    ? "bg-success/10 text-success"
                    : "bg-white/5 text-dark-muted"
                )}>
                  {channel.status}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
