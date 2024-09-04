const btnTecnica5 = document.querySelector(".reverse");
const resTecnica5 = document.querySelector("#result5");

btnTecnica5.addEventListener("click", function () {
  const userText = document.getElementById("user-text").value;
  const reversedText = userText.split('').reverse().join('');
  resTecnica5.textContent = `Texto invertido: ${reversedText}`;
});
