
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
        title=" Product Launches
        Every Great Product Deserves a Powerful Launch."
        description="
         
From grand stages and immersive branding to product displays, cultural performances and guest experiences, we create launches that leave a lasting impression..
        "
      />

     
      <NationGallery
       image="/images/IMG_3420.jpg"
      />

   

      <Footer />

    </main>
  );
}

