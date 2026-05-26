"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, BookOpen, MessageCircle, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 25000,
    suffix: "+",
    label: "Students Reached",
    sub: "Across DTU & NSUT",
    color: "text-emerald-400",
    glowColor: "rgba(16,185,129,0.15)",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Briefcase,
    value: 1200,
    suffix: "+",
    label: "Opportunities Shared",
    sub: "Internships & full-time",
    color: "text-blue-400",
    glowColor: "rgba(59,130,246,0.15)",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: MessageCircle,
    value: 500,
    suffix: "+",
    label: "Senior Insights",
    sub: "Verified experiences",
    color: "text-purple-400",
    glowColor: "rgba(168,85,247,0.15)",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: BookOpen,
    value: 50,
    suffix: "+",
    label: "Campus Guides",
    sub: "Notes, roadmaps, kits",
    color: "text-orange-400",
    glowColor: "rgba(249,115,22,0.15)",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    icon: Award,
    value: 94,
    suffix: "%",
    label: "Placement Success",
    sub: "Top branches, DTU",
    color: "text-yellow-400",
    glowColor: "rgba(234,179,8,0.15)",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
];

function formatShort(n: number): string {
  if (n >= 1000) return `${Math.round(n / 1000)}K`;
  return `${n}`;
}

function AnimatedCounter({
  target,
  suffix,
  color,
  isInView,
}: {
  target: number;
  suffix: string;
  color: string;
  isInView: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const animRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const duration = 1800;

  useEffect(() => {
    if (!isInView) return;
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      startRef.current = null;
    };
  }, [isInView, target]);

  return (
    <div className={`font-display font-extrabold ${color} leading-none`}>
      <span className="block sm:hidden text-3xl tracking-tight">
        {formatShort(current)}{suffix}
      </span>
      <span className="hidden sm:block text-3xl lg:text-4xl tabular-nums">
        {current.toLocaleString()}{suffix}
      </span>
    </div>
  );
}

export default function TrustStats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,0.04) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-green inline-block mb-4">By the numbers</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            An insider community that&apos;s{" "}
            <span className="gradient-text">actually growing.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Real students. Real results. Built on trust, not hype.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                className={`relative rounded-2xl p-4 sm:p-6 border ${stat.border} ${stat.bg} text-center group card-hover overflow-hidden transition-all duration-300`}
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110`}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
                </div>

                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  color={stat.color}
                  isInView={isInView}
                />

                <p className="text-white text-xs sm:text-sm font-semibold mt-2">{stat.label}</p>
                <p className="text-slate-500 text-xs mt-1 hidden sm:block">{stat.sub}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-14 divider"
        />
      </div>
    </section>
  );
}
