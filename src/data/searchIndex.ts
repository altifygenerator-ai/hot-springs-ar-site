import { businesses, type Business } from "@/data/businesses";
import { localSpots } from "@/data/local-spots/hiddenGems";

export type SearchItem = {
  title: string;
  href: string;
  category: string;
  description: string;
  keywords: string;
  type: "Guide" | "Business" | "Local Spot" | "Article" | "Event";
};

const pageSearchItems: SearchItem[] = [
  {
    title: "Hot Springs Arkansas Guide",
    href: "/",
    category: "Visitor Guide",
    description:
      "Start here for Hot Springs trip planning, things to do, restaurants, hotels, cabins, Bathhouse Row, Lake Hamilton, events, and local guides.",
    keywords:
      "hot springs arkansas guide travel visitor planning weekend trip vacation local guide restaurants hotels cabins bathhouse row lake hamilton oaklawn national park",
    type: "Guide",
  },
  {
    title: "Things To Do in Hot Springs",
    href: "/things-to-do-in-hot-springs-ar",
    category: "Things To Do",
    description:
      "Plan things to do around Hot Springs, including Bathhouse Row, Hot Springs National Park, Lake Hamilton, Oaklawn, Garvan Gardens, museums, hiking, spas, and family stops.",
    keywords:
      "things to do hot springs attractions activities bathhouse row national park lake hamilton oaklawn garvan gardens museums hiking parks family attractions magic springs mid america science museum",
    type: "Guide",
  },
  {
    title: "Explore Hot Springs",
    href: "/explore",
    category: "Trip Planning",
    description:
      "A broad Hot Springs planning page for visitors comparing downtown, the national park, Lake Hamilton, restaurants, hotels, cabins, events, and nearby stops.",
    keywords:
      "explore hot springs trip ideas downtown central avenue national park lake hamilton restaurants hotels cabins events weekend itinerary",
    type: "Guide",
  },
  {
    title: "Bathhouse Row",
    href: "/bathhouse-row",
    category: "Downtown & History",
    description:
      "Plan time around Bathhouse Row, historic bathhouses, thermal water, downtown walking, shops, museums, restaurants, and Hot Springs National Park.",
    keywords:
      "bathhouse row thermal water bathhouses downtown hot springs central avenue quapaw buckstaff fordyce superior brewery national park walking",
    type: "Guide",
  },
  {
    title: "Things To Do Near Bathhouse Row",
    href: "/things-to-do-near-bathhouse-row",
    category: "Downtown Planning",
    description:
      "Nearby attractions, restaurants, shops, museums, bathhouses, walking stops, and simple ideas close to Bathhouse Row and downtown Hot Springs.",
    keywords:
      "near bathhouse row downtown attractions restaurants shops museums walking things to do central avenue hot springs national park",
    type: "Guide",
  },
  {
    title: "Restaurants in Hot Springs",
    href: "/hot-springs-ar-restaurants",
    category: "Restaurants",
    description:
      "Find Hot Springs restaurants, downtown dining, breakfast, lakefront food, pizza, breweries, casual stops, sweets, local favorites, and places to eat around town.",
    keywords:
      "restaurants hot springs food places to eat breakfast lunch dinner downtown lake hamilton lakefront pizza brewery sweets coffee cafe sushi italian mexican burgers barbecue",
    type: "Guide",
  },
  {
    title: "Restaurants Near Bathhouse Row",
    href: "/restaurants-near-bathhouse-row",
    category: "Restaurants",
    description:
      "Downtown restaurants and easy places to eat near Bathhouse Row, Central Avenue, The Arlington, bathhouses, shops, and museums.",
    keywords:
      "restaurants near bathhouse row downtown central avenue arlington breakfast lunch dinner brewery pizza sweets coffee local food",
    type: "Guide",
  },
  {
    title: "Lake Hamilton Restaurants",
    href: "/lake-hamilton-restaurants",
    category: "Restaurants",
    description:
      "Lake Hamilton dining options, lakefront restaurants, seafood, casual food, vacation meal planning, and places to eat near the water.",
    keywords:
      "lake hamilton restaurants lakefront dining seafood fishers wharf sam's pizza food on lake hot springs",
    type: "Guide",
  },
  {
    title: "Hotels in Hot Springs",
    href: "/hot-springs-ar-hotels",
    category: "Places To Stay",
    description:
      "Hot Springs hotels, resorts, downtown stays, Lake Hamilton lodging, Oaklawn area hotels, and places to stay for weekend trips.",
    keywords:
      "hotels hot springs places to stay lodging resorts downtown hotel lake hamilton oaklawn bathhouse row arlington vacation",
    type: "Guide",
  },
  {
    title: "Hotels Near Bathhouse Row",
    href: "/hotels-near-bathhouse-row",
    category: "Places To Stay",
    description:
      "Hotels close to Bathhouse Row, downtown Hot Springs, walkable restaurants, historic bathhouses, museums, and Central Avenue.",
    keywords:
      "hotels near bathhouse row downtown hotel walkable central avenue arlington waters hotel embassy suites hot springs",
    type: "Guide",
  },
  {
    title: "Hotels Near Oaklawn",
    href: "/hotels-near-oaklawn",
    category: "Places To Stay",
    description:
      "Places to stay near Oaklawn Racing Casino Resort, horse racing, casino visits, Central Avenue, restaurants, and weekend trips.",
    keywords:
      "hotels near oaklawn racing casino resort horse racing casino places to stay central avenue hot springs",
    type: "Guide",
  },
  {
    title: "Cabins in Hot Springs",
    href: "/hot-springs-ar-cabins",
    category: "Cabins & Lodging",
    description:
      "Hot Springs cabins, lake cabins, vacation rentals, romantic stays, family lodging, cabin getaways, and places to stay outside the hotel strip.",
    keywords:
      "cabins hot springs lake cabins vacation rentals airbnb cabin getaway romantic family lodging lake hamilton degray ouachita",
    type: "Guide",
  },
  {
    title: "Lake Hamilton Cabins",
    href: "/lake-hamilton-cabins",
    category: "Cabins & Lodging",
    description:
      "Cabins and vacation rentals near Lake Hamilton for lake weekends, family trips, romantic getaways, boating, fishing, and Hot Springs stays.",
    keywords:
      "lake hamilton cabins vacation rentals lake house airbnb waterfront lodging boating fishing hot springs",
    type: "Guide",
  },
  {
    title: "Lake Hamilton",
    href: "/lake-hamilton",
    category: "Lake Guide",
    description:
      "Plan around Lake Hamilton with restaurants, cabins, hotels, boating, lake views, family stops, and Hot Springs trip ideas.",
    keywords:
      "lake hamilton hot springs lake restaurants cabins hotels boating fishing swimming vacation rentals water views",
    type: "Guide",
  },
  {
    title: "Spas & Wellness in Hot Springs",
    href: "/hot-springs-spas-wellness",
    category: "Spas & Wellness",
    description:
      "Hot Springs spa and wellness guide covering bathhouses, thermal baths, massages, aesthetics, skin care, body treatments, and slower wellness trips.",
    keywords:
      "spas wellness bathhouse thermal baths massage facials aesthetics skin care body sculpting quapaw buckstaff spa city destinations inner peace aura room electric strawberry",
    type: "Guide",
  },
  {
    title: "Spa City Aesthetics Spotlight",
    href: "/spa-city-aesthetics-hot-springs",
    category: "Featured Business",
    description:
      "A featured Hot Springs aesthetics studio spotlight for facial analysis, regenerative skin treatments, body sculpting, lymphatic support, and skin longevity.",
    keywords:
      "spa city aesthetics facial analysis skin treatments regenerative body sculpting lymphatic support hair restoration wellness hot springs",
    type: "Business",
  },
  {
    title: "Local Businesses in Hot Springs",
    href: "/local-businesses",
    category: "Local Businesses",
    description:
      "A local business guide for Hot Springs attractions, restaurants, lodging, spas, shops, services, and visitor-friendly businesses around town.",
    keywords:
      "local businesses hot springs business directory shops services restaurants hotels cabins spas attractions get listed",
    type: "Guide",
  },

  {
    title: "Hot Springs Boutiques & Shops",
    href: "/hot-springs-boutiques-shops",
    category: "Shopping",
    description:
      "Boutiques, gift shops, bookstores, soap shops, specialty food stores, local retail, and visitor-friendly shopping stops around Hot Springs.",
    keywords:
      "boutiques shops shopping gifts souvenirs bookstore books soap bath goods central avenue downtown bathhouse row local retail hot springs",
    type: "Guide",
  },
  {
    title: "Hot Springs Attractions",
    href: "/hot-springs-attractions",
    category: "Attractions",
    description:
      "Attractions in Hot Springs including museums, family activities, gardens, tours, entertainment, historic places, and visitor activities.",
    keywords:
      "attractions hot springs museums family activities tours magic springs oaklawn garvan gardens alligator farm tiny town duck tours mountain tower",
    type: "Guide",
  },
  {
    title: "Hot Springs Outdoor Businesses",
    href: "/hot-springs-outdoor-businesses",
    category: "Outdoor Recreation",
    description:
      "Outdoor businesses and recreation stops around Hot Springs including trails, bike rentals, outfitters, parks, marinas, and lake recreation.",
    keywords:
      "outdoor businesses recreation hot springs trails bike rentals northwoods greenway outfitters parks lake hamilton lake ouachita marinas hiking biking",
    type: "Guide",
  },
  {
    title: "Hot Springs Local Services",
    href: "/hot-springs-local-services",
    category: "Local Services",
    description:
      "Local services in Hot Springs including trolley tours, transportation, rentals, cleaning, property help, bike services, and visitor support.",
    keywords:
      "local services hot springs trolley tours transportation rentals cleaning property vacation rental cleaning bike services camper rentals visitor services",
    type: "Guide",
  },
  {
    title: "Local Hidden Gems",
    href: "/hot-springs-local-spots",
    category: "Local Spots",
    description:
      "Local favorites, hidden gems, small shops, food stops, sweets, creative places, parks, and Hot Springs spots locals suggest to visitors.",
    keywords:
      "hidden gems local spots hot springs local favorites shops sweets coffee parks creative downtown ouachita avenue local suggestions",
    type: "Guide",
  },
  {
    title: "Family-Friendly Hot Springs",
    href: "/hot-springs-family-friendly",
    category: "Family-Friendly",
    description:
      "Family-friendly Hot Springs ideas for kids, easy attractions, museums, parks, sweets, lake time, downtown stops, and simple trip planning.",
    keywords:
      "family friendly kids children hot springs magic springs science museum duck tours parks sweets candy lake hamilton garvan gardens",
    type: "Guide",
  },
  {
    title: "Pet-Friendly Hot Springs",
    href: "/pet-friendly-hot-springs",
    category: "Pet-Friendly",
    description:
      "Pet-friendly Hot Springs planning for dogs, patios, cabins, parks, lake days, cleanup, heat, and practical visitor notes.",
    keywords:
      "pet friendly dogs hot springs dog friendly patios cabins parks lake hamilton pet travel",
    type: "Guide",
  },
  {
    title: "Free Things To Do in Hot Springs",
    href: "/free-things-to-do-hot-springs",
    category: "Things To Do",
    description:
      "Free and low-cost Hot Springs ideas including national park stops, downtown walking, overlooks, trails, parks, lake views, and family-friendly options.",
    keywords:
      "free things to do hot springs cheap low cost national park walking trails overlooks parks downtown lake views family",
    type: "Guide",
  },
  {
    title: "Ouachita Avenue",
    href: "/hot-springs-ouachita-avenue",
    category: "Local Spots",
    description:
      "A local guide to Ouachita Avenue with restaurants, sweets, shops, creative stops, nightlife, and places visitors may miss near downtown.",
    keywords:
      "ouachita avenue downtown hot springs shops restaurants sweets static sqzbx la brujas dulceria bakery local finds",
    type: "Guide",
  },
  {
    title: "Bathhouse Row Local Finds",
    href: "/hot-springs-bathhouse-row-local-finds",
    category: "Local Spots",
    description:
      "Local finds around Bathhouse Row and The Arlington, including sweets, shops, books, breakfast, bathhouses, and easy downtown stops.",
    keywords:
      "bathhouse row local finds arlington shops sweets breakfast books downtown central avenue local stops",
    type: "Guide",
  },
  {
    title: "Shopping Near Bathhouse Row",
    href: "/shopping-near-bathhouse-row",
    category: "Shopping",
    description:
      "Shopping near Bathhouse Row, The Arlington, Central Avenue, and downtown Hot Springs, including local shops, gifts, sweets, art, antiques, and walkable stops.",
    keywords:
      "shopping near bathhouse row downtown hot springs gifts souvenirs art antiques sweets central avenue arlington local shops",
    type: "Guide",
  },
  {
    title: "Antique, Thrift & Flea Markets",
    href: "/hot-springs-antique-thrift-flea-markets",
    category: "Shopping",
    description:
      "A Hot Springs shopping guide for antique stores, thrift stores, flea markets, vintage finds, resale shops, and bargain stops around town.",
    keywords:
      "antique stores thrift stores flea markets vintage resale shopping bargains hot springs",
    type: "Guide",
  },
  {
    title: "Hot Springs Antique Stores",
    href: "/hot-springs-antique-stores",
    category: "Shopping",
    description:
      "Antique stores and vintage shopping around Hot Springs for visitors who like old finds, collectibles, booths, resale, and local shopping days.",
    keywords:
      "antique stores hot springs antiques vintage collectibles booths resale shopping",
    type: "Guide",
  },
  {
    title: "Hot Springs Thrift Stores",
    href: "/hot-springs-thrift-stores",
    category: "Shopping",
    description:
      "Hot Springs thrift stores, resale stops, bargain shopping, secondhand finds, and local shops to add to a shopping day.",
    keywords:
      "thrift stores hot springs resale secondhand bargains consignment shopping",
    type: "Guide",
  },
  {
    title: "Hot Springs Flea Markets",
    href: "/hot-springs-flea-markets",
    category: "Shopping",
    description:
      "Flea markets and booth-style shopping around Hot Springs for vintage finds, resale goods, collectibles, and weekend browsing.",
    keywords:
      "flea markets hot springs booths collectibles vintage resale shopping weekend",
    type: "Guide",
  },
  {
    title: "Events in Hot Springs",
    href: "/events",
    category: "Events",
    description:
      "Hot Springs events, local happenings, festivals, markets, music, family-friendly events, and community activities.",
    keywords:
      "events hot springs calendar festivals markets live music family activities community this weekend submit event",
    type: "Event",
  },
  {
    title: "This Weekend in Hot Springs",
    href: "/this-weekend",
    category: "Events",
    description:
      "Weekend planning for Hot Springs events, local activities, restaurants, things to do, family ideas, and easy visitor plans.",
    keywords:
      "this weekend hot springs events things to do weekend trip activities live music markets family downtown",
    type: "Event",
  },
  {
    title: "Submit an Event",
    href: "/submit-event",
    category: "Events",
    description:
      "Submit a Hot Springs event, festival, market, show, fundraiser, live music night, family activity, or local community happening for review.",
    keywords:
      "submit event hot springs event calendar festival market fundraiser live music community activity",
    type: "Event",
  },
  {
    title: "Community Photos",
    href: "/community-photos",
    category: "Community",
    description:
      "Community photos from around Hot Springs, including local views, events, businesses, attractions, lake days, downtown, and visitor snapshots.",
    keywords:
      "community photos hot springs submit photo local views lake hamilton downtown bathhouse row attractions businesses",
    type: "Guide",
  },
  {
    title: "Submit a Photo",
    href: "/submit-photo",
    category: "Community",
    description:
      "Submit a community photo from Hot Springs, Lake Hamilton, downtown, events, local businesses, attractions, and places worth sharing.",
    keywords:
      "submit photo community photos hot springs lake hamilton downtown events businesses attractions",
    type: "Guide",
  },
  {
    title: "History of Hot Springs",
    href: "/history",
    category: "History",
    description:
      "Hot Springs history, Bathhouse Row, thermal water, national park roots, downtown stories, gangster history, Oaklawn, and historic tourism.",
    keywords:
      "history hot springs bathhouse row gangster gambling national park thermal water oaklawn historic downtown",
    type: "Guide",
  },
  {
    title: "Hot Springs Articles",
    href: "/articles",
    category: "Articles",
    description:
      "Stories and deeper local articles about Hot Springs, Bathhouse Row, history, attractions, downtown, and visitor planning.",
    keywords:
      "articles hot springs stories history bathhouse row gambling museum downtown travel guide",
    type: "Article",
  },
  {
    title: "Bathhouse Row Article",
    href: "/articles/bathhouse-row",
    category: "Article",
    description:
      "A deeper article on why Bathhouse Row still matters and how it connects to Hot Springs history, tourism, and downtown visitor planning.",
    keywords:
      "bathhouse row article history bathhouses thermal water downtown hot springs national park",
    type: "Article",
  },
  {
    title: "History of Hot Springs Gambling Museum Article",
    href: "/articles/history-of-hot-springs-gambling-museum",
    category: "Article",
    description:
      "A deeper article on Hot Springs gambling history, gangster stories, the Gangster Museum of America, downtown, and the city’s past.",
    keywords:
      "gangster museum gambling history hot springs article mobsters downtown al capone owney madden",
    type: "Article",
  },
  {
    title: "Fourth of July in Hot Springs",
    href: "/hot-springs-fourth-of-july",
    category: "Seasonal Guide",
    description:
      "Fourth of July planning for Hot Springs, including fireworks, Lake Hamilton, downtown events, Magic Springs, markets, and holiday visitor tips.",
    keywords:
      "fourth of july hot springs fireworks july 4 lake hamilton magic springs holiday events summer",
    type: "Guide",
  },
  {
    title: "Rainy Day Near Bathhouse Row",
    href: "/rainy-day-near-bathhouse-row",
    category: "Trip Planning",
    description:
      "Rainy day ideas near Bathhouse Row, including bathhouses, museums, restaurants, shops, spas, sweets, and indoor-friendly downtown stops.",
    keywords:
      "rainy day bathhouse row hot springs indoor things to do museums spa restaurants shops sweets downtown",
    type: "Guide",
  },
  {
    title: "Get Listed or Advertise",
    href: "/contact",
    category: "Contact",
    description:
      "Get listed in the Hot Springs guide, ask about featured placement, submit a business update, suggest a local spot, or contact the guide.",
    keywords:
      "get listed advertise hot springs local business featured listing contact business directory suggest update",
    type: "Guide",
  },
];

