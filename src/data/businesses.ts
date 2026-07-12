export type Business = {
  name: string;
  category:
    | "Attraction"
    | "Restaurant"
    | "Hotel"
    | "Cabins & Lodging"
    | "Spa & Bathhouse"
    | "Local Business"
    | "Local Service"
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
    image: "/images/businesses/garven-woodland-gardens.jpg",
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
    name: "Spa City Aesthetics",
    category: "Spa & Bathhouse",
    type: "Aesthetics • Skin Health • Body Sculpting • Wellness",
    description:
      "A modern Hot Springs aesthetics studio offering personalized facial analysis, regenerative skin treatments, body sculpting, lymphatic therapy, hair restoration, and non-invasive skin health services shaped by Amy Jo Stader’s study in South Korea.",
    image: "/images/businesses/spa-city-aesthetics/spa-city-aesthetics-1.png",
    phone: "501-443-3883",
    address: "998 Shady Grove Rd. Suite B, Hot Springs, AR 71901",
    website: "https://spacityaesthetics.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Spa+City+Aesthetics+998+Shady+Grove+Rd+Suite+B+Hot+Springs+AR+71901",
    href: "/spa-city-aesthetics-hot-springs",
    featured: true,
  },
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
    image: "/images/businesses/rolandos.webp",
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
  {
  name: "Simple Nutrition",
  category: "Restaurant",
  type: "Teas • Meal Replacement Shakes • Coffee • Protein Snacks",
  description:
    "A Hot Springs drink and snack stop offering energizing teas with a variety of supplemental add-ins, healthy meal replacement shakes, hot and iced coffee, and other protein snacks. Online ordering and delivery are available, with a partial menu on the Toast Local app.",
  image: "/images/businesses/simple-nutrition.webp",
  phone: "501-463-9349",
  address: "3539 Central Ave Suite G, Hot Springs, AR",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Simple+Nutrition+3539+Central+Ave+Suite+G+Hot+Springs+AR",
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
  {
    name: "Tiffany's Bed and Breakfast",
    category: "Hotel",
    type: "Bed & Breakfast • Quiet Stay • Near Hot Springs & DeGray Lake",
    description:
      "A peaceful bed and breakfast on 60 private acres near Hot Springs and DeGray Lake, offering a quieter hosted stay outside the busier downtown area.",
    image: "/images/businesses/tiffanys-bed-and-breakfast.webp",
    phone: "501-865-6060",
    address: "1632 Hwy 347, Bismarck, AR 71929",
    website: "https://www.tiffanysbedandbreakfast.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Tiffanys+Bed+and+Breakfast+1632+Hwy+347+Bismarck+AR+71929",
    href: "/hot-springs-ar-hotels",
  },
  {
    name: "1890 Williams House Bed & Breakfast",
    category: "Hotel",
    type: "Historic Bed & Breakfast • Downtown Hot Springs",
    description:
      "A historic Hot Springs bed and breakfast on Quapaw Avenue, located close to downtown, Bathhouse Row, restaurants, galleries, spas, and Oaklawn.",
    image: "/images/businesses/1890-williams-house.webp",
    phone: "501-624-4275",
    address: "420 Quapaw Ave, Hot Springs, AR 71901",
    website: "https://1890williamshouse.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=1890+Williams+House+420+Quapaw+Ave+Hot+Springs+AR+71901",
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
  {
    name: "Lone Cedar Cabins",
    category: "Cabins & Lodging",
    type: "Secluded Cabins • Ouachita Foothills • Near DeGray Lake",
    description:
      "A quiet cabin getaway on secluded acreage near DeGray Lake and Hot Springs National Park, with rustic lodging, fireplaces, covered porches, and a peaceful outdoor setting.",
    image: "/images/businesses/lone-cedar-cabins.jpeg",
    phone: "501-865-6782",
    address: "1873 Lone Cedar Cabins Rd, Bismarck, AR 71929",
    website: "https://www.lonecedarcabins.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Lone+Cedar+Cabins+1873+Lone+Cedar+Cabins+Rd+Bismarck+AR+71929",
    href: "/hot-springs-ar-cabins",
  },
  {
    name: "Five Points Lake Hamilton",
    category: "Cabins & Lodging",
    type: "Lake Hamilton Cabins • Wooded Lake Stay",
    description:
      "A Lake Hamilton cabin property on wooded acreage near Hot Springs, with cabins spread across a hillside sloping toward the lake and convenient access to the city.",
    image: "/images/businesses/five-points-lake-hamilton.jpg",
    phone: "501-525-1622",
    address: "155 Five Points Circle, Hot Springs, AR 71913",
    website: "https://fivepointslakehamilton.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Five+Points+Lake+Hamilton+155+Five+Points+Circle+Hot+Springs+AR+71913",
    href: "/lake-hamilton-cabins",
  },
  {
    name: "Hot Springs Camper Rentals",
    category: "Cabins & Lodging",
    type: "Camper Rentals • Delivery & Setup • Family-Friendly",
    description:
      "A Hot Springs camper rental service offering clean, cozy campers with delivery and setup for visitors wanting a camping-style stay without hauling their own RV.",
    image: "/images/businesses/hot-springs-camper-rentals.png",
    phone: "501-226-7560",
    address: "Hot Springs, AR",
    website: "https://hotspringscamperrentals.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hot+Springs+Camper+Rentals+Hot+Springs+AR",
    href: "/hot-springs-ar-cabins",
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
    image: "/images/businesses/magic-springs.webp",
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
    image: "/images/businesses/adventure-works.jpg",
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
    image: "/images/businesses/hot-springs-mountain-tower.webp",
    phone: "501-623-6035",
    address: "401 Hot Springs Mountain Dr, Hot Springs, AR 71901",
    website: "https://hotspringstower.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hot+Springs+Mountain+Tower+401+Hot+Springs+Mountain+Dr+Hot+Springs+AR",
    href: "/articles/hot-springs-mountain-tower-zig-zag-mountains",
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
    image: "/images/businesses/morrisons-fried-pie.jpg",
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
  {
    name: "Safe Harbor Brady Mountain",
    category: "Outdoor Recreation",
    type: "Lake Ouachita • Marina • Outdoor Recreation",
    description:
      "A Lake Ouachita marina and recreation stop near Hot Springs, useful for visitors planning a lake day, boating trip, or time around the Brady Mountain area.",
    image: "/images/businesses/safe-harbor-brady-mountain.jpg",
    address: "Brady Mountain, Royal, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Safe+Harbor+Brady+Mountain+Royal+AR",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    name: "Brady Mountain Grill",
    category: "Restaurant",
    type: "Lake Dining • Grill • Casual Food",
    description:
      "A casual lake-area grill near Brady Mountain and Lake Ouachita, useful for visitors looking for food before or after a day on the water.",
    image: "/images/businesses/brady-mountain-grill.jpg",
    address: "Brady Mountain, Royal, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Brady+Mountain+Grill+Royal+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Sno-A-Lattes",
    category: "Restaurant",
    type: "Coffee • Sno Cones • Drinks • Sweet Treats",
    description:
      "A casual Hot Springs stop for coffee, lattes, sno cones, cold drinks, and easy sweet treats.",
    image: "/images/businesses/sno-a-lattes.jpg",
    address: "Hot Springs, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Sno-A-Lattes+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "421 Beer Garden",
    category: "Restaurant",
    type: "Beer Garden • Patio • Live Music • Pet Friendly",
    description:
      "A relaxed Hot Springs beer garden with food, drinks, games, live music on weekends, and a pet-friendly patio atmosphere.",
    image: "/images/businesses/421-beer-garden.jpg",
    address: "Hot Springs, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=421+Beer+Garden+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Greg's Rise and Dine Cafe",
    category: "Restaurant",
    type: "Breakfast • Lunch • Family Owned Cafe",
    description:
      "A family-owned Hot Springs cafe with an affordable breakfast and lunch menu, good for a simple local meal away from the bigger tourist stops.",
    image: "/images/businesses/gregs-rise-and-dine.jpg",
    address: "Hot Springs, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Gregs+Rise+and+Dine+Cafe+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Pupusas Mi Chalateca",
    category: "Restaurant",
    type: "Salvadoran Food • Pupusas • Casual Dining",
    description:
      "A Salvadoran food stop in Hot Springs known for pupusas and casual Latin American dishes, adding more variety to the local food scene.",
    image: "/images/businesses/pupusas-mi-chalateca.jpg",
    address: "Hot Springs, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Pupusas+Mi+Chalateca+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Via Roma",
    category: "Restaurant",
    type: "Italian • Dinner • Sit-Down Dining",
    description:
      "An Italian restaurant option in Hot Springs for visitors looking for pasta, dinner, and a more classic sit-down meal.",
    image: "/images/businesses/via-roma.jpg",
    address: "Hot Springs, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Via+Roma+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Lost Creek Grill",
    category: "Restaurant",
    type: "American Food • Grill • Casual Dining",
    description:
      "A casual grill-style restaurant around Hot Springs, useful for visitors looking for American food, a relaxed meal, and local dining outside the most obvious tourist stops.",
    image: "/images/businesses/lost-creek-grill.jpg",
    address: "Hot Springs, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Lost+Creek+Grill+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "The Local",
    category: "Restaurant",
    type: "Local Dining • Casual Food",
    description:
      "A local Hot Springs dining option for casual meals and visitor-friendly food once you want to look beyond the most familiar restaurant names.",
    image: "/images/businesses/the-local.jpg",
    address: "Hot Springs, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Local+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
    {
    name: "The Gangster Museum of America",
    category: "Attraction",
    type: "Museum • Hot Springs History • Downtown",
    description:
      "A downtown Hot Springs museum focused on the city’s gangster, gambling, bootlegging, and early 20th-century history, giving visitors a deeper look at one of the most talked-about parts of Hot Springs’ past.",
    image: "/images/businesses/gangster-museum-of-america.png",
    phone: "501-318-1717",
    address: "510 Central Ave, Hot Springs, AR 71901",
    website: "https://thegangstermuseum.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Gangster+Museum+of+America+510+Central+Ave+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    name: "Rocky's Corner",
    category: "Restaurant",
    type: "Pizza • Italian • Across from Oaklawn",
    description:
      "A long-running Hot Springs pizza and Italian food stop across from Oaklawn, known for Chicago-style pizza, casual meals, and a strong local following.",
    image: "/images/businesses/rockys-corner.webp",
    phone: "501-624-0199",
    address: "2600 Central Ave, Hot Springs, AR 71901",
    website: "https://www.rockyscorner.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Rockys+Corner+2600+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Eden at Hotel Hale",
    category: "Restaurant",
    type: "Downtown Dining • Hotel Hale • Bathhouse Row",
    description:
      "A polished downtown restaurant inside Hotel Hale, known for its garden-like dining room, living wall, skylight setting, brunch, dinner, and a unique Bathhouse Row location.",
    image: "/images/businesses/eden-at-hotel-hale.jpg",
    phone: "501-760-9010",
    address: "341 Central Ave, Hot Springs, AR 71901",
    website: "https://www.hotelhale.com/Dining2.html",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Eden+at+Hotel+Hale+341+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "The Rooftop at The Waters Hotel",
    category: "Restaurant",
    type: "Rooftop Bar • Downtown Views • Bathhouse Row",
    description:
      "A rooftop dining and drink spot above The Waters Hotel with views over Bathhouse Row, locally sourced food, drinks, appetizers, and a downtown Hot Springs setting.",
    image: "/images/businesses/the-rooftop-at-the-waters.jpg",
    phone: "501-625-3850",
    address: "340 Central Ave, Hot Springs, AR 71913",
    website: "https://www.hotsprings.org/places/restaurants/the-rooftop/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Rooftop+at+The+Waters+Hotel+340+Central+Ave+Hot+Springs+AR",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "National Park Duck Tours",
    category: "Attraction",
    type: "Duck Tour • Downtown • Lake Hamilton • Family Activity",
    description:
      "A Hot Springs land-and-water duck tour that starts downtown, travels through town, heads toward Lake Hamilton, and gives visitors a fun way to see several parts of Hot Springs in one outing.",
    image: "/images/businesses/national-park-duck-tours.jpg",
    phone: "501-321-2911",
    address: "418 Central Ave, Hot Springs, AR 71901",
    website: "https://rideaduck.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=National+Park+Duck+Tours+418+Central+Ave+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    name: "Cedar Glades Park",
    category: "Outdoor Recreation",
    type: "Park • Trails • Disc Golf • Family-Friendly Outdoors",
    description:
      "A Garland County park with trails, outdoor recreation, disc golf, open space, family-friendly amenities, and access to the Northwoods/Cedar Glades outdoor area.",
    image: "/images/businesses/cedar-glades-park.png",
    phone: "501-627-2826",
    address: "461 Wildcat Rd, Hot Springs, AR 71913",
    website: "https://www.garlandcounty.org/263/Cedar-Glades-Park",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Cedar+Glades+Park+461+Wildcat+Rd+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    name: "Crystal Ridge Distillery",
    category: "Attraction",
    type: "Distillery • Tours • Tastings • Downtown Hot Springs",
    description:
      "A downtown Hot Springs distillery offering spirits, tastings, tours, cocktails, events, and a visitor-friendly stop tied to the city’s moonshine and distilling history.",
    image: "/images/businesses/crystal-ridge-distillery.jpg",
    phone: "501-627-0722",
    address: "455 Broadway St, Hot Springs, AR 71901",
    website: "https://www.crystalridgedistillery.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Crystal+Ridge+Distillery+455+Broadway+St+Hot+Springs+AR",
    href: "/things-to-do-in-hot-springs-ar",
  },
  {
    name: "MT Savvy Styles Boutique",
    category: "Shopping",
    type: "Boutique • Clothing • Local Shopping",
    description:
      "A Hot Springs clothing boutique offering local shopping for visitors and residents looking for women’s fashion, boutique finds, and specialty retail outside the usual big-box stops.",
    image: "/images/businesses/mt-savvy-styles-boutique.jpg",
    phone: "501-445-8469",
    address: "3814 Central Ave Suite E, Hot Springs, AR 71913",
    website: "https://mtsavvystyles.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=MT+Savvy+Styles+Boutique+3814+Central+Ave+Suite+E+Hot+Springs+AR",
    href: "/local-businesses",
  },

  /* =======================
     COMMUNITY-SUGGESTED LOCAL ADDITIONS
  ======================= */

  {
    name: "Rock N Roll Sushi",
    category: "Restaurant",
    type: "Sushi • Hibachi • Central Avenue",
    description:
      "A music-themed sushi and hibachi restaurant on Central Avenue with specialty rolls, Japanese-inspired dishes, and a casual, high-energy dining setup for visitors looking for something fun off the downtown strip.",
    image: "/images/categories/restaurants.png",
    phone: "501-463-9099",
    address: "4328 Central Ave Suite P, Hot Springs, AR 71913",
    website: "https://rocknrollsushi.com/locations/hot-springs-ar/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Rock+N+Roll+Sushi+4328+Central+Ave+Suite+P+Hot+Springs+AR+71913",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Ambrosia at Angel's",
    category: "Restaurant",
    type: "Italian • Pizza • Desserts • Downtown",
    description:
      "A downtown Hot Springs restaurant on Central Avenue serving Italian dishes, pizza, cakes, pies, and full-bar dining close to Bathhouse Row and the historic district.",
    image: "/images/categories/restaurants.png",
    phone: "501-609-9323",
    address: "600 Central Ave, Hot Springs, AR 71901",
    website: "https://www.hotsprings.org/places/restaurants/ambrosia-at-angels/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Ambrosia+at+Angel%27s+600+Central+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "La Bruja's Dulceria & Bakery",
    category: "Restaurant",
    type: "Candy • Snacks • Desserts • Ouachita Avenue",
    description:
      "A family-owned candy, snack, and dessert stop on Ouachita Avenue with sweets and products from around the world, giving visitors an easy local treat stop just off Central Avenue.",
    image: "/images/categories/restaurants.png",
    phone: "501-489-6071",
    address: "246 Ouachita Ave Suite 103, Hot Springs, AR 71901",
    website: "https://www.hotsprings.org/places/restaurants/la-brujas-bakery/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=La+Bruja%27s+Dulceria+and+Bakery+246+Ouachita+Ave+Suite+103+Hot+Springs+AR+71901",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Sunshine Store & Cafe",
    category: "Restaurant",
    type: "Country Store • Cafe • Royal Arkansas",
    description:
      "A country store and cafe in Royal that works well for visitors heading toward Lake Ouachita, Brady Mountain, or the west side of Garland County who want a casual local food stop outside the main Hot Springs strip.",
    image: "/images/categories/restaurants.png",
    phone: "501-767-4614",
    address: "3719 Sunshine Rd, Royal, AR 71968",
    website: "https://www.facebook.com/p/Sunshine-Store-Cafe-100063558011732/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Sunshine+Store+and+Cafe+3719+Sunshine+Rd+Royal+AR+71968",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "The Electric Strawberry",
    category: "Local Business",
    type: "Coffee • Bookstore • Salt Cave • Wellness",
    description:
      "An eclectic Hot Springs stop on West Grand Avenue with coffee, an independent bookstore, salt cave, and alternative wellness offerings, making it a good fit for visitors looking for something more local and offbeat.",
    image: "/images/businesses/electric-strawberry.avif",
    phone: "501-621-4133",
    address: "500 W Grand Ave, Hot Springs, AR 71901",
    website: "https://www.theelectricstrawberry.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Electric+Strawberry+500+W+Grand+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-local-spots",
  },
  {
    name: "Destinations Day Spa",
    category: "Spa & Bathhouse",
    type: "Day Spa • Aveda Salon • Boutique",
    description:
      "A Hot Springs day spa, Aveda salon, and boutique offering spa services, salon care, and a polished relaxation stop for locals and visitors planning a slower wellness-focused day.",
    image: "/images/businesses/destinations.png",
    phone: "501-525-3400",
    address: "250 Cornerstone Blvd, Hot Springs, AR 71913",
    website: "https://hsdestinationsdayspa.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Destinations+Day+Spa+250+Cornerstone+Blvd+Hot+Springs+AR+71913",
    href: "/hot-springs-spas-wellness",
  },
  {
    name: "Inner Peace Massage & Facials",
    category: "Spa & Bathhouse",
    type: "Massage • Facials • Skincare",
    description:
      "A local massage and facial studio in Hot Springs offering relaxation-focused massage, facial, and skincare services for visitors looking to add a quieter wellness stop to their trip.",
    image: "/images/businesses/inner-peace.jpg",
    address: "2208 Airport Rd, Hot Springs, AR 71913",
    website: "https://www.facebook.com/p/Inner-Peace-Massage-Facials-61580142231655/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Inner+Peace+Massage+and+Facials+2208+Airport+Rd+Hot+Springs+AR+71913",
    href: "/hot-springs-spas-wellness",
  },
  {
    name: "Aura Room",
    category: "Spa & Bathhouse",
    type: "Color Analysis • Image Consulting • Beauty",
    description:
      "A Hot Springs color analysis and image consulting studio offering in-person palette sessions, wardrobe guidance, and group color analysis appointments inside FaceTyme Facial Bar.",
    image: "/images/businesses/aura-room.jpg",
    phone: "501-521-4284",
    address: "3810 Central Ave Suite B, Hot Springs, AR 71913",
    website: "https://auraroom.glossgenius.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Aura+Room+3810+Central+Ave+Suite+B+Hot+Springs+AR+71913",
    href: "/hot-springs-spas-wellness",
  },

  /* =======================
     EXPANDED SHOPPING, ATTRACTIONS, OUTDOORS & SERVICES
  ======================= */

  {
    name: "All Things Arkansas",
    category: "Shopping",
    type: "Arkansas Gifts • Souvenirs • Quartz • Downtown",
    description:
      "A downtown shop focused on Arkansas-made gifts, Hot Springs souvenirs, quartz crystals, postcards, keepsakes, and easy take-home finds for visitors walking Central Avenue.",
    image: "/images/businesses/all-things-arkansas.webp",
    phone: "501-359-3593",
    address: "610-C Central Ave, Hot Springs, AR 71901",
    website: "https://allthingsarkansas.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=All+Things+Arkansas+610-C+Central+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-boutiques-shops",
  },
  {
    name: "Bathhouse Soapery & Caldarium",
    category: "Shopping",
    type: "Handmade Soap • Bath Goods • Downtown Gifts",
    description:
      "A Hot Springs soapery and bath goods shop with handmade soaps, soaking salts, body care, fragrances, gifts, and products that fit the city’s bathhouse and spa identity.",
    image: "/images/businesses/bathhouse-soapery.jpg",
    phone: "501-525-7627",
    address: "366 Central Ave, Hot Springs, AR 71901",
    website: "https://bathhousesoap.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Bathhouse+Soapery+and+Caldarium+366+Central+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-boutiques-shops",
  },
  {
    name: "The Savory Pantry",
    category: "Shopping",
    type: "Specialty Food • Gifts • Downtown",
    description:
      "A specialty food and gift shop on Central Avenue with pantry goods, sweets, cocktail items, smoked meats, Arkansas-made gifts, and visitor-friendly take-home food finds.",
    image: "/images/businesses/the-savory-pantry.jpg",
    phone: "501-624-5858",
    address: "214 Central Ave, Hot Springs, AR 71901",
    website: "https://www.savorypantry.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=The+Savory+Pantry+214+Central+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-boutiques-shops",
  },
  {
    name: "Hot Springs Hat Company",
    category: "Shopping",
    type: "Hats • Downtown Retail • Gifts",
    description:
      "A downtown hat shop with western, casual, and statement hats that works well for visitors wanting something practical, fun, and easy to remember from a Hot Springs trip.",
    image: "/images/businesses/hot-springs-hat-co.webp",
    phone: "501-521-3331",
    address: "348 Central Ave, Hot Springs, AR 71901",
    website: "https://www.hatsprings.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hot+Springs+Hat+Company+348+Central+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-boutiques-shops",
  },
  {
    name: "Bricks & Minifigs Hot Springs",
    category: "Shopping",
    type: "LEGO Resale • Family Shopping • Downtown",
    description:
      "A LEGO resale and trade shop where kids, collectors, and families can browse sets, bulk LEGO, custom minifigures, and hands-on finds near downtown.",
    image: "/images/local-spots/bricks-and-minifigs.jpg",
    address: "301 Broadway St, Hot Springs, AR 71901",
    website: "https://bricksandminifigs.com/hotsprings-ar/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Bricks+and+Minifigs+301+Broadway+St+Hot+Springs+AR+71901",
    href: "/hot-springs-boutiques-shops",
  },
  {
    name: "Black Ribbon Books",
    category: "Shopping",
    type: "Independent Bookstore • Arlington Mall Level",
    description:
      "An independent bookstore with new and used books tucked into the mall level below The Arlington, making it an easy-to-miss downtown stop for book lovers and rainy-day browsing.",
    image: "/images/local-spots/black-ribbon-books.webp",
    address: "239 Central Ave, Hot Springs, AR 71901",
    website: "http://www.blackribbonbooks.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Black+Ribbon+Books+239+Central+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-boutiques-shops",
  },
  {
    name: "Static on Ouachita",
    category: "Shopping",
    type: "Vintage • Handmade • Local Art • Ouachita Avenue",
    description:
      "A creative Ouachita Avenue shop with vintage, handmade goods, local art, clothing, music energy, and the kind of local retail stop visitors do not always find on the main strip.",
    image: "/images/businesses/static-on-the-ouachita.jpg",
    address: "246 Ouachita Ave Suite 102, Hot Springs, AR 71901",
    website: "https://staticonouachita.square.site/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Static+on+Ouachita+246+Ouachita+Ave+Suite+102+Hot+Springs+AR+71901",
    href: "/hot-springs-boutiques-shops",
  },
  {
    name: "Golden Feather",
    category: "Shopping",
    type: "Boutique Gifts • Arlington Mall Level",
    description:
      "A boutique and gift-style shop inside The Arlington’s lower shopping level, useful for visitors who want to wander the historic hotel and find smaller local shopping stops.",
    image: "/images/businesses/golden-feather.jpg",
    address: "239 Central Ave, Hot Springs, AR 71901",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Golden+Feather+239+Central+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-boutiques-shops",
  },
  {
    name: "Run Stop",
    category: "Shopping",
    type: "Running Shoes • Outdoor Gear • Downtown",
    description:
      "A specialty running store in downtown Hot Springs for shoes, activewear, and practical gear before walking, hiking, running, or exploring the surrounding trail areas.",
    image: "/images/businesses/run-stop.jpg",
    address: "Hot Springs, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Run+Stop+Hot+Springs+AR",
    href: "/hot-springs-boutiques-shops",
  },
  {
    name: "Podunk Annie's",
    category: "Shopping",
    type: "Western • Boho • Southern Style",
    description:
      "A western, boho, and Southern-style shopping stop that fits Hot Springs visitors looking for clothing, accessories, and small-town personality instead of chain retail.",
    image: "/images/businesses/podunk-annies.jpg",
    address: "Hot Springs, AR",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Podunk+Annie%27s+Hot+Springs+AR",
    href: "/hot-springs-boutiques-shops",
  },

  {
    name: "Arkansas Alligator Farm & Petting Zoo",
    category: "Attraction",
    type: "Historic Attraction • Animals • Family-Friendly",
    description:
      "A long-running Whittington Avenue attraction with alligators, animal exhibits, petting zoo features, and a classic roadside Hot Springs feel that works well for families and curious visitors.",
    image: "/images/local-spots/alligator-farm.webp",
    phone: "501-623-6172",
    address: "847 Whittington Ave, Hot Springs, AR 71901",
    website: "https://alligatorfarmzoo.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Arkansas+Alligator+Farm+847+Whittington+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-attractions",
  },
  {
    name: "Funtrackers Family Fun Park",
    category: "Attraction",
    type: "Mini Golf • Arcade • Laser Tag • Family Fun",
    description:
      "A family fun park with arcade games, mini golf, laser tag, bumper boats, go-kart style attractions, prizes, and an easy activity option for families visiting Hot Springs.",
    image: "/images/businesses/funtrackers.webp",
    phone: "501-767-8140",
    address: "2614 Albert Pike Rd, Hot Springs, AR 71913",
    website: "https://funtrackersfamilypark.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Funtrackers+Family+Fun+Park+2614+Albert+Pike+Rd+Hot+Springs+AR+71913",
    href: "/hot-springs-attractions",
  },
  {
    name: "Tiny Town",
    category: "Attraction",
    type: "Miniature Railroad • Whittington Avenue • Family Stop",
    description:
      "A small, old-school miniature town and railroad attraction on Whittington Avenue that gives families and nostalgia-loving visitors a slower indoor stop close to downtown.",
    image: "/images/businesses/tiny-town.jpg",
    phone: "501-624-4742",
    address: "374 Whittington Ave, Hot Springs, AR 71901",
    website: "https://www.tinytowntrains.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Tiny+Town+374+Whittington+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-attractions",
  },
  {
    name: "Retroverse Museum",
    category: "Attraction",
    type: "Pop Culture Museum • Nostalgia • Family Activity",
    description:
      "A nostalgia-heavy pop culture museum formerly known as The Galaxy Connection, with collectibles, stories, and appointment-style visits for families and fans of retro entertainment.",
    image: "/images/businesses/retroverse.jpg",
    phone: "501-276-4432",
    address: "1668 Shady Grove Rd, Hot Springs, AR 71901",
    website: "https://www.retroversemuseum.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Retroverse+Museum+1668+Shady+Grove+Rd+Hot+Springs+AR+71901",
    href: "/hot-springs-attractions",
  },
  {
    name: "Maxwell Blade Theatre of Magic",
    category: "Attraction",
    type: "Magic Show • Comedy • Downtown Entertainment",
    description:
      "A downtown magic and comedy theater experience for visitors who want an evening show, family-friendly entertainment, or something different after dinner on Central Avenue.",
    image: "/images/businesses/maxwell-blade.jpg",
    phone: "501-623-6200",
    address: "817 Central Ave, Hot Springs, AR 71901",
    website: "https://maxwellblade.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Maxwell+Blade+Theatre+of+Magic+817+Central+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-attractions",
  },
  {
    name: "Go Foto Yourselfie Studio",
    category: "Attraction",
    type: "Selfie Studio • Creative Photos • Downtown",
    description:
      "A creative downtown photo studio with themed setups, props, and backdrops for families, friends, groups, birthdays, and visitors who want fun Hot Springs photos.",
    image: "/images/local-spots/go-foto-yourselfie.jpg",
    phone: "870-279-3058",
    address: "332 Central Ave, Hot Springs, AR 71901",
    website: "https://www.fotoyourselfie.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Go+Foto+Yourselfie+Studio+332+Central+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-attractions",
  },
  {
    name: "Mosaic Madness",
    category: "Attraction",
    type: "Art Studio • Hands-On Activity • Family-Friendly",
    description:
      "A hands-on mosaic and art studio that gives families, creative visitors, and rainy-day groups something slower and more personal to do in Hot Springs.",
    image: "/images/businesses/mosiacmadness.jpg",
    phone: "501-282-2800",
    address: "1125 Malvern Ave, Hot Springs, AR 71901",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mosaic+Madness+1125+Malvern+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-attractions",
  },

  {
    name: "Northwoods Trails",
    category: "Outdoor Recreation",
    type: "Mountain Biking • Hiking • Trail Running",
    description:
      "A major trail system close to downtown with mountain biking, hiking, trail running, flow trails, jump lines, wooded routes, and easy access for visitors who want outdoor time without driving far.",
    image: "/images/local-spots/cedar-glades-park.jpg",
    phone: "501-991-4871",
    address: "300 Pineland Dr, Hot Springs, AR 71901",
    website: "https://www.northwoodstrails.org/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Northwoods+Trails+300+Pineland+Dr+Hot+Springs+AR+71901",
    href: "/hot-springs-outdoor-businesses",
  },
  {
    name: "Hot Springs Bicycle Touring Company",
    category: "Outdoor Recreation",
    type: "Bike Rentals • Guided Tours • Repairs",
    description:
      "A downtown bike rental, repair, and touring company with guided rides that help visitors see more of Hot Springs from the seat of a bike.",
    image: "/images/businesses/bike-touring.jpg",
    phone: "501-276-2175",
    address: "231 Central Ave Suite B, Hot Springs, AR 71901",
    website: "https://www.hotspringsbicycletouringco.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hot+Springs+Bicycle+Touring+Company+231+Central+Ave+Suite+B+Hot+Springs+AR+71901",
    href: "/hot-springs-outdoor-businesses",
  },
  {
    name: "Parkside Cycle",
    category: "Outdoor Recreation",
    type: "Bike Shop • Rentals • Repairs • Trail Gear",
    description:
      "A Whittington Avenue bike shop offering sales, service, rentals, cycling accessories, repairs, and trail support for riders exploring Hot Springs and the Northwoods area.",
    image: "/images/businesses/parkside-cycle.jpg",
    phone: "501-623-6188",
    address: "719 Whittington Ave, Hot Springs, AR 71901",
    website: "https://www.parksidecycle.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Parkside+Cycle+719+Whittington+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-outdoor-businesses",
  },
  {
    name: "Greenway Outfitters",
    category: "Outdoor Recreation",
    type: "E-Bike Rentals • Bike Repair • Greenway Access",
    description:
      "An outdoor rental and bike repair stop next to the Hot Springs Greenway, useful for visitors who want to rent an e-bike, ride the greenway, or get cycling help near downtown.",
    image: "/images/businesses/greenway-outfitters.jpg",
    phone: "501-463-2453",
    address: "300 Valley St, Hot Springs, AR 71901",
    website: "https://greenwayoutfitters.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Greenway+Outfitters+300+Valley+St+Hot+Springs+AR+71901",
    href: "/hot-springs-outdoor-businesses",
  },
  {
    name: "Lake Ouachita State Park",
    category: "Outdoor Recreation",
    type: "State Park • Marina • Hiking • Lake Day",
    description:
      "A nearby state park with lake access, hiking, boat tours, kayak programs, campsites, cabins, marina services, swimming areas, and a quieter outdoor option north of Hot Springs.",
    image: "/images/businesses/safe-harbor-brady-mountain.jpg",
    address: "5451 Mountain Pine Rd, Mountain Pine, AR 71956",
    website: "https://www.arkansasstateparks.com/parks/lake-ouachita-state-park",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Lake+Ouachita+State+Park+5451+Mountain+Pine+Rd+Mountain+Pine+AR+71956",
    href: "/hot-springs-outdoor-businesses",
  },

  {
    name: "Hot Springs Trolley Tours",
    category: "Local Service",
    type: "Sightseeing Tours • Shuttle • Charter Service",
    description:
      "A visitor-friendly trolley tour, shuttle, and charter service based on Central Avenue, useful for groups, sightseeing, weddings, and people who want a guided look at Hot Springs.",
    image: "/images/businesses/hot-springs-trolley-tours.jpg",
    phone: "501-701-4410",
    address: "706 Central Ave, Hot Springs, AR 71901",
    website: "https://www.hotspringstrolley.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hot+Springs+Trolley+Tours+706+Central+Ave+Hot+Springs+AR+71901",
    href: "/hot-springs-local-services",
  },
  {
    name: "Lyn & Lili's Tidy House",
    category: "Local Service",
    type: "House Cleaning • Vacation Rental Cleaning • Move-Out Cleaning",
    description:
      "A local cleaning service covering Hot Springs and nearby communities with standard cleaning, deep cleaning, move-in and move-out cleaning, Airbnb turnover cleaning, vacation rental cleaning, and small office cleaning.",
    image: "/images/businesses/lyn-and-lili-s-tidy-house.png",
    website: "https://www.lynandlilistidyhouse.com/house-cleaning-hot-springs-ar",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Lyn+and+Lili%27s+Tidy+House+Hot+Springs+AR",
    href: "/hot-springs-local-services",
  },
  {
    name: "Precise Property Cleaning",
    category: "Local Service",
    type: "Vacation Rental Cleaning • Property Care",
    description:
      "A Hot Springs property cleaning and care service focused on vacation homes and short-term rentals, making it relevant for cabin owners, lake homes, and hosts in the area.",
    image: "/images/businesses/precise-property.png",
    address: "Hot Springs, AR",
    website: "https://www.preciseproperty.org/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Precise+Property+Cleaning+Hot+Springs+AR",
    href: "/hot-springs-local-services",
  },
  {
    name: "Hot Springs Camper Rentals",
    category: "Local Service",
    type: "Camper Rentals • Travel Trailers • Lake Trips",
    description:
      "A local camper rental option for visitors planning a lake weekend, campground stay, family trip, or outdoor getaway around Hot Springs and nearby recreation areas.",
    image: "/images/businesses/hot-springs-camper-rentals.png",
    phone: "501-617-9539",
    address: "Hot Springs, AR",
    website: "https://hotspringscamperrentals.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hot+Springs+Camper+Rentals+Hot+Springs+AR",
    href: "/hot-springs-local-services",
  },
    {
    name: "Hot Springs Off-Road Park",
    category: "Outdoor Recreation",
    type: "Off-Road Trails • Side-by-Side Rentals • Camping • Cabins",
    description:
      "A 1,242-acre off-road park with marked trails for different experience levels, rock-crawling terrain, scenic overlooks, side-by-side rentals, guided rides, RV sites, tent camping, and cabins.",
    image: "/images/businesses/hot-springs-off-road-park.jpg",
    phone: "501-625-3600",
    address: "2100 Mill Creek Rd, Hot Springs, AR 71901",
    website: "https://hotspringsoffroadpark.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Hot+Springs+Off-Road+Park+2100+Mill+Creek+Rd+Hot+Springs+AR+71901",
    href: "/hot-springs-outdoor-businesses",
  },
  {
    name: "Lucky Finds",
    category: "Shopping",
    type: "Thrift Store • Antiques • Collectibles • Local Finds",
    description:
      "A small local thrift store on Malvern Avenue with antiques, glassware, clothing, vintage toys, tools, collectibles, and plenty of miscellaneous finds to look through.",
    image: "/images/businesses/lucky-finds.jpg",
    address: "1534 Malvern Ave Suite I, Hot Springs, AR 71901",
    website: "https://www.facebook.com/p/Lucky-Finds-61561564887908/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Lucky+Finds+1534+Malvern+Ave+Suite+I+Hot+Springs+AR+71901",
    href: "/hot-springs-boutiques-shops",
  },
  {
    name: "Burl's Country Smokehouse",
    category: "Restaurant",
    type: "Smokehouse • Barbecue • Deli • Country Store",
    description:
      "A longtime roadside smokehouse near Lake Ouachita serving smoked meats, stacked sandwiches, jerky, smoked cheeses, barbecue, and the oversized cinnamon rolls the place is known for.",
    image: "/images/businesses/burls-country-smokehouse.jpg",
    phone: "501-991-3875",
    address: "10176 Albert Pike Rd, Royal, AR 71968",
    website: "https://www.facebook.com/outlaw316/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Burls+Country+Smokehouse+10176+Albert+Pike+Rd+Royal+AR+71968",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "David's Burgers",
    category: "Restaurant",
    type: "Burgers • Hand-Cut Fries • Family-Friendly",
    description:
      "A casual Arkansas burger restaurant serving fresh, made-to-order burgers, hand-cut fries with free refills, and complimentary ice cream samples in a family-friendly setting.",
    image: "/images/businesses/davids-burgers.jpg",
    phone: "501-725-0096",
    address: "3802 Central Ave Suite A, Hot Springs, AR 71913",
    website: "https://www.davidsburgers.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Davids+Burgers+3802+Central+Ave+Suite+A+Hot+Springs+AR+71913",
    href: "/hot-springs-ar-restaurants",
  },
  {
    name: "Flint Rock Cabins",
    category: "Cabins & Lodging",
    type: "Log Cabins • Private Hot Tubs • Dog-Friendly • Family Stays",
    description:
      "Two quiet log cabins between Hot Springs and Little Rock with private hot tubs, indoor fireplaces, outdoor fire pits, grills, Wi-Fi, family amenities, and room to park trailers and off-road equipment.",
    image: "/images/businesses/flint-rock-cabins.jpg",
    address: "Lonsdale, AR 72087",
    website: "https://flintrockcabins.com/",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Flint+Rock+Cabins+Lonsdale+AR+72087",
    href: "/hot-springs-ar-cabins",
  },

];
