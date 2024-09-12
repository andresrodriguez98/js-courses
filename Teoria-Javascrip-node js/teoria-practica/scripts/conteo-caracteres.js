document.getElementById("texto").addEventListener("keyup", caracteres);

function caracteres() {
  let cant = document.getElementById("texto").value.length;
  let disponibles = 100 - parseInt(cant);
  document.getElementById("cantidad").innerHTML = disponibles;
  if (disponibles == 0) {
    swal("Cantidad de caracteres agotados!");
  }
}
