import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function ContentDesignManagementPage() {
  return (
    <>
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        <BASubpagesHero
          title="Content Design & Management"
          description="We create engaging content experiences that communicate your message clearly and connect meaningfully with your audience."
        />

        <BASubpagesAbout
          title="Creative Content That Makes an Impact"
          description="From concepts and storytelling to visual communication and execution, our team develops content that strengthens your brand and creates memorable audience experiences."
        />

        <BASubpagesEvents
          title="Our Content Solutions"
          items={[
            "Creative Content Strategy",
            "Presentation Design",
            "Event Content Creation",
            "Visual Storytelling",
            "Motion Graphics",
            "Digital Content Management",
          ]}
        />

        <BASubpagesGallery />

        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="Our creative and strategic teams combine storytelling, technology and design to create content that is engaging, relevant and impactful."
        />

      </main>

      <Footer />
    </>
  );
}