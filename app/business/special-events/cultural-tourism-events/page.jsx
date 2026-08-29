import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";
import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function CulturalTourismEventsPage() {
  return (
    <>
      {/* STICKY HEADER */}
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        {/* HERO */}
        <BASubpagesHero
          title="Cultural & Tourism Events"
          description="We create immersive cultural and tourism experiences that celebrate heritage, destinations, communities and unique stories."
        />

        {/* ABOUT */}
        <BASubpagesAbout
          title="Celebrating Culture & Creating Experiences"
          description="From destination events and cultural festivals to tourism initiatives, we combine creativity, storytelling and seamless execution to create experiences that connect people with places and traditions."
        />

        {/* SERVICES */}
        <BASubpagesEvents
          title="Our Cultural & Tourism Expertise"
          items={[
            "Cultural Festival Management",
            "Tourism Events",
            "Destination Experiences",
            "Heritage Celebrations",
            "Creative Storytelling",
            "End-to-End Event Execution",
          ]}
        />

        {/* GALLERY */}
        <BASubpagesGallery />

        {/* WHY CHOOSE US */}
        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="Our team brings together creativity, cultural understanding and production expertise to create memorable experiences that celebrate destinations, heritage and communities."
        />

      </main>

      <Footer />
    </>
  );
}