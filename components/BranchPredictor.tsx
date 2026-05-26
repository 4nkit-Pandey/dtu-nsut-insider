"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  TrendingUp, Phone, Hash, Zap, ChevronRight,
  CheckCircle, AlertCircle, Sparkles, ArrowUp,
} from "lucide-react";

// ── JAC 2025 Approximate Cutoffs ───────────────────────────────────────
// closingInitial = worst rank that gets in during round 1
// closingUpgraded = worst rank that gets in after all upgradation rounds
const DTU_BRANCHES = [
  { name: "CSE",              closingInitial: 800,   closingUpgraded: 1500  },
  { name: "IT",               closingInitial: 2200,  closingUpgraded: 3000  },
  { name: "ECE",              closingInitial: 4800,  closingUpgraded: 6200  },
  { name: "EP (AI/ML)",       closingInitial: 5500,  closingUpgraded: 7200  },
  { name: "EE",               closingInitial: 7500,  closingUpgraded: 9500  },
  { name: "ME",               closingInitial: 11000, closingUpgraded: 14000 },
  { name: "Civil",            closingInitial: 16000, closingUpgraded: 20000 },
  { name: "Biotech",          closingInitial: 22000, closingUpgraded: 26000 },
  { name: "Engineering Physics", closingInitial: 27000, closingUpgraded: 31000 },
];

const NSUT_BRANCHES = [
  { name: "CSE",   closingInitial: 3800,  closingUpgraded: 5200  },
  { name: "IT",    closingInitial: 6500,  closingUpgraded: 8500  },
  { name: "ICE",   closingInitial: 9500,  closingUpgraded: 12000 },
  { name: "ECE",   closingInitial: 12500, closingUpgraded: 15000 },
  { name: "EE",    closingInitial: 16000, closingUpgraded: 19000 },
  { name: "ME",    closingInitial: 20000, closingUpgraded: 24000 },
  { name: "Civil", closingInitial: 26000, closingUpgraded: 30000 },
];

type Branch = { name: string; closingInitial: number; closingUpgraded: number };

const getBestBranch = (rank: number, branches: Branch[], useUpgraded: boolean): string | null => {
  const key = useUpgraded ? "closingUpgraded" : "closingInitial";
  // Sort most competitive first (lowest closing rank)
  const sorted = [...branches].sort((a, b) => a[key] - b[key]);
  const eligible = sorted.filter((b) => rank <= b[key]);
  return eligible[0]?.name ?? null;
};

type Result = {
  dtuInitial: string | null;
  dtuUpgraded: string | null;
  nsutInitial: string | null;
  nsutUpgraded: string | null;
};

