/* METODO PUT
fetch("https://jsonplaceholder.typicode.com/posts/5", {
  method: "PUT",
  headers: {
    "content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Nuevo titulo",
    body: "Nueva descripción",
  }),
})
  .then((respuesta) => respuesta.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));*/

/*METODO DELETE
fetch("https://jsonplaceholder.typicode.com/posts/5", {
  method: "DELETE",
})
  .then((respuesta) => respuesta.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));*/

// METODO PATCH
fetch("https://jsonplaceholder.typicode.com/posts/5", {
  method: "PATCH",
  headers: {
    "content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Nuevo titulo",
  }),
})
  .then((respuesta) => respuesta.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
