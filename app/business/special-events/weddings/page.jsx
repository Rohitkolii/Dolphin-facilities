import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";
import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function WeddingsPage() {
  return (
    <>
      {/* STICKY HEADER */}
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        {/* HERO */}
        <BASubpagesHero
          title="Weddings"
          description="We create extraordinary wedding experiences that transform beautiful celebrations into unforgettable memories."
        />

        {/* ABOUT */}
        <BASubpagesAbout
          title="Creating Weddings to Remember"
          description="From the first idea to the final celebration, we bring together creativity, detailed planning and seamless execution to create wedding experiences that are personal, beautiful and memorable."
        />

        {/* SERVICES */}
        <BASubpagesEvents
          title="Our Wedding Expertise"
          items={[
            "Wedding Planning & Management",
            "Creative Concept Development",
            "Theme & Décor Design",
            "Entertainment & Experiences",
            "Production & Technology",
            "End-to-End Wedding Execution",
          ]}
        />

        {/* GALLERY */}
        <BASubpagesGallery />

        {/* WHY CHOOSE US */}
        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="Our team combines creativity, meticulous planning and flawless execution to create beautiful wedding celebrations and unforgettable experiences."
        />

      </main>

      <Footer />
    </>
  );
}