function f_focus() {
  document.getElementById("nombre").value = "";
  document.getElementById("nombre").style.background = "";
}

function f_blur() {
  if (document.getElementById("nombre").value == "") {
    document.getElementById("nombre").style.background = "red";
    alert("DEBE INGRESAR DATOS");
  }
}
