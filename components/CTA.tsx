"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Edit3, Zap } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="join" className="section-padding relative overflow-hidden">
      <div className="divider mb-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-10 sm:p-14 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0d1a2e, #0f2040, #0d1a2e)",
            border: "1px solid rgba(16,185,129,0.2)",
          }}
        >
          {/* Glow orbs */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 60%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 60%)",
              filter: "blur(40px)",
            }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-20 rounded-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <div className="neon-dot" />
              <span className="badge-green">Limited Access · Student Network</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            >
              Join the{" "}
              <span className="gradient-text glow-text">insider network.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              The shortcuts, opportunities, and truths students usually discover{" "}
              <span className="text-slate-300">too late.</span> Get access now —
              before your next semester starts.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <a
                id="cta-join-btn"
                href="#"
                className="btn-primary flex items-center justify-center gap-2 text-base py-4 px-8"
              >
                <Zap className="w-4 h-4" />
                Join Now — It&apos;s Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                id="cta-contribute-btn"
                href="#"
                className="btn-outline flex items-center justify-center gap-2 text-base py-4 px-8"
              >
                <Edit3 className="w-4 h-4" />
                Become a Contributor
              </a>
            </motion.div>

            {/* Mini trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 justify-center"
            >
              {[
                "✅ No spam, ever",
                "🔒 100% anonymous options",
                "🎓 Student-verified seniors",
                "⚡ Instant access",
              ].map((item) => (
                <span key={item} className="text-slate-500 text-sm">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
