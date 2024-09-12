/*CALLBACKS
function sumar(numero1, numero2, Callback) {
  setTimeout(function () {
    if (typeof numero1 != "number" || typeof numero2 != "number") {
      return Callback(new Error("Algun argumento no es un numero"));
    }
    Callback(null, numero1 + numero2);
  }, 1000);
}
sumar("a", 50, function (error, resultado) {
  if (error) {
    console.log(error);
  } else {
    console.log(resultado);
  }
}); */

/*PROMESAS
function sumar(numero1, numero2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof numero1 != "number" || typeof numero2 != "number") {
        reject(new Error("Ambos numeros deben ser Numeros"));
      } else {
        resolve(numero1 + numero2);
      }
    }, 1000);
  });
}
sumar(78, "t")
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch(function (error) {
    console.error(error);
  });*/

// ASYNC -- AWAITS
async function sumar(numero1, numero2) {
  if (typeof numero1 != "number" || typeof numero2 != "number") {
    throw new Error("ALGUNO DE LOS ARGUMENTOS NO ES UN NUMERO");
  }
  return numero1 + numero2;
}

async function manejoErrores() {
  try {
    let resultado = await sumar("d", 23);
    console.log(resultado);
  } catch (error) {
    console.error(error.message);
  }
}
manejoErrores();