const businessCategoryHref: Record<Business["category"], string> = {
  Attraction: "/hot-springs-attractions",
  Restaurant: "/hot-springs-ar-restaurants",
  Hotel: "/hot-springs-ar-hotels",
  "Cabins & Lodging": "/hot-springs-ar-cabins",
  "Spa & Bathhouse": "/hot-springs-spas-wellness",
  "Local Business": "/local-businesses",
  "Local Service": "/hot-springs-local-services",
  Shopping: "/hot-springs-boutiques-shops",
  "Outdoor Recreation": "/hot-springs-outdoor-businesses",
};

function joinSearchParts(parts: Array<string | undefined | null>) {
  return parts.filter((part): part is string => Boolean(part)).join(" ");
}

const businessSearchItems: SearchItem[] = businesses.map((business) => ({
  title: business.name,
  href: business.href || businessCategoryHref[business.category],
  category: business.category,
  description: joinSearchParts([business.type, business.description]),
  keywords: joinSearchParts([
    business.name,
    business.category,
    business.type,
    business.description,
    business.address,
    business.phone,
  ]),
  type: "Business",
}));

const localSpotSearchItems: SearchItem[] = localSpots.map((spot) => ({
  title: spot.name,
  href: spot.relatedPages[0]?.href || "/hot-springs-local-spots",
  category: spot.categories.join(" • "),
  description: joinSearchParts([spot.description, spot.localAngle]),
  keywords: joinSearchParts([
    spot.name,
    spot.shortName,
    spot.area,
    spot.address,
    spot.categories.join(" "),
    spot.goodFor.join(" "),
    spot.services?.join(" "),
    spot.description,
    spot.localAngle,
  ]),
  type: "Local Spot",
}));

