/*
 * Replace `image` with a licensed image saved in images/ when one is available.
 * Coordinates are the exact point used by both the Leaflet marker and Google Maps link.
 * Review venue information before publishing because opening hours and access can change.
 */
window.PLACES = [
  {
    id: "towns-talk-coffee",
    category: "food",
    coordinates: [18.2166801, 42.5222887],
    name: { en: "Towns Talk Coffee", ar: "تاونز توك كوفي" },
    description: { en: "A mapped coffee stop in Abha. Confirm its opening hours directly before visiting.", ar: "مقهى محدد على الخريطة في أبها. يرجى التحقق من ساعات العمل مباشرةً قبل الزيارة." },
    image: "images/food-placeholder.svg",
    imageAlt: { en: "Illustrated coffee shop image placeholder", ar: "صورة توضيحية مؤقتة لمقهى" },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "fit-kitchen",
    category: "food",
    coordinates: [18.2168804, 42.5218626],
    name: { en: "Fit Kitchen", ar: "فت كتشن" },
    description: { en: "A mapped restaurant stop in Abha. Check the current menu and hours before you go.", ar: "مطعم محدد على الخريطة في أبها. تحقق من قائمة الطعام وساعات العمل الحالية قبل الذهاب." },
    image: "images/food-placeholder.svg",
    imageAlt: { en: "Illustrated restaurant image placeholder", ar: "صورة توضيحية مؤقتة لمطعم" },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "carlito",
    category: "food",
    coordinates: [18.2100777, 42.4906043],
    name: { en: "Carlito", ar: "كارليتو" },
    description: { en: "A restaurant mapped in Abha. Availability and menu details should be confirmed with the venue.", ar: "مطعم محدد على الخريطة في أبها. ينبغي تأكيد التوفر وتفاصيل القائمة مع المكان." },
    image: "images/food-placeholder.svg",
    imageAlt: { en: "Illustrated restaurant image placeholder", ar: "صورة توضيحية مؤقتة لمطعم" },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "kudu-abha",
    category: "food",
    coordinates: [18.2108561, 42.489808],
    name: { en: "Kudu — Abha", ar: "كودو — أبها" },
    description: { en: "A mapped Abha branch of the Saudi quick-service restaurant. Confirm current services before visiting.", ar: "فرع محدد على الخريطة في أبها من مطعم الخدمة السريعة السعودي. تحقق من الخدمات الحالية قبل الزيارة." },
    image: "images/food-placeholder.svg",
    imageAlt: { en: "Illustrated quick-service restaurant image placeholder", ar: "صورة توضيحية مؤقتة لمطعم خدمة سريعة" },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "al-soudah",
    category: "nature",
    coordinates: [18.2717, 42.3840],
    name: { en: "Al Soudah", ar: "السودة" },
    description: { en: "Highland scenery near Abha, known for mountain landscapes. The pin marks the Al Soudah area; confirm access for your route.", ar: "منطقة مرتفعة قرب أبها معروفة بالمناظر الجبلية. تشير العلامة إلى منطقة السودة؛ تحقق من إمكانية الوصول لمسارك." },
    image: "images/nature-placeholder.svg",
    imageAlt: { en: "Illustrated mountain landscape placeholder", ar: "صورة توضيحية مؤقتة لمنظر جبلي" },
    source: { en: "Place: Visit Saudi; area coordinate: map reference", ar: "المكان: Visit Saudi؛ إحداثية المنطقة: مرجع خرائطي" }
  },
  {
    id: "abu-kheyal-park",
    category: "nature",
    coordinates: [18.200211, 42.499763],
    name: { en: "Abu Kheyal Park", ar: "منتزه أبو خيال" },
    description: { en: "An elevated park in Abha with city and mountain views. Confirm access and facilities before visiting.", ar: "منتزه مرتفع في أبها بإطلالات على المدينة والجبال. تحقق من الدخول والمرافق قبل الزيارة." },
    image: "images/nature-placeholder.svg",
    imageAlt: { en: "Illustrated park landscape placeholder", ar: "صورة توضيحية مؤقتة لمنتزه" },
    source: { en: "Location: published map coordinate", ar: "الموقع: إحداثية خريطة منشورة" }
  },
  {
    id: "waterfall-park",
    category: "nature",
    coordinates: [18.2315793, 42.5005299],
    name: { en: "Waterfall Park", ar: "منتزه الشلال" },
    description: { en: "A mapped public park in Abha. Check local conditions and facilities before you visit.", ar: "منتزه عام محدد على الخريطة في أبها. تحقق من الظروف والمرافق المحلية قبل الزيارة." },
    image: "images/nature-placeholder.svg",
    imageAlt: { en: "Illustrated park image placeholder", ar: "صورة توضيحية مؤقتة لمنتزه" },
    source: { en: "Location: published map coordinate", ar: "الموقع: إحداثية خريطة منشورة" }
  },
  {
    id: "rijal-almaa",
    category: "heritage",
    coordinates: [18.2124594, 42.2734154],
    name: { en: "Rijal Almaa Heritage Village", ar: "قرية رجال ألمع التراثية" },
    description: { en: "A historic stone-built village in Aseer, widely known for its distinctive architecture and heritage setting.", ar: "قرية تاريخية مبنية بالحجر في عسير، وتشتهر بعمارتها المميزة وطابعها التراثي." },
    image: "images/heritage-placeholder.svg",
    imageAlt: { en: "Illustrated stone heritage village placeholder", ar: "صورة توضيحية مؤقتة لقرية تراثية حجرية" },
    source: { en: "Place: Visit Saudi; location: OpenStreetMap record", ar: "المكان: Visit Saudi؛ الموقع: سجل OpenStreetMap" }
  },
  {
    id: "al-muftaha",
    category: "heritage",
    coordinates: [18.2131377, 42.4955574],
    name: { en: "Al Muftaha Art Village", ar: "قرية المفتاحة الفنية" },
    description: { en: "Abha’s arts district, associated with galleries, cultural spaces, and the King Fahad Cultural Center.", ar: "الحي الفني في أبها، ويرتبط بالمعارض والمساحات الثقافية ومركز الملك فهد الثقافي." },
    image: "images/heritage-placeholder.svg",
    imageAlt: { en: "Illustrated arts district placeholder", ar: "صورة توضيحية مؤقتة لحي فني" },
    source: { en: "Place: Visit Saudi; location: OpenStreetMap record", ar: "المكان: Visit Saudi؛ الموقع: سجل OpenStreetMap" }
  },
  {
    id: "shamsan-castle",
    category: "heritage",
    coordinates: [18.2251973, 42.5036217],
    name: { en: "Shamsan Castle", ar: "قلعة شمسان" },
    description: { en: "A restored granite castle on an elevated point in eastern Abha, with panoramic city views.", ar: "قلعة جرانيتية مرممة في نقطة مرتفعة شرق أبها، وتوفر إطلالات بانورامية على المدينة." },
    image: "images/heritage-placeholder.svg",
    imageAlt: { en: "Illustrated hilltop castle placeholder", ar: "صورة توضيحية مؤقتة لقلعة على تل" },
    source: { en: "Place: Discover Aseer; location: OpenStreetMap record", ar: "المكان: Discover Aseer؛ الموقع: سجل OpenStreetMap" }
  },
  {
    id: "asir-regional-museum",
    category: "heritage",
    coordinates: [18.2161369, 42.49934],
    name: { en: "Asir Regional Museum", ar: "متحف عسير الإقليمي" },
    description: { en: "A mapped museum location in central Abha. Confirm visiting arrangements before your trip.", ar: "موقع متحف محدد على الخريطة في وسط أبها. تحقق من ترتيبات الزيارة قبل رحلتك." },
    image: "images/heritage-placeholder.svg",
    imageAlt: { en: "Illustrated museum placeholder", ar: "صورة توضيحية مؤقتة لمتحف" },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "civilisation-museum",
    category: "heritage",
    coordinates: [18.2131656, 42.4960586],
    name: { en: "Civilisation Museum", ar: "متحف الحضارة" },
    description: { en: "A mapped museum near Al Muftaha in Abha. Confirm current access and opening details before visiting.", ar: "متحف محدد على الخريطة قرب المفتاحة في أبها. تحقق من إمكانية الدخول ومواعيد الافتتاح قبل الزيارة." },
    image: "images/heritage-placeholder.svg",
    imageAlt: { en: "Illustrated museum placeholder", ar: "صورة توضيحية مؤقتة لمتحف" },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "abha-palace-theme-park",
    category: "family",
    coordinates: [18.2118131, 42.483873],
    name: { en: "Abha Palace Theme Park", ar: "مدينة أبها بالاس الترفيهية" },
    description: { en: "A family-oriented amusement destination in Abha. Confirm operating dates, ticketing, and available attractions before visiting.", ar: "وجهة ترفيهية عائلية في أبها. تحقق من أيام التشغيل والتذاكر والألعاب المتاحة قبل الزيارة." },
    image: "images/family-placeholder.svg",
    imageAlt: { en: "Illustrated family activity placeholder", ar: "صورة توضيحية مؤقتة لنشاط عائلي" },
    source: { en: "Location: published map coordinate", ar: "الموقع: إحداثية خريطة منشورة" }
  },
  {
    id: "al-andalus-park",
    category: "family",
    coordinates: [18.2122321, 42.5153326],
    name: { en: "Al Andalus Park", ar: "حديقة الأندلس" },
    description: { en: "A mapped city park in Abha that can suit a relaxed family stop. Check current facilities before visiting.", ar: "حديقة مدينة محددة على الخريطة في أبها وقد تناسب استراحة عائلية هادئة. تحقق من المرافق الحالية قبل الزيارة." },
    image: "images/family-placeholder.svg",
    imageAlt: { en: "Illustrated city park placeholder", ar: "صورة توضيحية مؤقتة لحديقة مدينة" },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "abha-dam-lake",
    category: "family",
    coordinates: [18.20, 42.50],
    name: { en: "Abha Dam Lake", ar: "بحيرة سد أبها" },
    description: { en: "A well-known Abha lake and dam area. The marker is a general lake-area reference point; confirm your preferred access point before setting off.", ar: "منطقة معروفة للبحيرة والسد في أبها. العلامة نقطة مرجعية عامة لمنطقة البحيرة؛ تحقق من نقطة الدخول المناسبة قبل الانطلاق." },
    image: "images/family-placeholder.svg",
    imageAlt: { en: "Illustrated lake placeholder", ar: "صورة توضيحية مؤقتة لبحيرة" },
    source: { en: "Area: published map reference — access point needs confirmation", ar: "المنطقة: مرجع خريطة منشور — تحتاج نقطة الدخول إلى تأكيد" },
    needsConfirmation: true
  }
];
