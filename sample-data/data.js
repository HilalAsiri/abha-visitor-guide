/*
 * Curated local catalog for Abha Visitor Guide.
 * Coordinates are the point shared by Leaflet and the generated Google Maps link.
 * Sources are retained for review; venue details, access, prices, and hours can change.
 */
(() => {
  const checkedAt = "2026-10-01";
  const localized = (en, ar) => ({ en, ar });
  const placeholder = (category, en, ar) => ({
    src: `images/${category}-placeholder.svg`, kind: "placeholder", alt: localized(en, ar)
  });
  const stayPlaceholder = (en, ar) => ({
    src: "images/stays-placeholder.svg", kind: "placeholder", alt: localized(en, ar)
  });
  const location = (precision = "venue") => ({ precision, locality: "Abha", region: "Aseer" });
  const verified = (sourceIds, confidence = "high", precision = "venue") => ({
    status: precision === "area" ? "area-reference" : "verified", sourceIds, checkedAt, confidence
  });

  const sources = [
    { id: "osm-towns-talk", publisher: "OpenStreetMap", title: localized("Towns Talk Coffee", "تاونز توك كوفي"), url: "https://www.openstreetmap.org/node/7252210886", type: "map-record" },
    { id: "osm-fit-kitchen", publisher: "OpenStreetMap", title: localized("Fit Kitchen", "فت كتشن"), url: "https://www.openstreetmap.org/node/7252211685", type: "map-record" },
    { id: "osm-carlito", publisher: "OpenStreetMap", title: localized("Carlito", "كارليتو"), url: "https://www.openstreetmap.org/node/7057065785", type: "map-record" },
    { id: "osm-kudu", publisher: "OpenStreetMap", title: localized("Kudu — Abha", "كودو — أبها"), url: "https://www.openstreetmap.org/node/4111112575", type: "map-record" },
    { id: "osm-raha-cafe", publisher: "OpenStreetMap", title: localized("Raha café", "رهاء"), url: "https://www.openstreetmap.org/node/12992141478", type: "map-record" },
    { id: "osm-herfy", publisher: "OpenStreetMap", title: localized("Herfy 323", "هيرفي 323"), url: "https://www.openstreetmap.org/node/5316647922", type: "map-record" },
    { id: "google-be-you-coffee", publisher: "Google Maps", title: localized("Be You Coffee Roasters", "مقهى ومحمصة بي يو"), url: "https://maps.app.goo.gl/WM8edQMb3PL7TTDc8", type: "map-record" },
    { id: "google-calm-house", publisher: "Google Maps", title: localized("CALM HOUSE", "كالم هاوس"), url: "https://maps.app.goo.gl/h6eeFCF2ve7RkNbV6", type: "map-record" },
    { id: "google-fog-coffee", publisher: "Google Maps", title: localized("Fog Coffee", "قهوة فوق"), url: "https://maps.app.goo.gl/9rg3C7jiuNpuLdhT9", type: "map-record" },
    { id: "google-kaya-cafe", publisher: "Google Maps", title: localized("Kaya Cafe - Abha", "كايا كافيه أبها"), url: "https://maps.app.goo.gl/GY8ikJ1cPKauSHWN6", type: "map-record" },
    { id: "google-maharani-abha", publisher: "Google Maps", title: localized("Maharani Restaurant, Abha Branch", "مطعم مهرانى فرع أبها"), url: "https://maps.app.goo.gl/gM8EeKgLLobHQ1uW8", type: "map-record" },
    { id: "google-olive-garden-abha", publisher: "Google Maps", title: localized("Olive Garden Abha", "مطعم أوليف جاردن أبها"), url: "https://maps.app.goo.gl/f9GeMMjRVC5xRJyA8", type: "map-record" },
    { id: "google-raj-abha", publisher: "Google Maps", title: localized("RAJ Abha", "مطعم راج الهندي"), url: "https://maps.app.goo.gl/7vfwMuffuSF8rcop8", type: "map-record" },
    { id: "visit-saudi-aseer", publisher: "Visit Saudi", title: localized("Aseer destination guide", "دليل وجهة عسير"), url: "https://www.visitsaudi.com/en/aseer", type: "tourism-guide" },
    { id: "osm-rijal-almaa", publisher: "OpenStreetMap", title: localized("Rijal Almaa Heritage Village", "قرية رجال ألمع التراثية"), url: "https://www.openstreetmap.org/node/7160717585", type: "map-record" },
    { id: "osm-muftaha", publisher: "OpenStreetMap", title: localized("Al Muftaha Art Village", "قرية المفتاحة الفنية"), url: "https://www.openstreetmap.org/node/7246059985", type: "map-record" },
    { id: "visit-saudi-muftaha", publisher: "Visit Saudi", title: localized("Al Muftaha Village", "قرية المفتاحة"), url: "https://www.visitsaudi.com/en/aseer/attractions/almuftaha-village", type: "tourism-guide" },
    { id: "osm-shamsan", publisher: "OpenStreetMap", title: localized("Shamsan Castle", "قلعة شمسان"), url: "https://www.openstreetmap.org/node/11769515881", type: "map-record" },
    { id: "discover-aseer-shamsan", publisher: "Discover Aseer", title: localized("Shamsan Castle", "قلعة شمسان"), url: "https://discoveraseer.com/en/attractions/shamsan-castle", type: "tourism-guide" },
    { id: "osm-tuesday-market", publisher: "OpenStreetMap", title: localized("Tuesday Market", "سوق الثلاثاء"), url: "https://www.openstreetmap.org/way/358377281", type: "map-record" },
    { id: "osm-abha-dam", publisher: "OpenStreetMap", title: localized("Abha Dam", "سد أبها"), url: "https://www.openstreetmap.org/way/135106754", type: "map-record" },
    { id: "osm-airport-park", publisher: "OpenStreetMap", title: localized("Abha Airport Park", "منتزه مطار أبها"), url: "https://www.openstreetmap.org/way/591404210", type: "map-record" },
    { id: "osm-al-rashid", publisher: "OpenStreetMap", title: localized("Al Rashid Mall", "الراشد مول"), url: "https://www.openstreetmap.org/way/703937331", type: "map-record" },
    { id: "osm-al-andalus", publisher: "OpenStreetMap", title: localized("Al Andalus Park", "حديقة الأندلس"), url: "https://www.openstreetmap.org/way/1267132501", type: "map-record" },
    { id: "osm-lavanda-park", publisher: "OpenStreetMap", title: localized("Lavanda Park", "لافندا بارك"), url: "https://www.openstreetmap.org/way/553864211", type: "map-record" },
    { id: "osm-green-mountain", publisher: "OpenStreetMap", title: localized("Green Mountain", "الجبل الأخضر"), url: "https://www.openstreetmap.org/node/11769515876", type: "map-record" },
    { id: "citadines-location", publisher: "Citadines", title: localized("Citadines Abha location", "موقع سيتادينز أبها"), url: "https://www.discoverasr.com/en/citadines/saudi-arabia/citadines-abha/location", type: "official-property" },
    { id: "osm-abha-palace-hotel", publisher: "OpenStreetMap", title: localized("Abha Palace Hotel", "فندق قصر أبها"), url: "https://www.openstreetmap.org/way/1468150306", type: "map-record" },
    { id: "osm-intercontinental-soudah", publisher: "OpenStreetMap", title: localized("InterContinental Al Soudah", "فندق إنتركونتيننتال السودة"), url: "https://www.openstreetmap.org/relation/16244258", type: "map-record" }
  ];

  const categories = [
    { id: "food", icon: "food", label: localized("Restaurants & Cafés", "مطاعم ومقاهٍ"), hint: localized("A pause for coffee or a meal", "استراحة لقهوة أو وجبة") },
    { id: "nature", icon: "nature", label: localized("Nature & Views", "طبيعة وإطلالات"), hint: localized("Highlands, parks, and outlooks", "مرتفعات ومنتزهات ومناظر") },
    { id: "heritage", icon: "heritage", label: localized("Heritage & Culture", "تراث وثقافة"), hint: localized("Stories in stone and color", "حكايات من الحجر واللون") },
    { id: "family", icon: "family", label: localized("Family Activities", "أنشطة عائلية"), hint: localized("Easy stops for everyone", "محطات سهلة للجميع") },
    { id: "stays", icon: "stays", label: localized("Hotels & Stays", "إقامات وفنادق"), hint: localized("A practical base for your visit", "قاعدة عملية لزيارتك") }
  ];

  const tags = [
    ["coffee", "Coffee", "قهوة"], ["restaurant", "Restaurant", "مطعم"], ["quick-stop", "Quick stop", "محطة سريعة"],
    ["scenic-view", "Scenic view", "إطلالة خلابة"], ["mountain", "Mountains", "جبال"], ["outdoors", "Outdoors", "في الهواء الطلق"],
    ["park", "Park", "منتزه"], ["heritage", "Heritage", "تراث"], ["arts", "Arts", "فنون"], ["market", "Market", "سوق"],
    ["museum", "Museum", "متحف"], ["family-friendly", "Family-friendly", "مناسب للعائلة"], ["lake", "Lake area", "منطقة بحيرة"],
    ["hotel", "Hotel", "فندق"], ["city-stay", "City stay", "إقامة داخل المدينة"], ["mountain-stay", "Mountain stay", "إقامة جبلية"],
    ["airport-access", "Near airport", "قريب من المطار"], ["shopping", "Shopping", "تسوق"]
  ].map(([id, en, ar]) => ({ id, label: localized(en, ar) }));

  const photo = (src, width, height, alt, credit) => ({ src, kind: "photo", width, height, alt, credit });
  const places = [
    {
      id: "towns-talk-coffee", category: "food", coordinates: [18.2166801, 42.5222887], location: location(),
      name: localized("Towns Talk Coffee", "تاونز توك كوفي"), description: localized("A mapped coffee stop in Abha. Confirm current hours directly with the venue.", "مقهى محدد على الخريطة في أبها. تحقّق من ساعات العمل الحالية مباشرةً مع المكان."),
      tagIds: ["coffee", "quick-stop"], mealPeriodIds: [], foodFilterIds: ["cafes"], media: placeholder("food", "Illustrated coffee shop placeholder", "رسم توضيحي محلي لمقهى"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-towns-talk"])
    },
    {
      id: "fit-kitchen", category: "food", coordinates: [18.2168804, 42.5218626], location: location(),
      name: localized("Fit Kitchen", "فت كتشن"), description: localized("A mapped restaurant in Abha. Confirm the current menu and hours before you go.", "مطعم محدد على الخريطة في أبها. تحقّق من القائمة وساعات العمل الحالية قبل الذهاب."),
      tagIds: ["restaurant", "quick-stop"], mealPeriodIds: [], media: placeholder("food", "Illustrated restaurant placeholder", "رسم توضيحي محلي لمطعم"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-fit-kitchen"])
    },
    {
      id: "carlito", category: "food", coordinates: [18.2100777, 42.4906043], location: location(),
      name: localized("Carlito", "كارليتو"), description: localized("A mapped restaurant in Abha. Confirm current service details directly with the venue.", "مطعم محدد على الخريطة في أبها. تحقّق من تفاصيل الخدمة الحالية مباشرةً مع المكان."),
      tagIds: ["restaurant"], mealPeriodIds: [], media: placeholder("food", "Illustrated restaurant placeholder", "رسم توضيحي محلي لمطعم"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-carlito"])
    },
    {
      id: "kudu-abha", category: "food", coordinates: [18.2108561, 42.489808], location: location(),
      name: localized("Kudu — Abha", "كودو — أبها"), description: localized("A mapped Abha branch of the Saudi quick-service restaurant. Confirm current services before visiting.", "فرع محدد على الخريطة في أبها من مطعم الخدمة السريعة السعودي. تحقّق من الخدمات الحالية قبل الزيارة."),
      tagIds: ["restaurant", "quick-stop"], mealPeriodIds: [], media: placeholder("food", "Illustrated quick-service restaurant placeholder", "رسم توضيحي محلي لمطعم خدمة سريعة"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-kudu"])
    },
    {
      id: "raha-cafe", category: "food", coordinates: [18.2310656, 42.5092645], location: location(),
      name: localized("Raha café", "رهاء"), description: localized("A named café in Abha. Confirm current menu and hours directly before visiting.", "مقهى محدد بالاسم في أبها. تحقّق من القائمة وساعات العمل الحالية مباشرةً قبل الزيارة."),
      tagIds: ["coffee"], mealPeriodIds: [], foodFilterIds: ["cafes"], media: placeholder("food", "Illustrated café placeholder", "رسم توضيحي محلي لمقهى"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-raha-cafe"])
    },
    {
      id: "herfy-323", category: "food", coordinates: [18.2379435, 42.5800578], location: location(),
      name: localized("Herfy 323", "هيرفي 323"), description: localized("A named restaurant branch in Abha. Confirm current services directly with the venue.", "فرع مطعم محدد بالاسم في أبها. تحقّق من الخدمات الحالية مباشرةً مع المكان."),
      tagIds: ["restaurant", "quick-stop"], mealPeriodIds: [], media: placeholder("food", "Illustrated restaurant placeholder", "رسم توضيحي محلي لمطعم"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-herfy"])
    },
    {
      id: "be-you-coffee-roasters", category: "food", coordinates: [18.2406569, 42.5062628], location: location(),
      name: localized("Be You Coffee Roasters", "مقهى ومحمصة بي يو"), description: localized("A mapped coffee roastery and café in Abha. Confirm current menu and hours directly before visiting.", "محمصة ومقهى محددان على الخريطة في أبها. تحقّق من القائمة وساعات العمل الحالية مباشرةً قبل الزيارة."),
      tagIds: ["coffee"], mealPeriodIds: [], foodFilterIds: ["cafes"], googleMapsUrl: "https://maps.app.goo.gl/WM8edQMb3PL7TTDc8", media: placeholder("food", "Illustrated coffee roastery placeholder", "رسم توضيحي محلي لمحمصة ومقهى"), source: localized("Google Maps place listing", "إدراج المكان في خرائط Google"), verification: verified(["google-be-you-coffee"])
    },
    {
      id: "calm-house", category: "food", coordinates: [18.2418044, 42.4878652], location: location(),
      name: localized("CALM HOUSE", "كالم هاوس"), description: localized("A mapped café in Abha. Confirm current menu and hours directly before visiting.", "مقهى محدد على الخريطة في أبها. تحقّق من القائمة وساعات العمل الحالية مباشرةً قبل الزيارة."),
      tagIds: ["coffee"], mealPeriodIds: [], foodFilterIds: ["cafes"], googleMapsUrl: "https://maps.app.goo.gl/h6eeFCF2ve7RkNbV6", media: placeholder("food", "Illustrated café placeholder", "رسم توضيحي محلي لمقهى"), source: localized("Google Maps place listing", "إدراج المكان في خرائط Google"), verification: verified(["google-calm-house"])
    },
    {
      id: "fog-coffee", category: "food", coordinates: [18.2001058, 42.4953445], location: location(),
      name: localized("Fog Coffee", "قهوة فوق"), description: localized("A mapped coffee stop in Abha. Confirm current menu and hours directly before visiting.", "مقهى محدد على الخريطة في أبها. تحقّق من القائمة وساعات العمل الحالية مباشرةً قبل الزيارة."),
      tagIds: ["coffee"], mealPeriodIds: [], foodFilterIds: ["cafes"], googleMapsUrl: "https://maps.app.goo.gl/9rg3C7jiuNpuLdhT9", media: placeholder("food", "Illustrated coffee shop placeholder", "رسم توضيحي محلي لمقهى"), source: localized("Google Maps place listing", "إدراج المكان في خرائط Google"), verification: verified(["google-fog-coffee"])
    },
    {
      id: "kaya-cafe-abha", category: "food", coordinates: [18.214023, 42.4928167], location: location(),
      name: localized("Kaya Cafe - Abha", "كايا كافيه أبها"), description: localized("A mapped café in Abha. Confirm current menu and hours directly before visiting.", "مقهى محدد على الخريطة في أبها. تحقّق من القائمة وساعات العمل الحالية مباشرةً قبل الزيارة."),
      tagIds: ["coffee"], mealPeriodIds: [], foodFilterIds: ["cafes"], googleMapsUrl: "https://maps.app.goo.gl/GY8ikJ1cPKauSHWN6", media: placeholder("food", "Illustrated café placeholder", "رسم توضيحي محلي لمقهى"), source: localized("Google Maps place listing", "إدراج المكان في خرائط Google"), verification: verified(["google-kaya-cafe"])
    },
    {
      id: "maharani-restaurant-abha", category: "food", coordinates: [18.2174371, 42.5225502], location: location(),
      name: localized("Maharani Restaurant, Abha Branch", "مطعم مهرانى فرع أبها"), description: localized("A mapped Indian restaurant in Abha. Confirm current menu and hours directly before visiting.", "مطعم هندي محدد على الخريطة في أبها. تحقّق من القائمة وساعات العمل الحالية مباشرةً قبل الزيارة."),
      tagIds: ["restaurant"], mealPeriodIds: ["lunch"], mealPeriodEvidence: { lunch: { source: "google-maharani-abha", checkedAt } }, googleMapsUrl: "https://maps.app.goo.gl/gM8EeKgLLobHQ1uW8", media: placeholder("food", "Illustrated Indian restaurant placeholder", "رسم توضيحي محلي لمطعم هندي"), source: localized("Google Maps place listing", "إدراج المكان في خرائط Google"), verification: verified(["google-maharani-abha"])
    },
    {
      id: "olive-garden-abha", category: "food", coordinates: [18.2562247, 42.491297], location: location(),
      name: localized("Olive Garden Abha", "مطعم أوليف جاردن أبها"), description: localized("A mapped restaurant in Abha. Confirm current menu and hours directly before visiting.", "مطعم محدد على الخريطة في أبها. تحقّق من القائمة وساعات العمل الحالية مباشرةً قبل الزيارة."),
      tagIds: ["restaurant"], mealPeriodIds: ["lunch"], mealPeriodEvidence: { lunch: { source: "google-olive-garden-abha", checkedAt } }, googleMapsUrl: "https://maps.app.goo.gl/f9GeMMjRVC5xRJyA8", media: placeholder("food", "Illustrated restaurant placeholder", "رسم توضيحي محلي لمطعم"), source: localized("Google Maps place listing", "إدراج المكان في خرائط Google"), verification: verified(["google-olive-garden-abha"])
    },
    {
      id: "raj-abha", category: "food", coordinates: [18.2282476, 42.5889734], location: location(),
      name: localized("RAJ Abha", "مطعم راج الهندي"), description: localized("A mapped Indian restaurant in Abha. Confirm current menu and hours directly before visiting.", "مطعم هندي محدد على الخريطة في أبها. تحقّق من القائمة وساعات العمل الحالية مباشرةً قبل الزيارة."),
      tagIds: ["restaurant"], mealPeriodIds: ["lunch"], mealPeriodEvidence: { lunch: { source: "google-raj-abha", checkedAt } }, googleMapsUrl: "https://maps.app.goo.gl/7vfwMuffuSF8rcop8", media: placeholder("food", "Illustrated Indian restaurant placeholder", "رسم توضيحي محلي لمطعم هندي"), source: localized("Google Maps place listing", "إدراج المكان في خرائط Google"), verification: verified(["google-raj-abha"])
    },
    {
      id: "al-soudah", category: "nature", coordinates: [18.2717, 42.384], location: location("area"),
      name: localized("Al Soudah", "السودة"), description: localized("A highland area near Abha known for mountain scenery. This is an area reference, so confirm the access point for your route.", "منطقة مرتفعة قرب أبها معروفة بالمناظر الجبلية. هذه علامة للمنطقة، لذا تحقّق من نقطة الدخول المناسبة لمسارك."),
      tagIds: ["mountain", "scenic-view", "outdoors"], media: placeholder("nature", "Illustrated highland landscape placeholder", "رسم توضيحي محلي لمنظر مرتفع"), source: localized("Visit Saudi destination guide", "دليل وجهة عسير من Visit Saudi"), verification: verified(["visit-saudi-aseer"], "medium", "area"), needsConfirmation: true
    },
    {
      id: "abu-kheyal-park", category: "nature", coordinates: [18.200211, 42.499763], location: location("area"),
      name: localized("Abu Kheyal Park", "منتزه أبو خيال"), description: localized("An elevated Abha park area associated with city and mountain views. Confirm the preferred access point before visiting.", "منطقة منتزه مرتفعة في أبها ترتبط بإطلالات على المدينة والجبال. تحقّق من نقطة الدخول المناسبة قبل الزيارة."),
      tagIds: ["park", "scenic-view", "outdoors"], media: placeholder("nature", "Illustrated park landscape placeholder", "رسم توضيحي محلي لمنتزه"), source: localized("Published map reference", "مرجع خريطة منشور"), verification: verified([], "medium", "area"), needsConfirmation: true
    },
    {
      id: "waterfall-park", category: "nature", coordinates: [18.2315793, 42.5005299], location: location("area"),
      name: localized("Waterfall Park", "منتزه الشلال"), description: localized("A public park reference in Abha. Check local conditions and facilities before you visit.", "مرجع لمنتزه عام في أبها. تحقّق من الظروف والمرافق المحلية قبل الزيارة."),
      tagIds: ["park", "outdoors"], media: placeholder("nature", "Illustrated park placeholder", "رسم توضيحي محلي لمنتزه"), source: localized("Published map reference", "مرجع خريطة منشور"), verification: verified([], "medium", "area"), needsConfirmation: true
    },
    {
      id: "green-mountain", category: "nature", coordinates: [18.2044275, 42.5065566], location: location(),
      name: localized("Green Mountain", "الجبل الأخضر"), description: localized("A named Abha attraction on the Green Mountain. Confirm access arrangements before setting out.", "معلم محدد بالاسم في أبها على الجبل الأخضر. تحقّق من ترتيبات الوصول قبل الانطلاق."),
      tagIds: ["mountain", "scenic-view", "outdoors"], media: placeholder("nature", "Illustrated mountain attraction placeholder", "رسم توضيحي محلي لمعْلم جبلي"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-green-mountain"])
    },
    {
      id: "lavanda-park", category: "nature", coordinates: [18.2401, 42.604916], location: location(),
      name: localized("Lavanda Park", "لافندا بارك"), description: localized("A named park in Abha. Confirm facilities and preferred access before visiting.", "منتزه محدد بالاسم في أبها. تحقّق من المرافق ونقطة الدخول المناسبة قبل الزيارة."),
      tagIds: ["park", "outdoors"], media: placeholder("nature", "Illustrated park placeholder", "رسم توضيحي محلي لمنتزه"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-lavanda-park"])
    },
    {
      id: "rijal-almaa", category: "heritage", coordinates: [18.2124594, 42.2734154], location: location(),
      name: localized("Rijal Almaa Heritage Village", "قرية رجال ألمع التراثية"), description: localized("A historic stone-built village in Aseer, known for distinctive architecture and a heritage setting.", "قرية تاريخية مبنية بالحجر في عسير، وتشتهر بعمارتها المميزة وطابعها التراثي."),
      tagIds: ["heritage", "outdoors"], media: photo("images/places/rijal-almaa.jpg", 3024, 4032, localized("Stone houses in Rijal Almaa historical village", "بيوت حجرية في قرية رجال ألمع التاريخية"), { creator: "Richard Mortel", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rijal_Almaa_village_2021.jpg", notice: localized("Cropped and saved locally as a JPEG derivative.", "اقتصّت الصورة وحُفظت محلياً كنسخة JPEG مشتقة.") }), source: localized("OpenStreetMap and Visit Saudi", "OpenStreetMap وVisit Saudi"), verification: verified(["osm-rijal-almaa", "visit-saudi-aseer"])
    },
    {
      id: "al-muftaha", category: "heritage", coordinates: [18.2131377, 42.4955574], location: location(),
      name: localized("Al Muftaha Art Village", "قرية المفتاحة الفنية"), description: localized("Abha’s arts district, associated with galleries, cultural spaces, and the King Fahad Cultural Center.", "الحي الفني في أبها، ويرتبط بالمعارض والمساحات الثقافية ومركز الملك فهد الثقافي."),
      tagIds: ["arts", "heritage"], media: placeholder("heritage", "Illustrated arts district placeholder", "رسم توضيحي محلي لحي فني"), source: localized("OpenStreetMap and Visit Saudi", "OpenStreetMap وVisit Saudi"), verification: verified(["osm-muftaha", "visit-saudi-muftaha"])
    },
    {
      id: "shamsan-castle", category: "heritage", coordinates: [18.2251973, 42.5036217], location: location(),
      name: localized("Shamsan Castle", "قلعة شمسان"), description: localized("A restored granite castle on an elevated point in eastern Abha, with panoramic city views.", "قلعة جرانيتية مرممة في نقطة مرتفعة شرق أبها، وتوفر إطلالات بانورامية على المدينة."),
      tagIds: ["heritage", "scenic-view"], media: photo("images/places/shamsan-castle.jpg", 3000, 4496, localized("Shamsan Castle in Abha", "قلعة شمسان في أبها"), { creator: "Heritage Commission", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:%D9%82%D9%84%D8%B9%D8%A9_%D8%B4%D9%85%D8%B3%D8%A7%D9%86.jpg", notice: localized("Cropped and saved locally as a JPEG derivative; shared under CC BY-SA 4.0.", "اقتصّت الصورة وحُفظت محلياً كنسخة JPEG مشتقة؛ وتتاح وفق CC BY-SA 4.0.") }), source: localized("OpenStreetMap and Discover Aseer", "OpenStreetMap وDiscover Aseer"), verification: verified(["osm-shamsan", "discover-aseer-shamsan"])
    },
    {
      id: "asir-regional-museum", category: "heritage", coordinates: [18.2161369, 42.49934], location: location("area"),
      name: localized("Asir Regional Museum", "متحف عسير الإقليمي"), description: localized("A museum reference in central Abha. Confirm visiting arrangements before your trip.", "مرجع لمتحف في وسط أبها. تحقّق من ترتيبات الزيارة قبل رحلتك."),
      tagIds: ["museum", "heritage"], media: placeholder("heritage", "Illustrated museum placeholder", "رسم توضيحي محلي لمتحف"), source: localized("Published map reference", "مرجع خريطة منشور"), verification: verified([], "medium", "area"), needsConfirmation: true
    },
    {
      id: "civilisation-museum", category: "heritage", coordinates: [18.2131656, 42.4960586], location: location("area"),
      name: localized("Civilisation Museum", "متحف الحضارة"), description: localized("A museum reference near Al Muftaha in Abha. Confirm current access before visiting.", "مرجع لمتحف قرب المفتاحة في أبها. تحقّق من إمكانية الدخول الحالية قبل الزيارة."),
      tagIds: ["museum", "heritage"], media: placeholder("heritage", "Illustrated museum placeholder", "رسم توضيحي محلي لمتحف"), source: localized("Published map reference", "مرجع خريطة منشور"), verification: verified([], "medium", "area"), needsConfirmation: true
    },
    {
      id: "tuesday-market", category: "heritage", coordinates: [18.2147425, 42.496705], location: location(),
      name: localized("Tuesday Market", "سوق الثلاثاء"), description: localized("A named marketplace in Al Muftaha, Abha. Confirm market activity and opening arrangements before visiting.", "سوق محدد بالاسم في المفتاحة بأبها. تحقّق من نشاط السوق وترتيبات الزيارة قبل الذهاب."),
      tagIds: ["market", "heritage"], media: placeholder("heritage", "Illustrated market placeholder", "رسم توضيحي محلي لسوق"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-tuesday-market"])
    },
    {
      id: "abha-palace-theme-park", category: "family", coordinates: [18.2118131, 42.483873], location: location("area"),
      name: localized("Abha Palace Theme Park", "مدينة أبها بالاس الترفيهية"), description: localized("A family-oriented amusement reference in Abha. Confirm operating dates, ticketing, and available attractions before visiting.", "مرجع لوجهة ترفيهية عائلية في أبها. تحقّق من أيام التشغيل والتذاكر والألعاب المتاحة قبل الزيارة."),
      tagIds: ["family-friendly", "lake"], media: placeholder("family", "Illustrated family activity placeholder", "رسم توضيحي محلي لنشاط عائلي"), source: localized("Published map reference", "مرجع خريطة منشور"), verification: verified([], "medium", "area"), needsConfirmation: true
    },
    {
      id: "al-andalus-park", category: "family", coordinates: [18.2122321, 42.5153326], location: location("area"),
      name: localized("Al Andalus Park", "حديقة الأندلس"), description: localized("A city-park reference in Abha that can suit a relaxed family stop. Check current facilities before visiting.", "مرجع لحديقة مدينة في أبها قد يناسب استراحة عائلية هادئة. تحقّق من المرافق الحالية قبل الزيارة."),
      tagIds: ["park", "family-friendly"], media: placeholder("family", "Illustrated city park placeholder", "رسم توضيحي محلي لحديقة مدينة"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-al-andalus"])
    },
    {
      id: "abha-dam-lake", category: "family", coordinates: [18.211872, 42.4882101], location: location("area"),
      name: localized("Abha Dam Lake", "بحيرة سد أبها"), description: localized("A well-known Abha lake and dam area. This marker is a lake-area reference; confirm your preferred access point before setting off.", "منطقة معروفة للبحيرة والسد في أبها. هذه العلامة مرجع لمنطقة البحيرة؛ تحقّق من نقطة الدخول المناسبة قبل الانطلاق."),
      tagIds: ["lake", "family-friendly", "outdoors"], media: photo("images/places/abha-dam.jpg", 3000, 4000, localized("Boat on Abha Dam water", "قارب على مياه سد أبها"), { creator: "Aiman ALhaddad", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", sourceUrl: "https://commons.wikimedia.org/wiki/File:Boat_on_Abha.jpg", notice: localized("Cropped and saved locally as a JPEG derivative; shared under CC BY-SA 3.0.", "اقتصّت الصورة وحُفظت محلياً كنسخة JPEG مشتقة؛ وتتاح وفق CC BY-SA 3.0.") }), source: localized("OpenStreetMap dam record", "سجل السد في OpenStreetMap"), verification: verified(["osm-abha-dam"], "high", "area"), needsConfirmation: true
    },
    {
      id: "abha-airport-park", category: "family", coordinates: [18.2407251, 42.6440885], location: location(),
      name: localized("Abha Airport Park", "منتزه مطار أبها"), description: localized("A named public park near Abha Airport. Confirm current facilities before planning a family stop.", "منتزه عام محدد بالاسم قرب مطار أبها. تحقّق من المرافق الحالية قبل التخطيط لمحطة عائلية."),
      tagIds: ["park", "family-friendly", "airport-access"], media: placeholder("family", "Illustrated airport park placeholder", "رسم توضيحي محلي لمنتزه قرب المطار"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-airport-park"])
    },
    {
      id: "al-rashid-mall", category: "family", coordinates: [18.2371051, 42.5799541], location: location(),
      name: localized("Al Rashid Mall", "الراشد مول"), description: localized("A named shopping mall in Abha for an indoor family stop. Confirm individual venue hours directly.", "مركز تسوق محدد بالاسم في أبها لمحطة عائلية داخلية. تحقّق من ساعات الأماكن الفردية مباشرةً."),
      tagIds: ["shopping", "family-friendly"], media: placeholder("family", "Illustrated mall placeholder", "رسم توضيحي محلي لمركز تسوق"), source: localized("OpenStreetMap place record", "سجل مكان في OpenStreetMap"), verification: verified(["osm-al-rashid"])
    },
    {
      id: "citadines-abha", category: "stays", coordinates: [18.2407009, 42.6072625], location: location(),
      name: localized("Citadines Abha", "سيتادينز أبها"), description: localized("A hotel on King Fahd Road in Abha. Confirm availability and services directly with the property.", "فندق على طريق الملك فهد في أبها. تحقّق من التوفر والخدمات مباشرةً مع مكان الإقامة."),
      tagIds: ["hotel", "city-stay", "airport-access"], media: stayPlaceholder("Illustrated Abha hotel placeholder", "رسم توضيحي محلي لفندق في أبها"), source: localized("Official Citadines location page", "صفحة موقع سيتادينز الرسمية"), verification: verified(["citadines-location"])
    },
    {
      id: "abha-palace-hotel", category: "stays", coordinates: [18.2103424, 42.4834027], location: location(),
      name: localized("Abha Palace Hotel", "فندق قصر أبها"), description: localized("A mapped hotel in Abha near the lake-area route. Confirm booking and operating details directly with the property.", "فندق محدد على الخريطة في أبها قرب مسار منطقة البحيرة. تحقّق من الحجز والتفاصيل التشغيلية مباشرةً مع مكان الإقامة."),
      tagIds: ["hotel", "city-stay", "lake"], media: stayPlaceholder("Illustrated hotel by Abha lake placeholder", "رسم توضيحي محلي لفندق قرب بحيرة أبها"), source: localized("OpenStreetMap hotel record", "سجل فندق في OpenStreetMap"), verification: verified(["osm-abha-palace-hotel"])
    },
    {
      id: "intercontinental-al-soudah", category: "stays", coordinates: [18.2706959, 42.3680188], location: { ...location(), locality: "Al Soudah" },
      name: localized("InterContinental Al Soudah", "فندق إنتركونتيننتال السودة"), description: localized("A mapped hotel reference in the Al Soudah area. Confirm its current visitor and booking status directly before routing there.", "مرجع لفندق محدد على الخريطة في منطقة السودة. تحقّق مباشرةً من حالته الحالية للزوار والحجز قبل التوجه إليه."),
      tagIds: ["hotel", "mountain-stay", "scenic-view"], media: stayPlaceholder("Illustrated mountain hotel placeholder", "رسم توضيحي محلي لفندق جبلي"), source: localized("OpenStreetMap map reference", "مرجع خريطة OpenStreetMap"), verification: verified(["osm-intercontinental-soudah"], "medium"), needsConfirmation: true
    }
  ];

  const curations = [
    { id: "mountain-views", interests: ["scenic-view", "mountain", "outdoors"], time: ["half", "full"], family: ["any", "yes"], budget: ["any", "low", "mid"], placeIds: ["al-soudah", "abu-kheyal-park", "shamsan-castle"], title: localized("A highland and view route", "مسار للمرتفعات والإطلالات"), reason: localized("These picks combine mountain scenery, elevated views, and a heritage stop.", "تجمع هذه الاختيارات بين مناظر الجبال والإطلالات المرتفعة ومحطة تراثية."), caveat: localized("Some pins are area references—confirm your access point before leaving.", "بعض العلامات مراجع للمناطق؛ تحقّق من نقطة الدخول قبل الانطلاق.") },
    { id: "family-afternoon", interests: ["family-friendly", "park", "lake", "shopping"], time: ["short", "half"], family: ["yes", "any"], budget: ["any", "low", "mid"], placeIds: ["abha-dam-lake", "abha-airport-park", "al-rashid-mall"], title: localized("An easy family afternoon", "أمسية عائلية سهلة"), reason: localized("These places offer outdoor or indoor options for a flexible family stop.", "تقدم هذه الأماكن خيارات خارجية أو داخلية لمحطة عائلية مرنة."), caveat: localized("Facilities and operating details can change; check directly before you go.", "قد تتغير المرافق والتفاصيل التشغيلية؛ تحقّق مباشرةً قبل الذهاب.") },
    { id: "culture-day", interests: ["heritage", "arts", "market", "museum"], time: ["half", "full"], family: ["any", "yes"], budget: ["any", "low", "mid"], placeIds: ["al-muftaha", "tuesday-market", "rijal-almaa"], title: localized("A culture-led day", "يوم يقوده التراث والثقافة"), reason: localized("These picks pair Abha’s arts district and market with Aseer heritage.", "تجمع هذه الاختيارات بين الحي الفني والسوق في أبها وتراث عسير."), caveat: localized("Confirm gallery, market, and village arrangements before travel.", "تحقّق من ترتيبات المعارض والسوق والقرية قبل السفر.") },
    { id: "stay-near-airport", interests: ["hotel", "airport-access", "city-stay"], time: ["short", "half", "full"], family: ["any", "yes"], budget: ["any", "mid", "high"], placeIds: ["citadines-abha", "abha-airport-park", "al-rashid-mall"], title: localized("A practical airport-side base", "قاعدة عملية قرب المطار"), reason: localized("This pairing begins with a stay option and nearby practical stops.", "يبدأ هذا الاقتراح بخيار إقامة ومحطات عملية قريبة."), caveat: localized("The guide does not show live rooms, prices, or reservations.", "لا يعرض الدليل الغرف أو الأسعار أو الحجوزات المباشرة.") }
  ];

  window.CATALOG = {
    schemaVersion: 1, updatedAt: checkedAt, categories, tags, sources, places, curations,
    assistant: { mode: "local-curated", supportedLanguages: ["en", "ar"], storesVisitorText: false }
  };
  window.PLACES = places;
})();
