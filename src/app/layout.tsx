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
    "Plan a trip to Hot Springs, Arkansas with local guides to things to do, Bathhouse Row, Lake Hamilton, Oaklawn, restaurants, hotels, cabins, free attractions, local businesses, history, and visitor trip planning.",

  keywords: [
    // Main destination keywords
    "Hot Springs Arkansas",
    "Hot Springs AR",
    "Hot Springs Arkansas guide",
    "Hot Springs AR guide",
    "Hot Springs Arkansas travel guide",
    "Hot Springs Arkansas tourism",
    "Hot Springs Arkansas vacation",
    "Hot Springs Arkansas trip planner",
    "Hot Springs Arkansas visitor guide",
    "visit Hot Springs Arkansas",
    "Hot Springs Arkansas weekend trip",
    "Hot Springs Arkansas family trip",
    "Hot Springs Arkansas romantic getaway",
    "Hot Springs Arkansas vacation guide",

    // Things to do / attractions
    "things to do in Hot Springs Arkansas",
    "things to do in Hot Springs AR",
    "best things to do in Hot Springs Arkansas",
    "free things to do in Hot Springs Arkansas",
    "family things to do in Hot Springs Arkansas",
    "downtown Hot Springs Arkansas",
    "downtown Hot Springs AR",
    "Hot Springs Arkansas attractions",
    "Hot Springs AR attractions",
    "Hot Springs National Park",
    "Hot Springs National Park Arkansas",
    "Hot Springs National Park things to do",
    "Grand Promenade Hot Springs",
    "Hot Springs Arkansas hiking",
    "Hot Springs Arkansas trails",
    "Hot Springs Arkansas scenic drives",

    // Bathhouse Row / downtown
    "Bathhouse Row",
    "Bathhouse Row Hot Springs Arkansas",
    "Bathhouse Row Hot Springs AR",
    "historic bathhouses Hot Springs",
    "Hot Springs Arkansas bathhouses",
    "restaurants near Bathhouse Row",
    "hotels near Bathhouse Row",
    "things to do near Bathhouse Row",
    "downtown Hot Springs restaurants",
    "downtown Hot Springs hotels",
    "Central Avenue Hot Springs",

    // Lake Hamilton
    "Lake Hamilton",
    "Lake Hamilton Arkansas",
    "Lake Hamilton Hot Springs",
    "Lake Hamilton Hot Springs Arkansas",
    "Lake Hamilton restaurants",
    "Lake Hamilton cabins",
    "Lake Hamilton hotels",
    "Lake Hamilton vacation rentals",
    "Lake Hamilton lakefront restaurants",
    "Lake Hamilton Hot Springs AR",
    "things to do near Lake Hamilton",
    "cabins near Lake Hamilton",
    "restaurants on Lake Hamilton",
    "Lake Hamilton weekend trip",

    // Oaklawn
    "Oaklawn Hot Springs",
    "Oaklawn Racing Casino Resort",
    "Oaklawn Racing Hot Springs Arkansas",
    "Oaklawn Casino Hot Springs",
    "hotels near Oaklawn",
    "hotels near Oaklawn Hot Springs AR",
    "things to do near Oaklawn",
    "Oaklawn Hot Springs hotels",

    // Restaurants
    "restaurants in Hot Springs Arkansas",
    "Hot Springs AR restaurants",
    "best restaurants in Hot Springs Arkansas",
    "places to eat in Hot Springs Arkansas",
    "breakfast in Hot Springs Arkansas",
    "lakefront restaurants Hot Springs Arkansas",
    "downtown restaurants Hot Springs Arkansas",
    "Hot Springs Arkansas food guide",

    // Hotels / cabins / stays
    "hotels in Hot Springs Arkansas",
    "Hot Springs AR hotels",
    "best hotels in Hot Springs Arkansas",
    "places to stay in Hot Springs Arkansas",
    "cabins in Hot Springs Arkansas",
    "Hot Springs AR cabins",
    "Hot Springs Arkansas cabins",
    "Hot Springs Arkansas lake cabins",
    "Hot Springs Arkansas vacation rentals",
    "Hot Springs Arkansas resorts",
    "Hot Springs Arkansas lodging",

    // Local business / directory
    "Hot Springs Arkansas local businesses",
    "Hot Springs AR local businesses",
    "Hot Springs Arkansas business directory",
    "Hot Springs Arkansas shops",
    "Hot Springs Arkansas services",
    "Hot Springs Arkansas local guide",
    "Hot Springs Arkansas restaurants hotels cabins",

    // History / area guide
    "Hot Springs Arkansas history",
    "history of Hot Springs Arkansas",
    "Hot Springs Arkansas historic district",
    "Hot Springs Arkansas downtown guide",
    "Hot Springs Arkansas area guide",
    "explore Hot Springs Arkansas",
    "Hot Springs Arkansas trip ideas",
  ],

  authors: [{ name: "Hot Springs Arkansas Guide" }],
  creator: "Hot Springs Arkansas Guide",
  publisher: "Hot Springs Arkansas Guide",

  applicationName: "Hot Springs Arkansas Guide",

  referrer: "origin-when-cross-origin",

  openGraph: {
    title:
      "Hot Springs Arkansas Guide | Things To Do, Restaurants, Hotels, Cabins & Travel Info",
    description:
      "Plan a Hot Springs, Arkansas trip with local guides to Bathhouse Row, Lake Hamilton, Oaklawn, restaurants, hotels, cabins, free things to do, local businesses, history, and visitor trip planning.",
    url: siteUrl,
    siteName: "Hot Springs Arkansas Guide",
    images: [
      {
        url: "/images/hero/hot-springs-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hot Springs Arkansas travel guide with Bathhouse Row, Lake Hamilton, restaurants, hotels, cabins, and things to do",
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
      "Explore Hot Springs, Arkansas with guides to things to do, restaurants, hotels, cabins, Bathhouse Row, Lake Hamilton, Oaklawn, and local attractions.",
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