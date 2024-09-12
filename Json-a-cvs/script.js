const jsonForm = document.querySelector("#jsonform");
const csvForm = document.querySelector("#csvform");
const bConvert = document.querySelector("#bConvert");

bConvert.addEventListener("click", (e) => {
  convertJSONtoCSV();
});

function convertJSONtoCSV() {
  let json;
  let keys = [];
  let values = [];

  try {
    json = JSON.parse(jsonForm.value);
  } catch (error) {
    console.log("Formato incorrecto JSON", error);
    alert("Formato incorrecto JSON");
    return;
  }

  if (Array.isArray(json)) {
    try {
      json.forEach((item, index) => {
        const nKeys = Object.keys(item);

        if (keys.length === 0) {
          keys = [...nKeys];
        } else {
          if (
            nKeys.length !== keys.length ||
            !nKeys.every((key, i) => key === keys[i])
          ) {
            throw new Error(
              `Las claves del objeto en la posición ${index} son diferentes.`
            );
          }
        }

        const row = keys.map((k) => item[k]);
        values.push([...row]);
      });

      console.log(keys, values);
      values.unshift(keys); // Agregar las claves como primera fila
      const text = values.map((v) => v.join(",")).join("\n");
      csvForm.value = text;
    } catch (error) {
      console.log("Error al convertir JSON a CSV", error);
      alert("Error al convertir JSON a CSV: " + error.message);
    }
  } else {
    alert("No es un arreglo de objetos");
  }
}
