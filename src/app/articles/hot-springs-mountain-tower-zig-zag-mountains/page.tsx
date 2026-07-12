import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const articlePath = "/articles/hot-springs-mountain-tower-zig-zag-mountains";
const imageBase = "/images/articles/hot-springs-mountain";

export const metadata: Metadata = {
  title: "Hot Springs Mountain Tower Scenic Drive Guide",
  description:
    "Take the scenic drive to Hot Springs Mountain Tower, stop at wooded picnic areas, learn about the Zig-Zag Mountains, and enjoy the view above town.",
  keywords: [
    "Hot Springs Mountain Tower scenic drive",
    "Hot Springs Mountain Drive",
    "Zig-Zag Mountains Hot Springs",
    "Hot Springs Arkansas mountain views",
    "Hot Springs National Park scenic drive",
    "Hot Springs Mountain picnic area",
    "things to do in Hot Springs Arkansas",
  ],
  alternates: {
    canonical: articlePath,
  },
  openGraph: {
    title: "Hot Springs Mountain Tower and the Zig-Zag Mountains",
    description:
      "A local guide to the winding drive, wooded picnic stops, Zig-Zag Mountains, Pagoda, trails, and views above Hot Springs, Arkansas.",
    url: articlePath,
    type: "article",
    images: [
      {
        url: `${imageBase}/hot-springs-mountain-view-storm-clouds.webp`,
        width: 640,
        height: 480,
        alt: "View across Hot Springs and the Ouachita Mountains beneath storm clouds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Springs Mountain Tower Scenic Drive Guide",
    description:
      "Drive above downtown Hot Springs for wooded picnic stops, mountain roads, the Zig-Zag Mountains, and a wide view across town.",
    images: [`${imageBase}/hot-springs-mountain-view-storm-clouds.webp`],
  },
};

const quickFacts = [
  {
    label: "Best for",
    value:
      "Families, couples, first-time visitors, cabin guests, scenic-drive days, and anyone wanting outdoor time without a long hike.",
  },
  {
    label: "Plan for",
    value:
      "About one to three hours, depending on whether you picnic, walk a trail, stop at the Pagoda, or go up the tower.",
  },
  {
    label: "Bring",
    value:
      "Water, comfortable shoes, a simple picnic, and a little patience for the narrow curves and slower mountain road.",
  },
  {
    label: "Check first",
    value:
      "Tower admission and hours, current park road conditions, weather, and whether grills are available for use that day.",
  },
];

const stopIdeas = [
  {
    title: "Take the road slowly",
    text: "The stone walls, wooded turns, exposed rock, and tight curves are part of the outing. Use the marked pull-offs instead of trying to rush straight to the top.",
  },
  {
    title: "Pack a simple lunch",
    text: "The wooded picnic area has tables and grills scattered beneath the trees. It is an easy place to turn a tower visit into a slower outdoor afternoon.",
  },
  {
    title: "Leave room for a short walk",
    text: "Trail signs and access points around Hot Springs and North mountains make it easy to add a little walking without committing to an all-day hike.",
  },
];

const faqs = [
  {
    question: "Can you drive to Hot Springs Mountain Tower?",
    answer:
      "Yes. A winding mountain road climbs from the downtown side of Hot Springs National Park toward the picnic area, Pagoda, trail access, and Hot Springs Mountain Tower.",
  },
  {
    question: "Do you have to buy a tower ticket to enjoy the mountain drive?",
    answer:
      "No. You can enjoy the scenic road, wooded park areas, picnic stops, and available overlooks without going up the tower. The tower is a separate paid attraction.",
  },
  {
    question: "Are there picnic tables and grills on Hot Springs Mountain?",
    answer:
      "Yes, the mountain picnic area includes tables and grills beneath the trees. Check current park rules and fire conditions before planning to cook.",
  },
  {
    question: "What are the Zig-Zag Mountains?",
    answer:
      "They are part of the folded Ouachita Mountain landscape around Hot Springs. An interpretive sign on the mountain shows how the ridges bend and appear to zig and zag when seen from above.",
  },
  {
    question: "Is the Hot Springs Mountain drive good for families?",
    answer:
      "Yes. Families can enjoy the road, picnic area, Pagoda, tower, and short walks without taking a difficult hike. Keep children close around roads, steps, rocks, and steep slopes.",
  },
];

const photoGallery = [
  {
    src: `${imageBase}/stone-stairs-wooded-path.webp`,
    alt: "Stone steps and railing leading into the woods beside Hot Springs Mountain Drive",
    caption: "Small stairways and wooded paths appear along parts of the mountain road.",
  },
  {
    src: `${imageBase}/wooded-roadside-stop.webp`,
    alt: "Wooded roadside stop on Hot Springs Mountain",
    caption: "Even the quieter roadside stops feel far removed from downtown traffic.",
  },
  {
    src: `${imageBase}/mountain-drive-hairpin-curve.webp`,
    alt: "Tight curve on Hot Springs Mountain Drive beside old stonework",
    caption: "The tight bends are a good reason to slow down and enjoy the drive.",
  },
  {
    src: `${imageBase}/exposed-mountain-rock.webp`,
    alt: "Exposed rock running through the woods on Hot Springs Mountain",
    caption: "Rock outcrops make the folded mountain landscape easier to notice up close.",
  },
  {
    src: `${imageBase}/stone-drinking-fountain.webp`,
    alt: "Old stone drinking fountain in the Hot Springs Mountain picnic area",
    caption: "Older stone features add to the park-road feel around the picnic area.",
  },
  {
    src: `${imageBase}/mountain-road-retaining-wall.webp`,
    alt: "Stone retaining wall curving along Hot Springs Mountain Drive",
    caption: "Stone retaining walls follow the curves in several places.",
  },
  {
    src: `${imageBase}/rocky-wooded-slope.webp`,
    alt: "Rocky wooded slope beside Hot Springs Mountain Drive",
    caption: "The road passes close to rough slopes, pines, hardwoods, and scattered rock.",
  },
  {
    src: `${imageBase}/forest-slope-along-drive.webp`,
    alt: "Dense forest dropping away beside the Hot Springs mountain road",
    caption: "The woods thicken quickly once the road begins climbing above town.",
  },
  {
    src: `${imageBase}/mountain-park-lawn.webp`,
    alt: "Green park lawn and benches with wooded mountains beyond in Hot Springs",
    caption: "Open green space and benches give visitors another easy place to slow down.",
  },
];

const relatedLinks = [
  {
    href: "/things-to-do-in-hot-springs-ar",
    title: "Things to Do in Hot Springs",
    text: "Build the mountain drive into a full Hot Springs weekend with downtown, lake, spa, history, and family stops.",
  },
  {
    href: "/bathhouse-row",
    title: "Bathhouse Row Visitor Guide",
    text: "Pair the mountain with the bathhouses, thermal water, Grand Promenade, shops, and restaurants below.",
  },
  {
    href: "/hot-springs-ar-restaurants",
    title: "Hot Springs Restaurant Guide",
    text: "Find breakfast, lunch, dinner, coffee, barbecue, pizza, lakefront meals, and downtown places to eat.",
  },
  {
    href: "/hot-springs-ar-hotels",
    title: "Hotels in Hot Springs",
    text: "Compare downtown hotels, Lake Hamilton stays, Oaklawn-area lodging, and other options around town.",
  },
];

export default function HotSpringsMountainTowerArticlePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Hot Springs Mountain Tower and the Zig-Zag Mountains: A Scenic Drive Above Town",
      description: metadata.description,
      image: [
        `${site.url}${imageBase}/hot-springs-mountain-view-storm-clouds.webp`,
        `${site.url}${imageBase}/mountain-tower-from-drive.webp`,
        `${site.url}${imageBase}/zig-zag-mountains-sign.webp`,
      ],
      datePublished: "2026-07-12",
      dateModified: "2026-07-12",
      author: {
        "@type": "Organization",
        name: "Natural State Tourism Project",
        url: "https://naturalstatetourismproject.org",
      },
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
      mainEntityOfPage: `${site.url}${articlePath}`,
      about: [
        "Hot Springs Mountain Tower",
        "Hot Springs Mountain Drive",
        "Zig-Zag Mountains",
        "Hot Springs National Park",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Articles",
          item: `${site.url}/articles`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hot Springs Mountain Tower Scenic Drive",
          item: `${site.url}${articlePath}`,
        },
      ],
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative min-h-[82vh] overflow-hidden">
        <Image
          src={`${imageBase}/hot-springs-mountain-view-storm-clouds.webp`}
          alt="Wide view across Hot Springs and the Ouachita Mountains beneath storm clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="container relative z-10 flex min-h-[82vh] items-end pb-14 pt-28">
          <div className="max-w-5xl rounded-[2rem] border border-white/15 bg-black/65 p-8 text-white shadow-2xl backdrop-blur-md md:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] !text-white/65">
              Hot Springs scenic drive
            </p>

            <h1 className="mb-6 text-5xl leading-[0.95] text-white md:text-7xl">
              Hot Springs Mountain Tower and the Zig-Zag Mountains
            </h1>

            <p className="max-w-3xl text-lg leading-8 !text-white/82">
              The tower gets most of the attention, but the winding road, old
              stone walls, wooded picnic stops, short walks, and broad view over
              town are what make this little mountain trip worth taking slowly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#guide" className="rounded-full bg-white px-6 py-3 text-sm font-bold !text-[#23382f]">
                Read the Guide
              </a>

              <a
                href="#plan-your-stop"
                className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold !text-white transition hover:bg-white/10"
              >
                Plan Your Stop
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <article
                key={fact.label}
                className="rounded-[1.4rem] border p-5 shadow-sm"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-strong)",
                }}
              >
                <p
                  className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--accent-dark)" }}
                >
                  {fact.label}
                </p>
                <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
                  {fact.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="guide" className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <article>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent-dark)" }}
              >
                Just above downtown
              </p>

              <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
                Hot Springs changes quickly once the road starts climbing.
              </h2>

              <div className="space-y-6 text-lg leading-8" style={{ color: "var(--muted)" }}>
                <p>
                  A lot of Hot Springs visits stay close to Central Avenue. You
                  walk Bathhouse Row, stop in a shop, find lunch, and spend the
                  day around the old downtown blocks. That is a good trip, but
                  there is another side of the city sitting right above it.
                </p>

                <p>
                  Hot Springs Mountain Drive winds into the trees through a
                  series of bends, stone retaining walls, rocky slopes, and
                  shaded pull-offs. It is not a long backcountry road. You are
                  still close to downtown. But the woods close in fast enough
                  that it feels like you have stepped away from the city for a
                  while.
                </p>

                <p>
                  That quick switch is part of what makes Hot Springs National
                  Park unusual. You can spend the morning using our{" "}
                  <Link
                    href="/bathhouse-row"
                    className="font-bold underline decoration-2 underline-offset-4"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Bathhouse Row guide
                  </Link>
                  , then be on a quiet mountain road a few minutes later.
                </p>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
              <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border shadow-lg" style={{ borderColor: "var(--border)" }}>
                <Image
                  src={`${imageBase}/mountain-tower-from-drive.webp`}
                  alt="Hot Springs Mountain Tower rising above the trees beside the mountain road"
                  fill
                  sizes="(max-width: 1024px) 50vw, 24vw"
                  className="object-cover"
                />
              </div>

              <div className="grid gap-4">
                <div className="relative min-h-[205px] overflow-hidden rounded-[1.6rem] border shadow-sm" style={{ borderColor: "var(--border)" }}>
                  <Image
                    src={`${imageBase}/tree-lined-mountain-road.webp`}
                    alt="Tree-lined road climbing Hot Springs Mountain"
                    fill
                    sizes="(max-width: 1024px) 50vw, 28vw"
                    className="object-cover"
                  />
                </div>

                <div className="relative min-h-[205px] overflow-hidden rounded-[1.6rem] border shadow-sm" style={{ borderColor: "var(--border)" }}>
                  <Image
                    src={`${imageBase}/mountain-drive-stone-wall.webp`}
                    alt="Curving mountain drive beside a stone retaining wall in Hot Springs National Park"
                    fill
                    sizes="(max-width: 1024px) 50vw, 28vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft-divider">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="hero-eyebrow">The road is part of it</p>
            <h2>Do not treat the drive like something to get through.</h2>
            <p className="mt-5 text-lg leading-8">
              The curves, old stonework, trees, and small stops are what turn a
              tower visit into a real mountain outing. Pull over only where it
              is allowed, give other drivers room, and let the road set the pace.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {stopIdeas.map((idea) => (
              <article
                key={idea.title}
                className="rounded-[1.6rem] border p-6 shadow-sm"
                style={{
                  background: "var(--surface-strong)",
                  borderColor: "var(--border)",
                }}
              >
                <h3 className="mb-3 text-2xl font-semibold">{idea.title}</h3>
                <p className="leading-7" style={{ color: "var(--muted)" }}>
                  {idea.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <figure className="overflow-hidden rounded-[2rem] border shadow-sm" style={{ background: "var(--surface-strong)", borderColor: "var(--border)" }}>
              <div className="relative h-[360px]">
                <Image
                  src={`${imageBase}/mountain-drive-hairpin-curve.webp`}
                  alt="Hairpin curve on Hot Springs Mountain Drive through the woods"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-5 text-sm leading-7" style={{ color: "var(--muted)" }}>
                The road curls tightly around the hillside, with old stonework
                following the edge in several places.
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-[2rem] border shadow-sm" style={{ background: "var(--surface-strong)", borderColor: "var(--border)" }}>
              <div className="relative h-[360px]">
                <Image
                  src={`${imageBase}/mountain-road-retaining-wall.webp`}
                  alt="Old stone retaining wall beside Hot Springs Mountain Drive"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-5 text-sm leading-7" style={{ color: "var(--muted)" }}>
                The stone walls, woods, and slower road give the drive an older
                park-road feel that fits Hot Springs well.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="plan-your-stop" className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border shadow-lg" style={{ borderColor: "var(--border)" }}>
              <Image
                src={`${imageBase}/mountain-picnic-area.webp`}
                alt="Picnic tables and grills beneath the trees on Hot Springs Mountain"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>

            <article>
              <p className="hero-eyebrow">Stop and stay awhile</p>
              <h2 className="mb-6">The picnic area is simple, shaded, and easy to use.</h2>

              <div className="space-y-6 text-lg leading-8" style={{ color: "var(--muted)" }}>
                <p>
                  One of the nicest parts of the drive is that you do not need a
                  big plan. There are picnic tables and grills tucked beneath
                  the pines and hardwoods, with enough room to eat, sit for a
                  while, and let the kids stretch their legs.
                </p>

                <p>
                  Bring sandwiches, drinks, or something simple for the grill if
                  current rules and fire conditions allow it. Pack out what you
                  bring in. This is not a polished resort picnic lawn, and it
                  does not need to be. It feels like an older Arkansas park stop
                  in the best way.
                </p>

                <p>
                  Families looking for more low-cost ideas can also use our guide
                  to{" "}
                  <Link
                    href="/free-things-to-do-hot-springs"
                    className="font-bold underline decoration-2 underline-offset-4"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    free things to do in Hot Springs
                  </Link>
                  . The mountain drive fits easily into that kind of day even if
                  you decide not to buy a tower ticket.
                </p>
              </div>

              <div className="mt-7 rounded-[1.4rem] border p-5" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <h3 className="mb-2 text-xl font-semibold">A practical note</h3>
                <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
                  The mountain has steps, roots, loose rock, slopes, and traffic
                  close to some stopping areas. Comfortable shoes and a little
                  attention go a long way, especially with children or older
                  family members.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--green)" }}>
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <article className="text-white">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/60">
                Why the ridges zig and zag
              </p>
              <h2 className="mb-6 !text-white">
                The Zig-Zag Mountains are more than a name on a sign.
              </h2>

              <div className="space-y-5 text-lg leading-8">
                <p className="!text-white/78">
                  An interpretive panel near the picnic area explains how this
                  part of the Ouachita Mountains was folded and pushed into a
                  complicated set of ridges. From the air, those ridges do not
                  run in one clean line. They bend back and forth across the
                  landscape.
                </p>

                <p className="!text-white/78">
                  That is where the Zig-Zag name comes from. Once you stop and
                  look at the map, the tight road curves, exposed rock, and
                  rolling ridges around Hot Springs start making more sense.
                </p>

                <p className="!text-white/78">
                  You do not need a geology lesson to enjoy the mountain, but
                  the sign gives the drive a little more context without turning
                  the stop into a history lecture.
                </p>
              </div>
            </article>

            <figure className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-2xl">
              <div className="relative h-[430px]">
                <Image
                  src={`${imageBase}/zig-zag-mountains-sign.webp`}
                  alt="Interpretive sign explaining the Zig-Zag Mountains in Hot Springs National Park"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-5 text-sm leading-7 !text-white/72">
                The park sign shows the folded ridge pattern from above and
                explains why this section of the Ouachitas picked up its name.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] border shadow-lg" style={{ borderColor: "var(--border)" }}>
                <Image
                  src={`${imageBase}/hot-springs-mountain-pagoda.webp`}
                  alt="White Pagoda with a red tile roof on Hot Springs Mountain"
                  fill
                  sizes="(max-width: 1024px) 50vw, 24vw"
                  className="object-cover"
                />
              </div>

              <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] border shadow-lg" style={{ borderColor: "var(--border)" }}>
                <Image
                  src={`${imageBase}/hot-springs-north-mountain-trail-map.webp`}
                  alt="Hot Springs and North Mountains trail map and trail information sign"
                  fill
                  sizes="(max-width: 1024px) 50vw, 24vw"
                  className="object-cover"
                />
              </div>
            </div>

            <article>
              <p className="hero-eyebrow">Pagoda and trail access</p>
              <h2 className="mb-6">You can keep the outing easy or add a little walking.</h2>

              <div className="space-y-6 text-lg leading-8" style={{ color: "var(--muted)" }}>
                <p>
                  The white Pagoda with its red tile roof is one of the mountain’s
                  most recognizable smaller stops. It sits above the road and is
                  reached by steps, with stone walls and woods surrounding it.
                </p>

                <p>
                  Nearby trail information covers routes around Hot Springs and
                  North mountains. Some visitors come ready for a longer hike.
                  Others walk a short section, look around, and return to the car.
                  Both are perfectly good ways to use the mountain.
                </p>

                <p>
                  Our broader{" "}
                  <Link
                    href="/explore"
                    className="font-bold underline decoration-2 underline-offset-4"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Explore Hot Springs guide
                  </Link>{" "}
                  can help you connect this stop with the national park, downtown,
                  Lake Hamilton, and other outdoor places around town.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-warm-wash">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <article>
              <p className="hero-eyebrow">The view at the top</p>
              <h2 className="mb-6">This is where the whole Hot Springs landscape opens up.</h2>

              <div className="space-y-6 text-lg leading-8" style={{ color: "var(--muted)" }}>
                <p>
                  From the higher overlooks and the tower, the view stretches
                  across the city and into layer after layer of green Ouachita
                  ridges. Roads and buildings sit below, but the mountains still
                  shape the whole scene.
                </p>

                <p>
                  Clear weather gives you the longest view. Cloudy days can be
                  just as interesting. Dark summer clouds, strips of sunlight,
                  and a little haze over the hills make the overlook feel less
                  like a postcard and more like the Arkansas weather we actually
                  get.
                </p>

                <p>
                  The tower is a separate paid attraction, and its hours can
                  change by season or weather. Check directly before building
                  your day around going up. Even when you skip the tower, the
                  drive and nearby park stops still make the trip worthwhile.
                </p>
              </div>
            </article>

            <div className="grid gap-4">
              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border shadow-lg" style={{ borderColor: "var(--border)" }}>
                <Image
                  src={`${imageBase}/hot-springs-mountain-overlook.webp`}
                  alt="Wide mountain overlook above Hot Springs Arkansas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative min-h-[230px] overflow-hidden rounded-[1.6rem] border shadow-sm" style={{ borderColor: "var(--border)" }}>
                  <Image
                    src={`${imageBase}/hot-springs-overlook-graffiti-sign.webp`}
                    alt="Mountain overlook above Hot Springs with a sign warning against graffiti"
                    fill
                    sizes="(max-width: 1024px) 50vw, 23vw"
                    className="object-cover"
                  />
                </div>

                <div className="relative min-h-[230px] overflow-hidden rounded-[1.6rem] border shadow-sm" style={{ borderColor: "var(--border)" }}>
                  <Image
                    src={`${imageBase}/hot-springs-mountain-view-storm-clouds.webp`}
                    alt="Storm clouds over the wooded ridges and city below Hot Springs Mountain"
                    fill
                    sizes="(max-width: 1024px) 50vw, 23vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="hero-eyebrow">When to go</p>
            <h2>Morning is cooler. Late afternoon has the softer view.</h2>
            <p className="mt-5 text-lg leading-8">
              Summer shade helps, but Hot Springs humidity still follows you up
              the mountain. Spring is green, fall brings color, and winter can
              open longer views through the trees. Weather and road conditions
              can change, so check before heading up after storms or freezing
              weather.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[1.6rem] border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h3 className="mb-3 text-2xl font-semibold">Morning</h3>
              <p className="leading-7" style={{ color: "var(--muted)" }}>
                Better for warmer months, quieter picnic stops, and families who
                want to return downtown for lunch.
              </p>
            </article>

            <article className="rounded-[1.6rem] border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h3 className="mb-3 text-2xl font-semibold">Late afternoon</h3>
              <p className="leading-7" style={{ color: "var(--muted)" }}>
                Good for softer light across the ridges, but make sure the tower
                and road schedule still fit your plan.
              </p>
            </article>

            <article className="rounded-[1.6rem] border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h3 className="mb-3 text-2xl font-semibold">After rain</h3>
              <p className="leading-7" style={{ color: "var(--muted)" }}>
                The woods look fresh, but rocks, steps, and trails can be slick.
                Drive slowly and use extra care on foot.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft-divider">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="hero-eyebrow">More from the mountain</p>
            <h2>A closer look at the road, woods, rock, and picnic stops.</h2>
            <p className="mt-5 text-lg leading-8">
              These are the smaller details people miss when the tower is the
              only thing on the plan.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photoGallery.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-[1.6rem] border shadow-sm"
                style={{ background: "var(--surface-strong)", borderColor: "var(--border)" }}
              >
                <div className="relative h-72">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5 text-sm leading-7" style={{ color: "var(--muted)" }}>
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <article>
              <p className="hero-eyebrow">Make it part of a Hot Springs day</p>
              <h2 className="mb-6">Mountain in the morning, downtown when you come back down.</h2>

              <div className="space-y-6 text-lg leading-8" style={{ color: "var(--muted)" }}>
                <p>
                  The easiest plan is to start on the mountain while the day is
                  cooler, bring a small picnic or snack, and return to Central
                  Avenue afterward. That leaves time for the bathhouses, shops,
                  coffee, museums, and a local meal.
                </p>

                <p>
                  You can also reverse it. Walk downtown first, use our guide to{" "}
                  <Link
                    href="/hot-springs-ar-restaurants"
                    className="font-bold underline decoration-2 underline-offset-4"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    restaurants in Hot Springs
                  </Link>
                  , then make the mountain your slower afternoon stop.
                </p>

                <p>
                  Visitors staying a few nights can use the mountain between
                  lake days, spa appointments, or family attractions. Our guides
                  to{" "}
                  <Link
                    href="/hot-springs-ar-hotels"
                    className="font-bold underline decoration-2 underline-offset-4"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Hot Springs hotels
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/hot-springs-ar-cabins"
                    className="font-bold underline decoration-2 underline-offset-4"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    cabins and stays
                  </Link>{" "}
                  can help finish the rest of the trip.
                </p>
              </div>
            </article>

            <div className="rounded-[2rem] border p-7 shadow-sm md:p-9" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <h3 className="mb-5 text-3xl font-semibold">A simple half-day plan</h3>
              <div className="grid gap-3">
                {[
                  "Drive up slowly and use the marked pull-offs.",
                  "Stop at the picnic area and read the Zig-Zag Mountains sign.",
                  "Walk to the Pagoda or take a short trail section.",
                  "Visit the tower if current hours and admission fit your day.",
                  "Return downtown for food, shops, Bathhouse Row, or the Grand Promenade.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border px-4 py-3 text-sm font-semibold leading-6"
                    style={{ background: "var(--surface-strong)", borderColor: "var(--border)", color: "var(--text)" }}
                  >
                    <span style={{ color: "var(--accent-dark)" }}>{index + 1}.</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm-wash">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="hero-eyebrow">Keep planning</p>
            <h2>Use the mountain as one piece of the day, not the whole checklist.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-[1.6rem] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "var(--surface-strong)", borderColor: "var(--border)" }}
              >
                <h3 className="mb-3 text-2xl font-semibold">{link.title}</h3>
                <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
                  {link.text}
                </p>
                <span className="mt-5 inline-block text-sm font-bold" style={{ color: "var(--accent-dark)" }}>
                  Open guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="hero-eyebrow">Frequently asked questions</p>
            <h2>Hot Springs Mountain Tower and scenic drive FAQs</h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.6rem] border p-6 shadow-sm"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <h3 className="mb-3 text-xl font-semibold">{faq.question}</h3>
                <p className="leading-7" style={{ color: "var(--muted)" }}>
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="rounded-[2rem] p-8 text-white shadow-2xl md:p-12" style={{ background: "var(--green)" }}>
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] !text-white/55">
                Take your time going up
              </p>

              <h2 className="mb-6 text-4xl font-semibold leading-tight !text-white md:text-5xl">
                The Hot Springs Mountain Tower scenic drive is better when the road, woods, and stops get as much time as the view.
              </h2>

              <p className="max-w-3xl text-lg leading-8 !text-white/78">
                Drive slowly, stop where parking is provided, read the mountain
                signs, sit beneath the trees, and give yourself enough time that
                the tower is not just another quick photo stop above town.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/articles" className="rounded-full bg-white px-6 py-3 text-sm font-bold !text-[#23382f]">
                  More Hot Springs Articles
                </Link>
                <Link href="/things-to-do-in-hot-springs-ar" className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold !text-white transition hover:bg-white/10">
                  Plan More Things To Do
                </Link>
                <Link href="/hot-springs-family-friendly" className="rounded-full border border-white/35 px-6 py-3 text-sm font-bold !text-white transition hover:bg-white/10">
                  Family-Friendly Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
