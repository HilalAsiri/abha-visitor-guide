# Abha Visitor Guide

## What it does

A bilingual, mobile-first visitor guide for Abha and nearby Aseer attractions. Choose a category to reveal its places on an interactive Leaflet and OpenStreetMap map, choose a marker or accessible list item, then open the same coordinates in Google Maps.

The map opens immediately to an unselected Abha overview. It shows no place markers until a visitor chooses a category.

## Who it is for

Friends and visitors who want a simple way to explore restaurants and cafés, nature, heritage, and family activities around Abha, Al Soudah, and Rijal Almaa.

## Needs

A modern web browser and an internet connection for OpenStreetMap tiles and Google Maps links. No API key is needed.

## How to run it

Open `index.html` in a browser. For the most reliable local test, from this project folder run `python -m http.server 4173`, then open `http://localhost:4173`.

## Try it with the sample data

The initial place data is in `sample-data/data.js`. Choose a category, then choose a map marker or a keyboard-friendly list item. Use **View on Google Maps** to open its exact coordinate. Use the EN / ع switcher to change language and the Theme control to change light or dark mode.

## Images, licences, and location notes

All imagery used by the guide is loaded from local relative paths in `images/`; the website does not hotlink photos. Three place-specific photographs are supplied from verified Wikimedia Commons sources with visible in-card credits:

- **Rijal Almaa Heritage Village** — Richard Mortel, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
- **Shamsan Castle** — Heritage Commission, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Abha Dam Lake** — Aiman ALhaddad, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

The full local-file, source, creator, licence, and modification ledger is in [`images/credits.md`](images/credits.md). The `CC BY-SA` derivatives remain available under their corresponding ShareAlike licence.

Twelve entries deliberately retain clearly marked local illustrations because a reusable photo of that exact place was not verified: Towns Talk Coffee, Fit Kitchen, Carlito, Kudu — Abha, Al Soudah, Abu Kheyal Park, Waterfall Park, Al Muftaha Art Village, Asir Regional Museum, Civilisation Museum, Abha Palace Theme Park, and Al Andalus Park. These illustrations are intentional, not broken images.

Google Maps is used only for outbound place links. No Google Maps or Google Maps user photos are scraped, downloaded, or reused. Venue information, access, and hours can change, so confirm them directly before travelling.

Built with Claude Code during the KKU Claude Code hackathon

Started on 2026-10-01
