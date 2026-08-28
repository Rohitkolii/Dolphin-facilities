import Footer from "@/Components/common/Footer";
import Hero from "@/Components/common/Hero";
import Navbar from "@/Components/common/Navbar";

export default function ExibitionDesignManagementPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="Exhibition Design and Management Services"
        desc="At Wizcraft, we make your brand come alive on the exhibition floor with world-class Exhibition Design & Booth Management Services. With more than three decades of experience, we specialize in designing inspiring as well as functional spaces that not only get noticed but also spark meaningful interactions. From exhibition stall design to full-fledged trade show booth design, we make your brand shine and carry maximum weight."
      />

      <br />

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#197bc1] to-[#69c2aa] px-6 py-20 text-center">
        <p className="text-[11px] sm:text-[25px] w-[1300px] m-auto">
          Our track record of delivering excellence in both Exhibition Booth Design India and Exhibition Management Dubai renders us the partner of preference for companies globally.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
