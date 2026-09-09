/*
  BAHRAM AUTOMOBILE — finance calculator (finance.html)
  Simple amortised monthly payment estimator. Representative APR is a
  placeholder assumption (7.9%) clearly labelled as an estimate, not an
  offer — replace with your real lender rates when available.
*/

const FINANCE_APR = 0.079;

function calcMonthlyPayment(price, depositPct, termMonths) {
  const deposit = price * (depositPct / 100);
  const principal = Math.max(0, price - deposit);
  const monthlyRate = FINANCE_APR / 12;
  if (principal <= 0) return { deposit, principal, payment: 0 };
  const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
  return { deposit, principal, payment };
}

function initFinanceCalculator() {
  const form = document.getElementById("finance-calculator");
  if (!form) return;

  const priceInput = form.querySelector('[name="price"]');
  const depositInput = form.querySelector('[name="depositPct"]');
  const depositValue = document.getElementById("deposit-pct-value");
  const termSelect = form.querySelector('[name="term"]');
  const out = {
    payment: document.getElementById("finance-payment"),
    deposit: document.getElementById("finance-deposit"),
    principal: document.getElementById("finance-principal"),
    apr: document.getElementById("finance-apr")
  };

  const params = new URLSearchParams(window.location.search);
  if (params.get("price") && priceInput) priceInput.value = params.get("price");

  function refresh() {
    const price = Number(priceInput.value) || 0;
    const depositPct = Number(depositInput.value) || 0;
    const term = Number(termSelect.value) || 48;
    if (depositValue) depositValue.textContent = `${depositPct}%`;

    const { deposit, principal, payment } = calcMonthlyPayment(price, depositPct, term);
    if (out.payment) out.payment.textContent = price ? `${formatPrice(Math.round(payment))} / month` : "—";
    if (out.deposit) out.deposit.textContent = formatPrice(Math.round(deposit));
    if (out.principal) out.principal.textContent = formatPrice(Math.round(principal));
    if (out.apr) out.apr.textContent = `${(FINANCE_APR * 100).toFixed(1)}% representative APR (estimate)`;

    const appPrice = document.getElementById("application-price-echo");
    if (appPrice) appPrice.value = price ? formatPrice(price) : "";
  }

  form.addEventListener("input", refresh);
  document.addEventListener("lang:change", refresh);
  refresh();
}

document.addEventListener("DOMContentLoaded", initFinanceCalculator);
