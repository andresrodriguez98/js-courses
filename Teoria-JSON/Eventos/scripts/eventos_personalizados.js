let audio = document.getElementById("audio");
let listacanciones = document.getElementById("listaCanciones");

listacanciones.addEventListener("change", cambiarCancion);

function cambiarCancion() {
  let cancionElegida = listacanciones.value;
  audio.src = cancionElegida;
  audio.play();
  let evento = new CustomEvent("cambioDeCancion");
  audio.dispatchEvent(evento);
}
audio.addEventListener("cambioDeCancion", mostrarCancion);

function mostrarCancion() {
  console.log("Canción actual: " + listacanciones.value);
}
