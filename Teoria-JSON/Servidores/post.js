async function crearPost(titulo, contenido) {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titulo,
        body: contenido,
        userId: 1,
      }),
    });

    console.log(respuesta);

    if (!respuesta.ok) {
      throw new Error("Error en la Solicitud:" + respuesta.statusText);
    }
    let data = await respuesta.json();
    console.log("REGISTRO CREADO:", data);
  } catch (error) {
    console.error("Algo salío mal al crear el Registro:", error);
  }
}
crearPost("Mi titulo de ejemplo", "Contenido de ejemplo");
