// accion 1
console.log("Inicio del codigo sincrónico");

//accion 2

for (let f = 0; f < 10; f++) {
  console.log(f);
}
setTimeout(function () {
  for (let f = 0; f < 10; f++) {
    console.log(f);
  }
}, 0);

// accion 3
console.log("Fin del codigo sincrono");
