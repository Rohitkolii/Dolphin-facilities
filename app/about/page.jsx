import AboutHero from "@/Components/about/AboutHero";
import AboutStory from "@/Components/about/AboutStory";
import AboutHowWeWork from "@/Components/about/AboutHowWeWork";
import AboutStats from "@/Components/about/AboutStats";
import AboutPhilosophy from "@/Components/about/AboutPhilosophy";
import AboutClosingCTA from "@/Components/about/AboutClosingCTA";
import AboutTellBottom from "@/Components/about/AboutTellBottom";
import Footer from "@/Components/common/Footer";
import Navbar from "@/Components/common/Navbar";
import SocialRail from "@/Components/home/SocialRail";

export default function AboutPage() {
  return (
    <main>
      {/* <SocialRail /> */}
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutHowWeWork />
      <AboutStats />
      <AboutPhilosophy />
      <AboutTellBottom />
      <hr className="border-blue-500/50" />
      <AboutClosingCTA />
      <Footer />
    </main>
  );
}