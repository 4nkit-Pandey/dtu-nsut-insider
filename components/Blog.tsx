"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    category: "College Selection",
    categoryColor: "badge-green",
    title: "DTU vs NSUT: The Brutal, Unfiltered Truth",
    excerpt:
      "Stop listening to random YouTube videos. We aggregated 300+ senior reviews across both colleges to give you the real comparison nobody publishes.",
    readTime: "8 min read",
    date: "May 2025",
    gradient: "from-emerald-900/30 to-slate-900/60",
    accentColor: "#10b981",
    image: "🏛️",
  },
  {
    category: "Societies",
    categoryColor: "badge-blue",
    title: "Top Societies Nobody Talks About (But Should)",
    excerpt:
      "Forget the big names. These lesser-known clubs placed students in top startups, gave real skills, and built actual connections.",
    readTime: "5 min read",
    date: "May 2025",
    gradient: "from-blue-900/30 to-slate-900/60",
    accentColor: "#3b82f6",
    image: "🎯",
  },
  {
    category: "Career",
    categoryColor: "badge-purple",
    title: "Best Branches for Coding Placements in 2025",
    excerpt:
      "Not just CSE. Here's a data-driven breakdown of which branches at DTU and NSUT are actually sending students to top tech companies.",
    readTime: "6 min read",
    date: "Apr 2025",
    gradient: "from-purple-900/30 to-slate-900/60",
    accentColor: "#8b5cf6",
    image: "📊",
  },
  {
    category: "Internships",
    categoryColor: "badge-green",
    title: "How DTU Seniors Got Internships in First Year",
    excerpt:
      "The exact playbook — open source contributions, competitive programming, cold emails, and the communities that actually helped.",
    readTime: "7 min read",
    date: "Apr 2025",
    gradient: "from-emerald-900/30 to-slate-900/60",
    accentColor: "#10b981",
    image: "🚀",
  },
  {
    category: "JAC Counselling",
    categoryColor: "badge-blue",
    title: "JAC 2025: Round-by-Round Strategy Guide",
    excerpt:
      "When to lock, when to float, and which branches have hidden upward mobility. A complete tactical guide from students who navigated it.",
    readTime: "10 min read",
    date: "May 2025",
    gradient: "from-blue-900/30 to-slate-900/60",
    accentColor: "#06b6d4",
    image: "📌",
  },
  {
    category: "Hostel Life",
    categoryColor: "badge-purple",
    title: "The Honest Guide to DTU Hostels",
    excerpt:
      "Room quality, mess food, Wi-Fi, warden culture, and what nobody mentions in the official brochure. Complete breakdown.",
    readTime: "4 min read",
    date: "Mar 2025",
    gradient: "from-purple-900/30 to-slate-900/60",
    accentColor: "#ec4899",
    image: "🏠",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(16,185,129,0.03) 0%, transparent 60%)",
        }}
      />
      <div className="divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="badge-green inline-block mb-4">Insider Articles</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Real talk.{" "}
              <span className="gradient-text">No sugarcoating.</span>
            </h2>
          </div>
          <a href="#" className="text-emerald-400 text-sm font-medium flex items-center gap-1.5 hover:gap-3 transition-all duration-300 group">
            All articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="article-card mb-6 p-8 cursor-pointer group"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${articles[0].accentColor}20, transparent)`,
                border: `1px solid ${articles[0].accentColor}30`,
              }}
            >
              {articles[0].image}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={articles[0].categoryColor}>{articles[0].category}</span>
                <span className="text-slate-600 text-xs">Featured</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                {articles[0].title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <Clock className="w-3 h-3" />
                  {articles[0].readTime}
                </div>
                <span className="text-slate-600 text-xs">{articles[0].date}</span>
                <span className="ml-auto text-emerald-400 text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid: remaining articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.slice(1).map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="article-card cursor-pointer group overflow-hidden"
            >
              {/* Colored top strip */}
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${article.accentColor}, transparent)` }}
              />

              <div className="p-6">
                {/* Emoji */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{
                    background: `${article.accentColor}15`,
                    border: `1px solid ${article.accentColor}25`,
                  }}
                >
                  {article.image}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={article.categoryColor}>{article.category}</span>
                </div>

                <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                  <span className="text-emerald-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
