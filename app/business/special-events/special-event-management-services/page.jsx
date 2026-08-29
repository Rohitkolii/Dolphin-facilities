import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function SpecialEventManagementServicesPage() {
  return (
    <>
      {/* STICKY HEADER */}
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        {/* HERO */}
        <BASubpagesHero
          title="Special Event Management Services"
          description="We create extraordinary events and experiences that bring people together, inspire audiences and leave a lasting impression."
        />

        {/* ABOUT */}
        <BASubpagesAbout
          title="Creating Extraordinary Experiences"
          description="From concept development and creative planning to flawless execution, our team manages every aspect of special events with creativity, precision and attention to detail."
        />

        {/* SERVICES / EVENTS */}
        <BASubpagesEvents
          title="Our Special Event Solutions"
          items={[
            "Opening & Closing Ceremonies",
            "Concerts & Festivals",
            "Sporting Events",
            "Launch of New Initiatives",
            "Trade Shows",
            "Cultural & Tourism Events",
            "Son Et Lumière Spectaculars",
            "Social Celebrations",
            "Weddings",
          ]}
        />

        {/* GALLERY */}
        <BASubpagesGallery />

        {/* WHY CHOOSE US */}
        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="With decades of experience, creative expertise and seamless execution, we transform ambitious ideas into memorable experiences that connect with audiences."
        />

      </main>

      <Footer />
    </>
  );
}