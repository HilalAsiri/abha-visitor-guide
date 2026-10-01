(() => {
  const translations = {
    en: {
      pageTitle: "Abha Visitor Guide | Aseer field guide", pageDescription: "A bilingual interactive visitor map for Abha and nearby Aseer attractions.",
      skipToMap: "Skip to map", brandLabel: "Abha Field Guide home", brandGuide: "Field Guide", languageLabel: "Language selector",
      theme: "Theme", themeLight: "light", themeDark: "dark", switchTheme: "Switch to {theme} mode",
      eyebrow: "Aseer highland field guide", heroTitle: "Discover Abha — Where Clouds Drift Through Green Mountains.",
      heroDescription: "A focused map for cloud forests, heritage lanes, good coffee, family stops, and practical stays across Abha and Aseer.",
      heroPhotoCredit: "Photo: Irshadpp / Wikimedia Commons · CC BY-SA 4.0 · Cropped for layout.", heroPhotoSource: "Source", heroImageAlt: "Green mountain slopes and low clouds at Al Soudah near Abha",
      startExploring: "Explore the map", chooseEyebrow: "Choose your day", categoryTitle: "Which side of Abha calls you?", categoryDescription: "Select a route lens to reveal its reviewed places.",
      categoryLabel: "Place categories", categoryFood: "Restaurants & Cafés", categoryFoodHint: "A pause for coffee or a meal", categoryNature: "Nature & Views", categoryNatureHint: "Highlands, parks, and outlooks",
      categoryHeritage: "Heritage & Culture", categoryHeritageHint: "Stories in stone and color", categoryFamily: "Family Activities", categoryFamilyHint: "Easy stops for everyone", categoryStays: "Hotels & Stays", categoryStaysHint: "A practical base for your visit",
      assistantEyebrow: "Plan with the local guide", assistantTitle: "Curated Visitor Assistant", assistantDescription: "Choose what matters and receive a local catalog recommendation. It does not use live booking, traffic, or opening-hour data.", assistantInterest: "What interests you?", assistantTime: "Time available", assistantFamily: "Travelling with family?", assistantBudget: "Budget", assistantSubmit: "Suggest places", assistantReset: "Clear", interestViews: "Mountain views", interestCulture: "Culture & heritage", interestFamily: "Family time", interestStay: "A practical stay", timeShort: "Under 2 hours", timeHalf: "Half a day", timeFull: "A full day", familyAny: "No preference", familyYes: "Yes", budgetAny: "No preference", budgetLow: "Lower-cost ideas", budgetMid: "Mid-range", budgetHigh: "Higher-end stay", assistantNoMatch: "Try another combination. This local guide only recommends places in its curated catalog.", assistantOpenPlace: "Show on map", assistantLocalNotice: "Recommendations come from this guide’s local curated catalog, not live booking data.",
      mapLabel: "Map explorer", mapPromptTitle: "Choose a category to explore.", mapPrompt: "The Abha overview is open. Select a route lens to reveal its places.", browsePlaces: "Browse places as a list",
      mealFilterLegend: "Choose a meal", mealFilterDescription: "Meal filters show only venue-specific service evidence recorded in this guide.", mealFilterLabel: "Restaurant meal filters", mealAll: "All", mealBreakfast: "Breakfast", mealLunch: "Lunch", mealDinner: "Dinner", foodRouteStatus: "{count} food places shown. Choose a marker or list item.", noVerifiedMealPlaces: "No verified {meal} places are in this guide yet. Meal periods are not inferred from venue type or location data.", returnToAll: "Show all food places",
      stayFilterLegend: "Choose a stay rating", stayFilterDescription: "Star filters include only properties with a separately recorded, source-backed classification.", stayFilterLabel: "Hotel star filters", stayAll: "All Stays", stay3Stars: "3 Stars", stay4Stars: "4 Stars", stay5Stars: "5 Stars", staysRouteStatus: "{count} stays shown. Choose a marker or list item.", noVerifiedStarStays: "No stays with a verified {stars}-star classification are in this guide yet. Ratings are not inferred from a property name, brand, or map record.", stayEmptyTitle: "No verified stay rating matches yet", returnToAllStays: "Show all stays", ratingNotVerified: "Rating not verified",
      noVerifiedHotelMeal: "No verified hotel {meal} availability is linked to this guide yet.",
      initialCardTitle: "Choose a place when you are ready", initialCardDescription: "Select a category, then choose a marker or a place from the keyboard-friendly list.", routeReadyTitle: "Your route is ready", routeReadyDescription: "Choose a marker or place from the list to see its story, image, and map link.", mealEmptyTitle: "No verified meal matches yet", mealEmptyDescription: "This guide does not infer meal service. Return to all food places to browse the mapped cafés and restaurants.",
      selectedPlace: "Selected: {place}", placesShown: "{count} places in this route", routeReadyStatus: "{count} places shown. Choose a marker or list item.", noPlaces: "No places are available in this route yet.", chooseCategoryList: "Choose a category to view its places.",
      accessibleListEyebrow: "A list, not just a map", accessibleListTitle: "Places in this route", accessibleListDescription: "Use this keyboard-friendly list to choose a place.",
      placeholderImage: "Local illustration", noVerifiedPhoto: "A verified reusable photo is not available for this place yet.", imageFallback: "The local image could not load. This local illustration is shown instead.",
      photoCredit: "Photo credit", modifiedPhoto: "Local derivative", openSource: "View source and licence", locationNote: "Location reference", needsConfirmation: "Area reference — confirm access", verifiedLocation: "Reviewed location", sourceLinks: "Sources", tagsLabel: "What to expect",
      openMaps: "View on Google Maps", opensNewTab: "opens in a new tab", focusPlaceCard: "Focus {place} on the map", cardFocusHint: "Select this card to refocus the map.",
      notesEyebrow: "Travel thoughtfully", notesTitle: "Good to know before you go", noteOne: "<strong>Coordinate-backed:</strong> Each Google Maps link opens the same coordinate used by this guide.",
      noteTwo: "<strong>Check ahead:</strong> Confirm times, prices, access, and seasonal availability directly with each place.", noteThree: "<strong>Images with care:</strong> Licensed local photos include visible credits; remaining cards use intentional local illustrations. Google Maps photos are never reused.",
      footerText: "Built for friends discovering Aseer"
    },
    ar: {
      pageTitle: "دليل زائر أبها | دليل عسير الميداني", pageDescription: "خريطة تفاعلية ثنائية اللغة لزوار أبها ووجهات عسير القريبة.",
      skipToMap: "انتقل إلى الخريطة", brandLabel: "الصفحة الرئيسية لدليل أبها الميداني", brandGuide: "دليل ميداني", languageLabel: "محدد اللغة",
      theme: "المظهر", themeLight: "الفاتح", themeDark: "الداكن", switchTheme: "التبديل إلى المظهر {theme}",
      eyebrow: "دليل عسير الميداني", heroTitle: "اكتشف أبها — حيث تعانق الغيوم الجبال الخضراء.",
      heroDescription: "خريطة مركزة للغابات الضبابية والأزقة التراثية والمقاهي الجميلة والوجهات العائلية والإقامات العملية في أبها وعسير.",
      heroPhotoCredit: "الصورة: Irshadpp / ويكيميديا كومنز · CC BY-SA 4.0 · تم اقتصاصها للعرض.", heroPhotoSource: "المصدر", heroImageAlt: "منحدرات جبلية خضراء وغيوم منخفضة في السودة قرب أبها",
      startExploring: "استكشف الخريطة", chooseEyebrow: "اختر يومك", categoryTitle: "أي جانب من أبها يناديك؟", categoryDescription: "اختر مساراً لإظهار أماكنه المراجعة.",
      categoryLabel: "فئات الأماكن", categoryFood: "مطاعم ومقاهٍ", categoryFoodHint: "استراحة لقهوة أو وجبة", categoryNature: "طبيعة وإطلالات", categoryNatureHint: "مرتفعات ومنتزهات ومناظر",
      categoryHeritage: "تراث وثقافة", categoryHeritageHint: "حكايات من الحجر واللون", categoryFamily: "أنشطة عائلية", categoryFamilyHint: "محطات سهلة للجميع", categoryStays: "إقامات وفنادق", categoryStaysHint: "قاعدة عملية لزيارتك",
      assistantEyebrow: "خطط مع الدليل المحلي", assistantTitle: "مساعد الزائر المنسق", assistantDescription: "اختر ما يهمك واحصل على توصية من دليل محلي منسق. لا يستخدم بيانات الحجز أو الحركة أو مواعيد العمل المباشرة.", assistantInterest: "ما الذي يهمك؟", assistantTime: "الوقت المتاح", assistantFamily: "هل تسافر مع العائلة؟", assistantBudget: "الميزانية", assistantSubmit: "اقترح أماكن", assistantReset: "مسح", interestViews: "إطلالات جبلية", interestCulture: "ثقافة وتراث", interestFamily: "وقت عائلي", interestStay: "إقامة عملية", timeShort: "أقل من ساعتين", timeHalf: "نصف يوم", timeFull: "يوم كامل", familyAny: "لا تفضيل", familyYes: "نعم", budgetAny: "لا تفضيل", budgetLow: "أفكار أقل تكلفة", budgetMid: "متوسط", budgetHigh: "إقامة أعلى سعراً", assistantNoMatch: "جرّب مجموعة مختلفة. يوصي هذا الدليل المحلي فقط بالأماكن الموجودة في كتالوجه المنسق.", assistantOpenPlace: "عرض على الخريطة", assistantLocalNotice: "تأتي التوصيات من كتالوج هذا الدليل المحلي، وليست من بيانات حجز مباشرة.",
      mapLabel: "مستكشف الخريطة", mapPromptTitle: "اختر فئة لاستكشاف الأماكن.", mapPrompt: "تظهر نظرة عامة على أبها. اختر مساراً لإظهار أماكنه.", browsePlaces: "تصفح الأماكن كقائمة",
      mealFilterLegend: "اختر الوجبة", mealFilterDescription: "تعرض فلاتر الوجبات فقط أدلة الخدمة الخاصة بالمكان والمسجلة في هذا الدليل.", mealFilterLabel: "فلاتر وجبات المطاعم", mealAll: "الكل", mealBreakfast: "الإفطار", mealLunch: "الغداء", mealDinner: "العشاء", foodRouteStatus: "تظهر {count} أماكن للطعام. اختر علامة أو عنصراً من القائمة.", noVerifiedMealPlaces: "لا توجد أماكن {meal} موثقة في هذا الدليل حتى الآن. لا تُستنتج الوجبات من نوع المكان أو بيانات الموقع.", returnToAll: "عرض جميع أماكن الطعام",
      stayFilterLegend: "اختر تصنيف الإقامة", stayFilterDescription: "تعرض فلاتر النجوم فقط المنشآت ذات التصنيف المسجل مع مصدر مستقل.", stayFilterLabel: "فلاتر نجوم الفنادق", stayAll: "جميع الإقامات", stay3Stars: "3 نجوم", stay4Stars: "4 نجوم", stay5Stars: "5 نجوم", staysRouteStatus: "تظهر {count} إقامات. اختر علامة أو عنصراً من القائمة.", noVerifiedStarStays: "لا توجد إقامات بتصنيف {stars} نجوم متحقق منه في هذا الدليل بعد. لا يُستنتج التصنيف من اسم المنشأة أو العلامة التجارية أو سجل الخريطة.", stayEmptyTitle: "لا توجد نتائج بتصنيف إقامة متحقق منه بعد", returnToAllStays: "عرض جميع الإقامات", ratingNotVerified: "تصنيف النجوم غير متحقق منه",
      noVerifiedHotelMeal: "لا تتوفر في هذا الدليل حتى الآن معلومات موثقة عن وجبة {meal} في فندق مرتبط.",
      initialCardTitle: "اختر مكاناً عندما تكون مستعداً", initialCardDescription: "اختر فئة، ثم حدد علامة على الخريطة أو مكاناً من القائمة المناسبة للوحة المفاتيح.", routeReadyTitle: "مسارك جاهز", routeReadyDescription: "اختر علامة أو مكاناً من القائمة لرؤية قصته وصورته ورابط الخريطة.", mealEmptyTitle: "لا توجد نتائج وجبات موثقة بعد", mealEmptyDescription: "لا يستنتج هذا الدليل خدمة الوجبات. عُد إلى جميع أماكن الطعام لتصفح المقاهي والمطاعم المحددة على الخريطة.",
      selectedPlace: "المكان المحدد: {place}", placesShown: "{count} أماكن في هذا المسار", routeReadyStatus: "تظهر {count} أماكن. اختر علامة أو عنصراً من القائمة.", noPlaces: "لا توجد أماكن متاحة في هذا المسار بعد.", chooseCategoryList: "اختر فئة لعرض أماكنها.",
      accessibleListEyebrow: "قائمة وليست خريطة فقط", accessibleListTitle: "أماكن في هذا المسار", accessibleListDescription: "استخدم هذه القائمة المناسبة للوحة المفاتيح لاختيار مكان.",
      placeholderImage: "رسم توضيحي محلي", noVerifiedPhoto: "لا تتوفر حالياً صورة قابلة لإعادة الاستخدام تم التحقق منها لهذا المكان.", imageFallback: "تعذر تحميل الصورة المحلية، لذلك تظهر هذه الصورة التوضيحية المحلية.",
      photoCredit: "حقوق الصورة", modifiedPhoto: "نسخة محلية مشتقة", openSource: "عرض المصدر والترخيص", locationNote: "مرجع الموقع", needsConfirmation: "مرجع للمنطقة — تحقق من نقطة الدخول", verifiedLocation: "موقع مراجع", sourceLinks: "المصادر", tagsLabel: "ما الذي تتوقعه",
      openMaps: "عرض في خرائط Google", opensNewTab: "يفتح في علامة تبويب جديدة", focusPlaceCard: "ركز {place} على الخريطة", cardFocusHint: "حدد هذه البطاقة لإعادة تركيز الخريطة.",
      notesEyebrow: "سافر بوعي", notesTitle: "معلومات مفيدة قبل الذهاب", noteOne: "<strong>إحداثية موحدة:</strong> يفتح كل رابط خرائط Google الإحداثية نفسها المستخدمة في هذا الدليل.",
      noteTwo: "<strong>تحقق مسبقاً:</strong> تأكد من المواعيد والأسعار وإمكانية الدخول والتوفر الموسمي مباشرةً مع كل مكان.", noteThree: "<strong>الصور بعناية:</strong> للصور المحلية المرخصة حقوق واضحة؛ أما البطاقات الأخرى فتستخدم رسوماً محلية مقصودة. لا يعاد استخدام صور خرائط Google.",
      footerText: "صُمم للأصدقاء الذين يكتشفون عسير"
    }
  };

  const fallbackImages = { food: "images/food-placeholder.svg", nature: "images/nature-placeholder.svg", heritage: "images/heritage-placeholder.svg", family: "images/family-placeholder.svg", stays: "images/stays-placeholder.svg" };
  const markerSymbols = { food: "F", nature: "N", heritage: "H", family: "A", stays: "S" };
  const defaultCenter = [18.2164, 42.5053];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let language = localStorage.getItem("abha-language") || "en";
  let activeCategory = null;
  let activeFoodMeal = "all";
  let activeStayStar = "all";
  let activePlace = null;
  let markers = [];

  const root = document.documentElement;
  const themeToggle = document.querySelector("#theme-toggle");
  const mapPrompt = document.querySelector("#map-prompt");
  const placeCard = document.querySelector("#place-card");
  const placeList = document.querySelector("#place-list");
  const mapStatus = document.querySelector("#map-status");
  const mapElement = document.querySelector("#map");
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const assistantForm = document.querySelector("#assistant-form");
  const assistantResults = document.querySelector("#assistant-results");
  const mealFilter = document.querySelector("#meal-filter");
  const mealStayContext = document.querySelector("#meal-stay-context");
  const stayFilter = document.querySelector("#stay-filter");

  const map = L.map("map", { scrollWheelZoom: false, zoomControl: false, attributionControl: false }).setView(defaultCenter, 10);
  const zoomControl = L.control.zoom({ position: "topleft" }).addTo(map);
  const attributionControl = L.control.attribution({ position: "bottomright", prefix: false }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors' }).addTo(map);
  mapElement.classList.add("is-ready");

  function text(key) { return translations[language][key]; }
  function localized(value) { return value?.[language] || value?.en || ""; }
  function placeText(place, key) { return localized(place[key]); }
  function mediaText(media, key) { return localized(media[key]); }
  function categoryRecord(category) { return window.CATALOG.categories.find((item) => item.id === category); }
  function categoryName(category) { return localized(categoryRecord(category)?.label); }
  function tagName(tagId) { return localized(window.CATALOG.tags.find((tag) => tag.id === tagId)?.label) || tagId; }
  function sourceRecord(sourceId) { return window.CATALOG.sources.find((source) => source.id === sourceId); }
  function mapUrl(place) { return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.coordinates[0]},${place.coordinates[1]}`)}`; }
  function externalIcon() { return '<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>'; }
  function reducedMotion() { return reduceMotion.matches; }
  function activeMealLabel() { return text(`meal${activeFoodMeal[0].toUpperCase()}${activeFoodMeal.slice(1)}`); }
  function hasMealEvidence(place, meal) {
    return Boolean(place.mealPeriodIds?.includes(meal) && place.mealPeriodEvidence?.[meal]?.source && place.mealPeriodEvidence?.[meal]?.checkedAt);
  }
  function hasVerifiedStarRating(place, stars) {
    return Boolean(
      place.starRating === Number(stars) &&
      place.starRatingEvidence?.source &&
      place.starRatingEvidence?.checkedAt
    );
  }
  function routePlaces() {
    if (!activeCategory) return [];
    const categoryPlaces = window.PLACES.filter((place) => place.category === activeCategory);
    if (activeCategory === "food" && activeFoodMeal !== "all") {
      return categoryPlaces.filter((place) => hasMealEvidence(place, activeFoodMeal));
    }
    if (activeCategory === "stays" && activeStayStar !== "all") {
      return categoryPlaces.filter((place) => hasVerifiedStarRating(place, activeStayStar));
    }
    return categoryPlaces;
  }
  function isMealEmptyState() { return activeCategory === "food" && activeFoodMeal !== "all" && !routePlaces().length; }
  function isStayEmptyState() { return activeCategory === "stays" && activeStayStar !== "all" && !routePlaces().length; }
  function updateMealStayContext() {
    const visible = activeCategory === "food" && activeFoodMeal !== "all";
    mealStayContext.hidden = !visible;
    if (!visible) {
      mealStayContext.textContent = "";
      return;
    }
    mealStayContext.textContent = text("noVerifiedHotelMeal").replace("{meal}", activeMealLabel());
  }
  function updateMealFilter() {
    const visible = activeCategory === "food";
    mealFilter.hidden = !visible;
    document.querySelectorAll(".meal-filter-button").forEach((button) => {
      const selected = button.dataset.meal === activeFoodMeal;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }
  function updateStayFilter() {
    const visible = activeCategory === "stays";
    stayFilter.hidden = !visible;
    document.querySelectorAll(".stay-filter-button").forEach((button) => {
      const selected = button.dataset.star === activeStayStar;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }
  function mealEmptyMessage() { return text("noVerifiedMealPlaces").replace("{meal}", activeMealLabel()); }
  function stayEmptyMessage() { return text("noVerifiedStarStays").replace("{stars}", activeStayStar); }

  function updateThemeButton() {
    const isDark = root.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", text("switchTheme").replace("{theme}", isDark ? text("themeLight") : text("themeDark")));
    document.querySelector(".theme-label").textContent = text("theme");
  }

  function updateMapControlDirection() {
    zoomControl.setPosition(language === "ar" ? "topright" : "topleft");
    attributionControl.setPosition(language === "ar" ? "bottomleft" : "bottomright");
  }

  function applyText() {
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    document.title = text("pageTitle");
    descriptionMeta.content = text("pageDescription");
    document.querySelectorAll("[data-i18n]").forEach((node) => { node.innerHTML = text(node.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => { node.setAttribute("aria-label", text(node.dataset.i18nAria)); });
    document.querySelectorAll("[data-i18n-alt]").forEach((node) => { node.alt = text(node.dataset.i18nAlt); });
    document.querySelectorAll(".language-button").forEach((button) => {
      const selected = button.dataset.language === language;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    document.querySelectorAll("[data-count]").forEach((node) => { node.textContent = String(window.PLACES.filter((place) => place.category === node.dataset.count).length); });
    updateThemeButton();
    updateMapControlDirection();
    renderCategory();
    window.setTimeout(() => map.invalidateSize(), 0);
  }

  function markerIcon(category, selected = false) {
    return L.divIcon({ className: "", html: `<span class="place-marker marker-${category}${selected ? " is-selected" : ""}" aria-hidden="true"><span>${markerSymbols[category]}</span></span>`, iconSize: [41, 41], iconAnchor: [21, 39] });
  }

  function clearMarkers() { markers.forEach(({ marker }) => map.removeLayer(marker)); markers = []; }
  function updateMarkerSelection() {
    markers.forEach(({ marker, place }) => marker.setIcon(markerIcon(place.category, activePlace?.id === place.id)));
  }

  function renderList(places) {
    placeList.innerHTML = "";
    if (!activeCategory) { placeList.innerHTML = `<p class="list-empty">${text("chooseCategoryList")}</p>`; return; }
    if (!places.length) {
      if (isMealEmptyState() || isStayEmptyState()) {
        const message = document.createElement("p");
        message.className = "list-empty";
        message.textContent = isMealEmptyState() ? mealEmptyMessage() : stayEmptyMessage();
        const reset = document.createElement("button");
        reset.type = "button";
        reset.className = "list-empty-action";
        reset.textContent = isMealEmptyState() ? text("returnToAll") : text("returnToAllStays");
        reset.addEventListener("click", () => {
          if (isMealEmptyState()) activeFoodMeal = "all";
          else activeStayStar = "all";
          renderCategory();
        });
        placeList.append(message, reset);
      } else placeList.innerHTML = `<p class="list-empty">${text("noPlaces")}</p>`;
      return;
    }
    places.forEach((place) => {
      const button = document.createElement("button");
      const selected = activePlace?.id === place.id;
      button.className = `place-list-item${selected ? " is-selected" : ""}`;
      button.type = "button";
      button.setAttribute("aria-pressed", String(selected));
      button.innerHTML = `<span><strong>${placeText(place, "name")}</strong><small>${categoryName(place.category)}${place.needsConfirmation ? ` · ${text("needsConfirmation")}` : ""}</small></span><span class="list-arrow" aria-hidden="true">↗</span>`;
      button.addEventListener("click", () => showPlace(place));
      placeList.append(button);
    });
  }

  function renderImage(place, updateFallbackState) {
    const image = document.createElement("img");
    const { media } = place;
    image.src = media.src;
    image.alt = mediaText(media, "alt");
    image.width = media.width || 1200;
    image.height = media.height || 800;
    image.loading = "eager";
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied) return;
      image.dataset.fallbackApplied = "true";
      image.src = fallbackImages[place.category];
      image.alt = text("imageFallback");
      image.classList.add("card-image-error");
      const fallback = document.createElement("div");
      fallback.className = "image-fallback";
      fallback.setAttribute("role", "status");
      fallback.innerHTML = `<span>${text("imageFallback")}</span>`;
      image.parentElement.append(fallback);
      updateFallbackState();
    });
    return image;
  }

  function sourceLinks(place) {
    const records = (place.verification?.sourceIds || []).map(sourceRecord).filter(Boolean);
    if (!records.length) return "";
    return `<div class="source-links"><strong>${text("sourceLinks")}:</strong> ${records.map((source) => `<a href="${source.url}" target="_blank" rel="noopener">${localized(source.title)}</a>`).join(" · ")}</div>`;
  }

  function renderCard(place) {
    if (!place) {
      const hasRoute = Boolean(activeCategory);
      const mealEmpty = isMealEmptyState();
      const stayEmpty = isStayEmptyState();
      placeCard.className = "place-card card-empty";
      placeCard.removeAttribute("tabindex");
      placeCard.removeAttribute("role");
      placeCard.removeAttribute("aria-label");
      placeCard.removeAttribute("aria-describedby");
      placeCard.innerHTML = `<span class="empty-mark" aria-hidden="true">${hasRoute ? "02" : "01"}</span><h3 id="place-panel-title">${text(mealEmpty ? "mealEmptyTitle" : stayEmpty ? "stayEmptyTitle" : hasRoute ? "routeReadyTitle" : "initialCardTitle")}</h3><p>${mealEmpty ? text("mealEmptyDescription") : stayEmpty ? stayEmptyMessage() : text(hasRoute ? "routeReadyDescription" : "initialCardDescription")}</p>`;
      if (mealEmpty || stayEmpty) {
        const reset = document.createElement("button");
        reset.type = "button";
        reset.className = "list-empty-action";
        reset.textContent = mealEmpty ? text("returnToAll") : text("returnToAllStays");
        reset.addEventListener("click", () => {
          if (mealEmpty) activeFoodMeal = "all";
          else activeStayStar = "all";
          renderCategory();
        });
        placeCard.append(reset);
      }
      return;
    }
    placeCard.className = "place-card is-selected";
    placeCard.innerHTML = "";
    placeCard.tabIndex = 0;
    placeCard.setAttribute("role", "button");
    placeCard.setAttribute("aria-label", text("focusPlaceCard").replace("{place}", placeText(place, "name")));
    placeCard.setAttribute("aria-describedby", "place-card-focus-hint");
    const media = document.createElement("div");
    media.className = "card-media";
    const badge = document.createElement("span");
    badge.className = "image-badge";
    badge.textContent = place.media.kind === "photo" ? text("modifiedPhoto") : text("placeholderImage");
    const body = document.createElement("div");
    body.className = "place-card-body";
    const credit = place.media.credit;
    const provenance = document.createElement("div");
    provenance.className = credit ? "photo-credit" : "image-status";
    provenance.innerHTML = credit ? `<strong>${text("photoCredit")}:</strong> ${credit.creator} · <a href="${credit.licenseUrl}" target="_blank" rel="noopener">${credit.license}</a><br><span>${mediaText(credit, "notice")}</span> <a href="${credit.sourceUrl}" target="_blank" rel="noopener">${text("openSource")}</a>` : text("noVerifiedPhoto");
    const updateFallbackState = () => { badge.textContent = text("placeholderImage"); provenance.className = "image-status"; provenance.textContent = text("imageFallback"); };
    media.append(renderImage(place, updateFallbackState), badge);
    const tags = (place.tagIds || []).map(tagName).map((label) => `<span>${label}</span>`).join("");
    const statusLabel = place.needsConfirmation ? text("needsConfirmation") : text("verifiedLocation");
    const ratingLabel = place.category === "stays"
      ? `<span class="confirmation-tag${hasVerifiedStarRating(place, place.starRating) ? " is-verified" : ""}">${hasVerifiedStarRating(place, place.starRating) ? `${place.starRating} ${text("stay5Stars").replace("5 ", "")}` : text("ratingNotVerified")}</span>`
      : `<span class="confirmation-tag${place.needsConfirmation ? "" : " is-verified"}">${statusLabel}</span>`;
    body.innerHTML = `<span class="visually-hidden" id="place-card-focus-hint">${text("cardFocusHint")}</span><div class="card-kicker"><span class="category-tag">${categoryName(place.category)}</span>${ratingLabel}</div><h3 id="place-panel-title">${placeText(place, "name")}</h3><p>${placeText(place, "description")}</p>${tags ? `<div class="tag-group"><strong>${text("tagsLabel")}:</strong>${tags}</div>` : ""}`;
    body.append(provenance);
    const source = document.createElement("small");
    source.className = "card-source";
    source.innerHTML = `<strong>${text("locationNote")}:</strong> ${placeText(place, "source")}`;
    body.append(source);
    const evidence = sourceLinks(place);
    if (evidence) body.insertAdjacentHTML("beforeend", evidence);
    const mapsLink = document.createElement("a");
    mapsLink.className = "map-link";
    mapsLink.href = mapUrl(place);
    mapsLink.target = "_blank";
    mapsLink.rel = "noopener";
    mapsLink.innerHTML = `${text("openMaps")} ${externalIcon()}<span class="visually-hidden"> (${text("opensNewTab")})</span>`;
    body.append(mapsLink);
    placeCard.append(media, body);
  }

  function showPlace(place) {
    if (!routePlaces().some((item) => item.id === place.id)) return;
    activePlace = place;
    renderCard(place);
    updateMarkerSelection();
    renderList(routePlaces());
    const routeStatus = activeCategory === "food" ? text("foodRouteStatus") : activeCategory === "stays" ? text("staysRouteStatus") : text("routeReadyStatus");
    mapStatus.textContent = `${routeStatus.replace("{count}", routePlaces().length)} · ${text("selectedPlace").replace("{place}", placeText(place, "name"))}`;
    if (reducedMotion()) map.setView(place.coordinates, 14);
    else map.flyTo(place.coordinates, 14, { duration: 0.45 });
    markers.find((item) => item.place.id === place.id)?.marker.openTooltip();
    document.querySelector("#place-panel").scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "nearest" });
  }

  function renderCategory() {
    clearMarkers();
    document.querySelectorAll(".category-button").forEach((button) => {
      const selected = button.dataset.category === activeCategory;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    if (activeCategory !== "food") activeFoodMeal = "all";
    if (activeCategory !== "stays") activeStayStar = "all";
    updateMealFilter();
    updateMealStayContext();
    updateStayFilter();
    if (!activeCategory) {
      mapPrompt.hidden = false;
      activePlace = null;
      renderCard(null);
      renderList([]);
      mapStatus.textContent = text("mapPrompt");
      map.setView(defaultCenter, 10, { animate: !reducedMotion() });
      return;
    }
    mapPrompt.hidden = true;
    const selectedPlaces = routePlaces();
    if (activePlace && !selectedPlaces.some((place) => place.id === activePlace.id)) activePlace = null;
    selectedPlaces.forEach((place) => {
      const marker = L.marker(place.coordinates, { icon: markerIcon(place.category, activePlace?.id === place.id), title: placeText(place, "name"), keyboard: true }).addTo(map);
      marker.bindTooltip(placeText(place, "name"), { direction: "top", offset: [0, -37] });
      marker.on("click keypress", () => showPlace(place));
      markers.push({ marker, place });
    });
    if (selectedPlaces.length) {
      const bounds = L.latLngBounds(selectedPlaces.map((place) => place.coordinates));
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: activeCategory === "heritage" ? 12 : 13, animate: !reducedMotion() });
    } else map.setView(defaultCenter, 10, { animate: !reducedMotion() });
    renderCard(activePlace);
    renderList(selectedPlaces);
    if (!selectedPlaces.length) mapStatus.textContent = isMealEmptyState() ? mealEmptyMessage() : isStayEmptyState() ? stayEmptyMessage() : text("noPlaces");
    else {
      const routeStatus = activeCategory === "food" ? text("foodRouteStatus") : activeCategory === "stays" ? text("staysRouteStatus") : text("routeReadyStatus");
      mapStatus.textContent = activePlace
        ? `${routeStatus.replace("{count}", selectedPlaces.length)} · ${text("selectedPlace").replace("{place}", placeText(activePlace, "name"))}`
        : routeStatus.replace("{count}", selectedPlaces.length);
    }
  }

  function assistantSelection() {
    return { interest: document.querySelector("#assistant-interest").value, time: document.querySelector("#assistant-time").value, family: document.querySelector("#assistant-family").value, budget: document.querySelector("#assistant-budget").value };
  }

  function matches(value, options) { return options.includes("any") || options.includes(value); }

  function renderAssistantResult(curation, selection) {
    assistantResults.innerHTML = "";
    if (!curation) { assistantResults.textContent = text("assistantNoMatch"); return; }
    const heading = document.createElement("h4");
    heading.textContent = localized(curation.title);
    const reason = document.createElement("p");
    reason.textContent = localized(curation.reason);
    const caveat = document.createElement("p");
    caveat.className = "assistant-caveat";
    caveat.textContent = localized(curation.caveat);
    const notice = document.createElement("small");
    notice.textContent = text("assistantLocalNotice");
    const choices = document.createElement("div");
    choices.className = "assistant-choices";
    curation.placeIds.map((id) => window.PLACES.find((place) => place.id === id)).filter(Boolean).forEach((place) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = `${placeText(place, "name")} · ${text("assistantOpenPlace")}`;
      button.addEventListener("click", () => {
        activeCategory = place.category;
        renderCategory();
        showPlace(place);
      });
      choices.append(button);
    });
    assistantResults.append(heading, reason, choices, caveat, notice);
  }

  document.querySelectorAll(".category-button").forEach((button) => {
    button.addEventListener("click", () => {
      const nextCategory = activeCategory === button.dataset.category ? null : button.dataset.category;
      if (nextCategory !== "food") activeFoodMeal = "all";
      else if (activeCategory !== "food") activeFoodMeal = "all";
      activeCategory = nextCategory;
      activePlace = null;
      renderCategory();
      document.querySelector("#explore").scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "start" });
    });
  });
  placeCard.addEventListener("click", (event) => {
    if (!activePlace || event.target.closest("a, button")) return;
    showPlace(activePlace);
  });
  placeCard.addEventListener("keydown", (event) => {
    if (!activePlace || event.target.closest("a, button")) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    showPlace(activePlace);
  });
  document.querySelectorAll(".meal-filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFoodMeal = button.dataset.meal;
      renderCategory();
    });
  });
  document.querySelectorAll(".stay-filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeStayStar = button.dataset.star;
      renderCategory();
    });
  });
  document.querySelectorAll(".language-button").forEach((button) => button.addEventListener("click", () => { language = button.dataset.language; localStorage.setItem("abha-language", language); applyText(); }));
  themeToggle.addEventListener("click", () => { root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark"; localStorage.setItem("abha-theme", root.dataset.theme); updateThemeButton(); });
  assistantForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selection = assistantSelection();
    const interestMatches = window.CATALOG.curations.filter((item) => item.interests.includes(selection.interest));
    const curated = interestMatches.find((item) => matches(selection.time, item.time) && matches(selection.family, item.family) && matches(selection.budget, item.budget)) || interestMatches[0];
    renderAssistantResult(curated, selection);
  });
  document.querySelector("#assistant-reset").addEventListener("click", () => { assistantForm.reset(); assistantResults.innerHTML = ""; });
  document.querySelector(".intro-art img").addEventListener("error", (event) => {
    const image = event.currentTarget;
    if (image.dataset.fallbackApplied) return;
    image.dataset.fallbackApplied = "true";
    image.src = image.dataset.fallbackSrc;
  });

  const savedTheme = localStorage.getItem("abha-theme");
  root.dataset.theme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyText();
  window.addEventListener("resize", () => map.invalidateSize());
})();
