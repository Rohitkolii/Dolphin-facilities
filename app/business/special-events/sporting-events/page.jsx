import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function SportingEventsPage() {
  return (
    <>
      {/* STICKY HEADER */}
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        {/* HERO */}
        <BASubpagesHero
          title="Sporting Events"
          description="We create exciting sporting experiences that bring together athletes, fans and communities through world-class event planning and execution."
        />

        {/* ABOUT */}
        <BASubpagesAbout
          title="Creating Unforgettable Sporting Experiences"
          description="From large-scale tournaments and sporting competitions to fan engagement and live experiences, we manage every aspect of sporting events with creativity, precision and seamless execution."
        />

        
        {/* GALLERY */}
        <BASubpagesGallery />


        {/* SERVICES */}
        <BASubpagesEvents
          title="Our Sporting Event Expertise"
          items={[
            "Sports Event Planning",
            "Tournament Management",
            "Fan Engagement",
            "Venue & Production Management",
            "Opening & Closing Ceremonies",
            "On-Ground Event Execution",
          ]}
        />

        {/* WHY CHOOSE US */}
        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="Our experienced team combines event expertise, creativity and operational excellence to deliver sporting events that create memorable experiences for athletes and audiences alike."
        />

      </main>

      <Footer />
    </>
  );
}