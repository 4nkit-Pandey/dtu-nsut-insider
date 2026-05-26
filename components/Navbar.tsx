"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Features",      href: "#features"      },
  { label: "Community",     href: "#community"     },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Insights",      href: "#blog"          },
  { label: "Vision",        href: "#vision"        },
];

// IDs to observe (must match section id="" attributes)
const SECTION_IDS = ["features", "community", "opportunities", "blog", "vision", "predict", "stats"];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState("");
  const [showPromise,    setShowPromise]     = useState(true);

  // Scroll-state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          threshold: 0.25,
          rootMargin: "-80px 0px -55% 0px",
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <>
      {/* ── Promise bar ──────────────────────────────────────── */}
      <AnimatePresence>
        {showPromise && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
          >
            <div className="bg-emerald-500/10 border-b border-emerald-500/20 backdrop-blur-sm py-2 px-4 flex items-center justify-center gap-3 text-center">
              <span className="text-xs text-emerald-300 font-medium">
                ✦ We promise you your dream branch in the best college possible ✦
              </span>
              <button
                onClick={() => setShowPromise(false)}
                className="text-emerald-500 hover:text-emerald-300 transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main header ──────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-[#1e2d47]"
            : "bg-transparent"
        }`}
        style={{
          top:     showPromise ? "32px" : "0px",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/30 transition-all duration-300">
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-white font-semibold text-sm">The Insider</span>
              <span className="hidden sm:inline text-slate-500 text-sm"> · DTU & NSUT</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
                {/* Active underline indicator */}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-emerald-400"
                  initial={false}
                  animate={{ scaleX: isActive(link.href) ? 1 : 0, opacity: isActive(link.href) ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: "left" }}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#community"
              className="text-slate-400 text-sm font-medium hover:text-white transition-colors duration-200"
            >
              Sign In
            </a>
            <a href="#predict" className="btn-primary flex items-center gap-1.5 text-sm py-2.5 px-5">
              Predict My Branch
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 z-40 glass border-b border-[#1e2d47] px-6 py-6"
            style={{ top: showPromise ? "96px" : "64px" }}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium py-2 border-b border-[#1e2d47] transition-colors ${
                    isActive(link.href)
                      ? "text-emerald-400 border-emerald-500/20"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#predict" className="btn-primary text-center mt-2">
                Predict My Branch →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
