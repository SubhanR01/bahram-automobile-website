/*
  BAHRAM AUTOMOBILE — vehicle detail page (vehicle.html?id=...)
  Renders gallery, spec table, finance estimate, reserve/enquire actions,
  compare toggle, and similar vehicles. If the car has a real frame
  sequence (hasCinematicViewer), replaces the static gallery with a
  drag-to-scrub viewer built from the same footage used on the homepage.
*/

function specRows(vehicle) {
  return [
    [t("spec.make"), vehicle.make],
    [t("spec.model"), `${vehicle.model} (${vehicle.generation})`],
    [t("spec.year"), vehicle.year],
    [t("spec.mileage"), formatMiles(vehicle.mileage)],
    [t("spec.price"), formatPrice(vehicle.price)],
    [t("spec.fuel"), vehicle.fuel],
    [t("spec.transmission"), vehicle.transmission],
    [t("spec.engine"), vehicle.engine],
    [t("spec.bodyType"), vehicle.bodyType],
    [t("spec.colour"), vehicle.colour],
    [t("spec.condition"), vehicle.condition],
    [t("spec.serviceHistory"), vehicle.serviceHistory],
    [t("spec.warranty"), vehicle.warranty],
    [t("spec.financeAvailable"), vehicle.financeAvailable ? t("spec.financeYes") : t("spec.financeNo")],
    [t("spec.lotCode"), vehicle.lotCode]
  ];
}

function renderSpecTable(vehicle) {
  const mount = document.getElementById("vehicle-spec");
  if (!mount) return;
  mount.innerHTML = specRows(vehicle).map(([label, value]) => `
    <tr><th>${label}</th><td>${value}</td></tr>
  `).join("");
}

function renderStaticGallery(vehicle) {
  const mount = document.getElementById("vehicle-gallery");
  if (!mount) return;
  const photos = vehicle.photos && vehicle.photos.length ? vehicle.photos : [placeholderImage(vehicle.make, vehicle.model, vehicle.id)];
  mount.innerHTML = `
    <div class="scrub-viewer" id="gallery-main">
      <img src="${photos[0]}" alt="${vehicle.year} ${vehicle.make} ${vehicle.model}" id="gallery-main-img">
    </div>
    <div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;margin-top:10px;">
      ${photos.map((src, i) => `<button type="button" class="gallery-thumb" data-src="${src}" style="padding:0;border:1px solid var(--line);background:none;overflow:hidden;aspect-ratio:4/3;">
        <img src="${src}" alt="View ${i + 1}" style="width:100%;height:100%;object-fit:cover;">
      </button>`).join("")}
    </div>
  `;
  mount.querySelectorAll(".gallery-thumb").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("gallery-main-img").src = btn.dataset.src;
    });
  });
}

// Drag-to-scrub viewer using the real extracted frame sequence — an honest,
// footage-driven stand-in for a 360 spin (labelled clearly in the UI copy).
function renderCinematicViewer(vehicle) {
  const mount = document.getElementById("vehicle-gallery");
  if (!mount) return;
  const FRAME_COUNT = 114;
  const dir = vehicle.video || "frames/desktop";

  mount.innerHTML = `
    <div class="scrub-viewer" id="scrub-viewer" role="img" aria-label="Drag to explore the ${vehicle.make} ${vehicle.model} from the film sequence">
      <img id="scrub-img" src="${dir}/frame-0001.webp" alt="${vehicle.year} ${vehicle.make} ${vehicle.model}">
      <div class="scrub-viewer__hint micro" aria-hidden="true"><span>${t("vehicle.scrubHint")}</span></div>
    </div>
  `;

  const el = document.getElementById("scrub-viewer");
  const img = document.getElementById("scrub-img");
  let dragging = false;
  let startX = 0;
  let startFrame = 0;
  let currentFrame = 0;

  function frameUrl(index) {
    return `${dir}/frame-${String(index + 1).padStart(4, "0")}.webp`;
  }

  function setFrame(index) {
    currentFrame = Math.max(0, Math.min(FRAME_COUNT - 1, index));
    img.src = frameUrl(currentFrame);
  }

  function pointerDown(x) {
    dragging = true;
    startX = x;
    startFrame = currentFrame;
    el.style.cursor = "grabbing";
  }

  function pointerMove(x) {
    if (!dragging) return;
    const delta = x - startX;
    const sensitivity = FRAME_COUNT / (el.clientWidth * 1.6);
    setFrame(Math.round(startFrame + delta * sensitivity));
  }

  function pointerUp() {
    dragging = false;
    el.style.cursor = "grab";
  }

  el.addEventListener("mousedown", (e) => pointerDown(e.clientX));
  window.addEventListener("mousemove", (e) => pointerMove(e.clientX));
  window.addEventListener("mouseup", pointerUp);

  el.addEventListener("touchstart", (e) => pointerDown(e.touches[0].clientX), { passive: true });
  el.addEventListener("touchmove", (e) => pointerMove(e.touches[0].clientX), { passive: true });
  el.addEventListener("touchend", pointerUp);
}

