import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;

  primaryCta?: {
    label: string;
    href: string;
  };

  secondaryCta?: {
    label: string;
    href: string;
  };
};

export default function Hero({
  eyebrow,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden">
      {/* IMAGE */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(247,243,236,0.92) 0%,
              rgba(247,243,236,0.82) 38%,
              rgba(247,243,236,0.45) 68%,
              rgba(247,243,236,0.12) 100%
            ),
            linear-gradient(
              180deg,
              rgba(247,243,236,0.18) 0%,
              rgba(247,243,236,0.42) 100%
            )
          `,
        }}
      />

      {/* CONTENT */}
      <div className="container relative z-10 py-24">
        <div className="max-w-[720px]">
          {eyebrow && (
            <p
              className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em]"
              style={{ color: "var(--accent-dark)" }}
            >
              {eyebrow}
            </p>
          )}

          <h1
            className="mb-5 max-w-[900px] text-[clamp(3rem,6vw,5.4rem)] font-bold leading-[1.02]"
            style={{ color: "var(--green)" }}
          >
            {title}
          </h1>

          {description && (
            <p
              className="mb-8 max-w-[620px] text-lg leading-relaxed"
              style={{ color: "var(--text)" }}
            >
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-bold transition hover:opacity-90"
                  style={{
                    background: "var(--accent)",
                    color: "#ffffff",
                  }}
                >
                  {primaryCta.label}
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border px-6 py-4 text-sm font-bold transition hover:bg-white/80"
                  style={{
                    borderColor: "rgba(31,42,36,0.22)",
                    background: "rgba(255,250,242,0.72)",
                    color: "var(--green)",
                  }}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}