import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function Page() {
  return (
    <>
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">
        <BASubpagesHero
          title="Hybrid Events"
          description="Combine the power of physical events with digital technology to create connected, flexible and engaging hybrid experiences."
        />

        <BASubpagesAbout
          image1="/digital/hybrid/about-1.jpg"
          image2="/digital/hybrid/about-2.jpg"
          image3="/digital/hybrid/about-3.jpg"
          content={[
            "Hybrid events bring together physical and virtual audiences to create one connected experience.",
            "At Wizcraft, we combine event expertise with digital technology to deliver seamless experiences across multiple platforms.",
            "From live audiences to virtual participants, we ensure every attendee can engage with the event in meaningful ways.",
          ]}
        />

        <BASubpagesEvents
          image="/digital/hybrid/event.jpg"
          content={[
            "Our hybrid event solutions are designed to maximize audience reach and participation.",
            "We seamlessly integrate physical production, live streaming and interactive technology into one unified experience.",
          ]}
          buttonText="See Our Portfolio"
          buttonLink="/portfolio"
        />

        <BASubpagesGallery image="/digital/hybrid/gallery.jpg" />

        <BASubpagesWhyChoosUs
          text="With Wizcraft, hybrid events create powerful connections between physical and digital audiences, delivering experiences without boundaries."
        />
      </main>

      <Footer />
    </>
  );
}