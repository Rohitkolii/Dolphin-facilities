import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import NationHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import NationAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import NationEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import NationGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden bg-[#303030]">
      {/* STICKY HEADER */}
      <div className="sticky top-0 z-[999] w-full">
        <Header />
      </div>

      {/* HERO */}
      <NationHero
        title="CORPORATE EVENT LAUNCHES"
        description="Creating impactful corporate events and launch experiences that bring brands, people, and ideas together."
      />

      {/* ABOUT */}
      <NationAbout
        image1="/business/corporate/about1.jpg"
        image2="/business/corporate/about2.jpg"
        image3="/business/corporate/about3.jpg"
        paragraphs={[
          "At Wizcraft, we create corporate event experiences that transform ideas into powerful moments and meaningful connections.",
          "From strategic planning and creative concepts to seamless execution, every event is designed to deliver a memorable and engaging experience.",
          "Our experienced team combines creativity, technology, and precision to create impactful corporate launches and events.",
        ]}
      />

      {/* GALLERY */}
      <NationGallery
        title="OUR CORPORATE EVENTS"
        image="/business/corporate/gallery.jpg"
      />

      {/* EVENTS */}
      <NationEvents
        title="Creating Experiences That Make An Impact"
        description="From product launches and corporate celebrations to large-scale business events, we deliver experiences that inspire and engage audiences."
        image="/business/corporate/event.jpg"
      />
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
