let foto = document.createElement("img");
foto.src = "homero.jpg";

function consulta() {
  let datosjson;
  fetch("resumen.json")
    .then((respuesta) => respuesta.json())
    .then((salida) => {
      datosjson = salida;

      document.getElementById("titular");
      titular.texContent = salida.titular;

      document.getElementById("no_miembro");
      no_miembro.texContent = "No. de miembro: " + salida.no_miembro;

      document.getElementById("direccion");
      direccion.texContent = "Direccion: " + salida.direccion;

      document.getElementById("telefono");
      telefono.texContent = "Telefono:" + salida.telefono;

      document.getElementById("email");
      email.texContent = "Email:" + salida.email;

      document.getElementById("saldo_usd");
      saldo_usd.texContent = "Saldo $US" + salida.saldo[0].monto;

      document.getElementById("saldo_eu");
      saldo_eu.texContent = "Saldo €EU" + salida.saldo[1].monto;

      document.getElementById("miembro_desde");
      miembro_desde.texContent = "Miembro desde:" + salida.miembro_desde;

      let imagen = document.getElementById("foto");
      imagen.appendChild(foto);
    });
}
