/*
  BAHRAM AUTOMOBILE — shared site behavior
  Loaded on every page after assets/js/data.js.
  Provides: dealership contact constants, placeholder image generator,
  currency/number formatting, nav toggle, reveal-on-scroll, sticky contact
  rail wiring, and small helpers reused by page-specific scripts.
*/

// ---------------------------------------------------------------------
// EDIT THESE to update contact details site-wide (used by every page,
// every WhatsApp link, and the footer).
// ---------------------------------------------------------------------
const BAHRAM_CONTACT = {
  whatsappNumber: "4915233456721", // demo placeholder number — replace with your real WhatsApp number
  phoneDisplay: "+49 152 3345 6721",
  phoneHref: "tel:+4915233456721",
  email: "hello@bahramautomobile.example",
  instagram: "https://www.instagram.com/bahram.automobile?igsh=MXF3OGhhazBxNDl0cA==",
  addressLine: "Placeholder address — replace with your real showroom location",
  mapEmbedQuery: "Bahram Automobile", // replace with your exact address for an accurate pin
  hours: [
    { day: "Monday – Friday", time: "9:00 – 18:00" },
    { day: "Saturday", time: "10:00 – 16:00" },
    { day: "Sunday", time: "By appointment" }
  ]
};

function waLink(message) {
  return `https://wa.me/${BAHRAM_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function mailLink(subject, body) {
  return `mailto:${BAHRAM_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function formatPrice(value) {
  const lang = (typeof currentLang === "function" ? currentLang() : "en");
  const locale = lang === "de" ? "de-DE" : lang === "fa" ? "de-DE" : "en-IE";
  return new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

// Kept as an alias so any older reference still works.
function formatGBP(value) { return formatPrice(value); }

// Named formatMiles for historical reasons; the site displays kilometres.
function formatMiles(value) {
  return `${new Intl.NumberFormat("en-GB").format(value)} km`;
}

// A tasteful branded placeholder tile (inline SVG data URI) for any car
// that doesn't have real photos yet in data.js. Keeps the grid looking
// intentional instead of showing broken images.
function placeholderImage(make, model, seed) {
  const palettes = [
    ["#1c201c", "#3d423d"],
    ["#15332b", "#1f4f42"],
    ["#3d221c", "#5a352a"],
    ["#1c2733", "#2c3f52"]
  ];
  const idx = Math.abs(hashString(`${make}${model}${seed || ""}`)) % palettes.length;
  const [c1, c2] = palettes[idx];
  const label = `${make} ${model}`.toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${c1}"/>
          <stop offset="1" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <g opacity="0.5" fill="none" stroke="#f2a71c" stroke-width="3">
        <path d="M120 400 q40 -70 140 -78 l40 -46 q18 -18 46 -18 l150 0 q26 0 42 18 l36 46 q100 8 140 78 z"/>
        <circle cx="230" cy="410" r="42"/>
        <circle cx="560" cy="410" r="42"/>
      </g>
      <text x="400" y="520" font-family="IBM Plex Mono, monospace" font-size="20" letter-spacing="2"
            fill="#f1efe6" text-anchor="middle" opacity="0.85">${label}</text>
      <text x="400" y="548" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="3"
            fill="#f2a71c" text-anchor="middle" opacity="0.9">PHOTO COMING SOON</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function vehiclePrimaryPhoto(vehicle) {
  if (vehicle.photos && vehicle.photos.length) return vehicle.photos[0];
  return placeholderImage(vehicle.make, vehicle.model, vehicle.id);
}

function getVehicleById(id) {
  return (window.BAHRAM_INVENTORY || []).find((v) => v.id === id);
}

// ---------------------------------------------------------------------
// Nav toggle (mobile)
// ---------------------------------------------------------------------
function initNav() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

// ---------------------------------------------------------------------
// Reveal-on-scroll
// ---------------------------------------------------------------------
function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-revealed"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
}

// ---------------------------------------------------------------------
// Sticky contact rail (WhatsApp + call), present on every page via a
// shared <div id="sticky-contact"> placeholder filled in here.
// ---------------------------------------------------------------------
function initStickyContact() {
  const mount = document.getElementById("sticky-contact");
  if (!mount) return;
  const render = () => {
    const callLabel = (typeof t === "function") ? t("nav.callNow") : "Call now";
    mount.innerHTML = `
      <a class="sticky-contact__btn sticky-contact__btn--wa" href="${waLink("Hi Bahram Automobile, I have a question about a car on your site.")}" target="_blank" rel="noopener" aria-label="Message Bahram Automobile on WhatsApp">
        WhatsApp
      </a>
      <a class="sticky-contact__btn sticky-contact__btn--call" href="${BAHRAM_CONTACT.phoneHref}" aria-label="Call Bahram Automobile">
        ${callLabel}
      </a>
    `;
  };
  render();
  document.addEventListener("lang:change", render);
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initReveal();
  initStickyContact();
});
