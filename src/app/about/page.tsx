import Navbar from "@/components/Navbar";
import AboutPageHero from "@/components/AboutPageHero";
import AboutExperience from "@/components/AboutExperience";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutPageHero />
      <AboutExperience />
      <Footer />
    </main>
  );
}
