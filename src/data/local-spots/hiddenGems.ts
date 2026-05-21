export type LocalSpotGroupSlug =
  | "family-friendly"
  | "ouachita-avenue"
  | "bathhouse-row-local-finds"
  | "other-local-favorites";

export type LocalSpotCategory =
  | "Family Friendly"
  | "Food & Drinks"
  | "Coffee & Sweets"
  | "Arts & Creative"
  | "Shopping"
  | "Outdoor"
  | "History"
  | "Bathhouse Row"
  | "Downtown"
  | "Nightlife"
  | "Community";

export type VerificationStatus = "verified" | "partially-verified" | "needs-follow-up";

export type LocalSpot = {
  id: string;
  name: string;
  shortName?: string;
  groupSlugs: LocalSpotGroupSlug[];
  categories: LocalSpotCategory[];
  area: string;
  address?: string;
  phone?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  sourceUrls: string[];
  relatedPages: {
    label: string;
    href: string;
  }[];
  description: string;
  localAngle: string;
  goodFor: string[];
  services?: string[];
  reviewNote?: string;
  imageAvailable: boolean;
  image?: string | null;
  imageAlt?: string;
  verificationStatus: VerificationStatus;
  needsFollowUp?: string;
};

export const localSpotGroups: {
  slug: LocalSpotGroupSlug;
  title: string;
  eyebrow: string;
  description: string;
  pageHref: string;
}[] = [
  {
    slug: "family-friendly",
    title: "Family-Friendly Local Finds",
    eyebrow: "Kid-Friendly & Easy Stops",
    pageHref: "/hot-springs-family-friendly",
    description:
      "Local suggestions for families, kids, rainy days, summer afternoons, easy outdoor stops, creative activities, and simple places to burn off energy around Hot Springs.",
  },
  {
    slug: "ouachita-avenue",
    title: "Ouachita Avenue & Downtown Creative Stops",
    eyebrow: "The Overlooked Local Strip",
    pageHref: "/hot-springs-ouachita-avenue",
    description:
      "Ouachita Avenue gets overlooked by visitors who stay only on Central Avenue, but locals pointed it out as one of the cooler pockets of Hot Springs for food, drinks, coffee, shopping, and creative stops.",
  },
  {
    slug: "bathhouse-row-local-finds",
    title: "Bathhouse Row & Arlington Local Finds",
    eyebrow: "Around The Arlington",
    pageHref: "/hot-springs-bathhouse-row-local-finds",
    description:
      "Local tips around Bathhouse Row and The Arlington, including the easy-to-miss mall level, small shops, sweets, books, breakfast, and classic bathhouse experiences.",
  },
  {
    slug: "other-local-favorites",
    title: "Other Local Favorites",
    eyebrow: "Locals Mentioned These Too",
    pageHref: "/hot-springs-local-spots",
    description:
      "Food, coffee, arts, parks, historic stops, and community favorites locals brought up that do not fit neatly into one tourist category.",
  },
];

