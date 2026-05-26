"use client";
import { motion } from "framer-motion";
import {
  ArrowRight, Star, MapPin, Briefcase, TrendingUp, MessageSquare, ChevronRight
} from "lucide-react";

const stats = [
  { value: "25K+", label: "Students Reached" },
  { value: "1200+", label: "Opportunities Shared" },
  { value: "500+", label: "Senior Insights" },
  { value: "50+", label: "Campus Guides" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mesh-bg pt-24 pb-16"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Hero glow orbs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(16,185,129,0.04) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <div className="neon-dot" />
              <span className="badge-green">Insider Network · DTU &amp; NSUT</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6 text-white"
            >
              Everything they
              <br />
              <span className="gradient-text glow-text">don&apos;t tell you</span>
              <br />
              about DTU &amp; NSUT.
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-3 max-w-xl mx-auto lg:mx-0"
            >
              From JAC counselling to placements, get insider guidance, hidden
              opportunities, honest reviews, and{" "}
              <span className="text-slate-300">real student experiences</span>.
            </motion.p>

            {/* Promise line */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-emerald-400 font-semibold text-base mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We promise you your dream branch in the best college possible.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                id="hero-join-btn"
                href="#join"
                className="btn-primary flex items-center justify-center gap-2 text-base py-3.5 px-7"
              >
                Join Insider Network
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                id="hero-explore-btn"
                href="#features"
                className="btn-outline flex items-center justify-center gap-2 text-base py-3.5 px-7"
              >
                Explore Resources
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              {/* Avatars */}
              <div className="flex -space-x-2">
                {["#ef4444", "#f59e0b", "#8b5cf6", "#06b6d4", "#10b981"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#020817] flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: c }}
                  >
                    {["R", "A", "S", "P", "N"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-0.5">
                  Trusted by <span className="text-emerald-400 font-semibold">25,000+</span> students
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Floating UI Cards */}
          <div className="relative hidden lg:flex items-center justify-center h-[520px]">
            {/* Center glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 70%)",
              }}
            />

            {/* Branch Predictor Card */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float absolute top-8 left-4 w-64 glass rounded-2xl p-4 shadow-xl z-10"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-white">Branch Predictor</span>
                </div>
                <span className="badge-green text-[10px] py-0.5">Live</span>
              </div>
              <div className="space-y-2">
                {[
                  { branch: "CSE · DTU", score: "97.4+", color: "text-emerald-400", width: "w-4/5", barColor: "from-emerald-500 to-emerald-400" },
                  { branch: "IT · DTU", score: "96.1+", color: "text-blue-400", width: "w-3/4", barColor: "from-blue-500 to-blue-400" },
                  { branch: "ECE · NSUT", score: "94.8+", color: "text-purple-400", width: "w-2/3", barColor: "from-purple-500 to-purple-400" },
                ].map((item) => (
                  <div key={item.branch}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-400">{item.branch}</span>
                      <span className={`text-xs font-bold ${item.color}`}>{item.score}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${item.width} bg-gradient-to-r ${item.barColor} rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700/50 flex items-center justify-between">
                <span className="text-[10px] text-slate-500">JAC 2025 · Updated</span>
                <MapPin className="w-3 h-3 text-slate-500" />
              </div>
              {/* CTA */}
              <a
                href="#predict"
                className="mt-3 w-full flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold py-2 transition-all duration-200"
              >
                Take a quick prediction
                <ChevronRight className="w-3 h-3" />
              </a>
            </motion.div>

            {/* Internship Card */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float-delayed absolute top-16 right-0 w-60 glass rounded-2xl p-4 shadow-xl z-20"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  G
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate">Google STEP</span>
                    <span className="badge-green text-[10px] py-0.5 ml-1 flex-shrink-0">New</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">SWE Intern · Remote</p>
                  <p className="text-xs font-semibold text-emerald-400 mt-1.5">Rs. 2.5L/month</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Briefcase className="w-3 h-3 text-slate-500" />
                    <span className="text-[10px] text-slate-500">Shared by DTU 2026 senior</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Confession card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float-slow absolute bottom-16 left-8 right-8 glass rounded-2xl p-4 shadow-xl z-10"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                  <MessageSquare className="w-3 h-3 text-slate-400" />
                </div>
                <span className="text-xs font-semibold text-slate-300">Anonymous Confession</span>
                <span className="ml-auto badge-purple text-[10px] py-0.5">Trending</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                {"\u201c"}Nobody told me EC at DTU has better placements than CS at many private colleges.
                Would{"\u2019"}ve reconsidered my whole JAC strategy...{"\u201d"}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[10px] text-slate-500">Anonymous · DTU 2024</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-slate-500">847 relate</span>
                  <div className="w-1 h-1 rounded-full bg-slate-600" />
                  <span className="text-[10px] text-emerald-400">🔥</span>
                </div>
              </div>
            </motion.div>

            {/* Floating stat pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 glass rounded-xl px-4 py-3 z-30"
            >
              <p className="text-[10px] text-slate-500 mb-1">Placement Rate</p>
              <p className="text-xl font-bold font-display gradient-text">94%</p>
              <p className="text-[10px] text-slate-500">DTU CSE 2024</p>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 pt-10 border-t border-[#1e2d47] grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-center"
            >
              <div className="stat-number text-3xl mb-1">{stat.value}</div>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#1e2d47] overflow-hidden py-3">
        <div className="ticker-inner gap-12 text-xs text-slate-600 font-medium">
          {[
            "📌 JAC 2025 counselling dates out",
            "🔥 Microsoft internship alert — CSE, DTU",
            "📊 Branch cutoffs updated for 2025",
            "💬 New: ECE beats CS for core jobs at DTU",
            "🚀 Google STEP applications open",
            "📌 JAC 2025 counselling dates out",
            "🔥 Microsoft internship alert — CSE, DTU",
            "📊 Branch cutoffs updated for 2025",
            "💬 New: ECE beats CS for core jobs at DTU",
            "🚀 Google STEP applications open",
          ].map((item, i) => (
            <span key={i} className="whitespace-nowrap px-6">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
