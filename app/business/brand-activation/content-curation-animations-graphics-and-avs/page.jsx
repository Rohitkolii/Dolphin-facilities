import Footer from "@/Components/common/Footer";
import Hero from "@/Components/common/Hero";
import Navbar from "@/Components/common/Navbar";

export default function ContentCurationAnimationGraphicsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="CONTENT CURATION ANIMATIONS, GRAPHICS & AVs"
        desc="In today's world of experiences, engaging storytelling extends far beyond the stage. At Wizcraft, we intersect creativity with technology to provide compelling event content creation services that bring every moment of your brand experience to life. As a top Corporate Video Production Company, we are experts in creating high-quality animations, motion graphics, and AVs that activate, educate, and motivate audiences."
      />

      <br />

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#197bc1] to-[#69c2aa] px-6 py-20 text-center">
        <p className="text-[11px] sm:text-[25px] w-[1300px] m-auto">
          At Wizcraft, we don’t just create visuals, we craft experiences. Every
          frame, sound, and motion works together to tell a story that resonates
          with audiences. For corporate video production that informs, inspires,
          and leaves a lasting impression, Wizcraft is your partner of choice.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
