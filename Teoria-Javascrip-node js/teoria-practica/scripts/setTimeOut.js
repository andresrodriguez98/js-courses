function comenzarTiempo() {
  let elementoSegundos = document.getElementById("tiempoelegido").value;
  let elementotextoAlarma = document.getElementById("textoalarma");

  setTimeout(tiempocumplido, 1000 * elementoSegundos, elementotextoAlarma);
}

function tiempocumplido(elementotextoAlarma) {
  let elementoSonidoAlarma = document.getElementById("audioAlarma");
  elementotextoAlarma.style.color = "green";
  elementoSonidoAlarma.play();
}

function comenzarReloj() {
  setInterval(tictac, 1000);
}

function tictac() {
  let tiempoActual = new Date();
  let hora = String(tiempoActual.getHours()).padStart(2, "0");
  let minutos = String(tiempoActual.getMinutes()).padStart(2, "0");
  let segundos = String(tiempoActual.getSeconds()).padStart(2, "0");
  let textoHora = hora + ":" + minutos + ":" + segundos;

  // Asegurarse de que el elemento de texto de alarma está definido y se puede acceder a él
  let elementotextoAlarma = document.getElementById("textoalarma");
  if (elementotextoAlarma) {
    elementotextoAlarma.textContent = textoHora;
  }
}
