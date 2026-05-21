type LynLiliRentalCleaningBannerProps = {
  context?: "cabins" | "hotels" | "general";
};

export default function LynLiliRentalCleaningBanner({
  context = "general",
}: LynLiliRentalCleaningBannerProps) {
  const contextLine =
    context === "cabins"
      ? "Need your cabin or vacation rental cleaned?"
      : context === "hotels"
        ? "Need help keeping guest spaces clean?"
        : "Need a guest-ready clean?";

  return (
    <section
      style={{
        width: "100%",
        padding: "18px 0",
        background:
          "linear-gradient(135deg, #f8efe7 0%, #fff8f0 48%, #f3e2d3 100%)",
        borderTop: "1px solid rgba(115, 83, 62, 0.14)",
        borderBottom: "1px solid rgba(115, 83, 62, 0.14)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
              flex: "1 1 620px",
              minWidth: 0,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "999px",
                background: "#ffffff",
                border: "1px solid rgba(115, 83, 62, 0.16)",
                color: "#8a5a3b",
                padding: "7px 12px",
                fontSize: "0.72rem",
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Local Cleaning Help
            </span>

            <strong
              style={{
                color: "#4b3528",
                fontSize: "1rem",
                lineHeight: 1.25,
              }}
            >
              {contextLine}
            </strong>

            <span
              style={{
                color: "#725b4d",
                fontSize: "0.92rem",
                lineHeight: 1.4,
              }}
            >
              Lyn & Lili’s Tidy House handles Airbnb turnovers, vacation rental
              cleaning, lake homes, deep cleans, and guest-ready spaces around
              Hot Springs.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:8702604536"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                padding: "10px 15px",
                background: "#8a5a3b",
                color: "#ffffff",
                fontSize: "0.84rem",
                fontWeight: 900,
                whiteSpace: "nowrap",
              }}
            >
              Call (870) 260-4536
            </a>

            <a
              href="https://www.lynandlilistidyhouse.com/locations/hot-springs-ar"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                padding: "10px 15px",
                border: "1px solid rgba(138, 90, 59, 0.26)",
                background: "rgba(255,255,255,0.72)",
                color: "#8a5a3b",
                fontSize: "0.84rem",
                fontWeight: 900,
                whiteSpace: "nowrap",
              }}
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}