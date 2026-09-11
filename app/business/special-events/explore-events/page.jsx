import NationHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import NationAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import NationEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import NationGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import Navbar from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";
export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#303030]">
      {/* =====================================================
          HERO
      ===================================================== */}

      {/* HEADER */}
      <Navbar />

      <NationHero
        title="Events & Experiences
        Creating Experiences. Delivering Impact."
        description="
        From product launches and corporate celebrations to government events and VIP functions, we manage every detail—from concept and production to flawless on-ground execution.
         
        "
      />

      
      {/* =====================================================
          GALLERY
      ===================================================== */}

      <NationGallery image="/images/faclitate.jpg"/>

     
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
