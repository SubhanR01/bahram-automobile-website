/*
  BAHRAM AUTOMOBILE — i18n (English / Deutsch / فارسی)
  --------------------------------------------------------------------------
  Loaded on every page, right after assets/js/main.js. Static text in each
  HTML page is tagged with data-i18n="key" (textContent), data-i18n-html="key"
  (innerHTML, for strings with inline tags), or data-i18n-placeholder="key"
  (input/textarea placeholder). This file walks the DOM and swaps text for
  the active language, and exposes t(key) for JS-rendered strings (cards,
  buttons, spec tables, etc).

  Persian is right-to-left: switching to "fa" sets <html dir="rtl">.
  The language choice is remembered in localStorage across pages.
  --------------------------------------------------------------------------
*/

const BAHRAM_LANG_KEY = "bahram_lang";
const BAHRAM_DEFAULT_LANG = "en";

const BAHRAM_I18N = {
  en: {
    "nav.home": "Home",
    "nav.inventory": "Inventory",
    "nav.finance": "Finance",
    "nav.partExchange": "Part Exchange",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.compare": "Compare vehicles",
    "nav.viewInventory": "View Inventory",
    "nav.contactUs": "Contact Us",
    "nav.callNow": "Call now",
    "nav.backToInventory": "← Back to inventory",
    "nav.addMoreCars": "Add more cars",
    "nav.menu": "Menu",

    "hero.eyebrow": "Bahram Automobile",
    "hero.title": "Welcome to<br>Bahram Automobile",
    "hero.deck": "A curated dealership of hand-picked, fully inspected new and used cars. No volume stock, no surprises — every car earns its place on our lot.",
    "hero.viewInventory": "View Inventory",
    "hero.bookTestDrive": "Book a Test Drive",
    "hero.getFinanceQuote": "Get Finance Quote",
    "hero.contactUs": "Contact Us",
    "hero.search": "Search",
    "hero.anyMake": "Any make",
    "hero.anyBody": "Any body type",
    "hero.anyFuel": "Any fuel",
    "hero.maxPrice": "Max price (€)",
    "hero.minYear": "Min year",
    "hero.scroll": "Scroll",
    "hero.offerBanner": "This month: 0% deposit contribution on selected finance-eligible arrivals",
    "hero.getFinance": "Get finance quote",

    "section.featuredEyebrow": "Featured",
    "section.featuredTitle": "Featured vehicles",
    "section.featuredAside": "A short list of what we'd put in our own driveway right now.",
    "section.arrivalsEyebrow": "Just in",
    "section.arrivalsTitle": "New arrivals",
    "section.arrivalsAside": "Recently passed our 150-point inspection and listed for sale.",
    "section.offersEyebrow": "Priced to move",
    "section.offersTitle": "Special offers",
    "section.offersAside": "Reduced this month as part of our early-arrivals clearance.",
    "section.servicesEyebrow": "What we do",
    "section.servicesTitle": "Built around one standard",
    "section.servicesAside": "The same process behind every car we sell, whatever the badge.",
    "section.reviewsEyebrow": "Customer reviews",
    "section.reviewsTitle": "What buyers say",
    "section.reviewsAside": "Sample testimonials — replace with your own verified reviews any time.",
    "section.ctaTitle": "Ready to see one in person?",
    "section.ctaAside": "Book a test drive, get a finance quote, or just message us — whichever's easiest.",

    "service.sales.title": "Curated sales",
    "service.sales.body": "A short, hand-picked inventory of new and used cars, updated as arrivals pass inspection.",
    "service.inspection.title": "150-point inspection",
    "service.inspection.body": "Every car is inspected before listing — mechanical, electrical, and cosmetic.",
    "service.tradein.title": "Trade-in support",
    "service.tradein.body": "Bring your current car in for an honest valuation against anything in our lot.",
    "service.finance.title": "Financing help",
    "service.finance.body": "We help structure payment plans and connect you with financing partners.",

    "review1": "“Full history, no pressure, and the car was exactly as described. Easiest car purchase I've made.”",
    "review1.name": "— A. Karim, bought a Mercedes C 180",
    "review2": "“They walked me through the inspection report line by line before I even asked. That's rare.”",
    "review2.name": "— S. Doyle, bought a Mercedes A 250e",
    "review3": "“Fast responses on WhatsApp, fair trade-in value on my old car, smooth handover.”",
    "review3.name": "— M. Yusuf, part-exchanged a hatchback",

    "footer.tagline": "Hand-picked, fully inspected new and used cars. Message us on WhatsApp or Instagram to book a viewing.",
    "footer.explore": "Explore",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.aboutUs": "About us",
    "footer.reviews": "Reviews",
    "footer.terms": "Terms & privacy",
    "footer.rights": "All rights reserved.",
    "footer.credentials": "Registered dealer — credentials on request",

    "inventory.eyebrow": "Live inventory",
    "inventory.title": "Every car currently on our lot",
    "inventory.aside": "Filter by make, price, mileage, fuel, transmission, or body type. Tick “Compare” on up to three cars to see them side by side.",
    "inventory.search": "Search",
    "inventory.searchPlaceholder": "e.g. C 180, i20, black...",
    "inventory.make": "Make",
    "inventory.bodyType": "Body type",
    "inventory.fuel": "Fuel type",
    "inventory.transmission": "Transmission",
    "inventory.maxPrice": "Max price (€)",
    "inventory.minYear": "Min year",
    "inventory.maxMileage": "Max mileage",
    "inventory.reset": "Reset filters",
    "inventory.resultsCount": "{count} of {total} vehicles · updated {updated}",
    "inventory.noResults": "No vehicles match those filters yet — try widening your search.",
    "inventory.today": "today",

    "card.compare": "Compare",
    "card.enquireNow": "Enquire now",
    "card.reserveNow": "Reserve now",
    "badge.new": "New arrival",
    "badge.offer": "Special offer",
    "badge.finance": "Finance available",

    "compare.eyebrow": "Comparison tool",
    "compare.title": "Compare vehicles",
    "compare.aside": "Pick up to three cars from the inventory page and see them side by side.",
    "compare.empty": "Nothing to compare yet. Browse inventory and tick “Compare” on up to three cars.",
    "compare.browse": "Browse inventory",
    "compare.view": "View",
    "compare.remove": "Remove",
    "compare.max": "You can compare up to {max} vehicles at a time. Remove one first.",
    "compare.clear": "Clear",
    "compare.now": "Compare now ({count})",
    "compare.comparing": "Comparing: {list}",

    "spec.price": "Price", "spec.year": "Year", "spec.mileage": "Mileage", "spec.make": "Make",
    "spec.model": "Model", "spec.fuel": "Fuel type", "spec.transmission": "Transmission",
    "spec.engine": "Engine", "spec.bodyType": "Body type", "spec.colour": "Colour",
    "spec.condition": "Condition", "spec.serviceHistory": "Service history", "spec.warranty": "Warranty",
    "spec.financeAvailable": "Finance available", "spec.financeYes": "Yes — see finance calculator",
    "spec.financeNo": "No", "spec.lotCode": "Lot code",

    "vehicle.notFound": "Vehicle not found",
    "vehicle.notFoundBody": "That listing may have sold or the link is out of date.",
    "vehicle.browseInventory": "Browse current inventory →",
    "vehicle.aboutThisCar": "About this car",
    "vehicle.fullSpec": "Full specification",
    "vehicle.reserveNow": "Reserve now",
    "vehicle.enquireNow": "Enquire now",
    "vehicle.financeQuote": "Get finance quote for this car",
    "vehicle.addCompare": "Add to compare",
    "vehicle.removeCompare": "Remove from compare",
    "vehicle.reserveNote": "Reserving opens a pre-filled WhatsApp message with this car's details — no payment is taken online. We'll confirm hold terms directly with you.",
    "vehicle.lot": "Lot",
    "vehicle.enquireEyebrow": "Ask a question",
    "vehicle.enquireTitle": "Enquire about this car",
    "vehicle.enquireAside": "Prefer a form to WhatsApp? Send it here and we'll reply the same way.",
    "vehicle.similarEyebrow": "You might also like",
    "vehicle.similarTitle": "Similar vehicles",
    "vehicle.scrubHint": "Drag to explore — cinematic viewer",
    "vehicle.financeEstimate": "Est. from {payment}/mo over {term} months, 10% deposit, {apr}% representative APR",

    "form.fullName": "Full name *", "form.phone": "Phone *", "form.email": "Email", "form.email.required": "Email *",
    "form.message": "Message", "form.message.required": "Message *", "form.send": "Send",
    "form.sendEnquiry": "Send enquiry", "form.sendMessage": "Send message", "form.bookTestDrive": "Book test drive",
    "form.requestCallback": "Request callback", "form.submitApplication": "Submit application",
    "form.requestValuation": "Request valuation",
    "form.opened": "Opening WhatsApp with your details filled in. If it doesn't open, use the email fallback link below.",
    "form.emailFallback": "Or send this enquiry by email instead ↗",

    "finance.eyebrow": "Finance", "finance.title": "Estimate your payment",
    "finance.aside": "A quick estimate to plan around — your actual rate depends on your lender and credit profile.",
    "finance.price": "Vehicle price (€)", "finance.deposit": "Deposit", "finance.term": "Term",
    "finance.monthlyEstimate": "Estimated monthly payment",
    "finance.amountFinanced": "Amount financed", "finance.rateAssumption": "Rate assumption",
    "finance.disclaimer": "Estimate only — not a credit offer. Final terms are confirmed by our finance partner after application.",
    "finance.applyEyebrow": "Next step", "finance.applyTitle": "Finance application",
    "finance.applyAside": "Send us your details and we'll follow up with real terms from our finance partners.",
    "finance.employment": "Employment status", "finance.income": "Approx. annual income (€)",
    "finance.notes": "Anything else we should know?", "finance.consent": "I agree to be contacted about my finance application *",
    "finance.applyNote": "Submitting sends your details to Bahram Automobile via WhatsApp so we can respond quickly — this is an enquiry, not a binding finance agreement.",
    "finance.infoEyebrow": "Good to know", "finance.infoTitle": "Finance information",
    "finance.who.title": "Who can apply", "finance.who.body": "Most buyers 18+ with a valid address and regular income can apply. We'll confirm eligibility with you directly.",
    "finance.time.title": "How long it takes", "finance.time.body": "Initial responses are typically same-day once we have your application details.",
    "finance.need.title": "What you'll need", "finance.need.body": "Proof of ID, proof of address, and recent income evidence — we'll confirm the exact list when we follow up.",

    "px.eyebrow": "Part exchange", "px.title": "Get a valuation on your car",
    "px.aside": "Tell us about your current car and we'll come back with an honest, no-obligation valuation.",
    "px.make": "Make *", "px.model": "Model *", "px.year": "Year *", "px.mileage": "Mileage *",
    "px.fuel": "Fuel type", "px.transmission": "Transmission", "px.condition": "Condition",
    "px.reg": "Registration (optional)", "px.notes": "Anything we should know? (damage, service history, modifications)",
    "px.uploadPhotos": "Upload photos",
    "px.photoNote": "Photos preview here for your reference only — this form can't upload files without a server, so please attach the same photos directly in the WhatsApp chat that opens when you submit.",
    "px.yourName": "Your name *", "px.yourPhone": "Your phone *",

    "contact.eyebrow": "Get in touch", "contact.title": "Contact Bahram Automobile",
    "contact.aside": "WhatsApp is the fastest way to reach us. Prefer a call or email? Those work too.",
    "contact.whatsapp": "Message on WhatsApp", "contact.call": "Call now — 015 901 671 119", "contact.email": "Email us",
    "contact.hours": "Opening hours", "contact.hoursNote": "Hours are a placeholder — update assets/js/main.js (BAHRAM_CONTACT.hours) with your real hours.",
    "contact.location": "Location", "contact.mapNote": "Placeholder map pin — replace the query in this iframe with your exact showroom address for an accurate location.",
    "contact.generalEnquiry": "General enquiry",
    "contact.testDriveEyebrow": "Book a visit", "contact.testDriveTitle": "Book a test drive",
    "contact.testDriveAside": "Tell us which car and when — we'll confirm a time by WhatsApp.",
    "contact.whichCar": "Which car?", "contact.notSure": "Not sure yet",
    "contact.preferredDate": "Preferred date", "contact.preferredTime": "Preferred time",
    "contact.callbackEyebrow": "Can't talk now?", "contact.callbackTitle": "Request a callback",
    "contact.callbackAside": "Leave your number and the best time — we'll call you back.",
    "contact.bestTime": "Best time to call",

    "about.eyebrow": "Who we are", "about.title": "About Bahram Automobile",
    "about.aside": "A short-inventory dealership built around one idea: every car should earn its place on the lot.",
    "about.body": "Bahram Automobile is a curated dealership rather than a high-volume lot. We hand-select each car, put it through a documented inspection before it's listed, and keep a short, honest inventory rather than a large, unverified one. Whether you're after a performance coupe or a dependable daily, the same standard applies to every car we sell.",
    "about.note": "This paragraph is starter copy — edit it with your dealership's real story, founding year, and specialities.",
    "about.trustEyebrow": "Trust", "about.trustTitle": "Warranty & credentials",
    "about.warranty.title": "Warranty", "about.warranty.body": "Every vehicle includes at least a 3-month Bahram Automobile mechanical warranty, with extended options available on eligible cars. See each listing for specific terms.",
    "about.inspection.title": "Inspection standard", "about.inspection.body": "150-point inspection covering engine, chassis, electronics, paint depth, and interior before any car is listed for sale.",
    "about.credentials.title": "Dealer credentials", "about.credentials.body": "Registered dealer — add your trade licence / registration number, VAT number, and any trade association memberships here.",
    "about.reviewsEyebrow": "Customer reviews", "about.reviewsTitle": "Testimonials",
    "about.reviewsAside": "Sample testimonials — replace with your own verified customer reviews.",

    "terms.eyebrow": "Legal", "terms.title": "Terms & privacy",
    "terms.note": "This page is a starter template, not legal advice. Have a solicitor review it before relying on it, and replace the bracketed details with your real dealership information.",

    "lang.label": "Language"
  },

  de: {
    "nav.home": "Startseite", "nav.inventory": "Fahrzeuge", "nav.finance": "Finanzierung",
    "nav.partExchange": "Inzahlungnahme", "nav.about": "Über uns", "nav.contact": "Kontakt",
    "nav.compare": "Fahrzeuge vergleichen", "nav.viewInventory": "Fahrzeuge ansehen", "nav.contactUs": "Kontakt",
    "nav.callNow": "Jetzt anrufen", "nav.backToInventory": "← Zurück zur Übersicht", "nav.addMoreCars": "Weitere Fahrzeuge hinzufügen",
    "nav.menu": "Menü",

    "hero.eyebrow": "Bahram Automobile",
    "hero.title": "Willkommen bei<br>Bahram Automobile",
    "hero.deck": "Ein kuratierter Autohandel mit handverlesenen, vollständig geprüften Neu- und Gebrauchtwagen. Kein Massenlager, keine Überraschungen — jedes Fahrzeug hat sich seinen Platz verdient.",
    "hero.viewInventory": "Fahrzeuge ansehen", "hero.bookTestDrive": "Probefahrt buchen",
    "hero.getFinanceQuote": "Finanzierungsangebot", "hero.contactUs": "Kontakt",
    "hero.search": "Suchen", "hero.anyMake": "Alle Marken", "hero.anyBody": "Alle Karosserien", "hero.anyFuel": "Alle Kraftstoffe",
    "hero.maxPrice": "Preis bis (€)", "hero.minYear": "Baujahr ab", "hero.scroll": "Scrollen",
    "hero.offerBanner": "Diesen Monat: 0 % Anzahlungszuschuss auf ausgewählte finanzierbare Fahrzeuge",
    "hero.getFinance": "Finanzierungsangebot",

    "section.featuredEyebrow": "Empfehlung", "section.featuredTitle": "Empfohlene Fahrzeuge",
    "section.featuredAside": "Eine kurze Auswahl der Fahrzeuge, die wir selbst fahren würden.",
    "section.arrivalsEyebrow": "Neu eingetroffen", "section.arrivalsTitle": "Neuzugänge",
    "section.arrivalsAside": "Kürzlich unsere 150-Punkte-Prüfung bestanden und zum Verkauf freigegeben.",
    "section.offersEyebrow": "Preisreduziert", "section.offersTitle": "Sonderangebote",
    "section.offersAside": "Diesen Monat reduziert im Rahmen unserer Räumung von Neuzugängen.",
    "section.servicesEyebrow": "Was wir tun", "section.servicesTitle": "Ein Standard für alle Marken",
    "section.servicesAside": "Der gleiche Prozess hinter jedem Fahrzeug, das wir verkaufen.",
    "section.reviewsEyebrow": "Kundenbewertungen", "section.reviewsTitle": "Was Käufer sagen",
    "section.reviewsAside": "Beispiel-Bewertungen — jederzeit durch eigene, verifizierte Bewertungen ersetzbar.",
    "section.ctaTitle": "Bereit, eines live zu sehen?",
    "section.ctaAside": "Probefahrt buchen, Finanzierungsangebot anfordern oder einfach schreiben — was auch immer einfacher ist.",

    "service.sales.title": "Kuratiertes Angebot", "service.sales.body": "Ein kurzes, handverlesenes Angebot an Neu- und Gebrauchtwagen, aktualisiert sobald neue Fahrzeuge die Prüfung bestehen.",
    "service.inspection.title": "150-Punkte-Prüfung", "service.inspection.body": "Jedes Fahrzeug wird vor dem Angebot geprüft — Technik, Elektrik und Optik.",
    "service.tradein.title": "Inzahlungnahme", "service.tradein.body": "Bringen Sie Ihr aktuelles Fahrzeug für eine faire Bewertung gegen jedes Fahrzeug unseres Bestands vorbei.",
    "service.finance.title": "Finanzierungshilfe", "service.finance.body": "Wir helfen bei der Gestaltung von Zahlungsplänen und vermitteln Finanzierungspartner.",

    "review1": "„Vollständige Historie, kein Druck, das Fahrzeug entsprach genau der Beschreibung. Der einfachste Autokauf, den ich je hatte.“",
    "review1.name": "— A. Karim, kaufte einen Mercedes C 180",
    "review2": "„Sie haben mir den Prüfbericht Zeile für Zeile erklärt, bevor ich überhaupt gefragt habe. Das ist selten.“",
    "review2.name": "— S. Doyle, kaufte einen Mercedes A 250e",
    "review3": "„Schnelle Antworten per WhatsApp, fairer Inzahlungnahme-Wert für mein altes Auto, reibungslose Übergabe.“",
    "review3.name": "— M. Yusuf, gab einen Kleinwagen in Zahlung",

    "footer.tagline": "Handverlesene, vollständig geprüfte Neu- und Gebrauchtwagen. Schreiben Sie uns auf WhatsApp oder Instagram für eine Besichtigung.",
    "footer.explore": "Entdecken", "footer.company": "Unternehmen", "footer.contact": "Kontakt",
    "footer.aboutUs": "Über uns", "footer.reviews": "Bewertungen", "footer.terms": "AGB & Datenschutz",
    "footer.rights": "Alle Rechte vorbehalten.", "footer.credentials": "Registrierter Händler — Nachweise auf Anfrage",

    "inventory.eyebrow": "Aktueller Bestand", "inventory.title": "Alle Fahrzeuge in unserem Bestand",
    "inventory.aside": "Filtern Sie nach Marke, Preis, Kilometerstand, Kraftstoff, Getriebe oder Karosserieform. Wählen Sie bis zu drei Fahrzeuge zum Vergleich aus.",
    "inventory.search": "Suche", "inventory.searchPlaceholder": "z. B. C 180, i20, schwarz...",
    "inventory.make": "Marke", "inventory.bodyType": "Karosserieform", "inventory.fuel": "Kraftstoff",
    "inventory.transmission": "Getriebe", "inventory.maxPrice": "Preis bis (€)", "inventory.minYear": "Baujahr ab",
    "inventory.maxMileage": "Kilometerstand bis", "inventory.reset": "Filter zurücksetzen",
    "inventory.resultsCount": "{count} von {total} Fahrzeugen · aktualisiert {updated}",
    "inventory.noResults": "Kein Fahrzeug entspricht diesen Filtern — versuchen Sie eine weiter gefasste Suche.",
    "inventory.today": "heute",

    "card.compare": "Vergleichen", "card.enquireNow": "Anfragen", "card.reserveNow": "Reservieren",
    "badge.new": "Neuzugang", "badge.offer": "Sonderangebot", "badge.finance": "Finanzierung möglich",

    "compare.eyebrow": "Vergleichstool", "compare.title": "Fahrzeuge vergleichen",
    "compare.aside": "Wählen Sie bis zu drei Fahrzeuge aus der Übersicht und vergleichen Sie sie nebeneinander.",
    "compare.empty": "Noch nichts zum Vergleichen. Durchsuchen Sie den Bestand und wählen Sie bis zu drei Fahrzeuge aus.",
    "compare.browse": "Bestand durchsuchen", "compare.view": "Ansehen", "compare.remove": "Entfernen",
    "compare.max": "Sie können bis zu {max} Fahrzeuge gleichzeitig vergleichen. Entfernen Sie zuerst eines.",
    "compare.clear": "Zurücksetzen", "compare.now": "Jetzt vergleichen ({count})", "compare.comparing": "Im Vergleich: {list}",

    "spec.price": "Preis", "spec.year": "Baujahr", "spec.mileage": "Kilometerstand", "spec.make": "Marke",
    "spec.model": "Modell", "spec.fuel": "Kraftstoff", "spec.transmission": "Getriebe",
    "spec.engine": "Motor", "spec.bodyType": "Karosserieform", "spec.colour": "Farbe",
    "spec.condition": "Zustand", "spec.serviceHistory": "Wartungshistorie", "spec.warranty": "Garantie",
    "spec.financeAvailable": "Finanzierung möglich", "spec.financeYes": "Ja — siehe Finanzierungsrechner",
    "spec.financeNo": "Nein", "spec.lotCode": "Losnummer",

    "vehicle.notFound": "Fahrzeug nicht gefunden", "vehicle.notFoundBody": "Dieses Angebot wurde möglicherweise verkauft oder der Link ist veraltet.",
    "vehicle.browseInventory": "Aktuellen Bestand ansehen →", "vehicle.aboutThisCar": "Über dieses Fahrzeug",
    "vehicle.fullSpec": "Vollständige Ausstattung", "vehicle.reserveNow": "Reservieren", "vehicle.enquireNow": "Anfragen",
    "vehicle.financeQuote": "Finanzierungsangebot für dieses Fahrzeug", "vehicle.addCompare": "Zum Vergleich hinzufügen",
    "vehicle.removeCompare": "Aus Vergleich entfernen",
    "vehicle.reserveNote": "Die Reservierung öffnet eine vorausgefüllte WhatsApp-Nachricht mit den Fahrzeugdetails — es wird keine Online-Zahlung vorgenommen. Wir bestätigen die Reservierungsbedingungen direkt mit Ihnen.",
    "vehicle.lot": "Los", "vehicle.enquireEyebrow": "Frage stellen", "vehicle.enquireTitle": "Zu diesem Fahrzeug anfragen",
    "vehicle.enquireAside": "Lieber ein Formular als WhatsApp? Senden Sie es hier ab, wir antworten auf demselben Weg.",
    "vehicle.similarEyebrow": "Das könnte Ihnen auch gefallen", "vehicle.similarTitle": "Ähnliche Fahrzeuge",
    "vehicle.scrubHint": "Ziehen zum Erkunden — Filmansicht",
    "vehicle.financeEstimate": "Ca. ab {payment}/Monat über {term} Monate, 10 % Anzahlung, {apr}% effektiver Jahreszins",

    "form.fullName": "Vollständiger Name *", "form.phone": "Telefon *", "form.email": "E-Mail", "form.email.required": "E-Mail *",
    "form.message": "Nachricht", "form.message.required": "Nachricht *", "form.send": "Senden",
    "form.sendEnquiry": "Anfrage senden", "form.sendMessage": "Nachricht senden", "form.bookTestDrive": "Probefahrt buchen",
    "form.requestCallback": "Rückruf anfordern", "form.submitApplication": "Antrag absenden", "form.requestValuation": "Bewertung anfordern",
    "form.opened": "WhatsApp wird mit Ihren Angaben geöffnet. Falls es nicht öffnet, nutzen Sie den E-Mail-Link unten.",
    "form.emailFallback": "Oder diese Anfrage stattdessen per E-Mail senden ↗",

    "finance.eyebrow": "Finanzierung", "finance.title": "Rate berechnen",
    "finance.aside": "Eine schnelle Schätzung zur Planung — Ihr tatsächlicher Zinssatz hängt von Ihrer Bank und Bonität ab.",
    "finance.price": "Fahrzeugpreis (€)", "finance.deposit": "Anzahlung", "finance.term": "Laufzeit",
    "finance.monthlyEstimate": "Geschätzte monatliche Rate", "finance.amountFinanced": "Finanzierter Betrag",
    "finance.rateAssumption": "Zins-Annahme",
    "finance.disclaimer": "Nur eine Schätzung — kein Kreditangebot. Die endgültigen Konditionen bestätigt unser Finanzierungspartner nach Antragstellung.",
    "finance.applyEyebrow": "Nächster Schritt", "finance.applyTitle": "Finanzierungsantrag",
    "finance.applyAside": "Senden Sie uns Ihre Daten, wir melden uns mit den echten Konditionen unserer Finanzierungspartner.",
    "finance.employment": "Beschäftigungsstatus", "finance.income": "Ungefähres Jahreseinkommen (€)",
    "finance.notes": "Gibt es sonst noch etwas, das wir wissen sollten?", "finance.consent": "Ich stimme zu, bezüglich meines Finanzierungsantrags kontaktiert zu werden *",
    "finance.applyNote": "Beim Absenden werden Ihre Daten per WhatsApp an Bahram Automobile gesendet, damit wir schnell antworten können — dies ist eine Anfrage, kein verbindlicher Finanzierungsvertrag.",
    "finance.infoEyebrow": "Gut zu wissen", "finance.infoTitle": "Finanzierungsinformationen",
    "finance.who.title": "Wer kann sich bewerben", "finance.who.body": "Die meisten Käufer ab 18 Jahren mit gültiger Adresse und regelmäßigem Einkommen können sich bewerben. Wir bestätigen die Berechtigung direkt mit Ihnen.",
    "finance.time.title": "Wie lange es dauert", "finance.time.body": "Erste Antworten erfolgen in der Regel noch am selben Tag, sobald wir Ihre Antragsdaten haben.",
    "finance.need.title": "Was Sie benötigen", "finance.need.body": "Ausweisdokument, Adressnachweis und aktueller Einkommensnachweis — die genaue Liste bestätigen wir bei der Rückmeldung.",

    "px.eyebrow": "Inzahlungnahme", "px.title": "Bewertung für Ihr Fahrzeug erhalten",
    "px.aside": "Erzählen Sie uns von Ihrem aktuellen Fahrzeug, wir melden uns mit einer ehrlichen, unverbindlichen Bewertung.",
    "px.make": "Marke *", "px.model": "Modell *", "px.year": "Baujahr *", "px.mileage": "Kilometerstand *",
    "px.fuel": "Kraftstoff", "px.transmission": "Getriebe", "px.condition": "Zustand",
    "px.reg": "Kennzeichen (optional)", "px.notes": "Gibt es etwas, das wir wissen sollten? (Schäden, Wartungshistorie, Umbauten)",
    "px.uploadPhotos": "Fotos hochladen",
    "px.photoNote": "Die Fotos werden hier nur zur Vorschau angezeigt — dieses Formular kann ohne Server keine Dateien hochladen. Bitte fügen Sie dieselben Fotos direkt im WhatsApp-Chat an, der sich beim Absenden öffnet.",
    "px.yourName": "Ihr Name *", "px.yourPhone": "Ihre Telefonnummer *",

    "contact.eyebrow": "Kontakt aufnehmen", "contact.title": "Bahram Automobile kontaktieren",
    "contact.aside": "WhatsApp ist der schnellste Weg, uns zu erreichen. Lieber anrufen oder eine E-Mail schreiben? Auch das geht.",
    "contact.whatsapp": "Auf WhatsApp schreiben", "contact.call": "Jetzt anrufen — 015 901 671 119", "contact.email": "E-Mail schreiben",
    "contact.hours": "Öffnungszeiten", "contact.hoursNote": "Die Öffnungszeiten sind ein Platzhalter — bitte in assets/js/main.js (BAHRAM_CONTACT.hours) durch Ihre echten Zeiten ersetzen.",
    "contact.location": "Standort", "contact.mapNote": "Platzhalter-Kartenpunkt — ersetzen Sie die Suchanfrage in diesem iframe durch Ihre genaue Adresse.",
    "contact.generalEnquiry": "Allgemeine Anfrage",
    "contact.testDriveEyebrow": "Termin vereinbaren", "contact.testDriveTitle": "Probefahrt buchen",
    "contact.testDriveAside": "Sagen Sie uns, welches Fahrzeug und wann — wir bestätigen einen Termin per WhatsApp.",
    "contact.whichCar": "Welches Fahrzeug?", "contact.notSure": "Noch nicht sicher",
    "contact.preferredDate": "Wunschdatum", "contact.preferredTime": "Wunschzeit",
    "contact.callbackEyebrow": "Gerade keine Zeit?", "contact.callbackTitle": "Rückruf anfordern",
    "contact.callbackAside": "Hinterlassen Sie Ihre Nummer und die beste Zeit — wir rufen zurück.",
    "contact.bestTime": "Beste Zeit für einen Anruf",

    "about.eyebrow": "Wer wir sind", "about.title": "Über Bahram Automobile",
    "about.aside": "Ein Autohandel mit kleinem, ausgewähltem Bestand nach einem Grundsatz: Jedes Fahrzeug muss sich seinen Platz verdienen.",
    "about.body": "Bahram Automobile ist ein kuratierter Autohandel statt eines Großlagers. Wir wählen jedes Fahrzeug persönlich aus, lassen es vor dem Angebot dokumentiert prüfen und führen einen kleinen, ehrlichen statt großen, ungeprüften Bestand. Ob Sportcoupé oder verlässlicher Alltagswagen — für jedes verkaufte Fahrzeug gilt derselbe Standard.",
    "about.note": "Dieser Absatz ist Beispieltext — ersetzen Sie ihn durch die echte Geschichte, das Gründungsjahr und die Spezialisierungen Ihres Autohauses.",
    "about.trustEyebrow": "Vertrauen", "about.trustTitle": "Garantie & Nachweise",
    "about.warranty.title": "Garantie", "about.warranty.body": "Jedes Fahrzeug erhält mindestens eine 3-monatige mechanische Garantie von Bahram Automobile, mit erweiterten Optionen für berechtigte Fahrzeuge. Details siehe jeweiliges Angebot.",
    "about.inspection.title": "Prüfstandard", "about.inspection.body": "150-Punkte-Prüfung von Motor, Fahrwerk, Elektrik, Lackschichtdicke und Innenraum vor jedem Verkaufsangebot.",
    "about.credentials.title": "Händlernachweise", "about.credentials.body": "Registrierter Händler — fügen Sie hier Ihre Gewerbe-/Zulassungsnummer, USt-ID und Mitgliedschaften in Handelsverbänden ein.",
    "about.reviewsEyebrow": "Kundenbewertungen", "about.reviewsTitle": "Erfahrungsberichte",
    "about.reviewsAside": "Beispiel-Bewertungen — jederzeit durch eigene, verifizierte Kundenbewertungen ersetzbar.",

    "terms.eyebrow": "Rechtliches", "terms.title": "AGB & Datenschutz",
    "terms.note": "Diese Seite ist eine Vorlage und keine Rechtsberatung. Lassen Sie sie von einem Anwalt prüfen, bevor Sie sich darauf verlassen, und ersetzen Sie die Platzhalter durch Ihre echten Angaben.",

    "lang.label": "Sprache"
  },

  fa: {
    "nav.home": "خانه", "nav.inventory": "موجودی خودروها", "nav.finance": "تأمین مالی",
    "nav.partExchange": "معاوضه خودرو", "nav.about": "درباره ما", "nav.contact": "تماس با ما",
    "nav.compare": "مقایسه خودروها", "nav.viewInventory": "مشاهده موجودی", "nav.contactUs": "تماس با ما",
    "nav.callNow": "تماس بگیرید", "nav.backToInventory": "← بازگشت به موجودی", "nav.addMoreCars": "افزودن خودروی بیشتر",
    "nav.menu": "منو",

    "hero.eyebrow": "بهرام آتومبیل",
    "hero.title": "به بهرام آتومبیل<br>خوش آمدید",
    "hero.deck": "یک نمایشگاه خودرو با گزینش دقیق و بازرسی کامل خودروهای نو و کارکرده. بدون انبار حجمی، بدون غافلگیری — هر خودرو باید جای خود را در نمایشگاه ما به دست بیاورد.",
    "hero.viewInventory": "مشاهده موجودی", "hero.bookTestDrive": "رزرو تست‌درایو",
    "hero.getFinanceQuote": "دریافت پیشنهاد تأمین مالی", "hero.contactUs": "تماس با ما",
    "hero.search": "جستجو", "hero.anyMake": "همه برندها", "hero.anyBody": "همه بدنه‌ها", "hero.anyFuel": "همه سوخت‌ها",
    "hero.maxPrice": "حداکثر قیمت (€)", "hero.minYear": "حداقل سال ساخت", "hero.scroll": "اسکرول کنید",
    "hero.offerBanner": "این ماه: کمک هزینه پیش‌پرداخت صفر درصد برای خودروهای واجد شرایط تأمین مالی",
    "hero.getFinance": "دریافت پیشنهاد تأمین مالی",

    "section.featuredEyebrow": "ویژه", "section.featuredTitle": "خودروهای ویژه",
    "section.featuredAside": "فهرستی کوتاه از خودروهایی که خودمان هم می‌پسندیم.",
    "section.arrivalsEyebrow": "تازه‌وارد", "section.arrivalsTitle": "خودروهای تازه‌وارد",
    "section.arrivalsAside": "به‌تازگی بازرسی ۱۵۰ مرحله‌ای ما را گذرانده و برای فروش عرضه شده‌اند.",
    "section.offersEyebrow": "قیمت ویژه", "section.offersTitle": "پیشنهادهای ویژه",
    "section.offersAside": "این ماه در چارچوب تخفیف خودروهای تازه‌وارد کاهش یافته‌اند.",
    "section.servicesEyebrow": "کار ما", "section.servicesTitle": "یک استاندارد برای همه",
    "section.servicesAside": "همان فرآیند پشت هر خودرویی که می‌فروشیم، فارغ از برند.",
    "section.reviewsEyebrow": "نظرات مشتریان", "section.reviewsTitle": "خریداران چه می‌گویند",
    "section.reviewsAside": "نمونه نظرات — هر زمان می‌توانید با نظرات واقعی و تأییدشده جایگزین کنید.",
    "section.ctaTitle": "آماده دیدن یک خودرو به‌صورت حضوری هستید؟",
    "section.ctaAside": "رزرو تست‌درایو، دریافت پیشنهاد تأمین مالی یا فقط پیام دادن — هرکدام راحت‌تر است.",

    "service.sales.title": "فروش گزینش‌شده", "service.sales.body": "موجودی کوتاه و گزینش‌شده از خودروهای نو و کارکرده که با عبور از بازرسی به‌روزرسانی می‌شود.",
    "service.inspection.title": "بازرسی ۱۵۰ مرحله‌ای", "service.inspection.body": "هر خودرو پیش از عرضه از نظر فنی، برقی و ظاهری بازرسی می‌شود.",
    "service.tradein.title": "پشتیبانی معاوضه", "service.tradein.body": "خودروی فعلی خود را برای ارزیابی صادقانه در مقابل هر خودروی موجودی ما بیاورید.",
    "service.finance.title": "کمک در تأمین مالی", "service.finance.body": "ما در تنظیم برنامه پرداخت کمک می‌کنیم و شما را به شرکای تأمین مالی وصل می‌کنیم.",

    "review1": "«سابقه کامل، بدون فشار، و خودرو دقیقاً همان‌طور که توصیف شده بود. راحت‌ترین خرید خودرویی که داشته‌ام.»",
    "review1.name": "— ا. کریم، خریدار مرسدس C 180",
    "review2": "«آن‌ها گزارش بازرسی را خط به خط برایم توضیح دادند، حتی قبل از این‌که بپرسم. این نادر است.»",
    "review2.name": "— س. دویل، خریدار مرسدس A 250e",
    "review3": "«پاسخ‌گویی سریع در واتساپ، ارزش‌گذاری منصفانه برای خودروی قدیمی‌ام، تحویل بدون دردسر.»",
    "review3.name": "— م. یوسف، معاوضه یک هاچ‌بک",

    "footer.tagline": "خودروهای نو و کارکرده گزینش‌شده و کاملاً بازرسی‌شده. برای رزرو بازدید در واتساپ یا اینستاگرام پیام دهید.",
    "footer.explore": "کاوش", "footer.company": "شرکت", "footer.contact": "تماس",
    "footer.aboutUs": "درباره ما", "footer.reviews": "نظرات", "footer.terms": "قوانین و حریم خصوصی",
    "footer.rights": "تمام حقوق محفوظ است.", "footer.credentials": "نمایندگی ثبت‌شده — مدارک در صورت درخواست",

    "inventory.eyebrow": "موجودی زنده", "inventory.title": "همه خودروهای موجود در نمایشگاه ما",
    "inventory.aside": "بر اساس برند، قیمت، کارکرد، سوخت، گیربکس یا نوع بدنه فیلتر کنید. تا سه خودرو را برای مقایسه انتخاب کنید.",
    "inventory.search": "جستجو", "inventory.searchPlaceholder": "مثلاً C 180، i20، مشکی...",
    "inventory.make": "برند", "inventory.bodyType": "نوع بدنه", "inventory.fuel": "نوع سوخت",
    "inventory.transmission": "گیربکس", "inventory.maxPrice": "حداکثر قیمت (€)", "inventory.minYear": "حداقل سال ساخت",
    "inventory.maxMileage": "حداکثر کارکرد", "inventory.reset": "بازنشانی فیلترها",
    "inventory.resultsCount": "{count} از {total} خودرو · به‌روزرسانی {updated}",
    "inventory.noResults": "هیچ خودرویی با این فیلترها مطابقت ندارد — جستجوی خود را گسترده‌تر کنید.",
    "inventory.today": "امروز",

    "card.compare": "مقایسه", "card.enquireNow": "استعلام", "card.reserveNow": "رزرو",
    "badge.new": "تازه‌وارد", "badge.offer": "پیشنهاد ویژه", "badge.finance": "امکان تأمین مالی",

    "compare.eyebrow": "ابزار مقایسه", "compare.title": "مقایسه خودروها",
    "compare.aside": "تا سه خودرو از صفحه موجودی انتخاب کنید و آن‌ها را کنار هم ببینید.",
    "compare.empty": "هنوز چیزی برای مقایسه نیست. به موجودی سر بزنید و تا سه خودرو را انتخاب کنید.",
    "compare.browse": "مشاهده موجودی", "compare.view": "مشاهده", "compare.remove": "حذف",
    "compare.max": "می‌توانید حداکثر {max} خودرو را هم‌زمان مقایسه کنید. ابتدا یکی را حذف کنید.",
    "compare.clear": "پاک کردن", "compare.now": "مقایسه ({count})", "compare.comparing": "در حال مقایسه: {list}",

    "spec.price": "قیمت", "spec.year": "سال ساخت", "spec.mileage": "کارکرد", "spec.make": "برند",
    "spec.model": "مدل", "spec.fuel": "نوع سوخت", "spec.transmission": "گیربکس",
    "spec.engine": "موتور", "spec.bodyType": "نوع بدنه", "spec.colour": "رنگ",
    "spec.condition": "وضعیت", "spec.serviceHistory": "سابقه سرویس", "spec.warranty": "گارانتی",
    "spec.financeAvailable": "امکان تأمین مالی", "spec.financeYes": "بله — ماشین‌حساب تأمین مالی را ببینید",
    "spec.financeNo": "خیر", "spec.lotCode": "کد قطعه",

    "vehicle.notFound": "خودرو یافت نشد", "vehicle.notFoundBody": "این آگهی ممکن است فروخته شده یا لینک قدیمی باشد.",
    "vehicle.browseInventory": "مشاهده موجودی فعلی ←", "vehicle.aboutThisCar": "درباره این خودرو",
    "vehicle.fullSpec": "مشخصات کامل", "vehicle.reserveNow": "رزرو", "vehicle.enquireNow": "استعلام",
    "vehicle.financeQuote": "دریافت پیشنهاد تأمین مالی برای این خودرو", "vehicle.addCompare": "افزودن به مقایسه",
    "vehicle.removeCompare": "حذف از مقایسه",
    "vehicle.reserveNote": "رزرو یک پیام از‌پیش‌آماده واتساپ با جزئیات این خودرو باز می‌کند — هیچ پرداختی آنلاین انجام نمی‌شود. شرایط نگه‌داری را مستقیماً با شما تأیید می‌کنیم.",
    "vehicle.lot": "قطعه", "vehicle.enquireEyebrow": "سؤالی دارید؟", "vehicle.enquireTitle": "درباره این خودرو استعلام بگیرید",
    "vehicle.enquireAside": "به‌جای واتساپ فرم می‌خواهید؟ اینجا ارسال کنید، به همان روش پاسخ می‌دهیم.",
    "vehicle.similarEyebrow": "شاید این‌ها را هم بپسندید", "vehicle.similarTitle": "خودروهای مشابه",
    "vehicle.scrubHint": "برای کاوش بکشید — نمای سینمایی",
    "vehicle.financeEstimate": "تخمین از {payment}/ماه در {term} ماه، ۱۰٪ پیش‌پرداخت، نرخ سالانه تقریبی {apr}٪",

    "form.fullName": "نام کامل *", "form.phone": "شماره تماس *", "form.email": "ایمیل", "form.email.required": "ایمیل *",
    "form.message": "پیام", "form.message.required": "پیام *", "form.send": "ارسال",
    "form.sendEnquiry": "ارسال استعلام", "form.sendMessage": "ارسال پیام", "form.bookTestDrive": "رزرو تست‌درایو",
    "form.requestCallback": "درخواست تماس مجدد", "form.submitApplication": "ارسال درخواست", "form.requestValuation": "درخواست ارزیابی",
    "form.opened": "واتساپ با جزئیات شما باز می‌شود. اگر باز نشد، از لینک ایمیل جایگزین در پایین استفاده کنید.",
    "form.emailFallback": "یا این استعلام را از طریق ایمیل ارسال کنید ↗",

    "finance.eyebrow": "تأمین مالی", "finance.title": "تخمین قسط ماهانه",
    "finance.aside": "یک تخمین سریع برای برنامه‌ریزی — نرخ واقعی شما به وام‌دهنده و اعتبار شما بستگی دارد.",
    "finance.price": "قیمت خودرو (€)", "finance.deposit": "پیش‌پرداخت", "finance.term": "مدت زمان",
    "finance.monthlyEstimate": "تخمین قسط ماهانه", "finance.amountFinanced": "مبلغ تأمین‌مالی‌شده",
    "finance.rateAssumption": "فرض نرخ سود",
    "finance.disclaimer": "فقط تخمین است — پیشنهاد اعتباری نیست. شرایط نهایی توسط شریک تأمین مالی ما پس از درخواست تأیید می‌شود.",
    "finance.applyEyebrow": "قدم بعدی", "finance.applyTitle": "درخواست تأمین مالی",
    "finance.applyAside": "اطلاعات خود را برای ما ارسال کنید تا با شرایط واقعی شرکای تأمین مالی پیگیری کنیم.",
    "finance.employment": "وضعیت شغلی", "finance.income": "درآمد سالانه تقریبی (€)",
    "finance.notes": "نکته دیگری هست که باید بدانیم؟", "finance.consent": "موافقم که درباره درخواست تأمین مالی‌ام با من تماس گرفته شود *",
    "finance.applyNote": "با ارسال، اطلاعات شما از طریق واتساپ به بهرام آتومبیل ارسال می‌شود تا سریع پاسخ دهیم — این یک استعلام است، نه قرارداد تأمین مالی الزام‌آور.",
    "finance.infoEyebrow": "خوب است بدانید", "finance.infoTitle": "اطلاعات تأمین مالی",
    "finance.who.title": "چه کسانی می‌توانند درخواست دهند", "finance.who.body": "اکثر خریداران بالای ۱۸ سال با آدرس معتبر و درآمد منظم می‌توانند درخواست دهند. واجد شرایط بودن را مستقیماً با شما تأیید می‌کنیم.",
    "finance.time.title": "چقدر طول می‌کشد", "finance.time.body": "معمولاً پاسخ اولیه همان روزی که جزئیات درخواست شما را دریافت کنیم ارسال می‌شود.",
    "finance.need.title": "چه چیزی نیاز دارید", "finance.need.body": "مدرک هویت، مدرک آدرس و مدرک درآمد اخیر — فهرست دقیق را هنگام پیگیری تأیید می‌کنیم.",

    "px.eyebrow": "معاوضه خودرو", "px.title": "ارزیابی خودروی خود را دریافت کنید",
    "px.aside": "درباره خودروی فعلی خود به ما بگویید تا با یک ارزیابی صادقانه و بدون تعهد پاسخ دهیم.",
    "px.make": "برند *", "px.model": "مدل *", "px.year": "سال ساخت *", "px.mileage": "کارکرد *",
    "px.fuel": "نوع سوخت", "px.transmission": "گیربکس", "px.condition": "وضعیت",
    "px.reg": "شماره پلاک (اختیاری)", "px.notes": "نکته‌ای هست که باید بدانیم؟ (آسیب، سابقه سرویس، تغییرات)",
    "px.uploadPhotos": "بارگذاری عکس‌ها",
    "px.photoNote": "عکس‌ها فقط برای مرور شما در اینجا نمایش داده می‌شوند — این فرم بدون سرور نمی‌تواند فایل بارگذاری کند. لطفاً همان عکس‌ها را مستقیماً در گفتگوی واتساپی که هنگام ارسال باز می‌شود پیوست کنید.",
    "px.yourName": "نام شما *", "px.yourPhone": "شماره تماس شما *",

    "contact.eyebrow": "در تماس باشید", "contact.title": "تماس با بهرام آتومبیل",
    "contact.aside": "واتساپ سریع‌ترین راه تماس با ماست. تماس تلفنی یا ایمیل را ترجیح می‌دهید؟ آن‌ها هم امکان‌پذیرند.",
    "contact.whatsapp": "پیام در واتساپ", "contact.call": "تماس بگیرید — ۰۱۵۹۰۱۶۷۱۱۱۹", "contact.email": "ایمیل به ما",
    "contact.hours": "ساعات کاری", "contact.hoursNote": "ساعات کاری فقط نمونه است — آن را در assets/js/main.js (BAHRAM_CONTACT.hours) با ساعات واقعی جایگزین کنید.",
    "contact.location": "موقعیت مکانی", "contact.mapNote": "پین نقشه نمونه است — عبارت جستجو در این iframe را با آدرس دقیق نمایشگاه خود جایگزین کنید.",
    "contact.generalEnquiry": "استعلام عمومی",
    "contact.testDriveEyebrow": "رزرو بازدید", "contact.testDriveTitle": "رزرو تست‌درایو",
    "contact.testDriveAside": "بگویید کدام خودرو و چه زمانی — زمان را از طریق واتساپ تأیید می‌کنیم.",
    "contact.whichCar": "کدام خودرو؟", "contact.notSure": "هنوز مطمئن نیستم",
    "contact.preferredDate": "تاریخ ترجیحی", "contact.preferredTime": "ساعت ترجیحی",
    "contact.callbackEyebrow": "الان وقت صحبت ندارید؟", "contact.callbackTitle": "درخواست تماس مجدد",
    "contact.callbackAside": "شماره خود و بهترین زمان را بگذارید — با شما تماس می‌گیریم.",
    "contact.bestTime": "بهترین زمان برای تماس",

    "about.eyebrow": "ما که هستیم", "about.title": "درباره بهرام آتومبیل",
    "about.aside": "نمایشگاهی با موجودی کوتاه، بر پایه یک ایده: هر خودرو باید جای خود را در نمایشگاه به دست بیاورد.",
    "about.body": "بهرام آتومبیل به‌جای یک نمایشگاه پرحجم، یک نمایشگاه گزینش‌شده است. ما هر خودرو را دستی انتخاب می‌کنیم، پیش از عرضه آن را از بازرسی مستند عبور می‌دهیم و موجودی کوتاه و صادقانه‌ای داریم نه موجودی بزرگ و بررسی‌نشده. چه به‌دنبال یک کوپه پرفورمنس باشید چه یک خودروی روزمره قابل‌اعتماد، همان استاندارد برای هر خودرویی که می‌فروشیم اعمال می‌شود.",
    "about.note": "این پاراگراف متن نمونه است — آن را با داستان واقعی نمایشگاه، سال تأسیس و تخصص‌های خود جایگزین کنید.",
    "about.trustEyebrow": "اعتماد", "about.trustTitle": "گارانتی و مدارک",
    "about.warranty.title": "گارانتی", "about.warranty.body": "هر خودرو حداقل شامل ۳ ماه گارانتی مکانیکی بهرام آتومبیل است، با گزینه‌های تمدید برای خودروهای واجد شرایط. برای شرایط دقیق به هر آگهی مراجعه کنید.",
    "about.inspection.title": "استاندارد بازرسی", "about.inspection.body": "بازرسی ۱۵۰ مرحله‌ای شامل موتور، شاسی، برق، ضخامت رنگ و داخل خودرو پیش از هر عرضه برای فروش.",
    "about.credentials.title": "مدارک نمایندگی", "about.credentials.body": "نمایندگی ثبت‌شده — شماره جواز کسب/ثبت، شماره مالیاتی و عضویت در انجمن‌های صنفی خود را اینجا اضافه کنید.",
    "about.reviewsEyebrow": "نظرات مشتریان", "about.reviewsTitle": "نظرات مشتریان",
    "about.reviewsAside": "نمونه نظرات — هر زمان می‌توانید با نظرات واقعی و تأییدشده مشتریان جایگزین کنید.",

    "terms.eyebrow": "حقوقی", "terms.title": "قوانین و حریم خصوصی",
    "terms.note": "این صفحه یک الگوی نمونه است، نه مشاوره حقوقی. پیش از اتکا به آن، آن را با یک وکیل بررسی کنید و جزئیات داخل کروشه را با اطلاعات واقعی نمایشگاه خود جایگزین کنید.",

    "lang.label": "زبان"
  }
};

