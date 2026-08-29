import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function SonEtLumiereSpectacularsPage() {
  return (
    <>
      {/* STICKY HEADER */}
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        {/* HERO */}
        <BASubpagesHero
          title="Son Et Lumière Spectaculars"
          description="We create spectacular sound and light experiences that bring stories, history, heritage and landmarks to life."
        />

        {/* ABOUT */}
        <BASubpagesAbout
          title="Bringing Stories to Life Through Light & Sound"
          description="By combining immersive storytelling, projection, lighting, sound and technology, we transform iconic locations and historic spaces into unforgettable visual experiences."
        />

        {/* SERVICES */}
        <BASubpagesEvents
          title="Our Son Et Lumière Expertise"
          items={[
            "Creative Storytelling",
            "Sound & Light Show Design",
            "Projection Mapping",
            "Immersive Visual Experiences",
            "Lighting & Technology Integration",
            "End-to-End Production Management",
          ]}
        />

        {/* GALLERY */}
        <BASubpagesGallery />

        {/* WHY CHOOSE US */}
        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="We combine creative storytelling, cutting-edge technology and large-scale production expertise to create spectacular experiences that captivate audiences."
        />

      </main>

      <Footer />
    </>
  );
}