"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inbox, Target, Mic, BarChart3, BookOpen, MessageSquare, Users, TrendingUp } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface ShowcaseProps {
  dict: {
    badge: string;
    title: string;
    subtitle: string;
    screens: {
      inbox: string;
      leads: string;
      voice: string;
      analytics: string;
      playbook: string;
    };
  };
}

const tabs = [
  { key: "inbox", icon: Inbox },
  { key: "leads", icon: Target },
  { key: "voice", icon: Mic },
  { key: "analytics", icon: BarChart3 },
  { key: "playbook", icon: BookOpen },
] as const;

function InboxMock() {
  const conversations = [
    { name: "Elira K.", channel: "WhatsApp", msg: "Hi, do you have this in size M?", time: "2m ago", status: "hot" },
    { name: "Arben M.", channel: "Instagram", msg: "Can I book for Saturday evening?", time: "5m ago", status: "warm" },
    { name: "Luana P.", channel: "Messenger", msg: "What are your prices for...", time: "12m ago", status: "new" },
    { name: "Dritan H.", channel: "Web Chat", msg: "I need a quote for my project", time: "18m ago", status: "warm" },
  ];
  return (
    <div className="space-y-2">
      {conversations.map((c, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg bg-dark-secondary/50 border border-dark-border/50 p-3 hover:bg-dark-secondary/80 transition-colors cursor-pointer">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-xs font-bold text-white shrink-0">
            {c.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-white">{c.name}</span>
              <span className="text-[10px] text-dark-muted">{c.time}</span>
            </div>
            <p className="truncate text-[11px] text-dark-muted">{c.msg}</p>
          </div>
          <div className={cn(
            "h-2 w-2 rounded-full shrink-0",
            c.status === "hot" && "bg-red-400",
            c.status === "warm" && "bg-yellow-400",
            c.status === "new" && "bg-green-400"
          )} />
        </div>
      ))}
    </div>
  );
}

function LeadsMock() {
  const stages = [
    { name: "New", count: 12, leads: ["Elira K.", "Arben M."], color: "bg-blue-400" },
    { name: "Qualified", count: 8, leads: ["Luana P.", "Dritan H."], color: "bg-primary" },
    { name: "Engaged", count: 5, leads: ["Sara L."], color: "bg-accent" },
    { name: "Converted", count: 3, leads: ["Klea M."], color: "bg-success" },
  ];
  return (
    <div className="grid grid-cols-4 gap-3">
      {stages.map((s, i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-dark-muted">{s.name}</span>
            <span className={cn("text-[10px] font-bold rounded-full px-1.5 py-0.5", s.color, "text-white")}>{s.count}</span>
          </div>
          {s.leads.map((l, j) => (
            <div key={j} className="rounded-lg bg-dark-secondary/50 border border-dark-border/50 p-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-[8px] font-bold text-white">{l[0]}</div>
                <span className="text-[10px] text-white">{l}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function VoiceMock() {
  return (
    <div className="space-y-3">
      <div className="rounded-lg bg-dark-secondary/50 border border-dark-border/50 p-3">
        <div className="flex items-center gap-2 mb-2">
          <Mic className="h-4 w-4 text-accent" />
          <span className="text-xs text-white font-medium">Voice Note — Arben M.</span>
          <span className="text-[10px] text-dark-muted ml-auto">0:34</span>
        </div>
        <div className="h-8 flex items-center gap-0.5">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-1 rounded-full bg-gradient-to-t from-primary/40 to-accent/40" style={{ height: `${Math.random() * 100}%` }} />
          ))}
        </div>
      </div>
      <div className="rounded-lg bg-primary/5 border border-primary/10 p-3">
        <p className="text-[10px] font-medium text-primary mb-1">AI Transcription</p>
        <p className="text-[11px] text-dark-muted">&quot;Hi, I wanted to ask about the room availability for next weekend. We are a group of 4 and would need two rooms...&quot;</p>
      </div>
      <div className="rounded-lg bg-accent/5 border border-accent/10 p-3">
        <p className="text-[10px] font-medium text-accent mb-1">AI Summary & Action</p>
        <p className="text-[11px] text-dark-muted">Booking request: 2 rooms, 4 guests, next weekend. Auto-checking availability and preparing response.</p>
      </div>
    </div>
  );
}

function AnalyticsMock() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Conversations", value: "248", change: "+18%" },
          { label: "Leads Qualified", value: "67", change: "+24%" },
          { label: "Response Time", value: "1.2m", change: "-45%" },
        ].map((s, i) => (
          <div key={i} className="rounded-lg bg-dark-secondary/50 border border-dark-border/50 p-3 text-center">
            <p className="text-lg font-bold text-white">{s.value}</p>
            <p className="text-[10px] text-dark-muted">{s.label}</p>
            <p className="text-[10px] text-success font-medium">{s.change}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-dark-secondary/50 border border-dark-border/50 p-3">
        <p className="text-[10px] text-dark-muted mb-2">Weekly conversation volume</p>
        <div className="flex items-end gap-1 h-16">
          {[40, 55, 35, 70, 85, 60, 90].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-accent/60" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => (
            <span key={d} className="text-[8px] text-dark-muted flex-1 text-center">{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlaybookMock() {
  const playbooks = [
    { name: "Fashion Retail", rules: 12, icon: "👗" },
    { name: "Hotel Reception", rules: 18, icon: "🏨" },
    { name: "Dental Clinic", rules: 9, icon: "🦷" },
    { name: "Service Quotes", rules: 14, icon: "💼" },
  ];
  return (
    <div className="space-y-2">
      {playbooks.map((p, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg bg-dark-secondary/50 border border-dark-border/50 p-3">
          <span className="text-xl">{p.icon}</span>
          <div className="flex-1">
            <p className="text-xs font-medium text-white">{p.name}</p>
            <p className="text-[10px] text-dark-muted">{p.rules} AI rules configured</p>
          </div>
          <div className="rounded-full bg-success/10 px-2 py-0.5 text-[9px] font-medium text-success">Active</div>
        </div>
      ))}
    </div>
  );
}

const mockComponents: Record<string, React.FC> = {
  inbox: InboxMock,
  leads: LeadsMock,
  voice: VoiceMock,
  analytics: AnalyticsMock,
  playbook: PlaybookMock,
};

export function ShowcaseSection({ dict }: ShowcaseProps) {
  const [active, setActive] = useState<string>("inbox");
  const MockComponent = mockComponents[active];

  return (
    <Section dark className="bg-noise">
      <Container>
        <SectionHeader badge={dict.badge} title={dict.title} subtitle={dict.subtitle} dark />
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {tabs.map(({ key, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer",
                  active === key
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-dark-muted hover:text-white hover:bg-white/5 border border-transparent"
                )}
              >
                <Icon className="h-4 w-4" />
                {dict.screens[key as keyof typeof dict.screens]}
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-dark-border bg-dark-card/80 p-1 glow-primary">
            <div className="rounded-xl bg-dark-secondary/80 p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-dark-muted font-mono">
                  FrontOps AI — {dict.screens[active as keyof typeof dict.screens]}
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[280px]"
                >
                  <MockComponent />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
