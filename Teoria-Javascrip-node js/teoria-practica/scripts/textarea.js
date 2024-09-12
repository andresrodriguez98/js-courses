let area = document.getElementById("comentarios");
area.style.resize = "none";

function comentar() {
  if (document.getElementById("comentarios").value.length > 100) {
    swal("Comentario es muy largo");
  } else {
    swal("Gracias!");
  }
}
