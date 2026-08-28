import PortfolioHero from "@/Components/portfolio/PortfolioHero";
import PortfolioGrid from "@/Components/portfolio/PortfolioGrid";
import Navbar from "@/Components/common/Navbar";
import SocialRail from "@/Components/home/SocialRail";
import Footer from "@/Components/common/Footer";

export default function PortfolioPage() {
  return (
    <main>
      <SocialRail />
      <Navbar />
      <PortfolioHero />
      <PortfolioGrid />
      <Footer />
    </main>
  );
}
