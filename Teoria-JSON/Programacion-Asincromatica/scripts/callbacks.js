function avanzaFila(Callback) {
  setTimeout(function () {
    console.log("Tu turno ha Llegado");
    Callback();
  }, 5000);
}
function llamada() {
  console.log("Te presentas a tu Turno");
}

console.log("Llegas a la Fila");

avanzaFila(llamada);
console.log("Te vas a Comprar Cafe");