// ── Component ──────────────────────────────────────────────────────────
export default function BranchPredictor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [rank, setRank]       = useState("");
  const [phone, setPhone]     = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult]   = useState<Result | null>(null);
  const [error, setError]     = useState("");

  const handlePredict = async () => {
    setError("");
    const rankNum = parseInt(rank);

    if (!rank || isNaN(rankNum) || rankNum < 1) {
      setError("Please enter a valid CRL rank (positive number).");
      return;
    }
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    const prediction: Result = {
      dtuInitial:   getBestBranch(rankNum, DTU_BRANCHES,  false),
      dtuUpgraded:  getBestBranch(rankNum, DTU_BRANCHES,  true),
      nsutInitial:  getBestBranch(rankNum, NSUT_BRANCHES, false),
      nsutUpgraded: getBestBranch(rankNum, NSUT_BRANCHES, true),
    };

    // Save to Supabase (silently — don't block UX if it fails)
    try {
      const { createClient } = await import("@/lib/supabase");
      const supabase = createClient();
      await supabase.from("branch_predictions").insert({
        crl_rank:     rankNum,
        phone_number: phone,
        dtu_initial:  prediction.dtuInitial,
        dtu_upgraded: prediction.dtuUpgraded,
        nsut_initial: prediction.nsutInitial,
        nsut_upgraded: prediction.nsutUpgraded,
      });
    } catch {
      // Supabase not configured yet — prediction still works
    }

    setResult(prediction);
    setLoading(false);
  };

  const upgraded = (initial: string | null, upgraded: string | null) =>
    initial !== upgraded && upgraded !== null;

  return (
    <section id="predict" className="section-padding relative overflow-hidden">
      {/* Glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(16,185,129,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 badge-green mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE · Branch Predictor
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Know your branch{" "}
            <span className="gradient-text">before counselling day.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Enter your CRL rank and instantly see which branch you can get —
            including your{" "}
            <span className="text-slate-300">best branch after upgradation rounds.</span>
          </p>
        </motion.div>

        {/* Two-col layout */}
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-6 items-start">

          {/* ── Left: Form ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass rounded-2xl p-6 border border-[#1e2d47]"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-white font-semibold text-sm">Instant Prediction</span>
              <span className="ml-auto inline-flex items-center gap-1 badge-green text-[10px] py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
            </div>

            <div className="space-y-4">
              {/* Rank input */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  JAC Delhi CRL Rank
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 1500"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                    className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Phone input */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Phone Number
                  <span className="ml-1.5 text-emerald-400 text-[10px] font-normal">
                    Recommended: WhatsApp number
                  </span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-900/60 border border-slate-700/60 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
                <p className="text-[11px] text-slate-600 mt-1.5">
                  We&apos;ll send JAC counselling alerts & insider tips on WhatsApp.
                </p>
              </div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                onClick={handlePredict}
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Predicting your branch...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Get My Branch Prediction
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Trust note */}
              <p className="text-[11px] text-center text-slate-600">
                🔒 Your data is private and only used to guide you through JAC counselling.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Results / Teaser ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {!result ? (
                /* Teaser placeholder */
                <motion.div
                  key="teaser"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass rounded-2xl p-6 border border-[#1e2d47] flex flex-col items-center justify-center min-h-[300px] text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Your Prediction Awaits</h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Enter your CRL rank to see exactly which branch you can get — and how much better after upgradation.
                  </p>
                  <div className="w-full max-w-xs space-y-2">
                    {["CSE · DTU (after upgradation?)", "IT · NSUT → CSE?", "ECE → IT after rounds"].map((hint, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-800/40 border border-slate-700/30"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 flex-shrink-0" />
                        <span className="text-slate-600 text-xs select-none blur-[3px]">{hint}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                /* Results */
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4"
                >
                  {/* Header */}
                  <div className="glass rounded-2xl p-5 border border-emerald-500/25 bg-emerald-500/[0.02]">
                    <div className="flex items-center gap-2 mb-5">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-white font-semibold text-sm">
                        Prediction for CRL Rank{" "}
                        <span className="text-emerald-400">#{parseInt(rank).toLocaleString()}</span>
                      </span>
                    </div>

                    {/* DTU block */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-[10px] font-bold text-emerald-400">
                          D
                        </div>
                        <span className="text-xs font-semibold text-slate-300">DTU – Delhi Technological University</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/40">
                          <p className="text-[10px] text-slate-500 mb-1">Initial Allotment</p>
                          <p className="text-white font-bold text-sm">{result.dtuInitial ?? "Not eligible"}</p>
                        </div>
                        <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/30 relative">
                          {upgraded(result.dtuInitial, result.dtuUpgraded) && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                              <ArrowUp className="w-2.5 h-2.5 text-white" />
                            </div>
                          )}
                          <p className="text-[10px] text-emerald-400 mb-1">✨ After Upgradation</p>
                          <p className="text-emerald-300 font-bold text-sm">{result.dtuUpgraded ?? "Not eligible"}</p>
                        </div>
                      </div>
                    </div>

                    {/* NSUT block */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400">
                          N
                        </div>
                        <span className="text-xs font-semibold text-slate-300">NSUT – Netaji Subhas Univ. of Tech.</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/40">
                          <p className="text-[10px] text-slate-500 mb-1">Initial Allotment</p>
                          <p className="text-white font-bold text-sm">{result.nsutInitial ?? "Not eligible"}</p>
                        </div>
                        <div className="bg-blue-500/10 rounded-xl p-3 border border-blue-500/30 relative">
                          {upgraded(result.nsutInitial, result.nsutUpgraded) && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                              <ArrowUp className="w-2.5 h-2.5 text-white" />
                            </div>
                          )}
                          <p className="text-[10px] text-blue-400 mb-1">✨ After Upgradation</p>
                          <p className="text-blue-300 font-bold text-sm">{result.nsutUpgraded ?? "Not eligible"}</p>
                        </div>
                      </div>
                    </div>

                    {/* Upgrade callout */}
                    {(upgraded(result.dtuInitial, result.dtuUpgraded) || upgraded(result.nsutInitial, result.nsutUpgraded)) && (
                      <div className="mt-4 px-3 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-2">
                        <span className="text-emerald-400 text-base">💡</span>
                        <p className="text-xs text-emerald-300 leading-relaxed">
                          Your branch can improve after upgradation rounds! Many students don&apos;t realise this — don&apos;t miss your rounds.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Join CTA */}
                  <div className="glass rounded-xl p-4 border border-[#1e2d47] text-center">
                    <p className="text-xs text-slate-400 mb-3">Want personalised counselling strategy from seniors?</p>
                    <a href="#join" className="btn-primary text-xs py-2.5 px-6 inline-flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      Join Insider Network →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom info pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: "🎯", title: "Upgradation-aware", desc: "We predict your BEST possible branch after all JAC rounds" },
            { icon: "📱", title: "WhatsApp Updates", desc: "Counselling alerts, cutoff updates & strategy tips" },
            { icon: "🔒", title: "Private & Secure", desc: "Your data is only used to guide you through JAC 2025" },
          ].map((item, i) => (
            <div key={i} className="glass rounded-xl p-4 border border-[#1e2d47] text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-white text-xs font-semibold mb-1">{item.title}</p>
              <p className="text-slate-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-14 divider"
        />
      </div>
    </section>
  );
}
