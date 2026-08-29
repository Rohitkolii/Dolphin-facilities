import Header from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

import BASubpagesHero from "@/Components/bussinessactivationSubpages/BASubpagesHero";
import BASubpagesAbout from "@/Components/bussinessactivationSubpages/BASubpagesAbout";
import BASubpagesEvents from "@/Components/bussinessactivationSubpages/BASubpagesEvents";
import BASubpagesGallery from "@/Components/bussinessactivationSubpages/BASubpagesGallery";
import BASubpagesWhyChoosUs from "@/Components/bussinessactivationSubpages/BASubpagesWhyChoosUs";

export default function Page() {
  return (
    <>
      <Header />

      <main className="w-full overflow-hidden bg-[#303030]">
        <BASubpagesHero
          title="Virtual Events in Immersive Environments"
          description="Transform digital events into engaging virtual experiences through immersive environments designed to connect, inspire and engage audiences."
        />

        <BASubpagesAbout
          image1="/digital/immersive/about-1.jpg"
          image2="/digital/immersive/about-2.jpg"
          image3="/digital/immersive/about-3.jpg"
          content={[
            "Wizcraft creates immersive virtual environments that redefine the way audiences experience digital events.",
            "Our interactive platforms combine technology, creativity and storytelling to create engaging experiences beyond traditional online events.",
            "From virtual venues to interactive experiences, we help brands build meaningful connections in the digital world.",
          ]}
        />

        <BASubpagesEvents
          image="/digital/immersive/event.jpg"
          content={[
            "Our immersive virtual solutions create opportunities for audiences to explore, interact and engage.",
            "Every experience is designed to deliver seamless navigation, creative engagement and memorable digital interactions.",
          ]}
          buttonText="See Our Portfolio"
          buttonLink="/portfolio"
        />

        <BASubpagesGallery image="/digital/immersive/gallery.jpg" />

        <BASubpagesWhyChoosUs
          text="With Wizcraft, virtual events become immersive experiences that bring people, technology and creativity together."
        />
      </main>

      <Footer />
    </>
  );
}