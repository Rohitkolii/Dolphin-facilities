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
          title="Virtual Events with AR Based Content"
          description="Bring digital experiences to life with innovative augmented reality solutions that create interactive and engaging audience experiences."
        />

        <BASubpagesAbout
          image1="/digital/ar/about-1.jpg"
          image2="/digital/ar/about-2.jpg"
          image3="/digital/ar/about-3.jpg"
          content={[
            "Augmented reality enables audiences to interact with brands and content in exciting new ways.",
            "At Wizcraft, we combine AR technology with creative storytelling to create engaging digital experiences.",
            "From interactive campaigns to virtual event experiences, our AR solutions help brands create memorable audience engagement.",
          ]}
        />

        <BASubpagesGallery image="/digital/ar/gallery.jpg" />

        <BASubpagesEvents
          image="/digital/ar/event.jpg"
          content={[
            "Our AR experiences add a new dimension to virtual events by creating interactive and personalized content.",
            "We design technology-driven experiences that encourage exploration, participation and deeper audience engagement.",
          ]}
          buttonText="See Our Portfolio"
          buttonLink="/portfolio"
        />


        <BASubpagesWhyChoosUs
          text="Wizcraft combines creativity and augmented reality technology to create digital experiences that audiences remember."
        />
      </main>

      <Footer />
    </>
  );
}