const pLowerBilling = document.querySelector('.lower-billing')
const pHigherBilling = document.querySelector('.higher-billing')
const pAboveAvg = document.querySelector('.above-avg')

fetch('table.json')
  .then(response => response.json())
  .then(data => {
    const billing = data.map(item => item.billing);

    const validBilling = billing.filter(f => f > 0);

    const lowerBilling = Math.min(...validBilling);
    const higherBilling = Math.max(...validBilling);

    const sumBilling = validBilling.reduce((acc, cur) => acc + cur, 0);
    const monthlyAvg = sumBilling / validBilling.length;

    const aboveAvg = validBilling.filter(f => f > monthlyAvg).length;

    // Exibir os resultados
    pLowerBilling.textContent = `Menor valor de faturamento: R$${lowerBilling}`;
    pHigherBilling.textContent = `Maior valor de faturamento: R$${higherBilling}`
    pAboveAvg.textContent = `Número de dias com faturamento superior à média mensal: ${aboveAvg}`
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
