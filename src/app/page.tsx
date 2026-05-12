import Hero from "@/components/Hero";
import QuickLinks from "@/components/home/QuickLinks";
import IntroSection from "@/components/home/IntroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedAttractions from "@/components/home/FeaturedAttractions";
import TripIdeas from "@/components/home/TripIdeas";
import FeaturedRestaurants from "@/components/home/FeaturedRestaurants";
import FeaturedStays from "@/components/home/FeaturedStays";
import ScenicFeature from "@/components/home/ScenicFeature";
import ThingsToDoPreview from "@/components/home/ThingsToDoPreview";
import FAQSection from "@/components/home/FAQSection";
import PromoteBusinessCTA from "@/components/home/PromoteBusinessCTA";
import NearbyDestinations from "@/components/home/NearbyDestinations";
import { homeHero } from "@/data/hero";

export default function HomePage() {
  return (
    <main>
          <Hero
        eyebrow={homeHero.eyebrow}
        title={homeHero.title}
        description={homeHero.description}
        image={homeHero.image}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
      />

      <QuickLinks />

      <IntroSection />

      <CategoryGrid />

      <FeaturedAttractions />

      <FeaturedRestaurants />

      <FeaturedStays />

      <ScenicFeature />

      <ThingsToDoPreview />

      <FAQSection />

      <PromoteBusinessCTA />

      <NearbyDestinations />
    </main>
  );
}