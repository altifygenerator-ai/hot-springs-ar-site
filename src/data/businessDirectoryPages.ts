import { businesses } from "@/data/businesses";

const guideLinks = [
  { label: "Local Businesses", href: "/local-businesses" },
  { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
  { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
  { label: "Events", href: "/events" },
  { label: "Get Listed", href: "/contact" },
];

const relatedLinks = [
  { label: "Local Businesses", href: "/local-businesses" },
  { label: "Local Hidden Gems", href: "/hot-springs-local-spots" },
  { label: "Bathhouse Row", href: "/bathhouse-row" },
  { label: "Events", href: "/events" },
  { label: "Get Listed", href: "/contact" },
];

function byCategory(category: (typeof businesses)[number]["category"]) {
  return businesses.filter((business) => business.category === category);
}

function byNames(names: string[]) {
  return names
    .map((name) => businesses.find((business) => business.name === name))
    .filter((business): business is (typeof businesses)[number] => Boolean(business));
}

function uniqueByName(items: typeof businesses) {
  const seen = new Set<string>();

  return items.filter((business) => {
    const key = business.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const shopNames = [
  "All Things Arkansas",
  "Bathhouse Soapery & Caldarium",
  "The Savory Pantry",
  "Hot Springs Hat Company",
  "MT Savvy Styles Boutique",
  "Bricks & Minifigs Hot Springs",
  "Black Ribbon Books",
  "Static on Ouachita",
  "Golden Feather",
  "Run Stop",
  "Podunk Annie's",
];

const attractionNames = [
  "Hot Springs National Park",
  "Bathhouse Row",
  "Oaklawn Racing Casino Resort",
  "Garvan Woodland Gardens",
  "Magic Springs Theme and Water Park",
  "Mid-America Science Museum",
  "The Gangster Museum of America",
  "National Park Duck Tours",
  "Hot Springs Mountain Tower",
  "Arkansas Alligator Farm & Petting Zoo",
  "Funtrackers Family Fun Park",
  "Tiny Town",
  "Retroverse Museum",
  "Maxwell Blade Theatre of Magic",
  "Go Foto Yourselfie Studio",
  "Mosaic Madness",
  "Crystal Ridge Distillery",
  "Fordyce Bathhouse Visitor Center",
];

const outdoorNames = [
  "Northwoods Trails",
  "Cedar Glades Park",
  "Hot Springs Creek Greenway Trail",
  "Adventureworks Hot Springs",
  "Hot Springs Bicycle Touring Company",
  "Parkside Cycle",
  "Greenway Outfitters",
  "Lake Ouachita State Park",
  "Safe Harbor Brady Mountain",
  "Lake Hamilton",
];

const localServiceNames = [
  "Hot Springs Trolley Tours",
  "Hot Springs Bicycle Touring Company",
  "Parkside Cycle",
  "Greenway Outfitters",
  "Hot Springs Camper Rentals",
  "Lyn & Lili's Tidy House",
  "Precise Property Cleaning",
  "The Electric Strawberry",
];

export const boutiquesAndShopsBusinesses = uniqueByName([
  ...byNames(shopNames),
  ...byCategory("Shopping"),
]);

export const hotSpringsAttractionBusinesses = uniqueByName([
  ...byNames(attractionNames),
  ...byCategory("Attraction"),
]);

export const outdoorBusinessListings = uniqueByName([
  ...byNames(outdoorNames),
  ...byCategory("Outdoor Recreation"),
]);

export const localServiceBusinesses = uniqueByName([
  ...byNames(localServiceNames),
  ...byCategory("Local Service"),
]);

export const boutiquesAndShopsPage = {
  metadata: {
    title: "Hot Springs Boutiques & Shops | Local Shopping, Gifts & Downtown Stores",
    description:
      "Find boutiques, local shops, gift stores, bookstores, soap shops, specialty food stores, clothing boutiques, and downtown shopping stops in Hot Springs, Arkansas.",
    keywords: [
      "Hot Springs boutiques",
      "Hot Springs shops",
      "shopping in Hot Springs Arkansas",
      "downtown Hot Springs shopping",
      "Hot Springs gifts",
      "Hot Springs Arkansas souvenirs",
      "Hot Springs local shops",
      "Bathhouse Row shopping",
    ],
    alternates: {
      canonical: "/hot-springs-boutiques-shops",
    },
  },
  props: {
    eyebrow: "Boutiques, Gifts & Local Shopping",
    title: "Find local shops, gifts, books, bath goods, and downtown browsing in Hot Springs.",
    description:
      "Use this guide for Hot Springs boutiques, gift shops, specialty stores, bookstores, soap shops, local retail, and visitor-friendly shopping stops beyond the antique and thrift guide.",
    heroImage: "/images/shopping/shopping-hero.webp",
    primaryCta: { label: "Browse Shops", href: "#listings" },
    secondaryCta: { label: "Get Listed", href: "/contact" },
    introEyebrow: "Shopping Guide",
    introTitle: "A cleaner home for boutiques and local shops.",
    introText:
      "Hot Springs has more than antique malls and souvenir shelves. Downtown, Bathhouse Row, Ouachita Avenue, The Arlington, and Central Avenue all have local shops that help visitors find gifts, books, soap, clothing, food items, Arkansas-made products, and smaller stops worth remembering.",
    introNote:
      "Featured cards marked Our Pick are editorial starting points right now, not paid placements. Those spots can be replaced with paid featured placement when a business wants to sponsor the page.",
    businesses: boutiquesAndShopsBusinesses,
    featuredNames: ["All Things Arkansas", "Bathhouse Soapery & Caldarium", "The Savory Pantry"],
    featuredEyebrow: "Our Picks For Now",
    featuredTitle: "Start with shops that make sense for visitors.",
    featuredText:
      "These picks give visitors easy shopping stops around downtown, Bathhouse Row, and Central Avenue while leaving room for paid featured placement later.",
    basicEyebrow: "Basic Listings",
    basicTitle: "More Hot Springs boutiques and shops.",
    basicText:
      "These listings help round out the shopping guide and give visitors more local places to browse before or after restaurants, bathhouses, events, or hotel check-in.",
    infoEyebrow: "Shop By Mood",
    infoTitle: "What kind of shopping stop fits the trip?",
    infoText:
      "Some visitors want a quick souvenir, some want clothes or books, and some want one good local shop between lunch and Bathhouse Row.",
    infoCards: [
      {
        title: "Downtown gifts",
        text: "Good for visitors walking Central Avenue, staying near Bathhouse Row, or needing an easy take-home item.",
      },
      {
        title: "Boutiques",
        text: "Useful for clothing, accessories, hats, jewelry, and local retail that feels more personal than a chain store.",
      },
      {
        title: "Books and creative stops",
        text: "A good fit for rainy days, slower afternoons, and visitors looking for quieter stops tucked into downtown buildings.",
      },
      {
        title: "Food and bath goods",
        text: "Specialty food, soaps, bath items, and Arkansas-made products tie the shopping trip back into Hot Springs itself.",
      },
    ],
    guideLinks,
    relatedLinks: [
      { label: "Antique & Thrift", href: "/hot-springs-antique-thrift-flea-markets" },
      { label: "Shopping Near Bathhouse Row", href: "/shopping-near-bathhouse-row" },
      { label: "Local Hidden Gems", href: "/hot-springs-local-spots" },
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Get Listed", href: "/contact" },
    ],
    faqs: [
      {
        question: "Where are the best local shops in Hot Springs?",
        answer:
          "Many visitor-friendly local shops are around Central Avenue, Bathhouse Row, downtown Hot Springs, The Arlington area, Ouachita Avenue, and the larger Central Avenue shopping corridor.",
      },
      {
        question: "Is this the same as the antique and thrift guide?",
        answer:
          "No. This page focuses more on boutiques, gifts, bookstores, specialty retail, soap shops, and local shopping. The antique, thrift, and flea market page is still separate.",
      },
      {
        question: "Can a shop buy a featured spot on this page?",
        answer:
          "Yes. The Our Pick cards are editorial placeholders unless a business has paid for placement. A shop can ask about featured placement through the contact page.",
      },
    ],
    schemaName: "Boutiques and Shops in Hot Springs, Arkansas",
    schemaDescription:
      "Local boutiques, gift shops, bookstores, specialty stores, soap shops, and shopping stops in Hot Springs, Arkansas.",
  },
};

export const hotSpringsAttractionsPage = {
  metadata: {
    title: "Hot Springs Attractions | Museums, Family Stops, Tours & Visitor Activities",
    description:
      "Find attractions in Hot Springs, Arkansas including museums, family activities, Bathhouse Row, Magic Springs, Oaklawn, gardens, tours, mountain views, and local visitor stops.",
    keywords: [
      "Hot Springs attractions",
      "Hot Springs Arkansas attractions",
      "things to do Hot Springs Arkansas",
      "Hot Springs museums",
      "family attractions Hot Springs",
      "Hot Springs tours",
      "Bathhouse Row attractions",
    ],
    alternates: {
      canonical: "/hot-springs-attractions",
    },
  },
  props: {
    eyebrow: "Attractions & Visitor Activities",
    title: "Museums, tours, family stops, history, gardens, and classic Hot Springs attractions.",
    description:
      "A direct attractions guide for visitors who want the bigger stops, family activities, downtown museums, tours, entertainment, gardens, and classic Hot Springs places in one clean list.",
    heroImage: "/images/categories/things-to-do.jpg",
    primaryCta: { label: "Browse Attractions", href: "#listings" },
    secondaryCta: { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    introEyebrow: "Attractions Guide",
    introTitle: "A stronger attraction list without replacing the main things-to-do page.",
    introText:
      "The main things-to-do guide is still the broad planning page. This page is for the actual attraction-style listings: museums, gardens, shows, tours, family stops, historic places, and activities people can choose from quickly.",
    introNote:
      "Our Pick labels are unpaid editorial placeholders right now. Paid featured placement can take one of those spots later without changing the whole page structure.",
    businesses: hotSpringsAttractionBusinesses,
    featuredNames: ["Hot Springs National Park", "Oaklawn Racing Casino Resort", "Garvan Woodland Gardens"],
    featuredEyebrow: "Our Picks For Now",
    featuredTitle: "The first stops most visitors should understand.",
    featuredText:
      "These are broad, recognizable starting points that help visitors orient a Hot Springs trip before choosing smaller museums, tours, shows, and family stops.",
    basicEyebrow: "Basic Listings",
    basicTitle: "More Hot Springs attractions and activities.",
    basicText:
      "Use these listings to compare family stops, downtown museums, tours, entertainment, lake-area attractions, and classic Hot Springs activities.",
    infoEyebrow: "Plan Around The Group",
    infoTitle: "Pick attractions by the kind of day you want.",
    infoText:
      "Hot Springs works for families, couples, history fans, lake trips, rainy days, and quick weekend visits, but the right stop depends on who is going.",
    infoCards: [
      {
        title: "Families and kids",
        text: "Look for animal stops, science exhibits, theme park time, duck tours, mini golf, photo studios, and hands-on activities.",
      },
      {
        title: "History and downtown",
        text: "Bathhouse Row, Fordyce Bathhouse, the Gangster Museum, and downtown walking stops help explain why Hot Springs feels different.",
      },
      {
        title: "Shows and entertainment",
        text: "Oaklawn, magic shows, distillery visits, tours, and downtown nightlife can fill the late afternoon or evening.",
      },
      {
        title: "Outdoor tie-ins",
        text: "Gardens, mountain views, towers, lake-area stops, and trails work well when the weather is good.",
      },
    ],
    guideLinks,
    relatedLinks,
    faqs: [
      {
        question: "What are the main attractions in Hot Springs, Arkansas?",
        answer:
          "Popular Hot Springs attractions include Hot Springs National Park, Bathhouse Row, Oaklawn Racing Casino Resort, Garvan Woodland Gardens, Magic Springs, Mid-America Science Museum, Hot Springs Mountain Tower, museums, tours, and family activity stops.",
      },
      {
        question: "Is this different from the things-to-do page?",
        answer:
          "Yes. The things-to-do page is the broader planning guide. This attractions page is more of a directory-style list of places and businesses visitors can choose from.",
      },
      {
        question: "Can attractions be featured here?",
        answer:
          "Yes. Featured placement is limited so the page stays useful, and current Our Pick cards can be replaced by paid featured listings when appropriate.",
      },
    ],
    schemaName: "Attractions in Hot Springs, Arkansas",
    schemaDescription:
      "Museums, family attractions, tours, entertainment, historic sites, gardens, and visitor activities in Hot Springs, Arkansas.",
  },
};

export const outdoorBusinessesPage = {
  metadata: {
    title: "Hot Springs Outdoor Businesses | Trails, Bike Rentals, Parks & Lake Recreation",
    description:
      "Find outdoor businesses and recreation stops in Hot Springs, Arkansas including trails, bike rentals, parks, lake areas, outfitters, marinas, and outdoor activities.",
    keywords: [
      "Hot Springs outdoor businesses",
      "Hot Springs bike rentals",
      "Northwoods Trails Hot Springs",
      "Hot Springs outdoor recreation",
      "Lake Ouachita outdoor recreation",
      "Hot Springs trails",
      "Hot Springs outfitters",
    ],
    alternates: {
      canonical: "/hot-springs-outdoor-businesses",
    },
  },
  props: {
    eyebrow: "Outdoor Businesses & Recreation",
    title: "Trails, bike rentals, parks, lake days, marinas, and outdoor stops around Hot Springs.",
    description:
      "Use this page for outdoor-focused Hot Springs planning: bike shops, e-bike rentals, trail systems, parks, lake access, outfitters, marinas, and recreation businesses near the city.",
    heroImage: "/images/categories/explore.jpg",
    primaryCta: { label: "Browse Outdoors", href: "#listings" },
    secondaryCta: { label: "Lake Hamilton", href: "/lake-hamilton" },
    introEyebrow: "Outdoor Guide",
    introTitle: "Hot Springs is not only bathhouses and downtown walking.",
    introText:
      "The city sits close to trails, lake areas, mountain views, parks, marinas, bike routes, and outdoor businesses that can turn a normal weekend into a more active trip. This page keeps those listings together so they do not get buried inside the broader things-to-do guide.",
    introNote:
      "Our Pick labels are unpaid placeholders for now and can be replaced by paid featured placement when an outdoor business wants the top spot.",
    businesses: outdoorBusinessListings,
    featuredNames: ["Northwoods Trails", "Hot Springs Bicycle Touring Company", "Greenway Outfitters"],
    featuredEyebrow: "Our Picks For Now",
    featuredTitle: "Good starting points for outdoor visitors.",
    featuredText:
      "These listings help visitors quickly understand the trail, bike, and easy outdoor side of Hot Springs before comparing parks, marinas, lake stops, and adventure businesses.",
    basicEyebrow: "Basic Listings",
    basicTitle: "More outdoor businesses and recreation stops.",
    basicText:
      "Use these listings to compare trail systems, parks, lake-area stops, outfitters, adventure businesses, bike shops, and outdoor recreation around Hot Springs.",
    infoEyebrow: "Outdoor Planning",
    infoTitle: "Match the outdoor stop to the weather, group, and time you have.",
    infoText:
      "Some visitors want a full trail day. Others only need a short walk, lake view, bike rental, or easy afternoon outside downtown.",
    infoCards: [
      {
        title: "Bike days",
        text: "Northwoods, bike rentals, repairs, and Greenway access make Hot Springs better for riders than many visitors expect.",
      },
      {
        title: "Lake days",
        text: "Lake Hamilton and Lake Ouachita-area stops work well for boating, marinas, swimming, scenic drives, and slower outdoor time.",
      },
      {
        title: "Family outdoors",
        text: "Parks, paved paths, gardens, towers, and easier trail stops are better for mixed-age groups and short visits.",
      },
      {
        title: "Adventure stops",
        text: "Ziplines, mountain biking, kayak tours, and longer park visits are better when people want something more active.",
      },
    ],
    guideLinks,
    relatedLinks: [
      { label: "Lake Hamilton", href: "/lake-hamilton" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
      { label: "Family-Friendly", href: "/hot-springs-family-friendly" },
      { label: "Cabins", href: "/hot-springs-ar-cabins" },
      { label: "Get Listed", href: "/contact" },
    ],
    faqs: [
      {
        question: "What outdoor activities are available around Hot Springs?",
        answer:
          "Visitors can find hiking, biking, mountain biking, lake days, boat rentals, marinas, parks, gardens, paved trails, scenic overlooks, ziplines, and nearby state park recreation around Hot Springs.",
      },
      {
        question: "Where should cyclists start in Hot Springs?",
        answer:
          "Cyclists often start by looking at Northwoods Trails, downtown bike rental options, Greenway access, and local bike shops before planning their route.",
      },
      {
        question: "Can outdoor businesses be featured here?",
        answer:
          "Yes. Featured placement is limited and the current Our Pick badges are editorial placeholders unless a business has paid for the spot.",
      },
    ],
    schemaName: "Outdoor Businesses and Recreation in Hot Springs, Arkansas",
    schemaDescription:
      "Trails, bike rentals, parks, marinas, outfitters, lake recreation, and outdoor businesses around Hot Springs, Arkansas.",
  },
};

export const localServicesPage = {
  metadata: {
    title: "Hot Springs Local Services | Visitor Services, Trolleys, Rentals & Property Help",
    description:
      "Find local services in Hot Springs, Arkansas including visitor transportation, trolley tours, rentals, cleaning, property services, bike help, and useful local businesses.",
    keywords: [
      "Hot Springs local services",
      "Hot Springs visitor services",
      "Hot Springs trolley tours",
      "Hot Springs cleaning services",
      "Hot Springs vacation rental services",
      "Hot Springs property services",
      "Hot Springs bike rentals",
    ],
    alternates: {
      canonical: "/hot-springs-local-services",
    },
  },
  props: {
    eyebrow: "Local Services & Visitor Help",
    title: "Useful Hot Springs services for visitors, hosts, groups, and locals.",
    description:
      "This page gives service-type businesses a cleaner home in the guide: trolley tours, shuttles, rentals, cleaning, property help, bike services, and other useful local businesses that do not fit as restaurants or stays.",
    heroImage: "/images/categories/local-business.webp",
    primaryCta: { label: "Browse Services", href: "#listings" },
    secondaryCta: { label: "Get Listed", href: "/contact" },
    introEyebrow: "Service Directory",
    introTitle: "A place for businesses that visitors and local owners still need.",
    introText:
      "Not every useful business is a restaurant, hotel, cabin, spa, or attraction. Some help people move around town, rent gear, clean properties, manage lake trips, support vacation rentals, or solve practical problems during a visit.",
    introNote:
      "Our Pick labels are unpaid placeholders unless a business has paid for placement. That keeps the guide honest while leaving the monetized spots clear.",
    businesses: localServiceBusinesses,
    featuredNames: ["Hot Springs Trolley Tours", "Lyn & Lili's Tidy House", "Hot Springs Bicycle Touring Company"],
    featuredEyebrow: "Our Picks For Now",
    featuredTitle: "Useful service-type businesses to start with.",
    featuredText:
      "These picks give the page a practical starting point while leaving the featured placements open for businesses that want stronger exposure.",
    basicEyebrow: "Basic Listings",
    basicTitle: "More useful Hot Springs local services.",
    basicText:
      "Use these listings for transportation, rentals, property care, outdoor support, and other practical services around Hot Springs.",
    infoEyebrow: "Service Types",
    infoTitle: "Service pages should help visitors and business owners both.",
    infoText:
      "This page can rank for local service searches and also give the tourism guide a place to sell listings that do not belong on the restaurant, cabin, hotel, or spa pages.",
    infoCards: [
      {
        title: "Visitor movement",
        text: "Trolleys, tours, shuttles, charters, and group transportation help people explore without figuring out every route themselves.",
      },
      {
        title: "Rentals and gear",
        text: "Bike rentals, camper rentals, outdoor gear, and repair support make the area easier for active visitors.",
      },
      {
        title: "Property and rental help",
        text: "Cleaning, turnover, vacation rental support, and property care are useful for hosts, lake homes, cabins, and local owners.",
      },
      {
        title: "Local practical needs",
        text: "This page can grow into a wider service directory without mixing service businesses into every travel page.",
      },
    ],
    guideLinks,
    relatedLinks: [
      { label: "Local Businesses", href: "/local-businesses" },
      { label: "Outdoor Businesses", href: "/hot-springs-outdoor-businesses" },
      { label: "Cabins", href: "/hot-springs-ar-cabins" },
      { label: "Hotels", href: "/hot-springs-ar-hotels" },
      { label: "Get Listed", href: "/contact" },
    ],
    faqs: [
      {
        question: "What counts as a Hot Springs local service?",
        answer:
          "Local services can include transportation, trolley tours, bike rentals and repairs, property cleaning, vacation rental support, camper rentals, group services, and practical businesses that visitors or local owners may need.",
      },
      {
        question: "Is this page for tourists or local businesses?",
        answer:
          "Both. It helps visitors find practical help, but it also gives service businesses a place in the Hot Springs guide without forcing them into restaurant, lodging, or attraction pages.",
      },
      {
        question: "Can a service business buy featured placement?",
        answer:
          "Yes. Featured spots are limited and the Our Pick labels are placeholders unless a business has paid for a featured placement.",
      },
    ],
    schemaName: "Local Services in Hot Springs, Arkansas",
    schemaDescription:
      "Visitor services, transportation, rentals, cleaning, property help, bike services, and local service businesses in Hot Springs, Arkansas.",
  },
};
