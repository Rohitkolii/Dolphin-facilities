import Footer from "@/Components/common/Footer";
import Hero from "@/Components/common/Hero";
import Navbar from "@/Components/common/Navbar";

export default function OnGroundActivationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2d2d2d] text-white">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="On Ground Brand Activation Services"
        desc="At Wizcraft, we transform everyday spaces into extraordinary stages where brands come alive. With 30+ years of expertise, we specialize in creating high-impact On-Ground Activations that spark curiosity, engagement, and brand loyalty. From innovative outdoor brand activation ideas to immersive retail brand activations, our team delivers experiences that connect directly with audiences."
      />

      <br />

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#197bc1] to-[#69c2aa] px-6 py-20 text-center">
        <p className="text-[30px] font-semibold">
          TATA MOTORS “MADE OF GREAT” CAMPAIGN
        </p>
        <p className="text-[11px] sm:text-[25px] w-[1300px] m-auto">
          The "Made of Great" campaign for Tata Motors' new car, the Zica,
          involved a collaboration with Wizcraft for on-ground activities,
          culminating in the #FantasticHunt to unveil the car's name through
          clues spread across four cities.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
