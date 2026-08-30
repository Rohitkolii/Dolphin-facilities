import BlogHero from "@/Components/blog/BlogHero";
import BlogGrid from "@/Components/blog/BlogGrid";
import SocialRail from "@/Components/home/SocialRail";
import Navbar from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";

export default function BlogPage() {
  return (
    <>
    <Navbar />
    {/* <SocialRail /> */}
      <BlogHero />
      <BlogGrid />
      <Footer />
    </>
  );
}