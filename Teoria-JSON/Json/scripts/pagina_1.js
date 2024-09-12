// LECTURA DE ARCHIVOS JSON

let miPersona = {
  nombre: "Andres Martinez",
  edad: "25",
  estudiante: false,
  direccion: {
    carrera: "cra 4c. no.45",
    ciudad: "magdalena",
  },
  telefonos: ["3204581730", "3174944423"],
};

let elementoTexto = document.getElementById("nombre");
elementoTexto.textContent = miPersona.nombre;

let datosJson;
let xhr = new XMLHttpRequest();
xhr.open("GET", "persona.json", true);
xhr.responseType = "json";
xhr.onload = function () {
  if (xhr.status === 200) {
    datosJson = xhr.response;
    let elementoTexto = document.getElementById("nombre");
    elementoTexto.textContent = datosJson.nombre;
  } else {
    //manejar el error
  }
};

xhr.send();
