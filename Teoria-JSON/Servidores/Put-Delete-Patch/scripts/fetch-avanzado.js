/*BASIC

let usuario = "usuario01";
let password = "123456";

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
  credentials: "include",
  headers: {
    Authorization: "Basic" + btoa(usuario + ":" + password),
    "Content-Type": "application/json",
  },
})
  .then((respuesta) => respuesta.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error)); */

// BEARER
let usuario = "usuario01";
let password = "123456";
let token = "miToken";

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
  credentials: "include",
  cache: "only-if-cached",
  redirect: "manual",
  headers: {
    Authorization: "Bearer" + token,
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (response.type === "opaqueredirect") {
      let nuevaUbicacion = response.headers.get("location");
      console.log("REDIRIGIENDO A:", nuevaUbicacion);
    } else {
      return response.json();
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
