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
        title=" Rural Marketing & Activations
        Taking Brands Beyond Boundaries."
        description="
        Advertisement vans, roadshows, farmer meetings, village activations and live product demonstrations that connect brands with audiences across rural India.
        "
      />


      <NationGallery
     image="/images/DSC_1664.jpg"
      />


      <Footer />
    </main>
  );
}