export type Business = {
  name: string;
  category:
    | "Attraction"
    | "Restaurant"
    | "Hotel"
    | "Cabins & Lodging"
    | "Spa & Bathhouse"
    | "Local Business"
    | "Shopping"
    | "Outdoor Recreation";

  type: string;
  description: string;
  image: string;
  phone?: string;
  address?: string;
  website?: string;
  directions?: string;
  href?: string;
  featured?: boolean;
};

export const businesses: Business[] = [
  /* =======================
     FEATURED ATTRACTIONS
  ======================= */

  {
    name: "Hot Springs National Park",
    category: "Attraction",
    type: "National Park • Thermal Springs • Hiking • History",
    description:
      "The heart of Hot Springs tourism, with historic bathhouses, thermal spring water, mountain trails, scenic overlooks, and one of the most unique national park experiences in the country.",
    image: "/images/businesses/hot-springs-national-park.webp",
    address: "Hot Springs, AR 71901",
    website: "https://www.nps.gov/hosp/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hot+Springs+National+Park+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
    featured: true,
  },
  {
    name: "Bathhouse Row",
    category: "Attraction",
    type: "Historic District • Bathhouses • Downtown Hot Springs",
    description:
      "One of the most recognizable areas in Hot Springs, Bathhouse Row is known for historic bathhouses, thermal water, downtown walking, local shops, museums, and classic Hot Springs scenery.",
    image: "/images/businesses/bathhouse-row.webp",
    address: "Central Ave, Hot Springs, AR 71901",
    website: "https://www.nps.gov/hosp/planyourvisit/bathhouse-row.htm",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Bathhouse+Row+Hot+Springs+AR",
    href: "/explore",
    featured: true,
  },
  {
    name: "Oaklawn Racing Casino Resort",
    category: "Attraction",
    type: "Horse Racing • Casino • Resort • Entertainment",
    description:
      "A major Hot Springs destination for horse racing, casino gaming, dining, events, and resort stays. Oaklawn is one of the city’s biggest visitor draws.",
    image: "/images/businesses/oaklawn.webp",
    phone: "501-623-4411",
    address: "2705 Central Ave, Hot Springs, AR 71901",
    website: "https://oaklawn.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Oaklawn+Racing+Casino+Resort+2705+Central+Ave+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
    featured: true,
  },
  {
    name: "Garvan Woodland Gardens",
    category: "Attraction",
    type: "Botanical Garden • Lake Hamilton • Outdoor Attraction",
    description:
      "A beautiful botanical garden near Lake Hamilton with walking paths, seasonal displays, architectural features, photo spots, and the well-known Anthony Chapel.",
    image: "/images/businesses/garvan-woodland-gardens.jpg",
    phone: "501-262-9300",
    address: "550 Arkridge Rd, Hot Springs, AR 71913",
    website: "https://www.garvangardens.org/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Garvan+Woodland+Gardens+550+Arkridge+Rd+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
    featured: true,
  },

  /* =======================
     SPAS & BATHHOUSES
  ======================= */

  {
    name: "Quapaw Baths & Spa",
    category: "Spa & Bathhouse",
    type: "Thermal Bathhouse • Spa • Bathhouse Row",
    description:
      "A working bathhouse on Bathhouse Row offering thermal pools, spa services, massages, and a classic Hot Springs bathhouse experience.",
    image: "/images/businesses/quapaw-baths.jpg",
    phone: "501-609-9822",
    address: "413 Central Ave, Hot Springs, AR 71901",
    website: "https://www.quapawbaths.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Quapaw+Baths+and+Spa+413+Central+Ave+Hot+Springs+AR",
    featured: true,
  },
  {
    name: "Buckstaff Bathhouse",
    category: "Spa & Bathhouse",
    type: "Historic Bathhouse • Thermal Baths",
    description:
      "A historic operating bathhouse offering traditional thermal bathing services in the heart of Bathhouse Row.",
    image: "/images/businesses/buckstaff-bathhouse.jpg",
    phone: "501-623-2308",
    address: "509 Central Ave, Hot Springs, AR 71901",
    website: "https://www.buckstaffbaths.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Buckstaff+Bathhouse+509+Central+Ave+Hot+Springs+AR",
  },
  {
    name: "Fordyce Bathhouse Visitor Center",
    category: "Attraction",
    type: "Museum • Visitor Center • Bathhouse Row",
    description:
      "A restored historic bathhouse operated as the Hot Springs National Park visitor center and museum, giving visitors a look at the city’s bathhouse history.",
    image: "/images/businesses/fordyce-bathhouse.jpg",
    address: "369 Central Ave, Hot Springs, AR 71901",
    website: "https://www.nps.gov/hosp/planyourvisit/fordyce.htm",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Fordyce+Bathhouse+Hot+Springs+AR",
  },

  /* =======================
     RESTAURANTS
  ======================= */

  {
    name: "The Pancake Shop",
    category: "Restaurant",
    type: "Breakfast • Downtown • Local Favorite",
    description:
      "A longtime downtown breakfast favorite known for classic breakfast plates and a central location near Bathhouse Row.",
    image: "/images/businesses/the-pancake-shop.jpeg",
    phone: "501-624-5720",
    address: "216 Central Ave, Hot Springs, AR 71901",
    website: "https://www.pancakeshop.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Pancake+Shop+216+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
    featured: true,
  },
  {
    name: "Ohio Club",
    category: "Restaurant",
    type: "Historic Bar • Restaurant • Downtown",
    description:
      "A historic downtown restaurant and bar with live music, burgers, drinks, and a long-running connection to Hot Springs history.",
    image: "/images/businesses/ohio-club.webp",
    phone: "501-627-0702",
    address: "336 Central Ave, Hot Springs, AR 71901",
    website: "https://theohioclub.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Ohio+Club+336+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
    featured: true,
  },
  {
    name: "Superior Bathhouse Brewery",
    category: "Restaurant",
    type: "Brewery • Restaurant • Bathhouse Row",
    description:
      "A brewery and restaurant inside a historic bathhouse, known for craft beer brewed with Hot Springs thermal water and a unique downtown setting.",
    image: "/images/businesses/superior-bathhouse-brewery.jpg",
    phone: "501-624-2337",
    address: "329 Central Ave, Hot Springs, AR 71901",
    website: "https://www.superiorbathhouse.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Superior+Bathhouse+Brewery+329+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
    featured: true,
  },
  {
    name: "Fisherman's Wharf",
    category: "Restaurant",
    type: "Lakefront Dining • Seafood • Steakhouse",
    description:
      "A well-known Lake Hamilton restaurant with seafood, steaks, lake views, and a strong visitor-friendly dining setup.",
    image: "/images/businesses/fishermans-wharf.jpg",
    phone: "501-525-7437",
    address: "5101 Central Ave, Hot Springs, AR 71913",
    website: "https://www.fishermanswharfhs.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Fishermans+Wharf+5101+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
    featured: true,
  },
  {
    name: "Rolando's Restaurante",
    category: "Restaurant",
    type: "Latin Food • Downtown Dining",
    description:
      "A popular downtown restaurant serving Latin-inspired food in a lively historic setting near Bathhouse Row.",
    image: "/images/hero/rolandos.webp",
    phone: "501-318-6054",
    address: "210 Central Ave, Hot Springs, AR 71901",
    website: "https://rolandosrestaurante.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Rolandos+Restaurante+210+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "McClard's Bar-B-Q",
    category: "Restaurant",
    type: "Barbecue • Local Classic",
    description:
      "A Hot Springs barbecue institution known for classic Arkansas barbecue and a long local history.",
    image: "/images/businesses/mcclards-bbq.webp",
    phone: "501-624-9665",
    address: "505 Albert Pike Rd, Hot Springs, AR 71913",
    website: "https://www.mcclards.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=McClards+Bar-B-Q+505+Albert+Pike+Rd+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Deluca's Pizza",
    category: "Restaurant",
    type: "Pizza • Italian • Local Favorite",
    description:
      "A highly known Hot Springs pizza spot with New York-style pizza, Italian dishes, and a strong following among locals and visitors.",
    image: "/images/businesses/delucas-pizza.jpg",
    phone: "501-609-9002",
    address: "407 Park Ave, Hot Springs, AR 71901",
    website: "https://www.delucaspizzeria.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Delucas+Pizza+407+Park+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Luna Bella",
    category: "Restaurant",
    type: "Italian • Dinner • Upscale Casual",
    description:
      "A dinner restaurant known for Italian food, seafood, steaks, and a more polished dining option in Hot Springs.",
    image: "/images/businesses/luna-bella.jpg",
    phone: "501-520-5862",
    address: "104 Grand Isle Dr, Hot Springs, AR 71913",
    website: "https://www.lunabellahs.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Luna+Bella+104+Grand+Isle+Dr+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Cafe 1217",
    category: "Restaurant",
    type: "Cafe • Lunch • Local Food",
    description:
      "A local cafe and lunch spot serving fresh plates, desserts, and casual food for visitors looking beyond chain restaurants.",
    image: "/images/businesses/cafe-1217.jpg",
    phone: "501-318-1094",
    address: "1217 Malvern Ave, Hot Springs, AR 71901",
    website: "https://www.cafe1217.net/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Cafe+1217+1217+Malvern+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },

  /* =======================
     HOTELS & LODGING
  ======================= */

  {
    name: "The Waters Hot Springs",
    category: "Hotel",
    type: "Boutique Hotel • Downtown • Bathhouse Row",
    description:
      "A boutique hotel in downtown Hot Springs near Bathhouse Row, restaurants, shops, and Hot Springs National Park.",
    image: "/images/businesses/the-waters-hotel.jpg",
    phone: "501-321-0001",
    address: "340 Central Ave, Hot Springs, AR 71901",
    website: "https://www.hilton.com/en/hotels/hotsdup-the-waters-hot-springs/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Waters+Hot+Springs+340+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-hotels",
    featured: true,
  },
  {
    name: "The Hotel Hot Springs",
    category: "Hotel",
    type: "Hotel • Convention Center • Downtown",
    description:
      "A downtown hotel connected to the convention center and close to Bathhouse Row, restaurants, events, and central Hot Springs attractions.",
    image: "/images/businesses/the-hotel-hot-springs.webp",
    phone: "501-623-6600",
    address: "305 Malvern Ave, Hot Springs, AR 71901",
    website: "https://www.thehotelhotsprings.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Hotel+Hot+Springs+305+Malvern+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-hotels",
    featured: true,
  },
  {
    name: "Arlington Resort Hotel & Spa",
    category: "Hotel",
    type: "Historic Hotel • Spa • Downtown",
    description:
      "One of Hot Springs’ most iconic historic hotels, located downtown near Bathhouse Row and Hot Springs National Park.",
    image: "/images/businesses/arlington-hotel.webp",
    phone: "501-623-7771",
    address: "239 Central Ave, Hot Springs, AR 71901",
    website: "https://www.arlingtonhotel.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Arlington+Resort+Hotel+239+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-hotels",
    featured: true,
  },
  {
    name: "Lookout Point Lakeside Inn",
    category: "Hotel",
    type: "Lakeside Inn • Romantic Stay • Lake Hamilton",
    description:
      "A lakeside inn on Lake Hamilton known for peaceful views, romantic stays, gardens, and a quieter lodging experience.",
    image: "/images/businesses/lookout-point-lakeside-inn.webp",
    phone: "501-525-6155",
    address: "104 Lookout Cir, Hot Springs, AR 71913",
    website: "https://lookoutpointinn.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Lookout+Point+Lakeside+Inn+104+Lookout+Cir+Hot+Springs+AR",
    href: "/hot-springs-ar-hotels",
  },
  {
    name: "The Reserve at Hot Springs",
    category: "Hotel",
    type: "Luxury Inn • Boutique Stay",
    description:
      "A luxury boutique inn with an upscale stay experience close to downtown Hot Springs and local attractions.",
    image: "/images/businesses/the-reserve-hot-springs.jpg",
    phone: "501-623-7771",
    address: "2330 Central Ave, Hot Springs, AR 71901",
    website: "https://thereserveathotsprings.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Reserve+at+Hot+Springs+2330+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-hotels",
  },

  /* =======================
     CABINS / RESORTS
  ======================= */

  {
    name: "In The Trees",
    category: "Cabins & Lodging",
    type: "Treehouse Resort • Cabins • Romantic Getaway",
    description:
      "A secluded treehouse and cabin-style resort near Hot Springs with forest views, private amenities, and a high-end nature getaway feel.",
    image: "/images/businesses/in-the-trees.jpg",
    website: "https://inthetrees.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=In+The+Trees+Hot+Springs+AR",
    href: "/hot-springs-ar-cabins",
    featured: true,
  },
  {
    name: "Edgewater Resort",
    category: "Cabins & Lodging",
    type: "Lake Hamilton Cottages • Waterfront Stay",
    description:
      "A Lake Hamilton resort with waterfront cottages and a peaceful lakeside setting for visitors wanting a quiet Hot Springs stay.",
    image: "/images/businesses/edgewater-resort.avif",
    phone: "501-525-0292",
    address: "200 Edgewater Cir, Hot Springs, AR 71913",
    website: "https://www.ewresort.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Edgewater+Resort+200+Edgewater+Cir+Hot+Springs+AR",
    href: "/hot-springs-ar-cabins",
    featured: true,
  },
  {
    name: "Catherine's Landing",
    category: "Cabins & Lodging",
    type: "RV Resort • Cottages • Lake Catherine",
    description:
      "A popular outdoor resort near Lake Catherine with RV sites, cottages, outdoor recreation, and family-friendly lodging near Hot Springs.",
    image: "/images/businesses/catherines-landing.jpg",
    phone: "501-262-2550",
    address: "1700 Shady Grove Rd, Hot Springs, AR 71901",
    website: "https://www.rvcoutdoors.com/catherines-landing/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Catherines+Landing+1700+Shady+Grove+Rd+Hot+Springs+AR",
    href: "/hot-springs-ar-cabins",
    featured: true,
  },

  /* =======================
     OUTDOOR / FAMILY ATTRACTIONS
  ======================= */

  {
    name: "Magic Springs Theme and Water Park",
    category: "Attraction",
    type: "Theme Park • Water Park • Family Attraction",
    description:
      "A major family attraction in Hot Springs with rides, water park fun, seasonal events, and entertainment.",
    image: "/images/businesses/magic-springs.jpg",
    phone: "501-624-0100",
    address: "1701 E Grand Ave, Hot Springs, AR 71901",
    website: "https://www.magicsprings.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Magic+Springs+1701+E+Grand+Ave+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    name: "Mid-America Science Museum",
    category: "Attraction",
    type: "Science Museum • Family-Friendly",
    description:
      "A hands-on science museum with exhibits, interactive learning, and family-friendly indoor activities near Hot Springs.",
    image: "/images/businesses/mid-america-science-museum.jpg",
    phone: "501-767-3461",
    address: "500 Mid America Blvd, Hot Springs, AR 71913",
    website: "https://midamericamuseum.org/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mid-America+Science+Museum+500+Mid+America+Blvd+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    name: "Adventureworks Hot Springs",
    category: "Outdoor Recreation",
    type: "Zipline • Outdoor Adventure",
    description:
      "An outdoor adventure stop near Hot Springs with zipline experiences and activities for visitors looking for something active.",
    image: "/images/businesses/adventureworks.jpg",
    phone: "501-262-9182",
    address: "1700 Shady Grove Rd, Hot Springs, AR 71901",
    website: "https://adventureworks.com/hot-springs/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Adventureworks+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    name: "Hot Springs Mountain Tower",
    category: "Attraction",
    type: "Scenic Overlook • Mountain Views",
    description:
      "A scenic tower offering wide views over Hot Springs, the Ouachita Mountains, and the surrounding national park area.",
    image: "/images/businesses/hot-springs-mountain-tower.jpg",
    phone: "501-623-6035",
    address: "401 Hot Springs Mountain Dr, Hot Springs, AR 71901",
    website: "https://hotspringstower.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hot+Springs+Mountain+Tower+401+Hot+Springs+Mountain+Dr+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
  },

  /* =======================
     SHOPPING / LOCAL
  ======================= */

  {
    name: "Morrison's Fried Pies",
    category: "Local Business",
    type: "Fried Pies • Local Food Stop",
    description:
      "A popular Hot Springs food stop known for fried pies, road-trip snacks, and a local Arkansas flavor visitors often remember.",
    image: "/images/businesses/morrisons-fried-pies.jpg",
    address: "Hot Springs, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Morrisons+Fried+Pies+Hot+Springs+AR",
    href: "/local-businesses",
  },
  {
    name: "Kollective Coffee + Tea",
    category: "Restaurant",
    type: "Coffee Shop • Breakfast • Downtown",
    description:
      "A downtown coffee and tea spot with breakfast, lunch, baked goods, and a visitor-friendly atmosphere near Central Avenue.",
    image: "/images/businesses/kollective-coffee.jpg",
    phone: "501-701-4005",
    address: "110 Central Ave, Hot Springs, AR 71901",
    website: "https://kollectivecoffee.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Kollective+Coffee+Tea+110+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
];