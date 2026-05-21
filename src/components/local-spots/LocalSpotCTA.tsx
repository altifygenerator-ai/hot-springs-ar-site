import Link from "next/link";

type LocalSpotCTAProps = {
  title?: string;
  text?: string;
};

export default function LocalSpotCTA({
  title = "Know a local spot visitors should not miss?",
  text = "These local guides are built from community suggestions. If there’s a restaurant, shop, family stop, event, or hidden corner of Hot Springs people should know about, send it our way.",
}: LocalSpotCTAProps) {
  return (
    <section className="local-spot-cta-section">
      <div className="container">
        <div className="local-spot-cta">
          <div>
            <p className="hero-eyebrow">Community Suggestions</p>

            <h2>{title}</h2>

            <p>{text}</p>
          </div>

          <div className="local-spot-cta-actions">
            <Link href="/contact" className="btn-primary">
              Suggest a Spot
            </Link>

            <Link href="/events" className="btn-secondary">
              View Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}