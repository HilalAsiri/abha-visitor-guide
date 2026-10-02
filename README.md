# Abha Visitor Guide

## What it does

A bilingual, mobile-first guide to Abha and nearby Aseer. It is one cohesive homepage: hero, five route choices, the integrated **Explore Map**, Curated Visitor Assistant, and travel notes. Choose restaurants and cafés, nature and views, heritage and culture, family activities, or hotels and stays to activate that route in the map immediately below the categories. Markers, details, evidence-backed filters, and the keyboard-friendly place list stay in sync. Select a marker or list item, then open the same coordinate in Google Maps.

The static hash router supports `#guide` for the unselected homepage, `#explore` for the unselected integrated map, and category links such as `#explore/food`. Category links survive refresh and can be shared. Browser Back and Forward restore the selected map category; deliberate category and Assistant selections move focus to the integrated map.

### Restaurants & Cafés meal filter

Selecting **Restaurants & Cafés / مطاعم ومقاهٍ** reveals a second filter: **All, Cafés, Breakfast, Lunch, and Dinner / الكل، مقاهي، الإفطار، الغداء، والعشاء**. It filters the map markers, accessible list, and selected card together.

**Cafés / مقاهي** shows only the six explicitly tagged cafés: Towns Talk Coffee, Raha café, Be You Coffee Roasters, CALM HOUSE, Fog Coffee, and Kaya Cafe - Abha. The imported listings retain their supplied Google Maps short links; established records continue to use coordinate handoffs.

Meal labels are evidence-gated: this guide adds Breakfast, Lunch, or Dinner only when it has a venue-specific meal-service source and review date. A location record alone does not establish meal service. At present, **All** contains 20 food locations; **Breakfast** contains exactly three places: Giorno; Mornix / مورنكس; and Jarrah Restaurant / مطعم جره. **Lunch** contains exactly three places: Mahrani Restaurant, Abha Branch; Olive Garden Abha; and RAJ Abha. **Dinner** contains exactly four places: PASTA STREET; La-Scene; Béchamelo / بشميلو; and Bellucci. The imported Breakfast, Lunch, and Dinner cards retain their supplied Google Maps short links.

### Hotels & Stays star filter

Selecting **Hotels & Stays / إقامات وفنادق** reveals **All Stays, 3 Stars, 4 Stars, and 5 Stars / جميع الإقامات، 3 نجوم، 4 نجوم، و5 نجوم**. A star filter includes a property only when this local catalog records a separate source and review date for that property’s classification.

Hotels & Stays → **All Stays** contains nine records. **3 Stars** contains Aber Abha. **4 Stars** contains Sarwat Park Hotel and Best Western Plus Danat Al Mansak Hotel. **5 Stars** intentionally keeps the clear empty state with a return action. Citadines Abha, Abha Palace Hotel, InterContinental Al Soudah, Golden Tulip Abha, Boudl Abha, and Shafa Abha Hotel remain in **All Stays** only and each card says **Rating not verified / تصنيف النجوم غير متحقق منه**. The guide does not infer ratings from property names, brands, map records, or guest-review scores.

### Hotel meals

Breakfast, Lunch, and Dinner remain venue-evidence filters. When a selected meal has no separately verified connection to a hotel stay, the guide shows the truthful unavailable note rather than a hotel link. Current links are intentionally: Breakfast → none, Lunch → none, Dinner → none.

## Manual browser checks

Use the local-server command below, then verify the page at **390px** and **1440px** in English LTR and Arabic RTL, in both light and dark mode. Start at `#guide`, choose several categories, and verify browser Back/Forward restores their selected markers, filters, list, and card state. Load `#explore`, `#explore/food`, and an invalid hash directly and refresh each; confirm the map renders at full size after each route change, with no horizontal scrolling. Category and Assistant choices should scroll/focus the integrated map; passive refresh and browser-history restoration should not steal focus. Confirm Food → All shows 20 records, Cafés shows exactly the six named cafés, Breakfast shows exactly three places—Giorno; Mornix / مورنكس; and Jarrah Restaurant / مطعم جره—and Lunch shows exactly three places: Mahrani Restaurant, Abha Branch; Olive Garden Abha; and RAJ Abha. Dinner shows exactly four places: PASTA STREET; La-Scene; Béchamelo / بشميلو; and Bellucci. Hotels & Stays → All shows nine records; 3 Stars shows only Aber Abha; 4 Stars shows only Sarwat Park Hotel and Best Western Plus Danat Al Mansak Hotel; and 5 Stars keeps the truthful empty state and return action. Verify Golden Tulip Abha, Boudl Abha, and Shafa Abha Hotel retain their original supplied Google Maps links and remain All Stays only with **Rating not verified / تصنيف النجوم غير متحقق منه**; Blue Inn Boutique Abha is intentionally absent because its supplied link did not identify that property. Use the secondary hero **Ready-Made Plans / خطط جاهزة** CTA; it should smoothly reach the section. Select each of the five plans, use its keyboard controls, verify every place action selects its matching integrated-map marker/card/list entry and every external Maps control preserves the catalog link, and confirm Relax & Unwind clearly labels its unavailable Al Soudah breakfast slot plus separate Giorno alternative. Confirm card/list/marker selection stays synchronized, imported café, Breakfast, Lunch, Dinner, and hotel cards retain their original Google Maps short links where supplied, established cards retain exact-coordinate links, and language, theme, RTL, keyboard focus, and the Curated Visitor Assistant remain functional. Verify the slightly clearer category background keeps all category text and buttons clear, while the map-section background remains outside the solid Leaflet frame so tiles, markers, zoom controls, and the accessible list stay unobstructed. Check that both local background paths load under GitHub Pages, the compact footer credits wrap cleanly, and the 1–5 star footer rating has visible focus/selection, keyboard support, bilingual feedback, and persistence after refresh without sending data anywhere.


