
import NationHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import NationAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import NationEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import NationGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import Navbar from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#303030]">

      <Navbar />

      <NationHero
        title=" We Create Experiences That Make Brands Unforgettable.."
        description="
        
        From landmark events and exhibitions to nationwide activations and powerful brand visibility, Dolphin Facilities transforms ideas into memorable experiences.
        .
        "
      />


      <NationGallery
        image="/images/IMG_3420.jpg"
      />

   

      <Footer />

    </main>
  );
}

