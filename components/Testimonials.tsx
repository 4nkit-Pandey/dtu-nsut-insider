"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Mehta",
    college: "DTU · CSE '26",
    avatar: "RM",
    avatarColor: "#10b981",
    quote:
      "This helped me choose DTU over NSUT confidently. The branch-reality breakdown was something no counsellor ever told me.",
    stars: 5,
    tag: "JAC Counselling",
  },
  {
    name: "Priya Sharma",
    college: "NSUT · ECE '25",
    avatar: "PS",
    avatarColor: "#8b5cf6",
    quote:
      "Got my Microsoft internship referral through a senior I connected with here. I wasn't even looking — the opportunity came to me.",
    stars: 5,
    tag: "Internship",
  },
  {
    name: "Aditya Singh",
    college: "DTU · IT '25",
    avatar: "AS",
    avatarColor: "#f59e0b",
    quote:
      "Finally a page that actually tells the truth. The anonymous confessions hit different — stuff seniors wish they'd known earlier.",
    stars: 5,
    tag: "Confessions",
  },
  {
    name: "Kavya Nair",
    college: "NSUT · CS '26",
    avatar: "KN",
    avatarColor: "#06b6d4",
    quote:
      "The placement roadmap they shared was better than any YouTube video. Clear, honest, no fluff. Exactly what I needed.",
    stars: 5,
    tag: "Placements",
  },
  {
    name: "Siddharth Jain",
    college: "DTU · ECE '24",
    avatar: "SJ",
    avatarColor: "#ef4444",
    quote:
      "I passed on this in first year and regretted it. Found out about so many internships and competitions too late. Don't make my mistake.",
    stars: 5,
    tag: "Opportunities",
  },
  {
    name: "Neha Gupta",
    college: "NSUT · IT '25",
    avatar: "NG",
    avatarColor: "#f97316",
    quote:
      "The senior mentorship section connected me with someone who gave me better advice in 30 minutes than I got in a whole semester.",
    stars: 5,
    tag: "Mentorship",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(16,185,129,0.04) 0%, transparent 70%)",
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
          <div className="badge-green inline-block mb-4">Student voices</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Why students{" "}
            <span className="gradient-text">actually love it.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            No paid reviews. No coaching-center endorsements. Just real students.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.1 }}
              className="testimonial-card"
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="badge-green text-[11px]">{t.tag}</span>
                <div className="flex gap-0.5">
                  {[...Array(t.stars)].map((_, si) => (
                    <Star
                      key={si}
                      className="w-3 h-3 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white text-sm font-semibold">
                      {t.name}
                    </span>
                    <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-slate-500 text-xs">{t.college}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote — big */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-14 rounded-2xl p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(13,21,38,0.8))",
            border: "1px solid rgba(16,185,129,0.2)",
          }}
        >
          <div className="text-5xl text-emerald-900 mb-3 font-serif leading-none">&ldquo;</div>
          <p className="text-white text-xl sm:text-2xl font-display font-semibold max-w-2xl mx-auto leading-snug">
            This is the shortcut students usually discover{" "}
            <span className="gradient-text">too late.</span>
          </p>
          <p className="text-slate-500 mt-3 text-sm">— Heard from 100s of senior students</p>
        </motion.div>
      </div>
    </section>
  );
}
