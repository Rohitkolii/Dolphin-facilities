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
          title="Virtual Events with Integrated VR"
          description="Step into immersive virtual worlds with innovative VR experiences designed to transform digital audience engagement."
        />

        <BASubpagesAbout
          image1="/digital/vr/about-1.jpg"
          image2="/digital/vr/about-2.jpg"
          image3="/digital/vr/about-3.jpg"
          content={[
            "Virtual reality creates entirely new possibilities for audience engagement and digital storytelling.",
            "Wizcraft develops immersive VR experiences that allow audiences to explore and interact with virtual environments.",
            "Our creative and technology teams work together to create seamless experiences that deliver innovation and impact.",
          ]}
        />

        <BASubpagesEvents
          image="/digital/vr/event.jpg"
          content={[
            "Integrated VR transforms events into immersive experiences where audiences become active participants.",
            "From virtual environments to interactive storytelling, we create experiences designed for the future.",
          ]}
          buttonText="See Our Portfolio"
          buttonLink="/portfolio"
        />

        <BASubpagesGallery image="/digital/vr/gallery.jpg" />

        <BASubpagesWhyChoosUs
          text="With Wizcraft, VR technology becomes a powerful platform for immersive storytelling, interaction and engagement."
        />
      </main>

      <Footer />
    </>
  );
}