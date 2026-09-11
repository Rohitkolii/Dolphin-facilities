
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
        title=" Outdoor Advertising
        Visibility That Moves With Your Audience."
        description="
        
        Mobile van branding, wall paintings, hoardings, bus branding, pole kiosks, dealer branding and high-impact outdoor campaigns executed across multiple locations.
        
        "
      />



      <NationGallery
        image="/images/DSC_1664.jpg"
      />

   

      <Footer />

    </main>
  );
}

