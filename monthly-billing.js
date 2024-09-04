const percentages = document.querySelector(".percentages");

const billingStates = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const total = Object.values(billingStates).reduce(
  (acc, value) => acc + value,
  0
);

for (const state in billingStates) {
  const billingState = billingStates[state];
  const percentage = (billingState / total) * 100;
  const p = document.createElement("p");
  p.textContent = `Percentual de representação de ${state}: ${percentage.toFixed(
    2
  )}%`;
  percentages.appendChild(p);
}
