/*
  BAHRAM AUTOMOBILE — inventory rendering + filters
  Shared between the homepage (featured / new arrivals / offers rails) and
  the full inventory.html grid with filters.
*/

function vehicleCardHTML(vehicle) {
  const photo = vehiclePrimaryPhoto(vehicle);
  const badges = [];
  if (vehicle.isNew) badges.push(`<span class="badge badge--heritage">${t("badge.new")}</span>`);
  if (vehicle.specialOffer) badges.push(`<span class="badge badge--signal">${t("badge.offer")}</span>`);
  if (vehicle.financeAvailable) badges.push(`<span class="badge">${t("badge.finance")}</span>`);

  const inCompare = isInCompare(vehicle.id);

  return `
    <article class="vehicle-card" data-vehicle-id="${vehicle.id}">
      <a class="vehicle-card__media" href="vehicle.html?id=${encodeURIComponent(vehicle.id)}" aria-label="View ${vehicle.year} ${vehicle.make} ${vehicle.model}">
        <img src="${photo}" alt="${vehicle.year} ${vehicle.make} ${vehicle.model} in ${vehicle.colour}" loading="lazy">
        <div class="vehicle-card__badges">${badges.join("")}</div>
      </a>
      <label class="vehicle-card__compare micro">
        <input type="checkbox" data-compare-toggle="${vehicle.id}" ${inCompare ? "checked" : ""}>
        ${t("card.compare")}
      </label>
      <div class="vehicle-card__body">
        <h3 class="vehicle-card__title">${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
        <div class="vehicle-card__price">${formatPrice(vehicle.price)}</div>
        <div class="vehicle-card__meta">
          <span>${formatMiles(vehicle.mileage)}</span>
          <span>${vehicle.fuel}</span>
          <span>${vehicle.transmission}</span>
          <span>${vehicle.bodyType}</span>
        </div>
        <div class="vehicle-card__actions">
          <a class="btn btn--outline btn--sm" href="vehicle.html?id=${encodeURIComponent(vehicle.id)}#enquire">${t("card.enquireNow")}</a>
          <a class="btn btn--primary btn--sm" href="vehicle.html?id=${encodeURIComponent(vehicle.id)}#reserve">${t("card.reserveNow")}</a>
        </div>
      </div>
    </article>
  `;
}

function mountVehicleCards(containerId, vehicles) {
  const mount = document.getElementById(containerId);
  if (!mount) return;
  mount.innerHTML = vehicles.length
    ? vehicles.map(vehicleCardHTML).join("")
    : `<p class="micro" style="grid-column:1/-1;padding:24px 0;">${t("inventory.noResults")}</p>`;

  mount.querySelectorAll("[data-compare-toggle]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const ok = toggleCompare(input.dataset.compareToggle);
      if (!ok) event.target.checked = false;
    });
  });
}

function renderHomepageRails() {
  const all = window.BAHRAM_INVENTORY || [];
  mountVehicleCards("featured-vehicles", all.filter((v) => v.featured));
  mountVehicleCards("new-arrivals", all.filter((v) => v.isNew));
  mountVehicleCards("special-offers", all.filter((v) => v.specialOffer));
}

// ---------------------------------------------------------------------
// Full inventory page: filters + live grid
// ---------------------------------------------------------------------
function uniqueValues(list, key) {
  return Array.from(new Set(list.map((v) => v[key]))).sort();
}

function populateSelect(select, values, placeholder) {
  if (!select) return;
  select.innerHTML = `<option value="">${placeholder}</option>` +
    values.map((v) => `<option value="${v}">${v}</option>`).join("");
}

function readFilterState(form) {
  const data = new FormData(form);
  return {
    q: (data.get("q") || "").toString().toLowerCase().trim(),
    make: data.get("make") || "",
    bodyType: data.get("bodyType") || "",
    fuel: data.get("fuel") || "",
    transmission: data.get("transmission") || "",
    priceMax: Number(data.get("priceMax")) || Infinity,
    yearMin: Number(data.get("yearMin")) || 0,
    mileageMax: Number(data.get("mileageMax")) || Infinity
  };
}

function applyFilters(vehicles, state) {
  return vehicles.filter((v) => {
    if (state.q) {
      const haystack = `${v.make} ${v.model} ${v.generation} ${v.colour}`.toLowerCase();
      if (!haystack.includes(state.q)) return false;
    }
    if (state.make && v.make !== state.make) return false;
    if (state.bodyType && v.bodyType !== state.bodyType) return false;
    if (state.fuel && v.fuel !== state.fuel) return false;
    if (state.transmission && v.transmission !== state.transmission) return false;
    if (v.price > state.priceMax) return false;
    if (v.year < state.yearMin) return false;
    if (v.mileage > state.mileageMax) return false;
    return true;
  });
}

function initInventoryPage() {
  const form = document.getElementById("filter-form");
  const countEl = document.getElementById("results-count");
  if (!form) return;

  const all = window.BAHRAM_INVENTORY || [];
  populateSelect(form.querySelector('[name="make"]'), uniqueValues(all, "make"), "All makes");
  populateSelect(form.querySelector('[name="bodyType"]'), uniqueValues(all, "bodyType"), "All body types");
  populateSelect(form.querySelector('[name="fuel"]'), uniqueValues(all, "fuel"), "All fuel types");
  populateSelect(form.querySelector('[name="transmission"]'), uniqueValues(all, "transmission"), "All transmissions");

  // Pre-fill from query string (e.g. from the homepage search bar).
  const params = new URLSearchParams(window.location.search);
  ["q", "make", "bodyType", "fuel", "transmission", "priceMax", "yearMin", "mileageMax"].forEach((key) => {
    const field = form.querySelector(`[name="${key}"]`);
    if (field && params.has(key)) field.value = params.get(key);
  });

  function refresh() {
    const state = readFilterState(form);
    const filtered = applyFilters(all, state);
    mountVehicleCards("inventory-grid", filtered);
    if (countEl) {
      countEl.textContent = t("inventory.resultsCount", {
        count: filtered.length, total: all.length, updated: t("inventory.today")
      });
    }
  }

  form.addEventListener("input", refresh);
  form.addEventListener("submit", (event) => event.preventDefault());
  document.getElementById("filter-reset")?.addEventListener("click", () => {
    form.reset();
    window.setTimeout(refresh, 0);
  });

  document.addEventListener("lang:change", refresh);
  refresh();
}

// ---------------------------------------------------------------------
// Homepage quick search -> redirects into inventory.html with filters
// ---------------------------------------------------------------------
function initHomeSearch() {
  const form = document.getElementById("home-search");
  if (!form) return;
  const all = window.BAHRAM_INVENTORY || [];
  populateSelect(form.querySelector('[name="make"]'), uniqueValues(all, "make"), "Any make");
  populateSelect(form.querySelector('[name="bodyType"]'), uniqueValues(all, "bodyType"), "Any body type");
  populateSelect(form.querySelector('[name="fuel"]'), uniqueValues(all, "fuel"), "Any fuel");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const params = new URLSearchParams(new FormData(form));
    // Drop empty params for a tidy URL.
    Array.from(params.keys()).forEach((key) => {
      if (!params.get(key)) params.delete(key);
    });
    window.location.href = `inventory.html?${params.toString()}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHomepageRails();
  initInventoryPage();
  initHomeSearch();
});
document.addEventListener("lang:change", renderHomepageRails);
