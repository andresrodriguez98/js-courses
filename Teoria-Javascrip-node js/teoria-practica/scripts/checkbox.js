function seleccion() {
  let cantidad = 0;
  if (document.getElementById("check1").checked) {
    cantidad++;
  } else {
    swal("Conoces: " + cantidad + " lenguajes ");
  }

  if (document.getElementById("check2").checked) {
    cantidad++;
  } else {
    swal("Conoces: " + cantidad + " lenguajes ");
  }
  if (document.getElementById("check3").checked) {
    cantidad++;
  } else {
    swal("Conoces: " + cantidad + " lenguajes ");
  }
  if (document.getElementById("check4").checked) {
    cantidad++;
  } else {
    swal("Conoces: " + cantidad + " lenguajes ");
  }
  if (document.getElementById("check5").checked) {
    cantidad++;
  } else {
    swal("Conoces: " + cantidad + " lenguaje ");
  }
  let mensaje = "Conoces: " + cantidad + " ";
  mensaje += cantidad === 1 ? "lenguaje" : "lenguajes";
  swal(mensaje);
}
