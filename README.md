# Abha Visitor Guide

## What it does

A bilingual, mobile-first visitor guide for Abha and nearby Aseer attractions. Select a category to view its places on an interactive Leaflet and OpenStreetMap map, then open the same coordinates in Google Maps for directions.

## Who it is for

Friends and visitors who want a simple way to explore restaurants and cafés, nature, heritage, and family activities around Abha, Al Soudah, and Rijal Almaa.

## Needs

A modern web browser and an internet connection for OpenStreetMap tiles and Google Maps direction links. No API key is needed.

## How to run it

Open `index.html` in a browser. For the most reliable local test, from this project folder run `python -m http.server 4173`, then open `http://localhost:4173`.

## Try it with the sample data

The initial place data is in `sample-data/data.js`. Choose a category, tap a map marker, and select **Open in Google Maps**. Use the EN / ع switcher to change language and the Theme control to change light or dark mode.

## Images and location notes

All current images are clearly labeled SVG placeholders in `images/`. Replace them with licensed photographs using the same paths, or update the matching `image` field in `sample-data/data.js`. Some venue details and access conditions can change; verify opening hours and access before visiting.

Built with Claude Code during the KKU Claude Code hackathon

Started on 2026-10-01
