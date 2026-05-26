"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, ShoppingBag, Users, Briefcase, ArrowRight } from "lucide-react";

const visionItems = [
  {
    icon: Globe,
    step: "01",
    title: "Insider Networks Nationwide",
    description:
      "Starting with DTU & NSUT, then scaling to IITs, NITs, and every top engineering college in India. Every campus gets its own insider layer.",
    timeline: "Phase 1 · Now",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    glow: "rgba(16,185,129,0.08)",
  },
  {
    icon: ShoppingBag,
    step: "02",
    title: "Student Marketplace",
    description:
      "A trusted peer-to-peer marketplace for courses, notes, projects, and skills. Students monetizing what they know — the right way.",
    timeline: "Phase 2 · 2025",
    color: "text-blue-400",
    border: "border-blue-500/20",
    glow: "rgba(59,130,246,0.06)",
  },
  {
    icon: Users,
    step: "03",
    title: "Mentorship Ecosystem",
    description:
      "Structured 1:1 mentorship at scale. Verified seniors, transparent track records, and outcome-based mentorship for real career results.",
    timeline: "Phase 3 · 2026",
    color: "text-purple-400",
    border: "border-purple-500/20",
    glow: "rgba(139,92,246,0.06)",
  },
  {
    icon: Briefcase,
    step: "04",
    title: "Career Operating System",
    description:
      "A full-stack career platform for students — from placement prep to startup paths to off-campus opportunities — one cohesive system.",
    timeline: "Phase 4 · 2026–27",
    color: "text-orange-400",
    border: "border-orange-500/20",
    glow: "rgba(249,115,22,0.06)",
  },
];

export default function FutureVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="vision" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(16,185,129,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-green inline-block mb-4">The Big Vision</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            We&apos;re building the{" "}
            <span className="gradient-text">career OS</span>
            <br />
            every Indian student deserves.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Starting with DTU &amp; NSUT. Ending with every campus in India having
            an insider network students can actually trust.
          </p>
        </motion.div>

        {/* Vision cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {visionItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12 + 0.2 }}
                className={`vision-card group border ${item.border}`}
                style={{
                  background: `linear-gradient(135deg, #0d1526, ${item.glow} 100%, #0f1c30)`,
                }}
              >
                {/* Animated top bar uses vision-card::before from CSS */}
                <div className="flex items-start gap-4">
                  {/* Step number */}
                  <span
                    className={`font-display text-4xl font-extrabold ${item.color} opacity-20 leading-none mt-1 select-none`}
                  >
                    {item.step}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.color}`}
                        style={{
                          background: item.glow,
                          border: `1px solid ${item.border.replace("border-", "").replace("/20", "")}/20`,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-xs font-semibold ${item.color} bg-current/10 px-2.5 py-1 rounded-full`}
                        style={{ background: item.glow }}
                      >
                        {item.timeline}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big quote / vision statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div
            className="inline-block rounded-2xl px-8 py-6 mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(13,21,38,0.9))",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <p className="font-display text-xl sm:text-2xl font-semibold text-white max-w-3xl leading-snug">
              &ldquo;The insider knowledge gap between well-connected students and
              first-generation college students shouldn&apos;t exist.{" "}
              <span className="gradient-text">We&apos;re fixing that.&rdquo;</span>
            </p>
            <p className="text-slate-500 text-sm mt-4">— The DTU-NSUT Insider Team</p>
          </div>

          <a
            href="#join"
            className="btn-primary inline-flex items-center gap-2 text-base py-3.5 px-8"
          >
            Be Part of This <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