function renderActions(vehicle) {
  const reserveMsg = `Hi Bahram Automobile, I'd like to reserve the ${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.lotCode}), listed at ${formatPrice(vehicle.price)}. Please let me know the next steps.`;
  const enquireMsg = `Hi Bahram Automobile, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.lotCode}), listed at ${formatPrice(vehicle.price)}. Could you tell me more?`;

  const reserveBtn = document.getElementById("reserve-btn");
  const enquireBtn = document.getElementById("enquire-btn");
  if (reserveBtn) reserveBtn.href = waLink(reserveMsg);
  if (enquireBtn) enquireBtn.href = waLink(enquireMsg);

  const financeLink = document.getElementById("finance-link");
  if (financeLink) financeLink.href = `finance.html?price=${vehicle.price}`;

  const compareToggle = document.getElementById("compare-toggle");
  if (compareToggle) {
    const sync = () => {
      const active = isInCompare(vehicle.id);
      compareToggle.textContent = active ? t("vehicle.removeCompare") : t("vehicle.addCompare");
      compareToggle.classList.toggle("btn--outline", !active);
      compareToggle.classList.toggle("btn--signal", active);
    };
    compareToggle.addEventListener("click", () => { toggleCompare(vehicle.id); sync(); });
    document.addEventListener("lang:change", sync);
    sync();
  }
}

function renderSimilar(vehicle) {
  const mount = document.getElementById("similar-vehicles");
  if (!mount) return;
  const all = window.BAHRAM_INVENTORY || [];
  const similar = all.filter((v) => v.id !== vehicle.id && (v.bodyType === vehicle.bodyType || v.make === vehicle.make)).slice(0, 3);
  mountVehicleCards("similar-vehicles", similar.length ? similar : all.filter((v) => v.id !== vehicle.id).slice(0, 3));
}

function financeQuickEstimate(vehicle) {
  const el = document.getElementById("finance-quick-estimate");
  if (!el) return;
  const deposit = vehicle.price * 0.1;
  const principal = vehicle.price - deposit;
  const monthlyRate = 0.079 / 12;
  const term = 48;
  const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
  el.textContent = t("vehicle.financeEstimate", { payment: formatPrice(Math.round(payment)), term, apr: "7.9" });
}

function initVehiclePage() {
  const mount = document.getElementById("vehicle-page");
  if (!mount) return;
  const params = new URLSearchParams(window.location.search);
  const vehicle = getVehicleById(params.get("id"));

  if (!vehicle) {
    mount.innerHTML = `<div class="section"><h1 class="section__title">${t("vehicle.notFound")}</h1><p>${t("vehicle.notFoundBody")} <a href="inventory.html">${t("vehicle.browseInventory")}</a></p></div>`;
    return;
  }

  function render() {
    document.title = `${vehicle.year} ${vehicle.make} ${vehicle.model} — Bahram Automobile`;
    document.querySelectorAll("[data-vehicle-title]").forEach((el) => { el.textContent = `${vehicle.year} ${vehicle.make} ${vehicle.model}`; });
    document.querySelectorAll("[data-vehicle-price]").forEach((el) => { el.textContent = formatPrice(vehicle.price); });
    document.querySelectorAll("[data-vehicle-lot]").forEach((el) => { el.textContent = vehicle.lotCode; });
    document.querySelectorAll("[data-vehicle-description]").forEach((el) => { el.textContent = vehicleDescription(vehicle); });
    document.querySelectorAll("[data-vehicle-meta]").forEach((el) => {
      el.textContent = `${formatMiles(vehicle.mileage)} · ${vehicle.fuel} · ${vehicle.transmission} · ${vehicle.bodyType}`;
    });
    renderSpecTable(vehicle);
    financeQuickEstimate(vehicle);
  }

  render();
  document.addEventListener("lang:change", render);

  if (vehicle.hasCinematicViewer) renderCinematicViewer(vehicle);
  else renderStaticGallery(vehicle);

  renderActions(vehicle);
  renderSimilar(vehicle);
  document.addEventListener("lang:change", () => renderSimilar(vehicle));
}

document.addEventListener("DOMContentLoaded", initVehiclePage);
