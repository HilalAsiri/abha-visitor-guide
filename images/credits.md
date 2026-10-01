# Image credits and verification ledger

All imagery loaded by the guide is stored inside this repository. The website does not hotlink photography and does not use Google Maps or Google Maps user photos. Source pages were checked on 2026-10-01 before the local files below were added.

## Licensed place photographs

| Local file | Associated guide place | Original source | Creator | License | Local modification |
| --- | --- | --- | --- | --- | --- |
| `places/rijal-almaa.jpg` | Rijal Almaa Heritage Village | [Rijal Almaa village 2021.jpg](https://commons.wikimedia.org/wiki/File:Rijal_Almaa_village_2021.jpg) | Richard Mortel | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | Downloaded and stored locally as a JPEG derivative. |
| `places/shamsan-castle.jpg` | Shamsan Castle | [قلعة شمسان.jpg](https://commons.wikimedia.org/wiki/File:%D9%82%D9%84%D8%B9%D8%A9_%D8%B4%D9%85%D8%B3%D8%A7%D9%86.jpg) | Heritage Commission | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Downloaded and stored locally as a JPEG derivative. This derivative is shared under CC BY-SA 4.0. |
| `places/abha-dam.jpg` | Abha Dam Lake | [Boat on Abha.jpg](https://commons.wikimedia.org/wiki/File:Boat_on_Abha.jpg) | Aiman ALhaddad | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | Downloaded and stored locally as a JPEG derivative. This derivative is shared under CC BY-SA 3.0. |

## General hero photographs

| Local file | Use | Original source | Creator | License | Local modification |
| --- | --- | --- | --- | --- | --- |
| `places/al-sowda-hill-top-04.jpg` | Active hero image: green mountain ridges and low cloud at Al Soudah near Abha. | [Al Sowda Hill top 04.jpg](https://commons.wikimedia.org/wiki/File:Al_Sowda_Hill_top_04.jpg) | Irshadpp | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Downloaded and stored locally as a JPEG. The page may crop it for responsive layout; the visible credit discloses the crop. This derivative remains available under CC BY-SA 4.0. |
| `places/abha-hero.jpg` | Local fallback only if the active hero cannot load; it does not represent an individual guide entry. | [Abha1.jpg](https://commons.wikimedia.org/wiki/File:Abha1.jpg) | Aimk07 (uploaded by Aziz1005) | Public Domain / PD-self, as stated on the Commons file page | Downloaded and stored locally as a JPEG. |

## Interface presentation

The interface uses CSS semantic surfaces, restrained gradients, borders, and spacing. It does not load decorative pattern, cloud, or mist assets, and no decorative artwork appears within the Leaflet map frame or controls.

## Hotels & Stays illustrations

`stays-placeholder.svg` is an original local illustration used for accommodation records until a place-specific, reusable photograph with clear permission is verified. It is intentionally labelled as an illustration and is not a hotel marketing image.

## Catalog sources

Each guide record now carries a reviewed source identifier, visible card source links where available, a review date, and venue-versus-area precision. See `sample-data/data.js` for the full local source ledger. The guide retains its Google Maps button only for outbound coordinate links; it never uses Google Maps user photos or Google Place Photos.

## Intentional placeholders

The following cards keep their local illustrated placeholder because no specific, reusable photograph was verified at publication time: Towns Talk Coffee, Fit Kitchen, Carlito, Kudu — Abha, Al Soudah, Abu Kheyal Park, Waterfall Park, Al Muftaha Art Village, Asir Regional Museum, Civilisation Museum, Abha Palace Theme Park, and Al Andalus Park.

The local placeholders are not failed images and do not indicate that the underlying location is unverified. They will be replaced only when a place-specific source satisfies the project’s attribution and reuse checks.

## Google Place Photos policy

No Google Places API configuration, billing setup, Place IDs, or official photo flow is present in this static release. Google Maps is only an outbound coordinate link. The guide never scrapes, downloads, hotlinks, caches, or copies Google Maps user photos.

A future official Google Place Photos implementation would require approved use of remote assets, a billed Google Maps Platform project with Places API (New), restricted credentials, canonical Place IDs, official Place Details/Photo requests, required Google attribution, and resilient missing-key, unavailable-photo, and quota states. A secure server or serverless proxy is preferred to exposing a credential in a static page.
