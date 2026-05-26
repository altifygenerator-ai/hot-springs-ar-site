export type ShoppingCategory = "antique" | "thrift" | "flea";

export type ShoppingPlace = {
  name: string;
  category: ShoppingCategory;
  label: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  image?: string;
  featured?: boolean;
  hubFeature?: boolean;
  description: string;
  bestFor: string[];
  note?: string;
};

export const shoppingCategories = [
  {
    title: "Antique Stores",
    href: "/hot-springs-antique-stores",
    eyebrow: "Old pieces, real character",
    description:
      "For visitors who like estate jewelry, vintage decor, old furniture, collectibles, period lighting, books, records, and the kind of pieces you usually have to slow down and look for.",
  },
  {
    title: "Thrift Stores",
    href: "/hot-springs-thrift-stores",
    eyebrow: "Resale, nonprofit shops & practical finds",
    description:
      "For bargain hunters, secondhand shoppers, donation-based stores, clothing, household goods, furniture, and local resale shops where the money often supports a community cause.",
  },
  {
    title: "Flea Markets",
    href: "/hot-springs-flea-markets",
    eyebrow: "Booths, vendors & weekend wandering",
    description:
      "For vendor malls, indoor flea markets, antique booths, collectibles, home decor, handmade goods, odd finds, and places where the fun is walking every aisle.",
  },
];

