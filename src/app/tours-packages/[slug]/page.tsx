import { notFound } from "next/navigation";
import { getDestinationFromDb } from "@/app/actions/tours";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationContent from "./DestinationContent";

export const revalidate = 0;

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getDestinationFromDb(slug);
  if (!data) notFound();

  return (
    <main className="min-h-screen">
      <Navbar />
      <DestinationContent data={data} />
      <Footer />
    </main>
  );
}
