import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function SocialCelebrationsPage() {
  return (
    <>
      {/* STICKY HEADER */}
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        {/* HERO */}
        <BASubpagesHero
          title="Social Celebrations"
          description="We create memorable social celebrations that bring people together and transform special occasions into unforgettable experiences."
        />

        {/* ABOUT */}
        <BASubpagesAbout
          title="Celebrating Life's Special Moments"
          description="From intimate gatherings to large-scale celebrations, we bring together creativity, thoughtful planning and seamless execution to create experiences that reflect every unique occasion."
        />

        {/* SERVICES */}
        <BASubpagesEvents
          title="Our Social Celebration Expertise"
          items={[
            "Celebration Planning",
            "Creative Concept Development",
            "Theme & Décor Design",
            "Entertainment Experiences",
            "Production & Technology",
            "End-to-End Event Management",
          ]}
        />

        {/* GALLERY */}
        <BASubpagesGallery />

        {/* WHY CHOOSE US */}
        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="Our experienced team combines creativity, attention to detail and seamless execution to create celebrations that are personal, memorable and truly special."
        />

      </main>

      <Footer />
    </>
  );
}