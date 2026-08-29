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
          title="Live Streaming"
          description="Create powerful live experiences that connect your audience anywhere in the world. Wizcraft delivers seamless, engaging and high-quality live streaming solutions."
        />

        <BASubpagesAbout
          image1="/digital/live-streaming/about-1.jpg"
          image2="/digital/live-streaming/about-2.jpg"
          image3="/digital/live-streaming/about-3.jpg"
          content={[
            "At Wizcraft, we create immersive live streaming experiences that bring events, conversations and entertainment directly to audiences across digital platforms.",
            "From large-scale conferences and product launches to entertainment and corporate events, our experienced team manages every aspect of live production.",
            "With innovative technology, creative storytelling and seamless execution, we help brands create meaningful digital connections with audiences everywhere.",
          ]}
        />

        <BASubpagesGallery image="/digital/live-streaming/gallery.jpg" />
        <BASubpagesEvents
          image="/digital/live-streaming/event.jpg"
          content={[
            "Our live streaming solutions enable organizations and brands to reach audiences beyond physical boundaries.",
            "We manage production, broadcasting and audience engagement to ensure every live experience is professional, seamless and impactful.",
          ]}
          buttonText="See Our Portfolio"
          buttonLink="/portfolio"
        />

        <BASubpagesWhyChoosUs text="With Wizcraft, live streaming goes beyond broadcasting. We create engaging digital experiences that connect audiences, amplify conversations and deliver lasting impact." />
      </main>

      <Footer />
    </>
  );
}
