let boton = document.getElementById("boton1");

function muestramensaje() {
  alert("BOTON PRECIONADO!");
}

function mensaje2() {
  alert("SOY UN MOUSEOVER!");
}

boton.addEventListener("mouseover", mensaje2);
boton.addEventListener("click", muestramensaje);
