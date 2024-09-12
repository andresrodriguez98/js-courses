/* EJEMPLO 1
let miPromesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (error) {
      reject("LA PROMESA HA FALLADO");
    } else {
      resolve("LA PROMESA SE HA CUMPLIDO");
    }
  });
});

miPromesa
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch(function (error) {
    console.log(error);
  });*/

/* EJEMPLO 2
let promesa1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 5000, "SALUDOS A TODOS");
});

let promesa2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 7000, "OTRO SALUDO");
});

Promise.all([promesa1, promesa2]).then(function (valores) {
  console.log(valores[0] + "," + valores[1]);
});
console.log("EL CODIGO SIGUE SU CURSO"); */

// EJEMPLO 3

function obtenerUsuarios() {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.send();
  });
}
obtenerUsuarios()
  .then(function (usuarios) {
    console.log(usuarios);
  })
  .catch(function (error) {
    console.error(error);
  });
