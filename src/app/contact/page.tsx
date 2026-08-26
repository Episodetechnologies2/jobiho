import Navbar from "@/components/Navbar";
import ContactCreative from "@/components/ContactCreative";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactCreative />
      <Newsletter
        backgroundImageUrl="/images/banner-4.jpg"
        badgeText="Get planning tips & curated ideas"
        headlineTop="Stay"
        headlineHighlight="inspired"
        headlineBottom=""
        description="Subscribe for travel insights, seasonal destination picks, and curated experiences you’ll actually love."
        buttonLabel="Get Tips"
        socialProofText="Join 10,000+ travelers getting smarter trip ideas with Jobiho"
      />
      <Footer />
    </main>
  );
}

