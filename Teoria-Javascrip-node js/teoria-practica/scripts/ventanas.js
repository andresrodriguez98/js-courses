function abrir() {
  let ventana = open();
  ventana.document.write("Soy otra Pagina web");
}

function ventana() {
  let ventana = open("", "", "width=400, heigth=250");
  ventana.document.write("Soy otra Ventana de Pagina web");
}

function confirmar() {
  let respuesta = confirm("Desea Salir de la Pagina?");
  if (respuesta == true) {
    window.close();
  }
}
