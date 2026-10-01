(() => {
  const translations = {
    en: {
      skipToMap: "Skip to map", brandLabel: "Abha Field Guide home", brandGuide: "Field Guide", languageLabel: "Language selector",
      theme: "Theme", themeLight: "light", themeDark: "dark", switchTheme: "Switch to {theme} mode",
      eyebrow: "Aseer highland field guide", heroTitle: "A slower way to find Abha.",
      heroDescription: "A focused map for cloud forests, heritage lanes, good coffee, and family stops across Abha, Al Soudah, and Rijal Almaa.",
      heroPlaceholder: "Illustrated local placeholder — replace with a licensed Abha image.", heroImageAlt: "Illustrated mountain landscape placeholder for a future licensed Abha photograph",
      startExploring: "Explore the map", chooseEyebrow: "Choose your day", categoryTitle: "Which side of Abha calls you?", categoryDescription: "Select a route lens to reveal its verified places.",
      categoryLabel: "Place categories", categoryFood: "Restaurants & Cafés", categoryFoodHint: "A pause for coffee or a meal", categoryNature: "Nature & Views", categoryNatureHint: "Highlands, parks, and outlooks",
      categoryHeritage: "Heritage & Culture", categoryHeritageHint: "Stories in stone and color", categoryFamily: "Family Activities", categoryFamilyHint: "Easy stops for everyone",
      mapLabel: "Map explorer", mapPromptTitle: "Your map is ready.", mapPrompt: "Choose a route lens to reveal a small set of places.", browsePlaces: "Browse places as a list",
      initialCardTitle: "Start with a route lens", initialCardDescription: "Choose food, nature, heritage, or family activities. A local illustrated place card will appear here.",
      selectedPrefix: "Selected", selectedPlace: "Selected: {place}", placesShown: "{count} places in this route", noPlaces: "No places are available in this route yet.",
      accessibleListEyebrow: "A list, not just a map", accessibleListTitle: "Places in this route", accessibleListDescription: "Use this keyboard-friendly list to choose a place.",
      illustratedPlaceholder: "Illustrated placeholder", imageFallback: "The local image could not load. This illustrated fallback is shown instead.",
      openMaps: "Open in Google Maps", opensNewTab: "opens in a new tab", locationNote: "Location reference", needsConfirmation: "General area pin — confirm access",
      notesEyebrow: "Travel thoughtfully", notesTitle: "Good to know before you go", noteOne: "<strong>Exact pin:</strong> Each map link opens the same coordinate used by this guide.",
      noteTwo: "<strong>Check ahead:</strong> Confirm times, prices, access, and seasonal availability directly with each place.",
      noteThree: "<strong>Illustrated for now:</strong> Current art is a local placeholder, ready to be replaced by licensed photography.",
      footerText: "Built for friends discovering Aseer"
    },
    ar: {
      skipToMap: "انتقل إلى الخريطة", brandLabel: "الصفحة الرئيسية لدليل أبها الميداني", brandGuide: "دليل ميداني", languageLabel: "محدد اللغة",
      theme: "المظهر", themeLight: "الفاتح", themeDark: "الداكن", switchTheme: "التبديل إلى المظهر {theme}",
      eyebrow: "دليل عسير الميداني", heroTitle: "اكتشف أبها على مهل.",
      heroDescription: "خريطة مركزة للغابات الضبابية والأزقة التراثية والمقاهي الجميلة والوجهات العائلية في أبها والسودة ورجال ألمع.",
      heroPlaceholder: "صورة توضيحية محلية مؤقتة — استبدلها بصورة مرخصة لأبها.", heroImageAlt: "صورة توضيحية مؤقتة لمنظر جبلي في أبها",
      startExploring: "استكشف الخريطة", chooseEyebrow: "اختر يومك", categoryTitle: "أي جانب من أبها يناديك؟", categoryDescription: "اختر مساراً لإظهار أماكنه الموثقة.",
      categoryLabel: "فئات الأماكن", categoryFood: "مطاعم ومقاهٍ", categoryFoodHint: "استراحة لقهوة أو وجبة", categoryNature: "طبيعة وإطلالات", categoryNatureHint: "مرتفعات ومنتزهات ومناظر",
      categoryHeritage: "تراث وثقافة", categoryHeritageHint: "حكايات من الحجر واللون", categoryFamily: "أنشطة عائلية", categoryFamilyHint: "محطات سهلة للجميع",
      mapLabel: "مستكشف الخريطة", mapPromptTitle: "خريطتك جاهزة.", mapPrompt: "اختر مساراً لإظهار مجموعة صغيرة من الأماكن.", browsePlaces: "تصفح الأماكن كقائمة",
      initialCardTitle: "ابدأ باختيار مسار", initialCardDescription: "اختر الطعام أو الطبيعة أو التراث أو الأنشطة العائلية. ستظهر هنا بطاقة مكان توضيحية محلية.",
      selectedPrefix: "المحدد", selectedPlace: "المكان المحدد: {place}", placesShown: "{count} أماكن في هذا المسار", noPlaces: "لا توجد أماكن متاحة في هذا المسار بعد.",
      accessibleListEyebrow: "قائمة وليست خريطة فقط", accessibleListTitle: "أماكن في هذا المسار", accessibleListDescription: "استخدم هذه القائمة المناسبة للوحة المفاتيح لاختيار مكان.",
      illustratedPlaceholder: "صورة توضيحية مؤقتة", imageFallback: "تعذر تحميل الصورة المحلية، لذلك تظهر هذه الصورة التوضيحية البديلة.",
      openMaps: "افتح في خرائط Google", opensNewTab: "يفتح في علامة تبويب جديدة", locationNote: "مرجع الموقع", needsConfirmation: "علامة عامة للمنطقة — تحقق من نقطة الدخول",
      notesEyebrow: "سافر بوعي", notesTitle: "معلومات مفيدة قبل الذهاب", noteOne: "<strong>علامة دقيقة:</strong> يفتح كل رابط خريطة الإحداثية نفسها المستخدمة في هذا الدليل.",
      noteTwo: "<strong>تحقق مسبقاً:</strong> تأكد من المواعيد والأسعار وإمكانية الدخول والتوفر الموسمي مباشرةً مع كل مكان.",
      noteThree: "<strong>صور توضيحية حالياً:</strong> الرسومات الحالية مؤقتة ومحلية وجاهزة للاستبدال بصور مرخصة.",
      footerText: "صُمم للأصدقاء الذين يكتشفون عسير"
    }
  };

  const categoryKeys = { food: "categoryFood", nature: "categoryNature", heritage: "categoryHeritage", family: "categoryFamily" };
  const markerSymbols = { food: "F", nature: "N", heritage: "H", family: "A" };
  const fallbackImages = {
    food: "images/food-placeholder.svg",
    nature: "images/nature-placeholder.svg",
    heritage: "images/heritage-placeholder.svg",
    family: "images/family-placeholder.svg"
  };
  const defaultCenter = [18.2164, 42.5053];
  let language = localStorage.getItem("abha-language") || "en";
  let activeCategory = null;
  let activePlace = null;
  let markers = [];

  const root = document.documentElement;
  const themeToggle = document.querySelector("#theme-toggle");
  const mapPrompt = document.querySelector("#map-prompt");
  const placeCard = document.querySelector("#place-card");
  const placeList = document.querySelector("#place-list");
  const mapStatus = document.querySelector("#map-status");
  const mapElement = document.querySelector("#map");

  const map = L.map("map", { scrollWheelZoom: false, zoomControl: true, attributionControl: true }).setView(defaultCenter, 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\">OpenStreetMap</a> contributors"
  }).addTo(map);
  mapElement.classList.add("is-ready");

  function text(key) { return translations[language][key]; }
  function placeText(place, key) { return place[key][language] || place[key].en; }
  function categoryName(category) { return text(categoryKeys[category]); }
  function mapUrl(place) { return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.coordinates[0]},${place.coordinates[1]}`)}`; }
  function externalIcon() { return '<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>'; }

  function updateThemeButton() {
    const isDark = root.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", text("switchTheme").replace("{theme}", isDark ? text("themeLight") : text("themeDark")));
    document.querySelector(".theme-label").textContent = text("theme");
  }

  function applyText() {
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((node) => { node.innerHTML = text(node.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => { node.setAttribute("aria-label", text(node.dataset.i18nAria)); });
    document.querySelectorAll("[data-i18n-alt]").forEach((node) => { node.alt = text(node.dataset.i18nAlt); });
    document.querySelectorAll(".language-button").forEach((button) => {
      const selected = button.dataset.language === language;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    document.querySelectorAll("[data-count]").forEach((node) => {
      node.textContent = String(window.PLACES.filter((place) => place.category === node.dataset.count).length);
    });
    updateThemeButton();
    renderCategory();
  }

  function markerIcon(category, selected = false) {
    return L.divIcon({
      className: "",
      html: `<span class="place-marker marker-${category}${selected ? " is-selected" : ""}" aria-hidden="true"><span>${markerSymbols[category]}</span></span>`,
      iconSize: [41, 41],
      iconAnchor: [21, 39]
    });
  }

  function clearMarkers() {
    markers.forEach(({ marker }) => map.removeLayer(marker));
    markers = [];
  }

  function updateMarkerSelection() {
    markers.forEach(({ marker, place }) => {
      marker.setIcon(markerIcon(place.category, activePlace?.id === place.id));
    });
  }

  function renderList(places) {
    placeList.innerHTML = "";
    if (!activeCategory) {
      placeList.innerHTML = `<p class="list-empty">${text("mapPrompt")}</p>`;
      return;
    }
    if (!places.length) {
      placeList.innerHTML = `<p class="list-empty">${text("noPlaces")}</p>`;
      return;
    }
    places.forEach((place) => {
      const button = document.createElement("button");
      const selected = activePlace?.id === place.id;
      button.className = `place-list-item${selected ? " is-selected" : ""}`;
      button.type = "button";
      button.setAttribute("aria-pressed", String(selected));
      button.innerHTML = `<span><strong>${placeText(place, "name")}</strong><small>${categoryName(place.category)}${place.needsConfirmation ? ` · ${text("needsConfirmation")}` : ""}</small></span><span class="list-arrow" aria-hidden="true">↗</span>`;
      button.addEventListener("click", () => showPlace(place, true));
      placeList.append(button);
    });
  }

  function renderImage(place) {
    const image = document.createElement("img");
    image.src = place.image;
    image.alt = placeText(place, "imageAlt");
    image.width = 1200;
    image.height = 800;
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
    });
    return image;
  }

  function renderCard(place) {
    if (!place) {
      placeCard.className = "place-card card-empty";
      placeCard.innerHTML = `<span class="empty-mark" aria-hidden="true">01</span><h3 id="place-panel-title">${text("initialCardTitle")}</h3><p>${text("initialCardDescription")}</p>`;
      return;
    }

    placeCard.className = "place-card";
    placeCard.innerHTML = "";
    const media = document.createElement("div");
    media.className = "card-media";
    media.append(renderImage(place));
    const badge = document.createElement("span");
    badge.className = "image-badge";
    badge.textContent = text("illustratedPlaceholder");
    media.append(badge);

    const body = document.createElement("div");
    body.className = "place-card-body";
    body.innerHTML = `
      <div class="card-kicker">
        <span class="category-tag">${categoryName(place.category)}</span>
        ${place.needsConfirmation ? `<span class="confirmation-tag">${text("needsConfirmation")}</span>` : ""}
      </div>
      <h3 id="place-panel-title">${placeText(place, "name")}</h3>
      <p>${placeText(place, "description")}</p>
      <small class="card-source"><strong>${text("locationNote")}:</strong> ${placeText(place, "source")}</small>
      <a class="map-link" href="${mapUrl(place)}" target="_blank" rel="noopener">${text("openMaps")} ${externalIcon()}<span class="visually-hidden"> (${text("opensNewTab")})</span></a>`;
    placeCard.append(media, body);
  }

  function showPlace(place, panMap) {
    activePlace = place;
    renderCard(place);
    updateMarkerSelection();
    renderList(window.PLACES.filter((item) => item.category === activeCategory));
    mapStatus.textContent = `${text("placesShown").replace("{count}", window.PLACES.filter((item) => item.category === activeCategory).length)} · ${text("selectedPlace").replace("{place}", placeText(place, "name"))}`;
    if (panMap) {
      map.flyTo(place.coordinates, 14, { duration: 0.45 });
      const selectedMarker = markers.find((item) => item.place.id === place.id);
      if (selectedMarker) selectedMarker.marker.openTooltip();
      document.querySelector("#place-panel").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function renderCategory() {
    clearMarkers();
    document.querySelectorAll(".category-button").forEach((button) => {
      const selected = button.dataset.category === activeCategory;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    if (!activeCategory) {
      mapPrompt.hidden = false;
      activePlace = null;
      renderCard(null);
      renderList([]);
      mapStatus.textContent = text("mapPrompt");
      map.setView(defaultCenter, 10);
      return;
    }

    mapPrompt.hidden = true;
    const selectedPlaces = window.PLACES.filter((place) => place.category === activeCategory);
    if (!activePlace || activePlace.category !== activeCategory) activePlace = selectedPlaces[0] || null;
    selectedPlaces.forEach((place) => {
      const marker = L.marker(place.coordinates, { icon: markerIcon(place.category, activePlace?.id === place.id), title: placeText(place, "name"), keyboard: true }).addTo(map);
      marker.bindTooltip(placeText(place, "name"), { direction: "top", offset: [0, -37] });
      marker.on("click", () => showPlace(place, false));
      markers.push({ marker, place });
    });
    const bounds = L.latLngBounds(selectedPlaces.map((place) => place.coordinates));
    if (selectedPlaces.length) map.fitBounds(bounds, { padding: [40, 40], maxZoom: activeCategory === "heritage" ? 12 : 13 });
    renderCard(activePlace);
    renderList(selectedPlaces);
    mapStatus.textContent = activePlace
      ? `${text("placesShown").replace("{count}", selectedPlaces.length)} · ${text("selectedPlace").replace("{place}", placeText(activePlace, "name"))}`
      : text("noPlaces");
  }

  document.querySelectorAll(".category-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      activePlace = null;
      renderCategory();
      document.querySelector("#explore").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => {
      language = button.dataset.language;
      localStorage.setItem("abha-language", language);
      applyText();
    });
  });

  themeToggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("abha-theme", root.dataset.theme);
    updateThemeButton();
  });

  const savedTheme = localStorage.getItem("abha-theme");
  root.dataset.theme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyText();
  window.addEventListener("resize", () => map.invalidateSize());
})();
