let socket = new WebSocket("ws://localhost:8080");
let mensajeingresado = document.getElementById("mensajeIngresado");
let botonenviar = document.getElementById("botonenviar");

function mostrarMensajes(contenido) {
  let contenedorMensajes = document.getElementById("mensajesChat");
  let elementoMensaje = document.createElement("p");
  elementoMensaje.innerText = contenido;
  contenedorMensajes.appendChild(elementoMensaje);
}
botonenviar.onclick = function () {
  let mensaje = mensajeingresado.value;
  mostrarMensajes(mensaje);
  socket.send(mensaje);
};
socket.onmessage = function (event) {
  let mensaje = event.data;
  mostrarMensajes(mensaje);
};
