"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Clock, Building2, MapPin, Zap } from "lucide-react";

const filters = ["All", "Internships", "Hackathons", "Startups", "Campus Ambassador"];

const opportunities = [
  {
    type: "Internship",
    company: "Microsoft",
    logo: "M",
    logoColor: "#00a4ef",
    role: "Software Engineering Intern",
    stipend: "₹1.8L/month",
    location: "Hyderabad · Remote",
    deadline: "Jun 15, 2025",
    tags: ["SWE", "FAANG-adjacent"],
    hot: true,
    sharedBy: "Rohan, DTU CSE '25",
  },
  {
    type: "Hackathon",
    company: "Smart India Hackathon",
    logo: "SIH",
    logoColor: "#f97316",
    role: "National-level Competition",
    stipend: "₹1L prize",
    location: "Pan India",
    deadline: "Jul 1, 2025",
    tags: ["Hackathon", "Govt"],
    hot: true,
    sharedBy: "Priya, NSUT ECE '24",
  },
  {
    type: "Internship",
    company: "Goldman Sachs",
    logo: "GS",
    logoColor: "#00b9ff",
    role: "Technology Analyst Intern",
    stipend: "₹2.2L/month",
    location: "Bengaluru",
    deadline: "Jun 20, 2025",
    tags: ["Finance-tech", "Quant"],
    hot: false,
    sharedBy: "Sid, DTU IT '25",
  },
  {
    type: "Campus Ambassador",
    company: "Notion",
    logo: "N",
    logoColor: "#ffffff",
    role: "Campus Ambassador",
    stipend: "Perks + Certificate",
    location: "Your Campus",
    deadline: "Rolling",
    tags: ["No-code", "Networking"],
    hot: false,
    sharedBy: "Aditya, NSUT CS '26",
  },
  {
    type: "Startup",
    company: "YC-backed Startup",
    logo: "YC",
    logoColor: "#fb923c",
    role: "Full Stack Intern (Founding Team)",
    stipend: "₹80K/month + equity",
    location: "Remote",
    deadline: "Open",
    tags: ["Equity", "Early-stage"],
    hot: true,
    sharedBy: "Kavya, DTU '25",
  },
  {
    type: "Hackathon",
    company: "Google Solution Challenge",
    logo: "G",
    logoColor: "#ea4335",
    role: "Global Developer Competition",
    stipend: "$10K prize",
    location: "Remote · Global",
    deadline: "May 30, 2025",
    tags: ["Android", "Flutter"],
    hot: false,
    sharedBy: "Neha, NSUT IT '25",
  },
];

const typeColors: Record<string, string> = {
  Internship: "badge-green",
  Hackathon: "badge-blue",
  Startup: "badge-purple",
  "Campus Ambassador": "text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-0.5 text-xs font-medium",
};

export default function Opportunities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? opportunities
      : opportunities.filter((o) =>
          activeFilter === "Internships"
            ? o.type === "Internship"
            : activeFilter === "Hackathons"
            ? o.type === "Hackathon"
            : activeFilter === "Startups"
            ? o.type === "Startup"
            : o.type === "Campus Ambassador"
        );

  return (
    <section id="opportunities" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(16,185,129,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="badge-green inline-block mb-4">Insider Opportunities</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Opportunities seniors share{" "}
            <span className="gradient-text">before they&apos;re public.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Referrals, early access, and opportunities your placement cell doesn&apos;t
            know about yet.
          </p>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-slate-800/60 text-slate-400 border border-slate-700/60 hover:border-emerald-500/30 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((opp, i) => (
            <motion.div
              key={opp.role + opp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2 }}
              className="opp-card group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: opp.logoColor + "20", border: `1px solid ${opp.logoColor}30`, color: opp.logoColor }}
                  >
                    {opp.logo}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{opp.company}</p>
                    <span className={typeColors[opp.type] || "badge-green"}>
                      {opp.type}
                    </span>
                  </div>
                </div>
                {opp.hot && (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                    <Zap className="w-2.5 h-2.5 text-red-400" />
                    <span className="text-[10px] text-red-400 font-semibold">Hot</span>
                  </div>
                )}
              </div>

              {/* Role */}
              <h3 className="text-white font-semibold text-sm mb-3">{opp.role}</h3>

              {/* Meta */}
              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Building2 className="w-3 h-3 flex-shrink-0" />
                  <span>{opp.stipend}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span>{opp.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Clock className="w-3 h-3 flex-shrink-0" />
                  <span>Deadline: {opp.deadline}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {opp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-500 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-600">Shared by {opp.sharedBy}</span>
                <button className="flex items-center gap-1 text-emerald-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a href="#join" className="btn-outline inline-flex items-center gap-2">
            View All 1200+ Opportunities →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
