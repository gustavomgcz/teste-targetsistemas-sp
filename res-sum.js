function sum() {
  let INDICE = 12;
  let SOMA = 0;
  let K = 1;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  resTecnica3.textContent = `O valor da variavel SOMA é ${SOMA}`;
}

const resTecnica3 = document.querySelector("#result1");

sum();
