import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import PageTransition from "@/components/PageTransition";
import RouteLoader from "@/components/RouteLoader";
import { Suspense } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jobiho – Discover Whatever There Is | Travel & Experiences Marketplace",
  description:
    "Discover and book travel, adventure, dining and lifestyle experiences worldwide with Jobiho. Your global experience marketplace for unforgettable moments.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords:
    "travel experiences, adventure booking, leisure travel, dining experiences, lifestyle activities, travel marketplace, Jobiho",
  openGraph: {
    title: "Jobiho – Discover Whatever There Is",
    description:
      "Discover and book travel, adventure, dining and lifestyle experiences worldwide with Jobiho.",
    type: "website",
    url: "https://jobiho.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobiho – Discover Whatever There Is",
    description:
      "Your global experience marketplace for travel, adventure, dining & lifestyle.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${lato.variable} antialiased font-body`}
      >
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "Jobiho", "version": "1.0.0"}'
        />
        <RouteLoader />
        <Suspense fallback={null}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
