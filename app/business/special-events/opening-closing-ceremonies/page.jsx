import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function OpeningClosingCeremoniesPage() {
  return (
    <>
      {/* STICKY HEADER */}
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        {/* HERO */}
        <BASubpagesHero
          title="Opening & Closing Ceremonies"
          description="We create spectacular opening and closing ceremonies that celebrate important moments, inspire audiences and deliver unforgettable experiences."
        />

        {/* ABOUT */}
        <BASubpagesAbout
          title="Creating Moments That Make History"
          description="From creative concepts and storytelling to large-scale production and flawless execution, we bring together creativity, technology and performance to deliver ceremonies with lasting impact."
        />

        {/* SERVICES */}
        <BASubpagesEvents
          title="Our Ceremony Expertise"
          items={[
            "Creative Concept Development",
            "Ceremony Planning",
            "Live Entertainment",
            "Stage & Production Design",
            "Technology Integration",
            "Large-Scale Event Execution",
          ]}
        />

        {/* GALLERY */}
        <BASubpagesGallery />

        {/* WHY CHOOSE US */}
        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="Our experienced team combines creative storytelling, production expertise and seamless execution to create powerful ceremonies that leave a lasting impression."
        />

      </main>

      <Footer />
    </>
  );
}