function currentLang() {
  const stored = window.localStorage.getItem(BAHRAM_LANG_KEY);
  return BAHRAM_I18N[stored] ? stored : BAHRAM_DEFAULT_LANG;
}

function t(key, vars) {
  const lang = currentLang();
  let str = (BAHRAM_I18N[lang] && BAHRAM_I18N[lang][key]) || (BAHRAM_I18N.en && BAHRAM_I18N.en[key]) || key;
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => { str = str.replace(new RegExp(`\\{${k}\\}`, "g"), v); });
  }
  return str;
}

// Picks the vehicle description for the active language, falling back to English.
function vehicleDescription(vehicle) {
  const lang = currentLang();
  if (lang === "de" && vehicle.description_de) return vehicle.description_de;
  if (lang === "fa" && vehicle.description_fa) return vehicle.description_fa;
  return vehicle.description;
}

function applyTranslations(root) {
  const scope = root || document;
  scope.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  scope.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  scope.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder)); });
  scope.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
}

function setLang(lang) {
  if (!BAHRAM_I18N[lang]) lang = BAHRAM_DEFAULT_LANG;
  window.localStorage.setItem(BAHRAM_LANG_KEY, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  applyTranslations();
  document.dispatchEvent(new CustomEvent("lang:change", { detail: lang }));
}

function initLangSwitcher() {
  const mount = document.getElementById("lang-switcher");
  if (!mount) return;
  const langs = [["en", "EN"], ["de", "DE"], ["fa", "فا"]];
  mount.innerHTML = langs.map(([code, label]) => `<button type="button" class="lang-switcher__btn" data-lang="${code}">${label}</button>`).join("");
  function sync() {
    const active = currentLang();
    mount.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === active);
    });
  }
  mount.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => { setLang(btn.dataset.lang); sync(); });
  });
  sync();
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang();
  document.documentElement.dir = currentLang() === "fa" ? "rtl" : "ltr";
  applyTranslations();
  initLangSwitcher();
});
