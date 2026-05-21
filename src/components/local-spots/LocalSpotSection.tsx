import LocalSpotCard from "@/components/local-spots/LocalSpotCard";
import type {
  LocalSpot,
  LocalSpotGroupSlug,
} from "@/data/local-spots/hiddenGems";
import { localSpotGroups } from "@/data/local-spots/hiddenGems";

type LocalSpotSectionProps = {
  groupSlug: LocalSpotGroupSlug;
  spots: LocalSpot[];
};

export default function LocalSpotSection({
  groupSlug,
  spots,
}: LocalSpotSectionProps) {
  const group = localSpotGroups.find((item) => item.slug === groupSlug);

  if (!group || !spots.length) return null;

  return (
    <section className="local-spot-section" id={group.slug}>
      <div className="container">
        <div className="section-heading">
          <p className="hero-eyebrow">{group.eyebrow}</p>
          <h2>{group.title}</h2>
          <p>{group.description}</p>
        </div>

        <div className="local-spots-grid">
          {spots.map((spot) => (
            <LocalSpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </div>
    </section>
  );
}