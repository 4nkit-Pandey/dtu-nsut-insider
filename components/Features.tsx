"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Compass, Home, Briefcase, BookOpen, Users, MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "JAC Counselling Insider",
    description:
      "Branch realities, cutoff analysis, hidden truths about every department. Stop guessing — know exactly where to go.",
    tags: ["Cutoffs", "Branch Analysis", "Round Strategy"],
    highlight: "Updated for JAC 2025",
  },
  {
    icon: Home,
    title: "College Life Reality",
    description:
      "Hostels, professors, attendance wars, societies worth joining, and the stuff the brochure never mentions.",
    tags: ["Hostels", "Professors", "Societies"],
    highlight: "150+ honest reviews",
  },
  {
    icon: Briefcase,
    title: "Placement & Internship Hub",
    description:
      "Real-time internship alerts, preparation roadmaps, referral networks, and insider preparation strategies from seniors who've been there.",
    tags: ["Alerts", "Referrals", "Roadmaps"],
    highlight: "1200+ shared opportunities",
  },
  {
    icon: BookOpen,
    title: "Insider Resources",
    description:
      "Curated notes, coding sheets, survival kits, and preparation guides. Everything seniors wish they had in first year.",
    tags: ["Notes", "Coding Sheets", "Guides"],
    highlight: "50+ campus guides",
  },
  {
    icon: Users,
    title: "Senior Mentorship",
    description:
      "Talk directly with verified seniors from top companies. Real 1:1 guidance — not generic advice from YouTube.",
    tags: ["1:1 Calls", "Verified Seniors", "Career Paths"],
    highlight: "500+ mentor sessions",
  },
  {
    icon: MessageSquare,
    title: "Anonymous Confessions",
    description:
      "Real, uncensored student experiences. Regrets, wins, brutally honest branch reviews, and the stuff people only say anonymously.",
    tags: ["Anonymous", "Honest", "Unfiltered"],
    highlight: "2000+ confessions",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(16,185,129,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-green inline-block mb-4">What&apos;s inside</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Your complete campus{" "}
            <span className="gradient-text">operating system.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Six pillars of insider knowledge that cover everything from your first
            JAC rank lookup to landing your first job.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.6 }}
                className="feature-card group"
              >
                {/* Icon */}
                <div className="icon-container mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-3 font-display">
                  {feat.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {feat.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800/70 text-slate-400 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlight */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-emerald-400 text-xs font-medium">
                    {feat.highlight}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-emerald-400 text-xs">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
