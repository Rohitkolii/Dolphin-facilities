import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";
import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function ConcertsFestivalsPage() {
  return (
    <>
      {/* STICKY HEADER */}
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        {/* HERO */}
        <BASubpagesHero
          title="Concerts & Festivals"
          description="We create high-energy concerts and festivals that bring artists, audiences and unforgettable experiences together."
        />

        {/* ABOUT */}
        <BASubpagesAbout
          title="Experiences That Bring Audiences Together"
          description="From creative concepts and artist management to production and on-ground execution, we deliver concerts and festivals designed to engage audiences and create lasting memories."
        />

        {/* SERVICES */}
        <BASubpagesEvents
          title="Our Concert & Festival Expertise"
          items={[
            "Concert Planning & Management",
            "Festival Concept Development",
            "Artist & Talent Management",
            "Stage & Production Design",
            "Audience Engagement",
            "On-Ground Event Execution",
          ]}
        />

        {/* GALLERY */}
        <BASubpagesGallery />

        {/* WHY CHOOSE US */}
        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="Our experienced team combines creativity, entertainment expertise and seamless production to deliver concerts and festivals that audiences remember."
        />

      </main>

      <Footer />
    </>
  );
}