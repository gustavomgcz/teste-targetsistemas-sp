function fibonacci(num) {
  if (num < 0) {
    // se o valor for negativo é informado que o valor é invalido.
    return false;
  }
  if (num === 0 || num === 1) {
    // se o valor for 0 ou 1, não é necessario fazer calculos para validar
    return true;
  }

  let a = 0;
  let b = 1;

  while (b <= num) {
    let temp = b; // armazena temporariamente valor de "b" antes da atualização do valor de "b"
    b = a + b; // atualiza o valor de "b" para a soma entre o valor atual e o valor anterior
    a = temp; // define o valor de "a" como o antigo valor de "b"

    if (b === num) {
      // se o numero passado como argumento for igual a "b" na iteração, o numero pertence a sequencia
      return true;
    }
  }
  return false;
}

const btnTecnica2 = document.querySelector(".check-fibonacci");
const resTecnica2 = document.querySelector("#result2");

btnTecnica2.addEventListener("click", function () {
  const num = parseInt(document.getElementById("number").value);
  let isFibonacci = fibonacci(num);

  if (isFibonacci) {
    resTecnica2.textContent = `O valor ${num} faz parte da sequencia de Fibonacci`;
  } else {
    resTecnica2.textContent = `O valor ${num} não faz parte da sequencia de Fibonacci`;
  }
});
