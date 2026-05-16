export type HeroData = {
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

/* =======================
   HOME
======================= */

export const homeHero: HeroData = {
  eyebrow: "HOT SPRINGS, ARKANSAS",

  title: "Explore Hot Springs",

  description:
    "Plan a trip around Bathhouse Row, Hot Springs National Park, Lake Hamilton, restaurants, cabins, hotels, hiking trails, spas, mountain views, and local attractions across Hot Springs, Arkansas.",

  image: "/images/hero/hot-springs-hero.png",

  primaryCta: {
    label: "Things To Do",
    href: "/things-to-do-in-hot-springs-ar",
  },

  secondaryCta: {
    label: "Find Restaurants",
    href: "/hot-springs-ar-restaurants",
  },
};

/* =======================
   EXPLORE
======================= */

export const exploreHero: HeroData = {
  eyebrow: "EXPLORE HOT SPRINGS",

  title: "Discover Hot Springs, Arkansas",

  description:
    "Explore Bathhouse Row, downtown Hot Springs, scenic mountain drives, Lake Hamilton, local shops, hiking trails, historic landmarks, outdoor recreation, and popular attractions across the city.",

  image: "/images/hero/explore-hot-springs.jpg",

  primaryCta: {
    label: "Things To Do",
    href: "/things-to-do-in-hot-springs-ar",
  },

  secondaryCta: {
    label: "Find Places To Stay",
    href: "/hot-springs-ar-hotels",
  },
};

/* =======================
   THINGS TO DO
======================= */

export const thingsToDoHero: HeroData = {
  eyebrow: "THINGS TO DO",

  title: "Things To Do in Hot Springs, Arkansas",

  description:
    "Find hiking trails, bathhouses, mountain views, lake activities, scenic drives, family attractions, spas, shopping, museums, and outdoor recreation around Hot Springs.",

  image: "/images/hero/things-to-do-hot-springs.jpg",

  primaryCta: {
    label: "Explore Hot Springs",
    href: "/explore",
  },

  secondaryCta: {
    label: "Find Restaurants",
    href: "/hot-springs-ar-restaurants",
  },
};

/* =======================
   RESTAURANTS
======================= */

export const restaurantsHero: HeroData = {
  eyebrow: "DINING IN HOT SPRINGS",

  title: "Restaurants in Hot Springs, Arkansas",

  description:
    "Find local restaurants, downtown dining, breakfast spots, barbecue, steakhouses, lakefront food, breweries, Mexican restaurants, cafes, and places to eat around Hot Springs.",

  image: "/images/hero/rolandos.webp",

  primaryCta: {
    label: "Things To Do",
    href: "/things-to-do-in-hot-springs-ar",
  },

  secondaryCta: {
    label: "Find Hotels",
    href: "/hot-springs-ar-hotels",
  },
};

/* =======================
   CABINS
======================= */

export const cabinsHero: HeroData = {
  eyebrow: "CABINS & GETAWAYS",

  title: "Cabins in Hot Springs, Arkansas",

  description:
    "Browse cabins, wooded retreats, vacation rentals, romantic getaways, and quiet stays near Hot Springs, Lake Hamilton, Lake Catherine, and the Ouachita Mountains.",

  image: "/images/hero/hot-springs-cabins.webp",

  primaryCta: {
    label: "Things To Do",
    href: "/things-to-do-in-hot-springs-ar",
  },

  secondaryCta: {
    label: "Find Restaurants",
    href: "/hot-springs-ar-restaurants",
  },
};

/* =======================
   HOTELS
======================= */

export const hotelsHero: HeroData = {
  eyebrow: "PLACES TO STAY",

  title: "Hotels in Hot Springs, Arkansas",

  description:
    "Find hotels near downtown Hot Springs, Bathhouse Row, Oaklawn Racing Casino Resort, Lake Hamilton, Hot Springs National Park, and other popular areas around the city.",

  image: "/images/businesses/arlington-hotel.webp",

  primaryCta: {
    label: "Explore Hot Springs",
    href: "/explore",
  },

  secondaryCta: {
    label: "Things To Do",
    href: "/things-to-do-in-hot-springs-ar",
  },
};

/* =======================
   LOCAL BUSINESSES
======================= */

export const localBusinessesHero: HeroData = {
  eyebrow: "LOCAL BUSINESSES",

  title: "Local Businesses in Hot Springs",

  description:
    "Discover local shops, restaurants, attractions, guides, services, boutiques, outdoor businesses, and visitor-friendly businesses across Hot Springs, Arkansas.",

  image: "/images/hero/hot-springs-local-business.webp",

  primaryCta: {
    label: "Explore Hot Springs",
    href: "/explore",
  },

  secondaryCta: {
    label: "Promote Your Business",
    href: "/contact",
  },
};

/* =======================
   HISTORY
======================= */

export const historyHero: HeroData = {
  eyebrow: "HOT SPRINGS HISTORY",

  title: "History of Hot Springs, Arkansas",

  description:
    "Learn about Bathhouse Row, historic downtown Hot Springs, the natural hot springs, famous visitors, early tourism, gambling history, and the stories that shaped the city.",

  image: "/images/hero/hot-springs-history.jpg",

  primaryCta: {
    label: "Explore Downtown",
    href: "/explore",
  },

  secondaryCta: {
    label: "Things To Do",
    href: "/things-to-do-in-hot-springs-ar",
  },
};

/* =======================
   DEFAULT BUSINESS HERO
======================= */

export const defaultBusinessHero: HeroData = {
  eyebrow: "LOCAL BUSINESS",

  title: "Hot Springs Local Business",

  description:
    "Learn more about this local business in Hot Springs, Arkansas including services, location, and visitor information.",

  image: "/images/general/business-placeholder.jpg",

  primaryCta: {
    label: "Explore Hot Springs",
    href: "/explore",
  },

  secondaryCta: {
    label: "Things To Do",
    href: "/things-to-do-in-hot-springs-ar",
  },
};