## Run it

Open `index.html` in a browser. For the most reliable local test, run this from the project folder:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.

The page has no build step or backend. Internet access is needed only for OpenStreetMap map tiles, external source links, and Google Maps links.

## Reviewed local catalog

The catalog is stored in `sample-data/data.js` and currently contains **45 locations**:

| Category | Places |
| --- | ---: |
| Restaurants & Cafés | 20 |
| Nature & Views | 5 |
| Heritage & Culture | 6 |
| Family Activities | 5 |
| Hotels & Stays | 9 |

Each place has bilingual content, a coordinate used by both the marker and Google Maps URL, local media, local tag IDs, source references, a review date, and a location-precision status.

- **Reviewed location** means the map point is a named venue or feature supported by the catalog’s source record.
- **Area reference — confirm access** means the location is helpful for orientation but is not claimed to be a particular entrance. Visitors should choose and confirm their own access point.
- Opening hours, prices, facilities, bookings, and seasonal access are not live data. Confirm them directly before travelling.

## Ready-Made Plans

**Ready-Made Plans / خطط جاهزة** offers five selectable, local-catalog day styles: Fun Day, Calm Day, Relax & Unwind, Family Day, and Food Explorer. Each selected itinerary includes a stay, breakfast, lunch, an activity or attraction, dinner, and a practical note. Place-name controls move to and select the existing marker/card/list entry in the integrated map; dedicated **View on Google Maps** controls open the established external location link.

These are curated starting points, not live booking, availability, menu, price, traffic, or opening-hour information. Confirm every detail directly before travelling. The Relax & Unwind plan visibly marks that this catalog has no verified breakfast venue in the Al Soudah area and offers Giorno in Abha as a separate alternative rather than claiming a venue there.

## Curated Visitor Assistant

The **Curated Visitor Assistant / مساعد الزائر المنسق** is a local deterministic recommendation tool, not a remote chatbot. It combines structured interests, time, family needs, and budget preferences with curated catalog routes.

- It runs entirely in the browser.
- It does not send visitor input to an AI provider, backend, analytics service, or booking service.
- It does not save Assistant selections; language and theme preferences, plus an optional visitor guide rating, remain only in localStorage on the same device.
- The optional 1–5 star footer rating is stored only in that browser, never sent anywhere, and can be changed by selecting another star.
- It gives only catalog-backed recommendations and clearly avoids live claims about reservations, traffic, weather, prices, or opening hours.

A future free-text or generative AI assistant would require explicit approval to send visitor content externally, a secure server/serverless proxy, provider credentials kept outside frontend code, rate limits, privacy disclosure, source grounding, response validation, and the local assistant as fallback. No API key is present in this project.

## Images, licences, and local fallbacks

All displayed imagery is loaded from project-local relative paths. The guide does not hotlink photos.

### Active hero image

The hero uses a local copy of **Al Sowda Hill top 04** by **Irshadpp**, from Wikimedia Commons, under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). It depicts green mountain terrain and low cloud around Al Soudah. It is used as a responsive full-viewport background, with attribution in the credits line at the bottom of the site footer. That line identifies the title, creator, source, licence, and responsive crop. `images/places/abha-hero.jpg` remains a local fallback.

### Licensed section backgrounds

The category area uses the local `images/places/valley-ashran-dam.jpg`, **Valley Ashran Dam at Abha01** by **Irshadpp**, from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Valley_Ashran_Dam_at_Abha01.jpg), under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The integrated map-section shell uses the distinct local `images/places/green-mountain-abha.jpg`, **Green Mountain - Abha, Saudi Arabia (6702611457)** by **Basheer Olakara**, from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Green_Mountain_-_Abha,_Saudi_Arabia_(6702611457).jpg), under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/).

Both are responsive CSS layout crops with readable light/dark overlays. They remain local assets, sit behind the section content, and never appear over the Leaflet map canvas or controls. The compact footer credits and [`images/credits.md`](images/credits.md) provide title, creator, source, licence, and crop disclosures.

### Licensed place photographs

- **Rijal Almaa Heritage Village** — Richard Mortel, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- **Shamsan Castle** — Heritage Commission, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Abha Dam Lake** — Aiman ALhaddad, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

The full local-file, source, creator, licence, and derivative ledger is in [`images/credits.md`](images/credits.md).

All other place cards—including Hotels & Stays—use clearly labelled, intentional local illustrations until a specific reusable image is verified. These are not failed images.

## Google Maps and Google Place Photos

Google Maps is used only for outbound coordinate links. No Google Maps or Google Maps user photos are scraped, downloaded, hotlinked, cached, or reused.

This static release has no Google Places API key, billing configuration, Place IDs, Places client, backend, or serverless proxy. To enable official Google Place Photos later, the project would need an approved exception to the local-assets rule, a billed Google Maps Platform project with Places API (New), restricted credentials, canonical Place IDs, official Place Details/Photo requests with required attribution, and handling for unavailable-photo, quota, and missing-key states. A secure server or serverless proxy is preferred to exposing a credential in a static GitHub Pages page.

## Design and accessibility

The interface uses clean semantic surfaces, restrained gradients, borders, and spacing rather than decorative patterns, clouds, mist, or background artwork. The guide supports English and Arabic, RTL, light/dark theme persistence, visible focus styles, a skip link, an accessible non-map place list, and reduced-motion map/page behavior.

Built with Claude Code during the KKU Claude Code hackathon.
