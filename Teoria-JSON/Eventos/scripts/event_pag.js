let texto1 = document.getElementById("mitexto");

function verifica_numero(event) {
  if (event.keyCode < 48 || event.keyCode > 57) {
    event.preventDefault();
  }
}

texto1.addEventListener("keydown", verifica_numero);

texto1.addEventListener("keyup", function (event) {
  console.log("Entrada del usuario:" + event.target.value);
});
texto1.addEventListener("keypress", function () {
  console.log("Caracter ingresado: " + event.key);
});
