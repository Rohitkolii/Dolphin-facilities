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
        title=" Government & Institutional Events
        Professional Execution for High-Responsibility Events"
        description="
        
        End-to-end event infrastructure, venue branding, stage production, logistics, protocol support and on-ground coordination for government and institutional assignments..
        "
      />

      {/* =====================================================
          ABOUT
      ===================================================== */}

      

      
      {/* =====================================================
          GALLERY
      ===================================================== */}

      <NationGallery image="/images/fa.png"/>

      {/* =====================================================
          EVENTS / CONTENT
      ===================================================== */}

     
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