export const shoppingPlaces: ShoppingPlace[] = [
  {
    name: "Historic District Antiques",
    category: "antique",
    label: "Downtown antique store",
    address: "514 Central Ave, Hot Springs, AR",
    phone: "501-624-3370",
    email: "sue@antiquesar.com",
    image: "/images/shopping/historic-district-antiques.jpg",
    featured: true,
    hubFeature: true,
    description:
      "A strong downtown antique stop across from Bathhouse Row, with vintage and estate jewelry, period lighting, crystal chandeliers, sterling silver, clocks, and buy-sell-trade antiques. It fits the classic Hot Springs visitor route because it is close to the historic core instead of being tucked far outside town.",
    bestFor: [
      "Downtown browsing",
      "Estate jewelry",
      "Period lighting",
      "Visitors already walking Bathhouse Row",
    ],
  },
  {
    name: "Iron Crow Antiques",
    category: "antique",
    label: "Antiques and old finds",
    address: "241 Hobson Ave, Hot Springs, AR",
    phone: "501-762-3306",
    description:
      "A Hobson Avenue antique stop with the kind of old pieces, rescued finds, and character-heavy items that make antique shopping feel less polished and more personal.",
    bestFor: ["Old finds", "Character pieces", "Antique hunting"],
  },
  {
    name: "Mariposa: Vintage Decor & Design",
    category: "antique",
    label: "Curated vintage decor",
    phone: "501-276-0751",
    description:
      "A curated vintage and decor shop connected with vintage apparel, costume jewelry, mid-century style, boho pieces, local artists, and Arkansas crystals. The address needs to be checked before publishing because different sources show different locations.",
    bestFor: ["Curated vintage", "Decor", "MCM style", "Local art"],
    note: "Verify current address before publishing or making a special trip.",
  },
  {
    name: "The Retro Fit",
    category: "antique",
    label: "Vintage clothing and retro finds",
    phone: "501-545-0044",
    description:
      "More of a vintage clothing and retro lifestyle stop than a traditional antique store, with period clothing, decor, music, books, and style inspiration from past decades.",
    bestFor: ["Vintage clothing", "Retro style", "Records and books"],
    note: "Verify current address before publishing because sources conflict.",
  },
  {
    name: "Casa Bella",
    category: "antique",
    label: "Upscale consignment and decor",
    address: "325 Broadway, Hot Springs, AR",
    phone: "501-624-2272",
    email: "consigncasabella@gmail.com",
    website: "https://consigncasabella.com",
    description:
      "A more polished consignment and home decor stop in a historic building, with furniture, home decor, handbags, jewelry, gifts, and curated pieces. It is not a bargain-bin thrift shop, but it belongs in the larger vintage and resale conversation.",
    bestFor: ["Furniture", "Home decor", "Upscale consignment", "Gifts"],
  },
  {
    name: "Utopia Antiques & Collectibles",
    category: "antique",
    label: "Antiques and collectibles",
    address: "801 Hobson Ave, Hot Springs, AR",
    phone: "501-318-1192",
    description:
      "A listed antiques and collectibles shop on Hobson Avenue. This one is worth keeping in the guide, but it should be verified before it gets featured heavily.",
    bestFor: ["Collectibles", "Antiques", "Hobson Avenue browsing"],
    note: "Verify current status before publishing.",
  },
  {
    name: "Habitat ReStore Hot Springs",
    category: "thrift",
    label: "Home goods and nonprofit resale",
    address: "350 Malvern Ave, Hot Springs, AR",
    phone: "501-321-4241",
    image: "/images/shopping/habitat-restore-hot-springs.jpg",
    featured: true,
    hubFeature: true,
    description:
      "A practical resale stop for people looking for furniture, home goods, building materials, household items, and secondhand finds while supporting Habitat’s local work. It is one of the stronger thrift/resale anchors for the Hot Springs guide.",
    bestFor: ["Furniture", "Home goods", "DIY finds", "Shopping for a cause"],
  },
  {
    name: "Jackson House Thrift Store",
    category: "thrift",
    label: "Community thrift store",
    address: "212 Jefferson St, Hot Springs, AR",
    phone: "501-623-6641",
    description:
      "A local thrift store tied to community support, useful for visitors and locals looking for secondhand goods while supporting a local organization.",
    bestFor: ["Community resale", "Household finds", "Local thrift shopping"],
  },
  {
    name: "Potter’s Clay Thrift Store",
    category: "thrift",
    label: "Mission-focused thrift store",
    phone: "501-620-4405",
    description:
      "A ministry-connected thrift store often listed around Malvern Avenue. It belongs on the thrift guide, but the exact address should be checked before publishing because sources show conflicting information.",
    bestFor: ["Mission-based shopping", "Secondhand goods", "Local thrift"],
    note: "Verify current address and hours before publishing.",
  },
  {
    name: "Goodwill Industries Thrift Store",
    category: "thrift",
    label: "National thrift store",
    address: "631 E Grand Ave, Hot Springs, AR",
    phone: "501-321-0275",
    description:
      "A familiar thrift option for clothing, household basics, books, and everyday secondhand shopping. Some sources also show another Hot Springs location, so current locations should be confirmed before the final page goes live.",
    bestFor: ["Clothing", "Household basics", "Everyday thrift finds"],
    note: "Verify current Hot Springs locations before publishing.",
  },
  {
    name: "The Salvation Army Thrift Store",
    category: "thrift",
    label: "Donation-based thrift store",
    address: "109 Crescent St, Hot Springs, AR",
    phone: "501-623-1641",
    description:
      "A donation-based thrift store option near central Hot Springs. It fits the practical side of the guide for visitors and locals looking for simple secondhand goods.",
    bestFor: ["Budget finds", "Donation-based resale", "Household goods"],
  },
  {
    name: "Bargain Box at First Presbyterian Church",
    category: "thrift",
    label: "Church thrift shop",
    address: "213 Whittington Ave, Hot Springs, AR",
    phone: "501-624-5646",
    description:
      "A church-connected thrift shop on Whittington Avenue. This is the kind of smaller local place that can make a thrift guide feel more useful than a basic chain-store list.",
    bestFor: ["Local thrift", "Church resale", "Small-shop browsing"],
  },
  {
    name: "Stop Animal Cruelty Thrift Shop",
    category: "thrift",
    label: "Thrift shop for a cause",
    address: "123 Albert Pike, Hot Springs, AR",
    phone: "501-276-7570",
    description:
      "A resale stop connected to animal welfare, making it a good fit for shoppers who like the idea of finding secondhand items while supporting a cause.",
    bestFor: ["Shopping for a cause", "Secondhand finds", "Animal lovers"],
  },
  {
    name: "Guardian Angels Cat Rescue Thrift",
    category: "thrift",
    label: "Cat rescue resale",
    address: "1540 Malvern Ave Suite C, Hot Springs, AR",
    phone: "501-623-3484",
    description:
      "A thrift and resale option connected with Guardian Angels Cat Rescue. It is a good addition to the guide because cause-based thrift stores often matter to both locals and visitors.",
    bestFor: ["Cat rescue support", "Cause-based thrift", "Local resale"],
  },
  {
    name: "Abilities Unlimited Thrift Store",
    category: "thrift",
    label: "Local thrift favorite",
    address: "1819 Albert Pike Rd, Hot Springs, AR",
    phone: "501-624-5757",
    description:
      "A long-running thrift option on Albert Pike Road that shows up in local conversations as a steady, familiar stop for secondhand shopping.",
    bestFor: ["Local thrift", "Clothing", "Household finds"],
  },
  {
    name: "Humane Society Thrift Shop",
    category: "thrift",
    label: "Animal-support thrift shop",
    address: "1819 Albert Pike Rd, Hot Springs, AR",
    phone: "501-321-9604",
    description:
      "A thrift shop connected with animal welfare, useful for shoppers who want secondhand finds and like supporting rescue-related causes.",
    bestFor: ["Shopping for a cause", "Thrift finds", "Animal welfare support"],
  },
  {
    name: "Central Avenue Marketplace",
    category: "flea",
    label: "Large antique and vendor marketplace",
    address: "4330 Central Ave, Hot Springs, AR",
    phone: "501-623-4484",
    website: "https://www.centralavenuefleamarket.com",
    image: "/images/shopping/central-avenue-marketplace.jpg",
    featured: true,
    hubFeature: true,
    description:
      "A large indoor marketplace with antiques, furniture, vintage pieces, memorabilia, collectibles, and booth-style shopping. This is one of the clearest fits for visitors who want a classic wander-the-aisles Hot Springs shopping stop.",
    bestFor: ["Vendor booths", "Antiques", "Furniture", "Collectibles"],
  },
  {
    name: "The Hot Springs Flea Market I & II",
    category: "flea",
    label: "80+ vendor flea market",
    address: "3684 Malvern Ave, Hot Springs, AR",
    phone: "501-318-8743",
    email: "shophsfm@yahoo.com",
    image: "/images/shopping/hot-springs-flea-market.jpg",
    featured: true,
    description:
      "A classic flea market stop with more than 80 vendors, antiques, collectibles, furniture, home decor, and the kind of mixed inventory that makes flea market shopping unpredictable in a good way.",
    bestFor: ["Vendor booths", "Antiques", "Collectibles", "Home decor"],
  },
  {
    name: "Airport Flea Market and Antiques",
    category: "flea",
    label: "Airport Road flea market",
    address: "108 Airport Rd, Hot Springs, AR",
    phone: "501-547-3783",
    email: "airportfleamarket501@gmail.com",
    website: "https://airportfleamkt.com",
    image: "/images/shopping/airport-flea-market.jpg",
    featured: true,
    description:
      "An indoor flea market and antique stop on Airport Road, with antique furniture, jewelry, collectibles, vendor booths, and a broad mix of resale inventory.",
    bestFor: ["Airport Road shopping", "Antique furniture", "Jewelry", "Collectibles"],
  },
  {
    name: "Fancy Schmancy Vintage Boutique",
    category: "flea",
    label: "Vintage boutique and vendor mall",
    address: "3970 Park Ave, Hot Springs, AR",
    phone: "501-318-9840",
    email: "fancyschmancy3@yahoo.com",
    website: "https://fancyschmancyvb.com",
    image: "/images/shopping/fancy-schmancy.webp",
    featured: true,
    description:
      "A vintage boutique and vendor mall with more than 100 booths, vintage and antique items, handmade goods, gifts, home decor, and seasonal pieces. It brings a softer boutique feel to the flea market side of the guide.",
    bestFor: ["Vintage goods", "Handmade items", "Seasonal decor", "Gifts"],
  },
  {
    name: "Amazing Finds: A 21st Century Bazaar",
    category: "flea",
    label: "Indoor bazaar and vintage finds",
    address: "4332 Central Ave Suite K/L, Hot Springs, AR",
    phone: "501-545-6581",
    description:
      "A vendor-style bazaar with Hot Springs memorabilia, vintage jewelry, home decor, collectibles, antiques, furniture, artwork, and a little bit of everything.",
    bestFor: ["Hot Springs memorabilia", "Vintage jewelry", "Collectibles", "Art"],
  },
  {
    name: "Mable Sophie Berg Flea Market",
    category: "flea",
    label: "Airport Road flea market",
    address: "305 Airport Rd, Hot Springs, AR",
    phone: "501-620-9377",
    description:
      "A clean, inviting flea market with vendors, bargains, and family-friendly browsing. The spelling and phone number vary across sources, so it should be verified before final publishing.",
    bestFor: ["Bargain hunting", "Vendor booths", "Family browsing"],
    note: "Verify current name, phone, and hours before publishing.",
  },
  {
    name: "Sunny Lane Flea Market",
    category: "flea",
    label: "Flea market and collectibles",
    address: "5444 Central Ave, Hot Springs, AR",
    phone: "501-693-9935",
    description:
      "A flea market listing connected with antiques, collectibles, unique items, and organized vendor-style shopping. This is worth including, but it should not be heavily featured until current hours and status are confirmed.",
    bestFor: ["Collectibles", "Unique items", "Flea market browsing"],
    note: "Verify current status and hours before publishing.",
  },
];

export const hubFeaturedPlaces = shoppingPlaces.filter(
  (place) => place.hubFeature
);

export const antiquePlaces = shoppingPlaces.filter(
  (place) => place.category === "antique"
);

export const thriftPlaces = shoppingPlaces.filter(
  (place) => place.category === "thrift"
);

export const fleaPlaces = shoppingPlaces.filter(
  (place) => place.category === "flea"
);