import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://hotspringsarkansas.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google: "AFQuEhVgUdyUay552rz7wj6VFNfCWFxMGAFGPWyEvjE",
  },

  title: {
    default:
      "Hot Springs Arkansas Guide | Things To Do, Restaurants, Hotels, Cabins & Travel Info",
    template: "%s | Hot Springs Arkansas Guide",
  },

  description:
    "Explore Hot Springs, Arkansas with guides to things to do, Bathhouse Row, Lake Hamilton, restaurants, hotels, cabins, local businesses, history, and trip planning.",

  keywords: [
    "Hot Springs Arkansas",
    "Hot Springs AR",
    "Hot Springs Arkansas guide",
    "Hot Springs Arkansas tourism",
    "things to do in Hot Springs Arkansas",
    "Hot Springs Arkansas attractions",
    "Bathhouse Row",
    "Bathhouse Row Hot Springs Arkansas",
    "Hot Springs National Park",
    "Lake Hamilton",
    "Lake Hamilton Hot Springs",
    "Oaklawn Hot Springs",
    "restaurants in Hot Springs Arkansas",
    "Hot Springs AR restaurants",
    "hotels in Hot Springs Arkansas",
    "Hot Springs AR hotels",
    "cabins in Hot Springs Arkansas",
    "Hot Springs AR cabins",
    "Hot Springs Arkansas vacation",
    "Hot Springs Arkansas weekend trip",
    "Hot Springs Arkansas family trip",
    "Hot Springs Arkansas travel guide",
    "downtown Hot Springs Arkansas",
    "Hot Springs Arkansas local businesses",
    "Hot Springs Arkansas history",
  ],

  authors: [{ name: "Hot Springs Arkansas Guide" }],
  creator: "Hot Springs Arkansas Guide",
  publisher: "Hot Springs Arkansas Guide",

  openGraph: {
    title:
      "Hot Springs Arkansas Guide | Things To Do, Restaurants, Hotels, Cabins & Travel Info",
    description:
      "Plan a Hot Springs trip with guides to Bathhouse Row, Lake Hamilton, restaurants, hotels, cabins, local businesses, history, and things to do.",
    url: siteUrl,
    siteName: "Hot Springs Arkansas Guide",
    images: [
      {
        url: "/images/hero/hot-springs-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hot Springs Arkansas travel guide",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Hot Springs Arkansas Guide | Things To Do, Restaurants, Hotels, Cabins & Travel Info",
    description:
      "Explore Hot Springs, Arkansas with guides to things to do, restaurants, hotels, cabins, Bathhouse Row, Lake Hamilton, and local attractions.",
    images: ["/images/hero/hot-springs-hero.jpg"],
  },

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}