function uniqueItems(items: SearchItem[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = `${item.title.toLowerCase()}|${item.href}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

export const searchIndex = uniqueItems([
  ...pageSearchItems,
  ...businessSearchItems,
  ...localSpotSearchItems,
]);

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreItem(item: SearchItem, query: string) {
  const normalizedQuery = normalizeText(query);
  const terms = normalizedQuery.split(" ").filter(Boolean);

  if (!terms.length) {
    return 0;
  }

  const title = normalizeText(item.title);
  const category = normalizeText(item.category);
  const description = normalizeText(item.description);
  const keywords = normalizeText(item.keywords);
  const haystack = `${title} ${category} ${description} ${keywords}`;

  let score = 0;

  if (title === normalizedQuery) score += 24;
  if (title.includes(normalizedQuery)) score += 14;
  if (category.includes(normalizedQuery)) score += 8;
  if (haystack.includes(normalizedQuery)) score += 7;

  for (const term of terms) {
    if (title.includes(term)) score += 6;
    if (category.includes(term)) score += 4;
    if (description.includes(term)) score += 3;
    if (keywords.includes(term)) score += 2;
  }

  const missingTerms = terms.filter((term) => !haystack.includes(term)).length;
  score -= missingTerms * 2;

  if (item.type === "Guide") score += 2;
  if (item.type === "Business" && title.includes(normalizedQuery)) score += 4;

  return score;
}

export function getSearchResults(query: string, limit = 8) {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return pageSearchItems.slice(0, limit);
  }

  return searchIndex
    .map((item) => ({ ...item, score: scoreItem(item, trimmedQuery) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
