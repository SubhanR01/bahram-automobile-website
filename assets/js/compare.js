/*
  BAHRAM AUTOMOBILE — comparison tool
  Stores up to 3 vehicle IDs in localStorage so the list survives across
  inventory.html, vehicle.html, and compare.html.
*/

const COMPARE_KEY = "bahram_compare_ids";
const COMPARE_MAX = 3;

function getCompareIds() {
  try {
    const raw = JSON.parse(localStorage.getItem(COMPARE_KEY) || "[]");
    return Array.isArray(raw) ? raw : [];
  } catch (err) {
    return [];
  }
}

function setCompareIds(ids) {
  localStorage.setItem(COMPARE_KEY, JSON.stringify(ids));
  document.dispatchEvent(new CustomEvent("compare:change", { detail: ids }));
}

function isInCompare(id) {
  return getCompareIds().includes(id);
}

function toggleCompare(id) {
  let ids = getCompareIds();
  if (ids.includes(id)) {
    ids = ids.filter((existing) => existing !== id);
  } else {
    if (ids.length >= COMPARE_MAX) {
      const msg = (typeof t === "function") ? t("compare.max", { max: COMPARE_MAX }) : `You can compare up to ${COMPARE_MAX} vehicles at a time. Remove one first.`;
      window.alert(msg);
      return false;
    }
    ids = [...ids, id];
  }
  setCompareIds(ids);
  return true;
}

function removeFromCompare(id) {
  setCompareIds(getCompareIds().filter((existing) => existing !== id));
}

// Floating tray shown on inventory.html and vehicle.html so shoppers can
// jump to compare.html once they've picked a couple of cars.
function renderCompareTray() {
  const mount = document.getElementById("compare-tray");
  if (!mount) return;
  const ids = getCompareIds();

  if (!ids.length) {
    mount.innerHTML = "";
    mount.style.display = "none";
    return;
  }

  mount.style.display = "flex";
  const vehicles = ids.map(getVehicleById).filter(Boolean);
  mount.innerHTML = `
    <div class="compare-tray__list micro">
      ${t("compare.comparing", { list: vehicles.map((v) => `${v.make} ${v.model}`).join(" · ") })}
    </div>
    <a class="btn btn--primary btn--sm" href="compare.html">${t("compare.now", { count: vehicles.length })}</a>
    <button class="btn btn--outline btn--sm" type="button" id="compare-clear">${t("compare.clear")}</button>
  `;
  document.getElementById("compare-clear")?.addEventListener("click", () => setCompareIds([]));
}

document.addEventListener("compare:change", renderCompareTray);
document.addEventListener("lang:change", renderCompareTray);
document.addEventListener("DOMContentLoaded", renderCompareTray);
