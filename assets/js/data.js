/*
  BAHRAM AUTOMOBILE — inventory data
  --------------------------------------------------------------------------
  HOW TO ADD OR EDIT A CAR
  1. Copy one object in the BAHRAM_INVENTORY array below.
  2. Change the fields (make, model, year, price, etc). "id" must be unique
     and URL-safe (used as vehicle.html?id=your-id).
  3. Photos: put an array of image paths (assets/img/...). If you don't
     have real photos yet, leave "photos: []" and the site will show a
     branded placeholder image automatically.
  4. description / description_de / description_fa: the same short write-up
     in English, German, and Persian. The site shows whichever matches the
     visitor's chosen language (see assets/js/i18n.js), falling back to
     English if a translation is missing.
  5. Set featured / isNew / specialOffer to true/false to control where the
     car appears on the homepage.
  6. Prices are in EUR. Save the file — every page reads from this single
     array, so you only ever edit it in one place.
  --------------------------------------------------------------------------
*/

const BAHRAM_INVENTORY = [
  {
    id: "mercedes-c180-2012",
    make: "Mercedes-Benz",
    model: "C 180",
    generation: "W204",
    year: 2012,
    price: 12500,
    mileage: 118000,
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "1.6L Turbo, 156hp",
    bodyType: "Saloon",
    colour: "Obsidian Black",
    condition: "Used — Good",
    serviceHistory: "Service history available on request",
    warranty: "3-month Bahram Automobile mechanical warranty included",
    financeAvailable: true,
    lotCode: "C180.12",
    featured: true,
    isNew: false,
    specialOffer: true,
    hasCinematicViewer: false,
    video: null,
    photos: ["assets/img/mercedes-c180-2012.webp"],
    description: "A well-kept C 180 with a comfortable ride and low running costs for the class. Good first premium-brand car.",
    description_de: "Ein gepflegter C 180 mit komfortablem Fahrwerk und geringen Unterhaltskosten für die Klasse. Ein guter Einstieg in die Premiumklasse.",
    description_fa: "یک C 180 نگهداری‌شده با سواری راحت و هزینه نگهداری پایین برای این کلاس. گزینه‌ای مناسب برای اولین خودروی پرمیوم."
  },
  {
    id: "mercedes-c180-2015",
    make: "Mercedes-Benz",
    model: "C 180",
    generation: "W205",
    year: 2015,
    price: 17400,
    mileage: 82000,
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "1.6L Turbo, 156hp",
    bodyType: "Saloon",
    colour: "Obsidian Black",
    condition: "Used — Very Good",
    serviceHistory: "Full dealer service history",
    warranty: "3-month Bahram Automobile mechanical warranty included",
    financeAvailable: true,
    lotCode: "C180.15",
    featured: true,
    isNew: true,
    specialOffer: false,
    hasCinematicViewer: false,
    video: null,
    photos: ["assets/img/mercedes-c180-2015.webp"],
    description: "The newer W205-generation C 180 — sharper styling, a modern interior, and a documented dealer service history.",
    description_de: "Der neuere C 180 der Baureihe W205 — schärferes Design, modernes Interieur und lückenlose Werkstatthistorie.",
    description_fa: "نسل جدیدتر C 180 (W205) با طراحی شارپ‌تر، داخلی مدرن و سابقه سرویس کامل نمایندگی."
  },
  {
    id: "mercedes-a250e-2022",
    make: "Mercedes-Benz",
    model: "A 250e",
    generation: "W177",
    year: 2022,
    price: 26500,
    mileage: 28500,
    fuel: "Plug-in Hybrid",
    transmission: "Automatic",
    engine: "1.3L Turbo + electric motor, 218hp combined",
    bodyType: "Hatchback",
    colour: "Obsidian Black",
    condition: "Used — Excellent",
    serviceHistory: "Full main-dealer service history",
    warranty: "6-month extended warranty available",
    financeAvailable: true,
    lotCode: "A250E.22",
    featured: true,
    isNew: true,
    specialOffer: false,
    hasCinematicViewer: false,
    video: null,
    photos: ["assets/img/mercedes-a250e-2022.webp"],
    description: "A low-mileage plug-in hybrid A-Class — quick, efficient around town, and still capable of pure-electric commutes.",
    description_de: "Eine A-Klasse Plug-in-Hybrid mit niedrigem Kilometerstand — sparsam in der Stadt und für rein elektrische Pendelfahrten geeignet.",
    description_fa: "یک A-Class پلاگین‌هیبرید با کیلومتر پایین — سریع، کم‌مصرف در شهر و قابلیت حرکت کاملاً برقی برای رفت‌وآمد روزانه."
  },
  {
    id: "hyundai-i20-hybrid",
    make: "Hyundai",
    model: "i20 Hybrid",
    generation: "BC3",
    year: 2021,
    price: 12500,
    mileage: 34000,
    fuel: "Hybrid",
    transmission: "Manual",
    engine: "1.0L T-GDI Hybrid, 100hp",
    bodyType: "Hatchback",
    colour: "Polar White",
    condition: "Used — Excellent",
    serviceHistory: "Full main-dealer service history",
    warranty: "Remainder of manufacturer warranty + 3-month Bahram Automobile cover",
    financeAvailable: true,
    lotCode: "I20H.21",
    featured: false,
    isNew: true,
    specialOffer: false,
    hasCinematicViewer: false,
    video: null,
    photos: ["assets/img/hyundai-i20-hybrid.webp"],
    description: "A tidy, low-mileage i20 Hybrid — economical, easy to park, and still under most of its original manufacturer warranty.",
    description_de: "Ein gepflegter i20 Hybrid mit niedriger Laufleistung — sparsam, wendig und größtenteils noch mit Herstellergarantie.",
    description_fa: "یک i20 هیبرید تمیز با کیلومتر پایین — کم‌مصرف، راحت برای پارک و همچنان تحت بیشتر گارانتی کارخانه."
  },
  {
    id: "toyota-auris-2016",
    make: "Toyota",
    model: "Auris Hybrid",
    generation: "E180",
    year: 2016,
    price: 13800,
    mileage: 96000,
    fuel: "Hybrid",
    transmission: "Automatic (CVT)",
    engine: "1.8L Hybrid, 136hp",
    bodyType: "Hatchback",
    colour: "Deep Blue",
    condition: "Used — Very Good",
    serviceHistory: "Full service history",
    warranty: "3-month Bahram Automobile mechanical warranty included",
    financeAvailable: true,
    lotCode: "AURIS.16",
    featured: false,
    isNew: false,
    specialOffer: true,
    hasCinematicViewer: false,
    video: null,
    photos: ["assets/img/toyota-auris-2016.webp"],
    description: "A dependable Toyota Hybrid with the running costs and reliability reputation the badge is known for.",
    description_de: "Ein zuverlässiger Toyota Hybrid mit den niedrigen Betriebskosten und dem Zuverlässigkeitsruf der Marke.",
    description_fa: "یک تویوتا هیبریدِ قابل‌اعتماد با هزینه نگهداری پایین و شهرت این برند در قابلیت اطمینان."
  },
  {
    id: "bmw-1er-2014",
    make: "BMW",
    model: "1er (116i)",
    generation: "F20",
    year: 2014,
    price: 9400,
    mileage: 112000,
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.6L, 136hp",
    bodyType: "Hatchback",
    colour: "Alpine White",
    condition: "Used — Good",
    serviceHistory: "Service history available on request",
    warranty: "3-month Bahram Automobile mechanical warranty included",
    financeAvailable: true,
    lotCode: "F20.14",
    featured: false,
    isNew: false,
    specialOffer: false,
    hasCinematicViewer: false,
    video: null,
    photos: ["assets/img/bmw-1er-2014.webp"],
    description: "An M-Sport-styled 1 Series hatchback — the entry point into the BMW range, priced to sell.",
    description_de: "Ein 1er im M-Sport-Look — der günstige Einstieg in die BMW-Welt, attraktiv im Preis.",
    description_fa: "یک هاچ‌بک سری ۱ با ظاهر M-Sport — نقطه ورود مقرون‌به‌صرفه به دنیای بی‌ام‌و."
  }
];

// Make available to plain <script> includes across every page.
if (typeof window !== "undefined") {
  window.BAHRAM_INVENTORY = BAHRAM_INVENTORY;
}
