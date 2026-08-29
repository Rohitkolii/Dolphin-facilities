import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function DigitalMarketingPage() {
  return (
    <>
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">

        <BASubpagesHero
          title="Digital Marketing"
          description="We build digital strategies and campaigns that help brands connect with audiences, create engagement and deliver measurable impact."
        />

        <BASubpagesAbout
          title="Building Strong Digital Connections"
          description="Our digital marketing solutions combine creative ideas, technology and data-driven insights to create meaningful campaigns across digital platforms."
        />
        
<BASubpagesGallery />

        <BASubpagesEvents
          title="Our Digital Marketing Solutions"
          items={[
            "Social Media Marketing",
            "Digital Campaign Strategy",
            "Content Marketing",
            "Influencer Marketing",
            "Performance Marketing",
            "Audience Engagement",
          ]}
        />


        <BASubpagesWhyChoosUs
          title="Why Choose Wizcraft?"
          description="We bring together creativity, technology and strategic thinking to create digital campaigns that connect brands with the right audiences."
        />

      </main>

      <Footer />
    </>
  );
}