import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function LaunchNewInitiativesPage() {
  return (
    <>
      {/* STICKY HEADER */}
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">
        
        {/* HERO */}
        <BASubpagesHero
          title="Launch of New Initiatives"
          description="We create impactful launch experiences that introduce new initiatives, ideas and platforms to the right audiences."
        />

        {/* ABOUT */}
        <BASubpagesAbout
          title="Turning New Ideas Into Powerful Experiences"
          description="From strategic planning and creative concepts to large-scale execution, we help organisations launch new initiatives with engaging experiences that create awareness and lasting impact."
        />

        
        {/* GALLERY */}
        <BASubpagesGallery />

        {/* SERVICES */}
        <BASubpagesEvents
          title="Our Launch Expertise"
          items={[
            "Launch Strategy & Planning",
            "Creative Concept Development",
            "Audience Engagement",
            "Experiential Activations",
            "Production & Technology",
            "End-to-End Event Execution",
          ]}
        />


        {/* WHY CHOOSE US */}
        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="Our team combines strategic thinking, creativity and flawless execution to transform new initiatives into memorable experiences that connect with audiences."
        />
      </main>

      <Footer />
    </>
  );
}