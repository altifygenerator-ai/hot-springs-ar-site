import BusinessDirectoryPage from "@/components/businesses/BusinessDirectoryPage";
import { hotSpringsAttractionsPage } from "@/data/businessDirectoryPages";

export const metadata = hotSpringsAttractionsPage.metadata;

export default function HotSpringsAttractionsPage() {
  return (
    <>
      <BusinessDirectoryPage {...hotSpringsAttractionsPage.props} />
      <section className="section" aria-labelledby="arcade-heading">
        <div className="container">
          <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)" }}>
            <p className="hero-eyebrow">New attraction • Opened November 2026</p>
            <h2 id="arcade-heading" className="text-2xl font-bold">The Last Arcade — Hot Springs</h2>
            <p className="mt-3 max-w-3xl leading-7">
              A retro arcade with classic video games and pinball. Its Hot Springs
              location opened in November 2026, and organizers have already listed
              local pinball tournaments. Located at 229 N Moore Road; check current
              hours and event details before driving over.
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=The+Last+Arcade+229+N+Moore+Road+Hot+Springs+AR"
               target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold underline">
              Find The Last Arcade
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
