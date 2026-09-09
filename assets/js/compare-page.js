/*
  BAHRAM AUTOMOBILE — compare.html rendering
  Reads the compare list from localStorage (assets/js/compare.js) and draws
  a side-by-side spec table.
*/

function compareRows() {
  return [
    [t("spec.price"), (v) => formatPrice(v.price)],
    [t("spec.year"), (v) => v.year],
    [t("spec.mileage"), (v) => formatMiles(v.mileage)],
    [t("spec.fuel"), (v) => v.fuel],
    [t("spec.transmission"), (v) => v.transmission],
    [t("spec.engine"), (v) => v.engine],
    [t("spec.bodyType"), (v) => v.bodyType],
    [t("spec.colour"), (v) => v.colour],
    [t("spec.condition"), (v) => v.condition],
    [t("spec.serviceHistory"), (v) => v.serviceHistory],
    [t("spec.warranty"), (v) => v.warranty],
    [t("spec.financeAvailable"), (v) => (v.financeAvailable ? t("spec.financeYes") : t("spec.financeNo"))],
    [t("spec.lotCode"), (v) => v.lotCode]
  ];
}

function renderComparePage() {
  const mount = document.getElementById("compare-table-mount");
  const empty = document.getElementById("compare-empty");
  if (!mount) return;

  const ids = getCompareIds();
  const vehicles = ids.map(getVehicleById).filter(Boolean);

  if (!vehicles.length) {
    mount.innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }
  if (empty) empty.style.display = "none";

  const headerCells = vehicles.map((v) => `
    <th>
      <img src="${vehiclePrimaryPhoto(v)}" alt="${v.year} ${v.make} ${v.model}" style="width:100%;aspect-ratio:4/3;object-fit:cover;margin-bottom:10px;">
      ${v.year} ${v.make} ${v.model}<br>
      <a class="btn btn--sm btn--outline" style="margin-top:8px;" href="vehicle.html?id=${encodeURIComponent(v.id)}">${t("compare.view")}</a>
      <button class="btn btn--sm btn--signal" style="margin-top:8px;" type="button" data-remove="${v.id}">${t("compare.remove")}</button>
    </th>
  `).join("");

  const bodyRows = compareRows().map(([label, fn]) => `
    <tr>
      <th>${label}</th>
      ${vehicles.map((v) => `<td>${fn(v)}</td>`).join("")}
    </tr>
  `).join("");

  mount.innerHTML = `
    <table class="table--compare">
      <thead><tr><th></th>${headerCells}</tr></thead>
      <tbody>${bodyRows}</tbody>
    </table>
  `;

  mount.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCompare(btn.dataset.remove);
      renderComparePage();
    });
  });
}

document.addEventListener("compare:change", renderComparePage);
document.addEventListener("lang:change", renderComparePage);
document.addEventListener("DOMContentLoaded", renderComparePage);
