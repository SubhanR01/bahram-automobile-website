# Bahram Automobile — Premium Car Dealership Website

A full-featured, multi-page car dealership platform built as a static site (no backend required). Designed as a premium, editorial-style automotive brand experience with a cinematic scroll-driven hero.

**Live demo:** _add your GitHub Pages link here after publishing_

## Features

- **Cinematic homepage hero** — scroll-controlled frame-sequence film, search bar, featured/new/offer vehicle rails
- **Full inventory system** with live client-side filtering (make, model, price, year, mileage, fuel, transmission, body type)
- **Vehicle detail pages** with photo gallery, a drag-to-scrub "cinematic viewer," full spec sheet, and similar-vehicle suggestions
- **Comparison tool** — compare up to 3 vehicles side by side (persisted via localStorage)
- **Finance calculator** — live monthly payment estimator plus a finance application form
- **Part-exchange valuation** form with client-side photo preview
- **Lead generation** — contact form, test-drive booking, callback requests — all routed to WhatsApp/email (no backend needed)
- **Multi-language** — English, German (Deutsch), and Persian (فارسی) with full RTL layout support
- **Fully responsive** — desktop, tablet, and mobile
- **Single source of truth for inventory** — all vehicle data lives in one editable file (`assets/js/data.js`)

## Tech

Plain HTML, CSS, and vanilla JavaScript — no framework, no build step, no dependencies. Runs anywhere static files can be served (GitHub Pages, Netlify, Vercel, or just opened locally).

## Project structure

```
index.html            Homepage (cinematic hero, search, featured/new/offers)
inventory.html         Full inventory with filters
vehicle.html            Vehicle detail page (?id=slug)
compare.html            Side-by-side comparison
finance.html             Finance calculator + application
part-exchange.html        Part-exchange valuation request
contact.html               Contact, test drive, callback forms
about.html                  Company info, warranty, testimonials
terms.html                    Terms & privacy
assets/css/style.css         Shared design system
assets/js/data.js             Vehicle inventory (edit this to add/update cars)
assets/js/i18n.js              Translations (EN/DE/FA)
assets/js/*.js                 Page logic (filters, compare, finance calc, forms)
frames/                        Extracted film frames for the cinematic hero/viewer
```

## Running locally

No build step needed. Either:

- Open `index.html` directly in a browser, or
- Use VS Code's **Live Server** extension (right-click `index.html` → "Open with Live Server"), or
- Run `python3 -m http.server 8080` from this folder and visit `http://localhost:8080`

## Notes

This is a demo build with sample vehicle data and placeholder contact details — swap in real inventory, contact info, and business details in `assets/js/data.js` and `assets/js/main.js` before using for a real dealership.