export const localSpots: LocalSpot[] = [
  {
    id: "ouachita-avenue",
    name: "Ouachita Avenue",
    groupSlugs: ["ouachita-avenue"],
    categories: ["Downtown", "Food & Drinks", "Shopping", "History"],
    area: "Ouachita Avenue / Downtown",
    sourceUrls: [
      "https://encyclopediaofarkansas.net/entries/ouachita-avenue-historic-district-7603/",
      "https://en.wikipedia.org/wiki/Ouachita_Avenue_Historic_District",
    ],
    relatedPages: [
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
    ],
    description:
      "A historic downtown corridor locals called out as one of the cooler overlooked areas of Hot Springs, with restaurants, shops, historic buildings, creative stops, and nightlife close to Central Avenue.",
    localAngle:
      "Good for visitors who want to get slightly off the main Bathhouse Row path without leaving downtown.",
    goodFor: ["downtown wandering", "local food", "date night", "shops", "history"],
    services: ["restaurants", "shops", "historic district", "nightlife"],
    reviewNote:
      "Best treated as a district/local area rather than a single business listing.",
    imageAvailable: false,
    image: null,
    verificationStatus: "verified",
  },
  {
    id: "static-on-ouachita",
    name: "Static on Ouachita",
    shortName: "Static",
    groupSlugs: ["ouachita-avenue", "other-local-favorites"],
    categories: ["Shopping", "Arts & Creative", "Downtown"],
    area: "Ouachita Avenue",
    address: "246 Ouachita Ave Ste 102, Hot Springs, AR 71901",
    website: "https://staticonouachita.square.site/",
    facebook: "https://www.facebook.com/p/Static-on-Ouachita-61584124923222/",
    instagram: "https://www.instagram.com/staticonouachita/",
    sourceUrls: [
      "https://staticonouachita.square.site/",
      "https://www.facebook.com/p/Static-on-Ouachita-61584124923222/",
      "https://www.instagram.com/staticonouachita/",
    ],
    relatedPages: [
      { label: "Ouachita Avenue", href: "/hot-springs-ouachita-avenue" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A local shop on Ouachita Avenue with vintage, handmade, clothing, music, and local art energy.",
    localAngle:
      "Part of the creative Ouachita Avenue cluster locals pointed out as trendy, different, and often missed by visitors.",
    goodFor: ["vintage", "local art", "shopping", "music", "downtown wandering"],
    services: ["vintage clothing", "handmade goods", "local art", "music-related items"],
    reviewNote:
      "Good local/community fit, but verify current inventory and hours before writing anything too specific.",
    imageAvailable: false,
    image: null,
    verificationStatus: "verified",
  },
  {
    id: "sqzbx",
    name: "SQZBX Pizza Joint & Brewery",
    shortName: "SQZBX",
    groupSlugs: ["ouachita-avenue", "other-local-favorites"],
    categories: ["Food & Drinks", "Nightlife", "Downtown"],
    area: "Ouachita Avenue",
    address: "236 Ouachita Ave, Hot Springs, AR 71901",
    phone: "501-609-0609",
    website: "https://sqzbx.com/",
    facebook: "https://www.facebook.com/SQZBX/",
    sourceUrls: [
      "https://sqzbx.com/",
      "https://www.hotsprings.org/blog/sqzbx-brewery-pizza-pizza-salad-sandwiches-more-feastmode-hot-springs/",
      "https://onlyinark.com/food/sqzbx-brewery-pizza-in-hot-springs/",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Ouachita Avenue", href: "/hot-springs-ouachita-avenue" },
    ],
    description:
      "A locally loved pizza joint and brewery on Ouachita Avenue with house-brewed beer, pizza, sandwiches, salads, and a strong music/creative identity.",
    localAngle:
      "A good example of the off-Central Avenue Hot Springs scene locals want visitors to notice.",
    goodFor: ["pizza", "local beer", "casual dinner", "music lovers", "groups"],
    services: ["pizza", "brewery", "sandwiches", "salads", "beer to go"],
    reviewNote:
      "Frequently described as a unique local spot with strong community/music ties.",
    imageAvailable: true,
    image: "/images/local-spots/sqzbx.webp",
    imageAlt: "SQZBX Pizza Joint and Brewery on Ouachita Avenue in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "splash-wine-bar",
    name: "Splash Wine Bar",
    groupSlugs: ["ouachita-avenue", "other-local-favorites"],
    categories: ["Food & Drinks", "Nightlife", "Downtown"],
    area: "Ouachita Avenue",
    address: "325 Ouachita Ave, Hot Springs, AR 71901",
    phone: "501-701-4544",
    website: "https://splashwinebar.com/",
    instagram: "https://www.instagram.com/splashwinebar/",
    sourceUrls: [
      "https://splashwinebar.com/",
      "https://splashwinebar.com/live-music/",
      "https://www.hotsprings.org/places/restaurants/splash-wine-bar/",
      "https://aymag.com/thirsty-thursday-splash-wine-bar/",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Events", href: "/events" },
      { label: "Ouachita Avenue", href: "/hot-springs-ouachita-avenue" },
    ],
    description:
      "A wine and cocktail bar in the Hot Springs historic district with brunch, drinks, live music, and a cozy downtown feel.",
    localAngle:
      "One of the stronger Ouachita Avenue date-night/girls-trip style stops locals pointed toward.",
    goodFor: ["wine", "cocktails", "brunch", "live music", "date night"],
    services: ["wine", "cocktails", "brunch", "small plates", "live music"],
    reviewNote:
      "Official site notes weekly specials and live music; check current event calendar before publishing time-sensitive details.",
    imageAvailable: true,
    image: "/images/local-spots/splash-wine-bar.jpg",
    imageAlt: "Splash Wine Bar on Ouachita Avenue in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "colorado-grill",
    name: "Colorado Grill",
    groupSlugs: ["ouachita-avenue", "other-local-favorites"],
    categories: ["Food & Drinks", "Downtown"],
    area: "Ouachita Avenue",
    address: "320 Ouachita Ave, Hot Springs, AR 71901",
    phone: "501-623-7992",
    website: "https://coloradogrillandbar.com/",
    facebook: "https://www.facebook.com/colorado.grill.7/",
    sourceUrls: [
      "https://coloradogrillandbar.com/",
      "https://www.hotsprings.org/places/restaurants/colorado-grill/",
      "https://coloradogrillandbar.com/330405.html",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Ouachita Avenue", href: "/hot-springs-ouachita-avenue" },
    ],
    description:
      "A long-running Ouachita Avenue restaurant serving Southwest-style cuisine, Mexican originals, and Tex-Mex favorites.",
    localAngle:
      "Fits the Ouachita Avenue cluster well because it gives visitors another local food stop just off the usual Bathhouse Row path.",
    goodFor: ["lunch", "dinner", "Tex-Mex", "margaritas", "groups"],
    services: ["Southwest cuisine", "Mexican food", "Tex-Mex", "bar"],
    reviewNote:
      "Official and tourism sources position it as a downtown/Ouachita Avenue restaurant.",
    imageAvailable: true,
    image: "/images/local-spots/colorado-grill.jpg",
    imageAlt: "Colorado Grill on Ouachita Avenue in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "house-cup",
    name: "House Cup Coffee Home Brewing",
    shortName: "House Cup",
    groupSlugs: ["ouachita-avenue", "other-local-favorites"],
    categories: ["Coffee & Sweets", "Shopping", "Downtown"],
    area: "Broadway Street / Downtown",
    address: "432 Broadway St, Hot Springs, AR 71901",
    website: "https://www.housecuphomebrew.com/",
    facebook: "https://www.facebook.com/p/House-Cup-Coffee-Home-Brewing-61583348686469/",
    instagram: "https://www.instagram.com/housecuphomebrew/",
    sourceUrls: [
      "https://www.housecuphomebrew.com/",
      "https://www.housecuphomebrew.com/about-4",
      "https://www.facebook.com/p/House-Cup-Coffee-Home-Brewing-61583348686469/",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Ouachita Avenue", href: "/hot-springs-ouachita-avenue" },
    ],
    description:
      "A specialty coffee supply shop focused on home brewing gear, Arkansas roasted coffee, workshops, tastings, and coffee-lover gifts.",
    localAngle:
      "More of a coffee nerd/local gift stop than a basic coffee run, which makes it a strong hidden-gem style listing.",
    goodFor: ["coffee lovers", "gifts", "workshops", "rainy day stop", "local beans"],
    services: ["coffee beans", "home brewing gear", "coffee workshops", "tastings"],
    reviewNote:
      "Official site emphasizes home brewing supplies, workshops, equipment, and ethically sourced beans.",
    imageAvailable: true,
    image: "/images/local-spots/house-cup-coffee.webp",
    imageAlt: "House Cup Coffee Home Brewing in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "bricks-and-minifigs",
    name: "Bricks & Minifigs Hot Springs",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Family Friendly", "Shopping", "Downtown"],
    area: "Downtown / Broadway Street",
    address: "301 Broadway Street, Hot Springs, AR 71901",
    website: "https://bricksandminifigs.com/hotsprings-ar/",
    facebook: "https://www.facebook.com/p/Bricks-Minifigs-Hot-Springs-61574846542267/",
    sourceUrls: [
      "https://bricksandminifigs.com/hotsprings-ar/",
      "https://bricksandminifigs.com/hotsprings-ar/about-us/",
      "https://www.hotsprings.org/places/activities/bricks-and-minifigs/",
    ],
    relatedPages: [
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A LEGO resale store where visitors can buy, sell, trade, dig through bulk LEGO, build minifigures, and browse sets.",
    localAngle:
      "A newer downtown family stop that locals mentioned as good for kids and collectors.",
    goodFor: ["kids", "collectors", "rainy days", "downtown shopping", "family stops"],
    services: ["LEGO resale", "bulk LEGO", "custom minifigures", "sets", "trade-ins"],
    reviewNote:
      "Official and tourism listings frame it as a hands-on, all-ages stop.",
    imageAvailable: true,
    image: "/images/local-spots/bricks-and-minifigs.jpg",
    imageAlt: "Bricks and Minifigs Hot Springs LEGO resale store",
    verificationStatus: "verified",
  },
  {
    id: "hot-springs-creek-greenway",
    name: "Hot Springs Creek Greenway Trail",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Family Friendly", "Outdoor", "Downtown"],
    area: "Downtown / Greenway",
    sourceUrls: [
      "https://www.hotsprings.org/places/activities/hot-springs-creek-greenway-trail/",
      "https://www.hotspringsar.gov/210/City-Parks",
      "https://www.alltrails.com/trail/us/arkansas/hot-springs-creek-greenway-trail",
    ],
    relatedPages: [
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A paved creekside trail through Hot Springs with access to parks, public art, the farmers market area, Hollywood Park, the Bark Park, and other easy outdoor stops.",
    localAngle:
      "Locals mentioned the creek as a summer family favorite, but it should be framed as a creekside trail rather than an official splash pad.",
    goodFor: ["families", "walking", "biking", "dogs", "easy outdoors"],
    services: ["walking trail", "biking trail", "public art", "park access"],
    reviewNote:
      "City and tourism sources verify the trail, creekside route, Bark Park connection, Hollywood Park playground nearby, and easy outdoor use.",
    imageAvailable: true,
    image: "/images/local-spots/hotsprings-creek-greenway.jpg",
    imageAlt: "Hot Springs Creek Greenway Trail",
    verificationStatus: "verified",
  },
  {
    id: "hollywood-park-playground",
    name: "Hollywood Park Playground / Greenway Family Stop",
    shortName: "Hollywood Park Playground",
    groupSlugs: ["family-friendly"],
    categories: ["Family Friendly", "Outdoor"],
    area: "Hollywood Park / Greenway area",
    sourceUrls: [
      "https://www.hotsprings.org/places/activities/hot-springs-creek-greenway-trail/",
      "https://business.hotspringschamber.com/active-member-directory/Details/hollywood-park-2712006",
    ],
    relatedPages: [
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A playground and park stop connected to the Hot Springs Creek Greenway area, useful for families with small children.",
    localAngle:
      "A local specifically mentioned a padded/fenced kid-friendly area near the Alligator Farm area. The general playground/Greenway connection is verified, but the exact padded/fenced wording still needs a photo or second confirmation.",
    goodFor: ["small children", "families", "playground", "quick outdoor break"],
    services: ["playground", "park", "walking trail connection"],
    reviewNote:
      "Use cautious wording until the exact padded/fenced section is personally verified.",
    imageAvailable: false,
    image: null,
    verificationStatus: "partially-verified",
    needsFollowUp:
      "Confirm the exact playground description and whether the rubber padded/fenced area is Hollywood Park, another nearby playground, or a specific section near the Alligator Farm.",
  },
  {
    id: "arkansas-alligator-farm",
    name: "Arkansas Alligator Farm & Petting Zoo",
    shortName: "Alligator Farm & Petting Zoo",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Family Friendly", "History"],
    area: "Whittington Avenue",
    address: "847 Whittington Avenue, Hot Springs, AR 71901",
    phone: "501-623-6172",
    website: "https://alligatorfarmzoo.com/",
    facebook: "https://www.facebook.com/AlligatorFarmZoo/",
    sourceUrls: [
      "https://alligatorfarmzoo.com/",
      "https://www.hotsprings.org/places/activities/arkansas-alligator-farm-petting-zoo/",
      "https://www.arkansas.com/experiences/discover/attraction-listings/arkansas-alligator-farm-petting-zoo",
    ],
    relatedPages: [
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A long-running Hot Springs family attraction with alligators, feeding opportunities, a petting zoo, and animal encounters.",
    localAngle:
      "Locals still bring it up because it is one of those classic Hot Springs kid stops that feels old-school and memorable.",
    goodFor: ["kids", "animal lovers", "family outings", "classic attractions"],
    services: ["alligator viewing", "petting zoo", "animal feeding", "group visits"],
    reviewNote:
      "Official sources verify baby alligator feeding, petting zoo animals, and seasonal feeding shows.",
    imageAvailable: true,
    image: "/images/local-spots/alligator-farm.webp",
    imageAlt: "Arkansas Alligator Farm and Petting Zoo in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "mid-america-science-museum",
    name: "Mid-America Science Museum",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Family Friendly", "Arts & Creative"],
    area: "West Hot Springs",
    address: "500 Mid America Blvd, Hot Springs, AR 71913",
    phone: "501-767-3461",
    website: "https://midamericamuseum.org/",
    sourceUrls: [
      "https://midamericamuseum.org/",
      "https://midamericamuseum.org/exhibits/",
      "https://www.hotsprings.org/places/activities/mid-america-science-museum/",
    ],
    relatedPages: [
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A hands-on science museum with exhibits, science activities, and family-friendly learning spaces.",
    localAngle:
      "A reliable family stop that works especially well for rainy days, hot afternoons, and kids who need something interactive.",
    goodFor: ["kids", "rainy days", "science", "families", "indoor activity"],
    services: ["science exhibits", "museum store", "family memberships", "birthday parties"],
    reviewNote:
      "Official sources describe more than 100 hands-on exhibits and a large indoor/outdoor museum setting.",
    imageAvailable: true,
    image: "/images/businesses/mid-america-science-museum.jpg",
    imageAlt: "Mid-America Science Museum in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "mosaic-madness",
    name: "Mosaic Madness",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Family Friendly", "Arts & Creative"],
    area: "Malvern Avenue",
    address: "1125 Malvern Avenue, Hot Springs, AR 71901",
    phone: "501-282-2800",
    facebook: "https://www.facebook.com/p/Mosaic-Madness-Hot-Springs-Arkansas-100064338175968/",
    sourceUrls: [
      "https://www.facebook.com/p/Mosaic-Madness-Hot-Springs-Arkansas-100064338175968/",
      "https://www.facebook.com/100064338175968/mentions/",
    ],
    relatedPages: [
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A do-it-yourself mosaic/art studio locals mentioned for visitors who want a creative hands-on activity.",
    localAngle:
      "Good for families, creative visitors, and anyone wanting something more personal than just walking around downtown.",
    goodFor: ["creative activity", "families", "rainy day", "hands-on art"],
    services: ["mosaic studio", "walk-in art activity"],
    reviewNote:
      "Main verified public info is from Facebook; confirm current hours before publishing them.",
    imageAvailable: false,
    image: null,
    verificationStatus: "verified",
  },
  {
    id: "go-foto-yourselfie-studio",
    name: "Go Foto Yourselfie Studio",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Family Friendly", "Arts & Creative", "Downtown"],
    area: "Downtown / Central Avenue",
    address: "332 Central Ave, Hot Springs, AR 71901",
    phone: "870-279-3058",
    website: "https://www.fotoyourselfie.com/",
    facebook: "https://www.facebook.com/p/Go-Foto-Yourselfie-Studio-100095269300434/",
    instagram: "https://www.instagram.com/go_foto_yourselfie_studio/",
    sourceUrls: [
      "https://www.fotoyourselfie.com/",
      "https://www.hotsprings.org/places/activities/go-foto-yourselfie-studio/",
      "https://www.facebook.com/p/Go-Foto-Yourselfie-Studio-100095269300434/",
    ],
    relatedPages: [
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A selfie/photo studio with themed setups, props, and creative photo backdrops for visitors, families, friends, and small groups.",
    localAngle:
      "A local-mentioned photo-friendly stop that fits the newer creative side of downtown Hot Springs.",
    goodFor: ["photos", "families", "groups", "birthdays", "rainy days"],
    services: ["selfie studio", "photo setups", "props", "events"],
    reviewNote:
      "Location may have changed over time; current official site lists 332 Central Ave.",
    imageAvailable: true,
    image: "/images/local-spots/go-foto-yourselfie.jpg",
    imageAlt: "Go Foto Yourselfie Studio in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "dodges-southern-style",
    name: "Dodge’s Southern Style",
    shortName: "Dodge’s",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Food & Drinks", "Family Friendly"],
    area: "East Grand Avenue",
    address: "640 East Grand Avenue, Hot Springs, AR 71901",
    phone: "501-623-8876",
    website: "https://dodgessouthernstyle.com/",
    sourceUrls: [
      "https://www.hotsprings.org/places/restaurants/dodges-southern-style/",
      "https://dodgessouthernstyle.com/arkansas/",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
    ],
    description:
      "A 24-hour Southern-style convenience and food stop on East Grand Avenue with fried chicken, breakfast, fountain drinks, frozen drinks, and quick grab-and-go items.",
    localAngle:
      "Locals mentioned cheap slushies and fountain drinks, which makes this more of a practical family road-trip stop than a polished attraction.",
    goodFor: ["cheap drinks", "road trip stop", "fried chicken", "families", "quick food"],
    services: ["fried chicken", "breakfast", "fountain drinks", "frozen drinks", "fuel"],
    reviewNote:
      "The cheap drink/slushie detail came from local comments; verify current pricing before publishing exact prices.",
    imageAvailable: true,
    image: "/images/local-spots/dodges-southern-style.jpg",
    imageAlt: "Dodge's Southern Style in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "frosty-treat",
    name: "Frosty Treat",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Food & Drinks", "Coffee & Sweets", "Family Friendly"],
    area: "East Grand Avenue",
    address: "1020 East Grand Avenue, Hot Springs, AR 71901",
    phone: "501-609-0130",
    facebook: "https://www.facebook.com/FrostyTreatHotSprings/",
    sourceUrls: [
      "https://www.hotsprings.org/places/restaurants/frosty-treat/",
      "https://www.facebook.com/FrostyTreatHotSprings/",
      "https://www.tripadvisor.com/Restaurant_Review-g60856-d337765-Reviews-Frosty_Treat-Hot_Springs_Arkansas.html",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
    ],
    description:
      "A classic local stop for burgers, chicken tenders, ice cream treats, root beer floats, sundaes, and old-school dairy-bar style food.",
    localAngle:
      "Locals specifically mentioned the Thursday burger special, but specials can change, so point people to current posts before relying on pricing.",
    goodFor: ["burgers", "ice cream", "families", "cheap eats", "classic local food"],
    services: ["burgers", "chicken tenders", "ice cream", "root beer floats", "sundaes"],
    reviewNote:
      "Tourism listing verifies the core menu style; Facebook posts verify rotating Throwback Thursday burger specials.",
    imageAvailable: true,
    image: "/images/local-spots/frosty-treat.jpg",
    imageAlt: "Frosty Treat in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "king-kone",
    name: "King Kone Drive-In",
    shortName: "King Kone",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Food & Drinks", "Coffee & Sweets", "Family Friendly"],
    area: "Malvern Avenue",
    address: "1505 Malvern Avenue, Hot Springs, AR 71901",
    phone: "501-321-9766",
    facebook: "https://www.facebook.com/kingkonehs/",
    sourceUrls: [
      "https://www.hotsprings.org/places/restaurants/king-kone-drive-in/",
      "https://www.facebook.com/kingkonehs/",
      "https://www.tripadvisor.com/Restaurant_Review-g60856-d337720-Reviews-King_Kone_Drive_In-Hot_Springs_Arkansas.html",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
    ],
    description:
      "An old-fashioned drive-in style local food stop known for burgers and casual family-friendly eats.",
    localAngle:
      "Good local add for visitors who like classic drive-up food spots instead of another chain meal.",
    goodFor: ["burgers", "kids", "quick food", "old-school drive-in"],
    services: ["burgers", "sandwiches", "takeout", "outdoor seating"],
    reviewNote:
      "Visit Hot Springs lists it as an old-fashioned burger/drive-up restaurant.",
    imageAvailable: true,
    image: "/images/local-spots/king-kone.jpg",
    imageAlt: "King Kone Drive-In in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "garvan-woodland-gardens",
    name: "Garvan Woodland Gardens",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Family Friendly", "Outdoor"],
    area: "Lake Hamilton Area",
    address: "550 Arkridge Road, Hot Springs, AR 71913",
    phone: "501-262-9300",
    website: "https://www.garvangardens.org/",
    facebook: "https://www.facebook.com/garvangardens/",
    instagram: "https://www.instagram.com/garvangardens/",
    sourceUrls: [
      "https://www.garvangardens.org/",
      "https://www.hotsprings.org/places/activities/garvan-woodland-gardens/",
      "https://www.arkansas.com/experiences/discover/attraction-listings/garvan-woodland-gardens",
    ],
    relatedPages: [
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
    ],
    description:
      "A botanical woodland garden on Lake Hamilton with walking paths, seasonal color, architecture, photo spots, and peaceful outdoor space.",
    localAngle:
      "More obvious than hidden, but locals still mention it because it is one of the best scenic family-friendly stops around Hot Springs.",
    goodFor: ["gardens", "photos", "families", "walking", "slow afternoons"],
    services: ["gardens", "walking paths", "events", "weddings", "seasonal displays"],
    reviewNote:
      "Official sources describe it as a major garden and photo-friendly attraction.",
    imageAvailable: true,
    image: "/images/businesses/garven-woodland-gardens.jpg",
    imageAlt: "Garvan Woodland Gardens in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "cedar-glades-park",
    name: "Cedar Glades Park",
    groupSlugs: ["family-friendly", "other-local-favorites"],
    categories: ["Family Friendly", "Outdoor"],
    area: "North / Cedar Glades",
    website: "https://www.garlandcounty.org/263/Cedar-Glades-Park",
    sourceUrls: [
      "https://www.garlandcounty.org/263/Cedar-Glades-Park",
      "https://www.hotsprings.org/places/activities/cedar-glades-park-garland-county/",
    ],
    relatedPages: [
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
    ],
    description:
      "A county park with hiking and mountain biking trails, disc golf, playgrounds, pavilions, a climbing wall, RC tracks, and open outdoor space.",
    localAngle:
      "Good for visitors who want an easy outdoor place with more than just a walking trail.",
    goodFor: ["hiking", "mountain biking", "disc golf", "kids", "outdoor space"],
    services: ["trails", "disc golf", "playgrounds", "pavilions", "climbing wall"],
    reviewNote:
      "County source verifies the broad amenities; Visit Hot Springs also lists the park as an activity.",
    imageAvailable: true,
    image: "/images/local-spots/cedar-glades-park.jpg",
    imageAlt: "Cedar Glades Park near Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "the-arlington-mall-level",
    name: "The Arlington Mall Level",
    shortName: "Arlington Mall Level",
    groupSlugs: ["bathhouse-row-local-finds"],
    categories: ["Bathhouse Row", "Shopping", "Coffee & Sweets", "History"],
    area: "The Arlington / Bathhouse Row",
    address: "239 Central Ave, Hot Springs, AR 71901",
    website: "https://www.arlingtonhotel.com/amenities",
    sourceUrls: [
      "https://www.arlingtonhotel.com/amenities",
      "https://encyclopediaofarkansas.net/entries/arlington-hotel-2987/",
    ],
    relatedPages: [
      { label: "Hotels", href: "/hot-springs-ar-hotels" },
      { label: "Bathhouse Row", href: "/bathhouse-row" },
    ],
    description:
      "The lower mall level inside The Arlington Resort Hotel & Spa has small local stops visitors can miss if they only look at the hotel from the outside.",
    localAngle:
      "This came straight from community suggestions and is a perfect 'locals know this exists' style tip.",
    goodFor: ["downtown wandering", "shopping", "books", "ice cream", "hotel history"],
    services: ["shopping", "books", "ice cream", "gifts", "records"],
    reviewNote:
      "The Arlington amenities page lists on-site shopping including Golden Feather, Downtown Records & CDs, and Black Ribbon Books.",
    imageAvailable: false,
    image: null,
    verificationStatus: "verified",
  },
  {
    id: "black-ribbon-books",
    name: "Black Ribbon Books",
    groupSlugs: ["bathhouse-row-local-finds", "other-local-favorites"],
    categories: ["Shopping", "Bathhouse Row", "Downtown"],
    area: "The Arlington / Bathhouse Row",
    address: "239 Central Ave, Hot Springs, AR 71901",
    website: "http://www.blackribbonbooks.com",
    facebook: "https://www.facebook.com/p/Black-Ribbon-Books-100093909771807/",
    instagram: "https://www.instagram.com/blackribbonbooks/",
    sourceUrls: [
      "https://www.hotsprings.org/places/activities/black-ribbon-books/",
      "https://www.newpages.com/bookstore/hot-springs-black-ribbon-books/",
      "https://www.facebook.com/p/Black-Ribbon-Books-100093909771807/",
    ],
    relatedPages: [
      { label: "Hotels", href: "/hot-springs-ar-hotels" },
      { label: "Bathhouse Row", href: "/bathhouse-row" },
      { label: "Local Finds", href: "/hot-springs-bathhouse-row-local-finds" },
    ],
    description:
      "A cozy independent bookstore with new and used books located in the mall below The Arlington Hotel.",
    localAngle:
      "One of the strongest local tips from the comment thread because it is easy to miss even if you walk right by The Arlington.",
    goodFor: ["books", "rainy days", "downtown wandering", "quiet stop"],
    services: ["new books", "used books", "bookstore"],
    reviewNote:
      "Visit Hot Springs and bookstore directories verify the Arlington mall location and new/used bookstore setup.",
    imageAvailable: true,
    image: "/images/local-spots/black-ribbon-books.webp",
    imageAlt: "Black Ribbon Books inside The Arlington Hotel in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "mamoos-creamery",
    name: "Mamoo’s Creamery",
    groupSlugs: ["bathhouse-row-local-finds", "family-friendly", "other-local-favorites"],
    categories: ["Coffee & Sweets", "Family Friendly", "Bathhouse Row"],
    area: "The Arlington / Bathhouse Row",
    address: "239 Central Ave, Suite E, Hot Springs, AR 71901",
    phone: "501-463-9488",
    facebook: "https://www.facebook.com/mamooscreamery/",
    sourceUrls: [
      "https://www.hotsprings.org/places/restaurants/mamoos-creamery/",
      "https://www.tripadvisor.com/Restaurant_Review-g60856-d15049559-Reviews-Mamoo_s_Creamery-Hot_Springs_Arkansas.html",
      "https://www.happycow.net/reviews/mamoos-creamery-hot-springs-256691",
    ],
    relatedPages: [
      { label: "Hotels", href: "/hot-springs-ar-hotels" },
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Bathhouse Row", href: "/bathhouse-row" },
    ],
    description:
      "An ice cream shop on the lower mall level of The Arlington Hotel, useful for a quick sweet stop while walking downtown.",
    localAngle:
      "Locals mentioned it as part of the easy-to-miss Arlington mall level cluster.",
    goodFor: ["ice cream", "kids", "downtown dessert", "hotel wandering"],
    services: ["ice cream", "desserts"],
    reviewNote:
      "Visit Hot Springs verifies address and phone; other public listings describe it as located inside/under The Arlington.",
    imageAvailable: true,
    image: "/images/local-spots/mamoos-creamery.webp",
    imageAlt: "Mamoo's Creamery in downtown Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "golden-feather",
    name: "Golden Feather",
    groupSlugs: ["bathhouse-row-local-finds"],
    categories: ["Shopping", "Bathhouse Row", "Downtown"],
    area: "The Arlington / Bathhouse Row",
    facebook: "https://www.facebook.com/GoldenFeatherAR/",
    instagram: "https://www.instagram.com/goldenfeatherar/",
    sourceUrls: [
      "https://www.facebook.com/GoldenFeatherAR/",
      "https://www.instagram.com/goldenfeatherar/",
      "https://www.arlingtonhotel.com/amenities",
    ],
    relatedPages: [
      { label: "Hotels", href: "/hot-springs-ar-hotels" },
      { label: "Bathhouse Row", href: "/bathhouse-row" },
    ],
    description:
      "A boutique/gift-style shop located in the Arlington mall level in historic downtown Hot Springs.",
    localAngle:
      "Part of the cluster of small shops locals said visitors might not know are tucked inside The Arlington.",
    goodFor: ["gifts", "shopping", "downtown wandering"],
    services: ["boutique shopping", "gifts", "souvenirs"],
    reviewNote:
      "Verified primarily through social listings and The Arlington amenities page.",
    imageAvailable: false,
    image: null,
    verificationStatus: "verified",
  },
  {
    id: "downtown-records-cds",
    name: "Downtown Records & CDs",
    groupSlugs: ["bathhouse-row-local-finds"],
    categories: ["Shopping", "Bathhouse Row", "Downtown"],
    area: "The Arlington / Bathhouse Row",
    sourceUrls: ["https://www.arlingtonhotel.com/amenities"],
    relatedPages: [
      { label: "Hotels", href: "/hot-springs-ar-hotels" },
      { label: "Bathhouse Row", href: "/bathhouse-row" },
    ],
    description:
      "A record/CD shop listed by The Arlington as part of its on-site shopping options.",
    localAngle:
      "This appears to be the 'record store' locals mentioned inside The Arlington mall level.",
    goodFor: ["records", "music", "shopping", "downtown wandering"],
    services: ["records", "CDs", "music shopping"],
    reviewNote:
      "Verified through The Arlington amenities page; gather more detail before giving it a larger card.",
    imageAvailable: false,
    image: null,
    verificationStatus: "partially-verified",
    needsFollowUp:
      "Find current dedicated business listing/social page before adding phone, hours, or detailed copy.",
  },
  {
    id: "buckstaff-bathhouse",
    name: "Buckstaff Bathhouse",
    groupSlugs: ["bathhouse-row-local-finds", "other-local-favorites"],
    categories: ["Bathhouse Row", "History"],
    area: "Bathhouse Row",
    address: "509 Central Avenue, Hot Springs, AR 71901",
    phone: "501-623-2308",
    website: "https://buckstaffbaths.com/",
    facebook: "https://www.facebook.com/BuckstaffBathhouse/",
    sourceUrls: [
      "https://buckstaffbaths.com/",
      "https://buckstaffbaths.com/services",
      "https://www.hotsprings.org/places/activities/buckstaff-bathhouse/",
      "https://www.nps.gov/hosp/learn/historyculture/buckstaff-bathhouse.htm",
    ],
    relatedPages: [
      { label: "Bathhouse Row", href: "/bathhouse-row" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A traditional bathhouse on Bathhouse Row offering thermal mineral bath packages, massages, and spa services.",
    localAngle:
      "Even though it is well known, locals still recommend it because it is one of the most classic Hot Springs experiences.",
    goodFor: ["bathhouse experience", "spa day", "history", "couples", "classic Hot Springs"],
    services: ["thermal mineral baths", "massage", "bath packages", "facials", "manicure", "pedicure"],
    reviewNote:
      "Official site confirms walk-in bath/massage services, thermal bath packages, and spa service pricing.",
    imageAvailable: true,
    image: "/images/businesses/buckstaff-bathhouse.jpg",
    imageAlt: "Buckstaff Bathhouse on Bathhouse Row in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "the-pancake-shop",
    name: "The Pancake Shop",
    groupSlugs: ["bathhouse-row-local-finds", "family-friendly", "other-local-favorites"],
    categories: ["Food & Drinks", "Family Friendly", "Bathhouse Row", "Downtown"],
    area: "Downtown / Central Avenue",
    address: "216 Central Avenue, Hot Springs, AR 71901",
    phone: "501-624-5720",
    website: "https://www.pancakeshop.com/",
    facebook: "https://www.facebook.com/ThePancakeShop/",
    instagram: "https://www.instagram.com/thepancakeshop/",
    sourceUrls: [
      "https://www.pancakeshop.com/",
      "https://www.pancakeshop.com/our_location.php",
      "https://www.hotsprings.org/places/restaurants/the-pancake-shop/",
      "https://www.tripadvisor.com/Restaurant_Review-g60856-d1089032-Reviews-The_Pancake_Shop-Hot_Springs_Arkansas.html",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Bathhouse Row", href: "/bathhouse-row" },
    ],
    description:
      "A long-running downtown breakfast spot known for pancakes, fresh-squeezed orange juice, homemade sausage, and a classic Hot Springs breakfast feel.",
    localAngle:
      "A local breakfast staple that pairs naturally with Bathhouse Row, The Arlington, and downtown wandering.",
    goodFor: ["breakfast", "families", "downtown", "classic Hot Springs"],
    services: ["breakfast", "pancakes", "omelets", "fresh orange juice"],
    reviewNote:
      "Official and tourism sources verify the Central Avenue location and long-running breakfast focus.",
    imageAvailable: true,
    image: "/images/businesses/the-pancake-shop.jpeg",
    imageAlt: "The Pancake Shop in downtown Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "the-pho-house",
    name: "The Pho House - Viet Kitchen & Cafe",
    shortName: "The Pho House",
    groupSlugs: ["other-local-favorites"],
    categories: ["Food & Drinks"],
    area: "East Grand Avenue",
    address: "608 East Grand Avenue, Hot Springs, AR 71901",
    website: "https://order.toasttab.com/online/thephohouse",
    facebook: "https://www.facebook.com/thePhoHouse/",
    sourceUrls: [
      "https://order.toasttab.com/online/thephohouse",
      "https://www.hotsprings.org/places/restaurants/pho-house/",
      "https://www.facebook.com/thePhoHouse/",
    ],
    relatedPages: [{ label: "Restaurants", href: "/hot-springs-ar-restaurants" }],
    description:
      "A Vietnamese restaurant in Hot Springs serving pho, noodle soups, rice dishes, appetizers, drinks, and casual Vietnamese comfort food.",
    localAngle:
      "This is the strongest match for the local comment about Vietnamese food hiding in Hot Springs.",
    goodFor: ["pho", "Vietnamese food", "casual lunch", "dinner", "local food finds"],
    services: ["pho", "Vietnamese dishes", "takeout", "dine in"],
    reviewNote:
      "The same address has appeared historically with Pho Hoang My; use The Pho House as the current active identity unless you decide to mention both names in copy.",
    imageAvailable: true,
    image: "/images/local-spots/the-pho-house.jpg",
    imageAlt: "The Pho House Vietnamese restaurant in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "phils-family-restaurant",
    name: "Phil’s Family Restaurant",
    shortName: "Phil’s",
    groupSlugs: ["other-local-favorites"],
    categories: ["Food & Drinks", "Family Friendly"],
    area: "Central Avenue / Oaklawn Area",
    address: "2900 Central Ave, Hot Springs, AR 71901",
    phone: "501-623-8258",
    website: "https://philsrestaurant.weebly.com/",
    facebook: "https://www.facebook.com/Phils.Restaurant/",
    sourceUrls: [
      "https://philsrestaurant.weebly.com/",
      "https://www.hotsprings.org/places/restaurants/phils-family-restaurant/",
      "https://www.tripadvisor.com/Restaurant_Review-g60856-d5003843-Reviews-Phil_s_Restaurant-Hot_Springs_Arkansas.html",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Hotels Near Oaklawn", href: "/hotels-near-oaklawn" },
    ],
    description:
      "A family restaurant near Oaklawn serving Southern-style home cooking, breakfast, lunch, dinner, and daily plate specials.",
    localAngle:
      "Good add for visitors who want a local diner/home-cooking stop instead of another chain restaurant.",
    goodFor: ["breakfast", "Southern food", "home cooking", "Oaklawn area", "family meals"],
    services: ["breakfast", "lunch", "dinner", "daily plate specials", "carry out"],
    reviewNote:
      "Official site verifies location across from Oaklawn's main parking lot and Southern-style home cooking focus.",
    imageAvailable: false,
    image: null,
    verificationStatus: "verified",
  },
  {
    id: "baileys-dairy-treat",
    name: "Bailey’s Dairy Treat",
    groupSlugs: ["other-local-favorites", "family-friendly"],
    categories: ["Food & Drinks", "Coffee & Sweets", "Family Friendly", "History"],
    area: "Park Avenue",
    address: "510 Park Avenue, Hot Springs, AR 71901",
    phone: "501-624-4085",
    facebook: "https://www.facebook.com/BURGERSareYUM",
    sourceUrls: [
      "https://www.hotsprings.org/places/restaurants/baileys-dairy-treat/",
      "https://encyclopediaofarkansas.net/entries/butchies-drive-in-14049/",
      "https://www.tripadvisor.com/Restaurant_Review-g60856-d337679-Reviews-Bailey_s_Dairy_Treat-Hot_Springs_Arkansas.html",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "History", href: "/history" },
    ],
    description:
      "A classic Park Avenue dairy-bar style stop serving American favorites, burgers, shakes, and comfort food in a historic drive-in building.",
    localAngle:
      "This is a strong hidden-gem/history crossover because the building began as Butchie’s Drive-In and is tied to Hot Springs’ old roadside tourism character.",
    goodFor: ["burgers", "shakes", "historic food stop", "families", "old Hot Springs feel"],
    services: ["breakfast", "lunch", "dinner", "burgers", "shakes"],
    reviewNote:
      "Visit Hot Springs verifies current listing details; Encyclopedia of Arkansas verifies the building’s Butchie’s Drive-In history and National Register context.",
    imageAvailable: true,
    image: "/images/local-spots/bailys-dairy-treat.webp",
    imageAlt: "Bailey's Dairy Treat on Park Avenue in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "10fiyahside-island-grill",
    name: "10Fiyahside Island Grill",
    groupSlugs: ["other-local-favorites"],
    categories: ["Food & Drinks"],
    area: "Park Avenue",
    address: "1622 Park Ave, Hot Springs, AR 71901",
    phone: "501-361-7870",
    website: "https://www.10fiyahsideislandgrill.com/",
    sourceUrls: [
      "https://www.10fiyahsideislandgrill.com/",
      "https://www.hotsprings.org/places/restaurants/10fiyahside-island-grill/",
    ],
    relatedPages: [{ label: "Restaurants", href: "/hot-springs-ar-restaurants" }],
    description:
      "A Caribbean/Jamaican food spot serving dishes like jerk chicken, oxtail, curry goat, rice and peas, seafood, soups, and vegetarian options.",
    localAngle:
      "A strong local-food add because it gives visitors something different from the normal downtown burger/pizza routine.",
    goodFor: ["Jamaican food", "Caribbean food", "lunch", "takeout", "hidden eats"],
    services: ["Jamaican food", "Caribbean food", "seafood", "vegetarian options", "takeout"],
    reviewNote:
      "Official site and tourism listing verify the location and Jamaican/Caribbean food angle.",
    imageAvailable: true,
    image: "/images/local-spots/10-fiyahside-island-grill.jpg",
    imageAlt: "10Fiyahside Island Grill in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "espresso-yourselfie",
    name: "Espresso Yourselfie Coffee Lounge",
    shortName: "Espresso Yourselfie",
    groupSlugs: ["other-local-favorites", "family-friendly"],
    categories: ["Coffee & Sweets", "Downtown", "Arts & Creative"],
    area: "Downtown / Central Avenue",
    address: "801 Central Avenue, Suite 33, Hot Springs, AR 71901",
    phone: "501-359-3001",
    facebook: "https://www.facebook.com/p/Espresso-Yourselfie-Coffee-Lounge-61561963284677/",
    instagram: "https://www.instagram.com/espressoyourselfiecoffeelounge/",
    sourceUrls: [
      "https://www.hotsprings.org/places/restaurants/espresso-yourselfie/",
      "https://www.facebook.com/p/Espresso-Yourselfie-Coffee-Lounge-61561963284677/",
      "https://www.instagram.com/espressoyourselfiecoffeelounge/",
    ],
    relatedPages: [
      { label: "Restaurants", href: "/hot-springs-ar-restaurants" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A downtown coffee lounge with a colorful, creative feel and a name that fits the photo-friendly side of Hot Springs.",
    localAngle:
      "A local-mentioned coffee stop that pairs well with downtown wandering, shopping, and other creative stops nearby.",
    goodFor: ["coffee", "downtown", "photo-friendly stops", "casual hangout"],
    services: ["coffee", "lounge", "drinks"],
    reviewNote:
      "Visit Hot Springs verifies the 801 Central Ave Suite 33 address and coffee lounge description.",
    imageAvailable: true,
    image: "/images/local-spots/espresso-yourselfie.jpg",
    imageAlt: "Espresso Yourselfie Coffee Lounge in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "catch-my-eye-magic",
    name: "Catch My Eye Magic",
    groupSlugs: ["other-local-favorites", "family-friendly"],
    categories: ["Arts & Creative", "Downtown"],
    area: "Downtown / Central Avenue",
    address: "801 Central Avenue, Suite 33, Hot Springs, AR 71901",
    website: "https://www.catchmyeyehenna.com/",
    facebook: "https://www.facebook.com/catchmyeyemagic/",
    instagram: "https://www.instagram.com/catchmyeyehenna/",
    sourceUrls: [
      "https://www.catchmyeyehenna.com/",
      "https://catchmyeyemagic.com/",
      "https://www.facebook.com/catchmyeyemagic/",
      "https://www.catchmyeyehenna.com/info",
    ],
    relatedPages: [
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
      { label: "Family-Friendly Hot Springs", href: "/hot-springs-family-friendly" },
    ],
    description:
      "A downtown creative space offering natural henna body art, readings, Reiki, artwork, crystals, and creative experiences.",
    localAngle:
      "This fits the local-hidden-spots idea because it is more personal and artsy than a normal tourist stop.",
    goodFor: ["henna", "art", "creative stop", "downtown wandering", "unique experiences"],
    services: ["henna", "readings", "Reiki", "art", "crystals", "workshops"],
    reviewNote:
      "Official site verifies 801 Central Ave Suite 33 and the natural henna/art/Reiki/readings focus.",
    imageAvailable: true,
    image: "/images/local-spots/catch-my-eye-magic.jpg",
    imageAlt: "Catch My Eye Magic henna and art in Hot Springs",
    verificationStatus: "verified",
  },
  {
    id: "wednesday-night-poetry",
    name: "Wednesday Night Poetry",
    groupSlugs: ["other-local-favorites", "ouachita-avenue"],
    categories: ["Arts & Creative", "Community", "Downtown"],
    area: "Downtown / Central Avenue",
    address: "Kollective Coffee + Tea, 110 Central Ave, Hot Springs, AR",
    facebook: "https://www.facebook.com/WednesdayNightPoetry/",
    sourceUrls: [
      "https://www.hotsprings.org/events/wednesday-night-poetry/",
      "https://hotspringsarts.org/poetry/",
      "https://www.kollectivecoffeetea.com/copy-of-our-shop",
      "https://encyclopediaofarkansas.net/entries/wednesday-night-poetry-19349/",
    ],
    relatedPages: [
      { label: "Events", href: "/events" },
      { label: "This Weekend", href: "/this-weekend" },
      { label: "Things To Do", href: "/things-to-do-in-hot-springs-ar" },
    ],
    description:
      "A long-running weekly poetry open mic hosted at Kollective Coffee + Tea in downtown Hot Springs.",
    localAngle:
      "One of those community staples that makes Hot Springs feel creative and lived-in instead of just touristy.",
    goodFor: ["poetry", "open mic", "arts", "nightlife", "community events"],
    services: ["open mic", "featured poets", "weekly arts event"],
    reviewNote:
      "Tourism, arts, and Arkansas Encyclopedia sources verify it as a long-running weekly poetry event.",
    imageAvailable: false,
    image: null,
    verificationStatus: "verified",
  },
  {
    id: "historic-homes-architecture",
    name: "Historic Homes & Architecture",
    groupSlugs: ["other-local-favorites"],
    categories: ["History", "Downtown"],
    area: "Historic Hot Springs neighborhoods",
    sourceUrls: [
      "https://hotspringssd.gov/community/history/historicpreservation.php",
      "https://www.hotspringsar.gov/1751/Historic-District-Surveys",
      "https://whitestonearkansas.com/blog/architectural-landmarks-in-hot-springs-arkansas",
    ],
    relatedPages: [
      { label: "History", href: "/history" },
      { label: "Bathhouse Row", href: "/bathhouse-row" },
    ],
    description:
      "Historic homes, districts, and architecture around Hot Springs for visitors who like old buildings, local history, and residential character beyond the main tourist strip.",
    localAngle:
      "A local mentioned historic register homes and architecture, which could eventually become its own driving/walking guide.",
    goodFor: ["architecture", "history", "photo spots", "slow drives", "walking areas"],
    services: ["historic districts", "architecture", "self-guided sightseeing"],
    reviewNote:
      "This should be treated as an editorial guide topic, not a single business listing.",
    imageAvailable: false,
    image: null,
    verificationStatus: "partially-verified",
    needsFollowUp:
      "Pick exact streets/districts and confirm visitor-friendly viewing routes before publishing detailed directions.",
  },
];

export function getLocalSpotsByGroup(groupSlug: LocalSpotGroupSlug) {
  return localSpots.filter((spot) => spot.groupSlugs.includes(groupSlug));
}

export function getLocalSpotById(id: string) {
  return localSpots.find((spot) => spot.id === id);
}

export const familyFriendlySpots = getLocalSpotsByGroup("family-friendly");
export const ouachitaAvenueSpots = getLocalSpotsByGroup("ouachita-avenue");
export const bathhouseRowLocalFinds = getLocalSpotsByGroup(
  "bathhouse-row-local-finds"
);
export const otherLocalFavorites = getLocalSpotsByGroup("other-local-favorites");