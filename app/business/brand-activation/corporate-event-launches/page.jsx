import Footer from "@/Components/common/Footer";
import Hero from "@/Components/common/Hero";
import Navbar from "@/Components/common/Navbar";

export default function CorporateEventLaunchesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="Corporate Event Launch Management"
        desc="At Wizcraft, we believe every launch is more than an event, it’s the start of a story that shapes a brand’s journey. With 30+ years of experience, Wizcraft is a leading corporate event launch agency, delivering world-class experiences across industries."
      />


      {/* CTA */}
      <section className="bg-gradient-to-r from-[#197bc1] to-[#69c2aa] px-6 py-20 text-center">
        <p className="text-[11px] sm:text-[24px] w-[1300px] m-auto">
At Wizcraft, we just don’t plan events, we create milestones. As one of the most cutting-edge corporate event planning companies, our goal is simple: design launch experiences that inspire, engage, and leave a lasting impression.        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
