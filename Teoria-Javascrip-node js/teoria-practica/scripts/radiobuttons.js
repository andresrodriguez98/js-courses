function seleccion() {
  if (document.getElementById("radio1").checked) {
    swal("Horario de 8am a 12m");
  }

  if (document.getElementById("radio2").checked) {
    swal("Horario de 2pm a 6pm");
  }

  if (document.getElementById("radio3").checked) {
    swal("Horario de 7pm a 11pm");
  }
}
