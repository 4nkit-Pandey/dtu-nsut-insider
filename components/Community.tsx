"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Send, Users, Lock, Zap, ArrowRight } from "lucide-react";

const platforms = [
  {
    icon: "💬",
    name: "Discord Server",
    description: "Real-time discussions, voice chats, and separate channels for each branch, year, and topic.",
    members: "8,200+",
    label: "Discord",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    cta: "Join Discord",
  },
  {
    icon: "✈️",
    name: "Telegram Channel",
    description: "Instant internship alerts, JAC updates, placement news, and daily insider drops.",
    members: "15,000+",
    label: "Telegram",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    cta: "Join Channel",
  },
  {
    icon: "🟢",
    name: "WhatsApp Groups",
    description: "Batch-specific, branch-specific, and goal-specific groups to connect with the right people.",
    members: "4,500+",
    label: "WhatsApp",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    cta: "Join Group",
  },
];

const highlights = [
  {
    icon: Lock,
    label: "Anonymous Discussions",
    desc: "Share without identity",
  },
  { icon: Zap, label: "Real-Time Alerts", desc: "Never miss an opportunity" },
  { icon: Users, label: "Mentorship Circles", desc: "1:1 with verified seniors" },
  {
    icon: MessageCircle,
    label: "Peer Connections",
    desc: "Find your study group",
  },
];

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="community" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="badge-green inline-block mb-5">Insider Community</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Join 25,000+ students
              <br />
              <span className="gradient-text">already on the inside.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              The community most seniors wish they&apos;d joined in semester one. Real
              discussions, real opportunities, zero gatekeeping.
            </p>

            {/* Platform cards */}
            <div className="space-y-4">
              {platforms.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl ${p.bg} border ${p.border} group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="text-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                    {p.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">{p.name}</span>
                      <span className={`text-xs font-bold ${p.color}`}>{p.members}</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5 truncate">{p.description}</p>
                  </div>
                  <button
                    className={`text-xs font-semibold ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap flex items-center gap-1`}
                  >
                    {p.cta} <ArrowRight className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: floating mock UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Community card mock */}
            <div className="glass rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">DTU-NSUT Insider</p>
                    <div className="flex items-center gap-1">
                      <div className="neon-dot w-1.5 h-1.5" />
                      <span className="text-slate-500 text-xs">25,847 members online</span>
                    </div>
                  </div>
                </div>
                <span className="badge-green text-[10px]">Live</span>
              </div>

              {/* Mock messages */}
              <div className="space-y-3 mb-5">
                {[
                  {
                    user: "Rohan_DTU",
                    msg: "Microsoft SWE intern positions just dropped 👀",
                    color: "#10b981",
                    time: "2m ago",
                  },
                  {
                    user: "Anonymous",
                    msg: "HOT TAKE: NSUT ECE > DTU COE for core jobs",
                    color: "#8b5cf6",
                    time: "5m ago",
                    anon: true,
                  },
                  {
                    user: "Priya_NSUT",
                    msg: "JAC round 3 registration closes tonight!",
                    color: "#f59e0b",
                    time: "8m ago",
                  },
                  {
                    user: "Aditya_senior",
                    msg: "Sharing my full DSA sheet + interview prep notes",
                    color: "#06b6d4",
                    time: "12m ago",
                  },
                ].map((msg, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5"
                      style={{
                        background: msg.anon ? "#374151" : msg.color + "30",
                        border: `1px solid ${msg.anon ? "#4b5563" : msg.color + "40"}`,
                      }}
                    >
                      {msg.anon ? "?" : msg.user[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[11px] font-semibold"
                          style={{ color: msg.anon ? "#9ca3af" : msg.color }}
                        >
                          {msg.user}
                        </span>
                        <span className="text-slate-600 text-[9px]">{msg.time}</span>
                      </div>
                      <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">
                        {msg.msg}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input mock */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <input
                  className="flex-1 bg-transparent text-slate-400 text-xs outline-none placeholder-slate-600"
                  placeholder="Share your insider tip..."
                  readOnly
                />
                <Send className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              </div>
            </div>

            {/* Floating highlight pills */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl glass"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{h.label}</p>
                      <p className="text-slate-500 text-[10px]">{h.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
