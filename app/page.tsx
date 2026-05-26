import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import BranchPredictor from "@/components/BranchPredictor";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import Opportunities from "@/components/Opportunities";
import Blog from "@/components/Blog";
import FutureVision from "@/components/FutureVision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817]">
      <Navbar />
      <Hero />
      <TrustStats />
      <BranchPredictor />
      <Features />
      <Testimonials />
      <Community />
      <Opportunities />
      <Blog />
      <FutureVision />
      <CTA />
      <Footer />
    </main>
  );
}
