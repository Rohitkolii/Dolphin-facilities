import Footer from "@/Components/common/Footer";
import Hero from "@/Components/common/Hero";
import Navbar from "@/Components/common/Navbar";

export default function DataDriveCustomerPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="DATA DERIVED CUSTOMER CENTRIC SOLUTIONS"
        desc="In today’s hyper-connected world, building meaningful relationships with audiences demands insights powered by data. At Wizcraft, we combine 30+ years of expertise with advanced analytics to craft customer engagement strategies that deliver measurable impact. Through our customer engagement strategies (Data-Driven Customer Centric Solutions), we help brands go beyond transactions and create genuine connections that drive loyalty and growth."
      />


      {/* CTA */}
      <section className="bg-gradient-to-r from-[#197bc1] to-[#69c2aa] px-6 py-20 text-center">
        <p className="text-[11px] sm:text-[24px] w-[1300px] m-auto">
          With Wizcraft, nation-building events transcend gatherings; they become powerful platforms that drive participation, foster unity, and accelerate development.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
