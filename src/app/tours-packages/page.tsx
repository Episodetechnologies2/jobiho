import Navbar from "@/components/Navbar";
import MapHero from "@/components/MapHero";
import Footer from "@/components/Footer";
import { getPublishedToursFromDb } from "@/app/actions/tours";

export const revalidate = 0;

export default async function ToursPackagesPage() {
  const initialPackages = await getPublishedToursFromDb();

  return (
    <main className="min-h-screen">
      <Navbar />
      <MapHero initialPackages={initialPackages} />
      <Footer />
    </main>
  );
}

