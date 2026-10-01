/*
 * Images are project-local. Licensed photographs and their full provenance are
 * recorded in images/credits.md; placeholders are intentional when a specific
 * reusable photograph could not be verified.
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
    media: { src: "images/food-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated coffee shop placeholder", ar: "صورة توضيحية مؤقتة لمقهى" } },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "fit-kitchen",
    category: "food",
    coordinates: [18.2168804, 42.5218626],
    name: { en: "Fit Kitchen", ar: "فت كتشن" },
    description: { en: "A mapped restaurant stop in Abha. Check the current menu and hours before you go.", ar: "مطعم محدد على الخريطة في أبها. تحقق من قائمة الطعام وساعات العمل الحالية قبل الذهاب." },
    media: { src: "images/food-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated restaurant placeholder", ar: "صورة توضيحية مؤقتة لمطعم" } },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "carlito",
    category: "food",
    coordinates: [18.2100777, 42.4906043],
    name: { en: "Carlito", ar: "كارليتو" },
    description: { en: "A restaurant mapped in Abha. Availability and menu details should be confirmed with the venue.", ar: "مطعم محدد على الخريطة في أبها. ينبغي تأكيد التوفر وتفاصيل القائمة مع المكان." },
    media: { src: "images/food-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated restaurant placeholder", ar: "صورة توضيحية مؤقتة لمطعم" } },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "kudu-abha",
    category: "food",
    coordinates: [18.2108561, 42.489808],
    name: { en: "Kudu — Abha", ar: "كودو — أبها" },
    description: { en: "A mapped Abha branch of the Saudi quick-service restaurant. Confirm current services before visiting.", ar: "فرع محدد على الخريطة في أبها من مطعم الخدمة السريعة السعودي. تحقق من الخدمات الحالية قبل الزيارة." },
    media: { src: "images/food-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated quick-service restaurant placeholder", ar: "صورة توضيحية مؤقتة لمطعم خدمة سريعة" } },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "al-soudah",
    category: "nature",
    coordinates: [18.2717, 42.3840],
    name: { en: "Al Soudah", ar: "السودة" },
    description: { en: "Highland scenery near Abha, known for mountain landscapes. The pin marks the Al Soudah area; confirm access for your route.", ar: "منطقة مرتفعة قرب أبها معروفة بالمناظر الجبلية. تشير العلامة إلى منطقة السودة؛ تحقق من إمكانية الوصول لمسارك." },
    media: { src: "images/nature-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated highland landscape placeholder", ar: "صورة توضيحية مؤقتة لمنظر مرتفع" } },
    source: { en: "Place: Visit Saudi; area coordinate: map reference", ar: "المكان: Visit Saudi؛ إحداثية المنطقة: مرجع خرائطي" }
  },
  {
    id: "abu-kheyal-park",
    category: "nature",
    coordinates: [18.200211, 42.499763],
    name: { en: "Abu Kheyal Park", ar: "منتزه أبو خيال" },
    description: { en: "An elevated park in Abha with city and mountain views. Confirm access and facilities before visiting.", ar: "منتزه مرتفع في أبها بإطلالات على المدينة والجبال. تحقق من الدخول والمرافق قبل الزيارة." },
    media: { src: "images/nature-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated park landscape placeholder", ar: "صورة توضيحية مؤقتة لمنتزه" } },
    source: { en: "Location: published map coordinate", ar: "الموقع: إحداثية خريطة منشورة" }
  },
  {
    id: "waterfall-park",
    category: "nature",
    coordinates: [18.2315793, 42.5005299],
    name: { en: "Waterfall Park", ar: "منتزه الشلال" },
    description: { en: "A mapped public park in Abha. Check local conditions and facilities before you visit.", ar: "منتزه عام محدد على الخريطة في أبها. تحقق من الظروف والمرافق المحلية قبل الزيارة." },
    media: { src: "images/nature-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated park placeholder", ar: "صورة توضيحية مؤقتة لمنتزه" } },
    source: { en: "Location: published map coordinate", ar: "الموقع: إحداثية خريطة منشورة" }
  },
  {
    id: "rijal-almaa",
    category: "heritage",
    coordinates: [18.2124594, 42.2734154],
    name: { en: "Rijal Almaa Heritage Village", ar: "قرية رجال ألمع التراثية" },
    description: { en: "A historic stone-built village in Aseer, widely known for its distinctive architecture and heritage setting.", ar: "قرية تاريخية مبنية بالحجر في عسير، وتشتهر بعمارتها المميزة وطابعها التراثي." },
    media: {
      src: "images/places/rijal-almaa.jpg", kind: "photo", width: 3024, height: 4032,
      alt: { en: "Stone houses in Rijal Almaa historical village", ar: "بيوت حجرية في قرية رجال ألمع التاريخية" },
      credit: {
        creator: "Richard Mortel", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Rijal_Almaa_village_2021.jpg",
        notice: { en: "Cropped and saved locally as a JPEG derivative.", ar: "اقتصّت الصورة وحُفظت محلياً كنسخة JPEG مشتقة." }
      }
    },
    source: { en: "Place: Visit Saudi; location: OpenStreetMap record", ar: "المكان: Visit Saudi؛ الموقع: سجل OpenStreetMap" }
  },
  {
    id: "al-muftaha",
    category: "heritage",
    coordinates: [18.2131377, 42.4955574],
    name: { en: "Al Muftaha Art Village", ar: "قرية المفتاحة الفنية" },
    description: { en: "Abha’s arts district, associated with galleries, cultural spaces, and the King Fahad Cultural Center.", ar: "الحي الفني في أبها، ويرتبط بالمعارض والمساحات الثقافية ومركز الملك فهد الثقافي." },
    media: { src: "images/heritage-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated arts district placeholder", ar: "صورة توضيحية مؤقتة لحي فني" } },
    source: { en: "Place: Visit Saudi; location: OpenStreetMap record", ar: "المكان: Visit Saudi؛ الموقع: سجل OpenStreetMap" }
  },
  {
    id: "shamsan-castle",
    category: "heritage",
    coordinates: [18.2251973, 42.5036217],
    name: { en: "Shamsan Castle", ar: "قلعة شمسان" },
    description: { en: "A restored granite castle on an elevated point in eastern Abha, with panoramic city views.", ar: "قلعة جرانيتية مرممة في نقطة مرتفعة شرق أبها، وتوفر إطلالات بانورامية على المدينة." },
    media: {
      src: "images/places/shamsan-castle.jpg", kind: "photo", width: 3000, height: 4496,
      alt: { en: "Shamsan Castle in Abha", ar: "قلعة شمسان في أبها" },
      credit: {
        creator: "Heritage Commission", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:%D9%82%D9%84%D8%B9%D8%A9_%D8%B4%D9%85%D8%B3%D8%A7%D9%86.jpg",
        notice: { en: "Cropped and saved locally as a JPEG derivative; shared under CC BY-SA 4.0.", ar: "اقتصّت الصورة وحُفظت محلياً كنسخة JPEG مشتقة؛ وتتاح وفق CC BY-SA 4.0." }
      }
    },
    source: { en: "Place: Discover Aseer; location: OpenStreetMap record", ar: "المكان: Discover Aseer؛ الموقع: سجل OpenStreetMap" }
  },
  {
    id: "asir-regional-museum",
    category: "heritage",
    coordinates: [18.2161369, 42.49934],
    name: { en: "Asir Regional Museum", ar: "متحف عسير الإقليمي" },
    description: { en: "A mapped museum location in central Abha. Confirm visiting arrangements before your trip.", ar: "موقع متحف محدد على الخريطة في وسط أبها. تحقق من ترتيبات الزيارة قبل رحلتك." },
    media: { src: "images/heritage-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated museum placeholder", ar: "صورة توضيحية مؤقتة لمتحف" } },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "civilisation-museum",
    category: "heritage",
    coordinates: [18.2131656, 42.4960586],
    name: { en: "Civilisation Museum", ar: "متحف الحضارة" },
    description: { en: "A mapped museum near Al Muftaha in Abha. Confirm current access and opening details before visiting.", ar: "متحف محدد على الخريطة قرب المفتاحة في أبها. تحقق من إمكانية الدخول ومواعيد الافتتاح قبل الزيارة." },
    media: { src: "images/heritage-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated museum placeholder", ar: "صورة توضيحية مؤقتة لمتحف" } },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "abha-palace-theme-park",
    category: "family",
    coordinates: [18.2118131, 42.483873],
    name: { en: "Abha Palace Theme Park", ar: "مدينة أبها بالاس الترفيهية" },
    description: { en: "A family-oriented amusement destination in Abha. Confirm operating dates, ticketing, and available attractions before visiting.", ar: "وجهة ترفيهية عائلية في أبها. تحقق من أيام التشغيل والتذاكر والألعاب المتاحة قبل الزيارة." },
    media: { src: "images/family-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated family activity placeholder", ar: "صورة توضيحية مؤقتة لنشاط عائلي" } },
    source: { en: "Location: published map coordinate", ar: "الموقع: إحداثية خريطة منشورة" }
  },
  {
    id: "al-andalus-park",
    category: "family",
    coordinates: [18.2122321, 42.5153326],
    name: { en: "Al Andalus Park", ar: "حديقة الأندلس" },
    description: { en: "A mapped city park in Abha that can suit a relaxed family stop. Check current facilities before visiting.", ar: "حديقة مدينة محددة على الخريطة في أبها وقد تناسب استراحة عائلية هادئة. تحقق من المرافق الحالية قبل الزيارة." },
    media: { src: "images/family-placeholder.svg", kind: "placeholder", alt: { en: "Illustrated city park placeholder", ar: "صورة توضيحية مؤقتة لحديقة مدينة" } },
    source: { en: "Location: OpenStreetMap record", ar: "الموقع: سجل OpenStreetMap" }
  },
  {
    id: "abha-dam-lake",
    category: "family",
    coordinates: [18.20, 42.50],
    name: { en: "Abha Dam Lake", ar: "بحيرة سد أبها" },
    description: { en: "A well-known Abha lake and dam area. The marker is a general lake-area reference point; confirm your preferred access point before setting off.", ar: "منطقة معروفة للبحيرة والسد في أبها. العلامة نقطة مرجعية عامة لمنطقة البحيرة؛ تحقق من نقطة الدخول المناسبة قبل الانطلاق." },
    media: {
      src: "images/places/abha-dam.jpg", kind: "photo", width: 3000, height: 4000,
      alt: { en: "Boat on Abha Dam water", ar: "قارب على مياه سد أبها" },
      credit: {
        creator: "Aiman ALhaddad", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Boat_on_Abha.jpg",
        notice: { en: "Cropped and saved locally as a JPEG derivative; shared under CC BY-SA 3.0.", ar: "اقتصّت الصورة وحُفظت محلياً كنسخة JPEG مشتقة؛ وتتاح وفق CC BY-SA 3.0." }
      }
    },
    source: { en: "Area: published map reference — access point needs confirmation", ar: "المنطقة: مرجع خريطة منشور — تحتاج نقطة الدخول إلى تأكيد" },
    needsConfirmation: true
  }
];
