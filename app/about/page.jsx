import AboutHero from "@/Components/about/AboutHero";
import AboutStats from "@/Components/about/AboutStats";
import AboutStory from "@/Components/about/AboutStory";
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
      <AboutStats />
      <AboutTellBottom />
      <Footer />
    </main>
  );
}
