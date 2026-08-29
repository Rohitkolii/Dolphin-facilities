import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function TradeShowsPage() {
  return (
    <>
      {/* STICKY HEADER */}
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        {/* HERO */}
        <BASubpagesHero
          title="Trade Shows"
          description="We create engaging trade show experiences that help businesses showcase their brands, products and innovations to the right audiences."
        />

        {/* ABOUT */}
        <BASubpagesAbout
          title="Creating Powerful Business Experiences"
          description="From concept development and exhibition planning to booth experiences and on-ground execution, we deliver trade shows that create meaningful connections between brands, businesses and audiences."
        />

        
        {/* GALLERY */}
        <BASubpagesGallery />

        {/* SERVICES */}
        <BASubpagesEvents
          title="Our Trade Show Expertise"
          items={[
            "Trade Show Planning & Management",
            "Exhibition Design",
            "Booth & Experience Design",
            "Brand Engagement",
            "Production & Technology",
            "On-Ground Event Execution",
          ]}
        />


        {/* WHY CHOOSE US */}
        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="Our team combines creative design, strategic planning and seamless execution to create trade show experiences that help brands stand out and connect with their audiences."
        />

      </main>

      <Footer />
    </>
  );
}