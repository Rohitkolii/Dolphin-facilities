import Navbar from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import NationHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import NationAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import NationEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import NationGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import NationWhyChooseUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function NationBuildingEventsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#303030]">
      {/* HEADER */}
      <Navbar />

      {/* HERO */}
      <NationHero />

      {/* ABOUT */}
      <NationAbout />

      {/* GALLERY */}
      <NationGallery />
      {/* EVENTS */}
      <NationEvents />

      {/* WHY CHOOSE US */}
      <NationWhyChooseUs />
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
