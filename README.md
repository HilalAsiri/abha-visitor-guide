# Abha Visitor Guide

## What it does

A bilingual, mobile-first guide to Abha and nearby Aseer. The **Guide** homepage contains the hero, five category choices, Curated Visitor Assistant, and travel notes. Choose restaurants and cafés, nature and views, heritage and culture, family activities, or hotels and stays to open the dedicated **Explore Map** view with that route’s Leaflet and OpenStreetMap markers, details, filters, and keyboard-friendly place list. Select a marker or list item, then open the same coordinate in Google Maps.

The static hash router supports `#guide`, `#explore` for an unselected map overview, and category links such as `#explore/food`. A category link survives refresh and can be shared. The Explore Map view includes **Back to Guide**; browser Back and Forward also follow these view/category changes.

### Restaurants & Cafés meal filter

Selecting **Restaurants & Cafés / مطاعم ومقاهٍ** reveals a second filter: **All, Breakfast, Lunch, and Dinner / الكل، الإفطار، الغداء، والعشاء**. It filters the map markers, accessible list, and selected card together.

Meal labels are evidence-gated: this guide adds Breakfast, Lunch, or Dinner only when it has a venue-specific meal-service source and review date. A location record alone does not establish meal service. At present, **All** contains Towns Talk Coffee, Fit Kitchen, Carlito, Kudu — Abha, Raha café, and Herfy 323; **Breakfast**, **Lunch**, and **Dinner** intentionally have no evidence-backed assignments. Their empty state explains this and offers a one-click return to All.

### Hotels & Stays star filter

Selecting **Hotels & Stays / إقامات وفنادق** reveals **All Stays, 3 Stars, 4 Stars, and 5 Stars / جميع الإقامات، 3 نجوم، 4 نجوم، و5 نجوم**. A star filter includes a property only when this local catalog records a separate source and review date for that property’s classification.

At present, Citadines Abha, Abha Palace Hotel, and InterContinental Al Soudah are shown only in **All Stays** and each card says **Rating not verified / تصنيف النجوم غير متحقق منه**. The 3-, 4-, and 5-star views intentionally have a clear empty state with a return action; the guide does not infer ratings from property names, brands, or map records.

### Hotel meals

Breakfast, Lunch, and Dinner remain venue-evidence filters. When a selected meal has no separately verified connection to a hotel stay, the guide shows the truthful unavailable note rather than a hotel link. Current links are intentionally: Breakfast → none, Lunch → none, Dinner → none.

## Manual browser checks

Use the local-server command below, then verify the page at **390px** and **1440px** in English LTR and Arabic RTL, in both light and dark mode. Start at `#guide`, open a category, then verify browser Back/Forward and **Back to Guide**. Load `#explore` and `#explore/food` directly and refresh each; confirm the map renders at full size after each route transition, with no horizontal scrolling. Confirm Food → All shows the six named records; each meal filter shows the truthful empty state, hotel-meal unavailable note, and return action; Hotels & Stays → All shows the three unverified records; each star filter shows the truthful empty state and return action. Confirm Assistant results open the matching Explore route, card/list/marker selection stays synchronized, and Google Maps links, language, theme, RTL, keyboard focus, and the Curated Visitor Assistant remain functional.


## Run it

Open `index.html` in a browser. For the most reliable local test, run this from the project folder:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.

The page has no build step or backend. Internet access is needed only for OpenStreetMap map tiles, external source links, and Google Maps links.

## Reviewed local catalog

The catalog is stored in `sample-data/data.js` and currently contains **25 locations**:

| Category | Places |
| --- | ---: |
| Restaurants & Cafés | 6 |
| Nature & Views | 5 |
| Heritage & Culture | 6 |
| Family Activities | 5 |
| Hotels & Stays | 3 |

Each place has bilingual content, a coordinate used by both the marker and Google Maps URL, local media, local tag IDs, source references, a review date, and a location-precision status.

- **Reviewed location** means the map point is a named venue or feature supported by the catalog’s source record.
- **Area reference — confirm access** means the location is helpful for orientation but is not claimed to be a particular entrance. Visitors should choose and confirm their own access point.
- Opening hours, prices, facilities, bookings, and seasonal access are not live data. Confirm them directly before travelling.

## Curated Visitor Assistant

The **Curated Visitor Assistant / مساعد الزائر المنسق** is a local deterministic recommendation tool, not a remote chatbot. It combines structured interests, time, family needs, and budget preferences with curated catalog routes.

- It runs entirely in the browser.
- It does not send visitor input to an AI provider, backend, analytics service, or booking service.
- It does not save visitor selections; language and theme preferences remain the only localStorage values.
- It gives only catalog-backed recommendations and clearly avoids live claims about reservations, traffic, weather, prices, or opening hours.

A future free-text or generative AI assistant would require explicit approval to send visitor content externally, a secure server/serverless proxy, provider credentials kept outside frontend code, rate limits, privacy disclosure, source grounding, response validation, and the local assistant as fallback. No API key is present in this project.

## Images, licences, and local fallbacks

All displayed imagery is loaded from project-local relative paths. The guide does not hotlink photos.

### Active hero image

The hero uses a local copy of **Al Sowda Hill top 04** by **Irshadpp**, from Wikimedia Commons, under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). It depicts green mountain terrain and low cloud around Al Soudah. The visible credit identifies the creator, source, licence, and any responsive crop. `images/places/abha-hero.jpg` remains a local fallback.

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
