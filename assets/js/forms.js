/*
  BAHRAM AUTOMOBILE — lead form handling
  --------------------------------------------------------------------------
  There is no backend on this static site, so every lead form here is wired
  to open a pre-filled WhatsApp chat (primary) with an email fallback link,
  so real enquiries reach you with zero server setup. To switch to a real
  backend later, replace handleLeadForm()'s submit logic with a fetch() to
  your endpoint — everything else (validation, field reading) stays the same.

  Usage: add data-lead-form="contact|test-drive|callback|finance|part-exchange"
  to any <form>, and this script wires it up automatically on page load.
  --------------------------------------------------------------------------
*/

const LEAD_FORM_LABELS = {
  contact: "General enquiry",
  "test-drive": "Test drive booking",
  callback: "Callback request",
  finance: "Finance application",
  "part-exchange": "Part-exchange valuation request",
  reserve: "Reserve a vehicle",
  enquire: "Vehicle enquiry"
};

function buildLeadMessage(type, data) {
  const lines = [`New ${LEAD_FORM_LABELS[type] || type} — Bahram Automobile site`, ""];
  Object.entries(data).forEach(([key, value]) => {
    if (!value) return;
    lines.push(`${key}: ${value}`);
  });
  if (type === "part-exchange") {
    lines.push("", "(Photos: please attach directly in this WhatsApp chat — the web form can't upload files without a server.)");
  }
  return lines.join("\n");
}

function readableFieldName(input) {
  if (input.dataset.label) return input.dataset.label;
  const label = input.closest(".field")?.querySelector("label");
  return label ? label.textContent.replace(/\s*\*\s*$/, "") : input.name || input.id;
}

function collectFormData(form) {
  const data = {};
  Array.from(form.elements).forEach((el) => {
    if (!el.name || el.type === "submit" || el.type === "button" || el.type === "file") return;
    if (el.type === "checkbox") {
      if (el.checked) data[readableFieldName(el)] = "Yes";
      return;
    }
    if (el.value) data[readableFieldName(el)] = el.value;
  });
  return data;
}

function showFormStatus(form, message) {
  let status = form.querySelector(".form__status");
  if (!status) {
    status = document.createElement("p");
    status.className = "form__status";
    form.appendChild(status);
  }
  status.textContent = message;
  status.classList.add("is-visible");
}

function handleLeadForm(form) {
  const type = form.dataset.leadForm;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = collectFormData(form);
    const message = buildLeadMessage(type, data);
    const wa = waLink(message);
    const subject = `${LEAD_FORM_LABELS[type] || "Website enquiry"} — Bahram Automobile`;
    const mail = mailLink(subject, message);

    window.open(wa, "_blank", "noopener");
    const openedMsg = (typeof t === "function") ? t("form.opened") : "Opening WhatsApp with your details filled in. If it doesn't open, use the email fallback link below.";
    showFormStatus(form, openedMsg);

    let fallback = form.querySelector(".form__fallback-link");
    if (!fallback) {
      fallback = document.createElement("a");
      fallback.className = "form__fallback-link micro";
      fallback.style.display = "inline-block";
      fallback.style.marginTop = "10px";
      form.appendChild(fallback);
    }
    fallback.textContent = (typeof t === "function") ? t("form.emailFallback") : "Or send this enquiry by email instead ↗";
    fallback.href = mail;
  });
}

function initLeadForms() {
  document.querySelectorAll("[data-lead-form]").forEach(handleLeadForm);
}

document.addEventListener("DOMContentLoaded", initLeadForms);
