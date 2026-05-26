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
    hoverBorder: "hover:border-emerald-500/50",
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
    hoverBorder: "hover:border-blue-500/50",
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
    hoverBorder: "hover:border-purple-500/50",
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
    hoverBorder: "hover:border-orange-500/50",
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
    hoverBorder: "hover:border-yellow-500/50",
  },
];

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
  const startTimeRef = useRef<number | null>(null);
  const duration = 1800;

  useEffect(() => {
    if (!isInView) return;
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      startTimeRef.current = null;
    };
  }, [isInView, target]);

  return (
    <div className={`font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold ${color} leading-none tabular-nums tracking-tight`}>
      {current.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function TrustStats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="section-padding relative overflow-hidden">
      {/* Background */}
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

        {/* Mobile: horizontal scroll strip | md+: grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-6 px-6 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:gap-5 lg:grid-cols-5 md:px-0 md:mx-0 md:pb-0">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                className={`
                  relative rounded-2xl p-4 sm:p-5 md:p-6 border ${stat.border} ${stat.bg}
                  text-center group card-hover overflow-hidden transition-all duration-300
                  ${stat.hoverBorder}
                  snap-center flex-shrink-0 w-[152px] sm:w-[185px]
                  md:w-auto md:flex-shrink
                `}
                style={{ boxShadow: `0 0 0 0 ${stat.glowColor}` }}
                whileHover={{ boxShadow: `0 0 28px 4px ${stat.glowColor}` }}
              >
                {/* Icon */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110`}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
                </div>

                {/* Counter */}
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  color={stat.color}
                  isInView={isInView}
                />

                {/* Labels */}
                <p className="text-white text-xs sm:text-sm font-semibold mt-2">{stat.label}</p>
                <p className="text-slate-500 text-xs mt-1">{stat.sub}</p>

                {/* Subtle inner glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${stat.glowColor}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Scroll indicator for mobile only */}
        <div className="flex justify-center gap-1.5 mt-5 md:hidden">
          {stats.map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-slate-700" />
          ))}
        </div>

        {/* Divider */}
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
