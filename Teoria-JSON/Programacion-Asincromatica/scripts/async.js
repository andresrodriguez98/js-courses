/* async function obtenerDatos() {
  let respuesta = await fetch(
    "https:/api.datos.gob.mx/v1/precio.gasolina.publico"
  );
  let datos = await respuesta.json();

  console.log(datos);
}
obtenerDatos();
console.log("EL CODIGO SIGUE"); */

async function obtenerDatos() {
  console.log("ESTE CODIGO ESTA AL COMIENZO");
  let respuestaGasolina = await fetch(
    "https:/api.datos.gob.mx/v1/precio.gasolina.publico"
  );
  let datosgasolina = await respuestaGasolina.json();

  console.log("ESTE CODIGO ESTA AL MEDIO");
  let respuestaDolar = await fetch("https://open.er-api.com/v6/latest/USD");
  let datosDolar = await respuestaDolar.json();

  console.log(datosgasolina, datosDolar);
  console.log("ESTE CODIGO ESTA AL FINAL");
}
obtenerDatos();
