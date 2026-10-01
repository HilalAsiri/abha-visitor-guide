(() => {
  const translations = {
    en: {
      skipToMap: "Skip to map", theme: "Theme", themeLight: "Light", themeDark: "Dark",
      eyebrow: "A local-first map for curious visitors", heroTitle: "Find your way through Abha.",
      heroDescription: "Choose what you feel like doing, then explore a focused map of real places in Abha, Al Soudah, and Rijal Almaa.",
      startExploring: "Start exploring", heroPlaceholder: "Photo placeholder — replace with a licensed Abha landscape image.",
      stepOne: "Step 1", categoryTitle: "What would you like to explore?", categoryDescription: "Select one category to show only its verified places on the map.",
      categoryFood: "Restaurants & Cafés", categoryNature: "Nature & Views", categoryHeritage: "Heritage & Culture", categoryFamily: "Family Activities",
      stepTwo: "Step 2", mapTitle: "Explore the map", mapPrompt: "Choose a category above to reveal its places.",
      cardPromptTitle: "Choose a marker", cardPromptDescription: "Tap a pin to see a place card with location details and directions.",
      accessibleListEyebrow: "Accessible list", accessibleListTitle: "Places in this category", accessibleListDescription: "Use this list if you prefer not to use the map.",
      notesTitle: "Good to know", noteOne: "<strong>Location check:</strong> Each marker uses the coordinates in this guide and opens directions to that same point in Google Maps.",
      noteTwo: "<strong>Before you go:</strong> Confirm opening times, prices, access, and seasonal availability directly with each venue.",
      noteThree: "<strong>Images:</strong> The illustrated cards are labeled placeholders. Replace them with licensed photographs in the <code>images/</code> folder.",
      footerText: "Built for friends discovering Aseer", placesShown: "{count} places shown", noPlaces: "No places are available in this category yet.",
      openMaps: "Open in Google Maps", locationNote: "Location reference", needsConfirmation: "General area pin — confirm access", selectCategory: "Select a category first"
    },
    ar: {
      skipToMap: "انتقل إلى الخريطة", theme: "المظهر", themeLight: "فاتح", themeDark: "داكن",
      eyebrow: "خريطة محلية للزوار الفضوليين", heroTitle: "اكتشف طريقك في أبها.",
      heroDescription: "اختر ما ترغب في القيام به، ثم استكشف خريطة مركزة لأماكن حقيقية في أبها والسودة ورجال ألمع.",
      startExploring: "ابدأ الاستكشاف", heroPlaceholder: "صورة مؤقتة — استبدلها بصورة مرخصة لمناظر أبها.",
      stepOne: "الخطوة 1", categoryTitle: "ماذا تود أن تستكشف؟", categoryDescription: "اختر فئة واحدة لعرض أماكنها الموثقة فقط على الخريطة.",
      categoryFood: "مطاعم ومقاهٍ", categoryNature: "طبيعة وإطلالات", categoryHeritage: "تراث وثقافة", categoryFamily: "أنشطة عائلية",
      stepTwo: "الخطوة 2", mapTitle: "استكشف الخريطة", mapPrompt: "اختر فئة من الأعلى لإظهار أماكنها.",
      cardPromptTitle: "اختر علامة", cardPromptDescription: "اضغط على علامة لرؤية بطاقة المكان وتفاصيل الموقع والاتجاهات.",
      accessibleListEyebrow: "قائمة ميسرة", accessibleListTitle: "أماكن في هذه الفئة", accessibleListDescription: "استخدم هذه القائمة إذا كنت تفضل عدم استخدام الخريطة.",
      notesTitle: "معلومات مفيدة", noteOne: "<strong>التحقق من الموقع:</strong> تستخدم كل علامة الإحداثيات الموجودة في هذا الدليل وتفتح الاتجاهات إلى النقطة نفسها في خرائط Google.",
      noteTwo: "<strong>قبل الذهاب:</strong> تأكد مباشرةً من أوقات العمل والأسعار وإمكانية الدخول والتوفر الموسمي مع كل مكان.",
      noteThree: "<strong>الصور:</strong> الصور التوضيحية هي صور مؤقتة. استبدلها بصور مرخصة في مجلد <code>images/</code>.",
      footerText: "صُمم للأصدقاء الذين يكتشفون عسير", placesShown: "تم عرض {count} أماكن", noPlaces: "لا توجد أماكن متاحة في هذه الفئة بعد.",
      openMaps: "افتح في خرائط Google", locationNote: "مرجع الموقع", needsConfirmation: "علامة عامة للمنطقة — تحقق من نقطة الدخول", selectCategory: "اختر فئة أولاً"
    }
  };

  const icons = { food: "☕", nature: "⌁", heritage: "▦", family: "✦" };
  const categoryKeys = { food: "categoryFood", nature: "categoryNature", heritage: "categoryHeritage", family: "categoryFamily" };
  const defaultCenter = [18.2164, 42.5053];
  let language = localStorage.getItem("abha-language") || "en";
  let activeCategory = null;
  let activePlace = null;
  let markers = [];

  const root = document.documentElement;
  const themeToggle = document.querySelector("#theme-toggle");
  const mapPrompt = document.querySelector("#map-prompt");
  const placeCard = document.querySelector("#place-card");
  const emptyCard = document.querySelector("#empty-card");
  const placeList = document.querySelector("#place-list");
  const mapStatus = document.querySelector("#map-status");
  const mapElement = document.querySelector("#map");

  const map = L.map("map", { scrollWheelZoom: false, zoomControl: true, attributionControl: true }).setView(defaultCenter, 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\">OpenStreetMap</a> contributors"
  }).addTo(map);
  mapElement.classList.add("is-ready");
  map.getContainer().addEventListener("keydown", (event) => {
    if (event.key === "Enter" && activeCategory && markers.length) {
      event.preventDefault();
      showPlace(markers[0].place, true);
    }
  });

  function text(key) { return translations[language][key]; }
  function placeText(place, key) { return place[key][language] || place[key].en; }
  function categoryName(category) { return text(categoryKeys[category]); }
  function mapUrl(place) { return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.coordinates[0]},${place.coordinates[1]}`)}`; }

  function updateThemeButton() {
    const isDark = root.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? `Switch to ${text("themeLight")} mode` : `Switch to ${text("themeDark")} mode`);
    document.querySelector(".theme-label").textContent = text("theme");
  }

  function applyText() {
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.innerHTML = text(node.dataset.i18n);
    });
    document.querySelectorAll(".language-button").forEach((button) => {
      const selected = button.dataset.language === language;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    document.querySelectorAll("[data-count]").forEach((node) => {
      const count = window.PLACES.filter((place) => place.category === node.dataset.count).length;
      node.textContent = String(count);
    });
    updateThemeButton();
    renderCategory();
  }

  function markerIcon(category) {
    return L.divIcon({
      className: "",
      html: `<span class="place-marker category-${category}" aria-hidden="true"><span>${icons[category]}</span></span>`,
      iconSize: [43, 43],
      iconAnchor: [22, 39]
    });
  }

  function clearMarkers() {
    markers.forEach((marker) => map.removeLayer(marker));
    markers = [];
  }

  function renderList(places) {
    placeList.innerHTML = "";
    if (!places.length) {
      placeList.innerHTML = `<p class="list-empty">${text("noPlaces")}</p>`;
      return;
    }
    places.forEach((place) => {
      const button = document.createElement("button");
      button.className = "place-list-item";
      button.type = "button";
      button.innerHTML = `<span><strong>${placeText(place, "name")}</strong><small>${categoryName(place.category)}</small></span><span class="list-arrow" aria-hidden="true">↗</span>`;
      button.addEventListener("click", () => showPlace(place, true));
      placeList.append(button);
    });
  }

  function renderCard(place) {
    if (!place) {
      placeCard.hidden = true;
      emptyCard.hidden = false;
      return;
    }
    emptyCard.hidden = true;
    placeCard.hidden = false;
    placeCard.innerHTML = `
      <img src="${place.image}" alt="${placeText(place, "imageAlt")}" width="1200" height="800">
      <div class="place-card-body">
        <div class="card-kicker">
          <span class="category-tag">${categoryName(place.category)}</span>
          ${place.needsConfirmation ? `<span class="confirmation-tag">${text("needsConfirmation")}</span>` : ""}
        </div>
        <h3>${placeText(place, "name")}</h3>
        <p>${placeText(place, "description")}</p>
        <small class="card-source"><strong>${text("locationNote")}:</strong> ${placeText(place, "source")}</small>
        <a class="map-link" href="${mapUrl(place)}" target="_blank" rel="noopener">${text("openMaps")} <span aria-hidden="true">↗</span></a>
      </div>`;
  }

  function showPlace(place, panMap) {
    activePlace = place;
    renderCard(place);
    if (panMap) {
      map.flyTo(place.coordinates, 14, { duration: 0.5 });
      const marker = markers.find((item) => item.place.id === place.id);
      if (marker) marker.marker.openTooltip();
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
      mapStatus.textContent = text("selectCategory");
      activePlace = null;
      renderCard(null);
      renderList([]);
      map.setView(defaultCenter, 10);
      return;
    }

    mapPrompt.hidden = true;
    const selectedPlaces = window.PLACES.filter((place) => place.category === activeCategory);
    mapStatus.textContent = text("placesShown").replace("{count}", selectedPlaces.length);
    renderList(selectedPlaces);
    selectedPlaces.forEach((place) => {
      const marker = L.marker(place.coordinates, { icon: markerIcon(place.category), title: placeText(place, "name"), keyboard: true }).addTo(map);
      marker.bindTooltip(placeText(place, "name"), { direction: "top", offset: [0, -37] });
      marker.on("click keypress", () => showPlace(place, false));
      markers.push({ marker, place });
    });
    const bounds = L.latLngBounds(selectedPlaces.map((place) => place.coordinates));
    map.fitBounds(bounds, { padding: [45, 45], maxZoom: activeCategory === "heritage" ? 12 : 13 });
    if (!activePlace || activePlace.category !== activeCategory) {
      activePlace = null;
      renderCard(null);
    } else {
      renderCard(activePlace);
    }
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
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("abha-theme", nextTheme);
    updateThemeButton();
  });

  const savedTheme = localStorage.getItem("abha-theme");
  root.dataset.theme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyText();
  window.addEventListener("resize", () => map.invalidateSize());
})();
