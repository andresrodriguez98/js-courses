// configurar con expressJS el servidor de la app
const express = require("express");
const app = express();

app.set("port", 3000);
app.listen(3000);

//llamar al componente de MySql
var mysql = require("mysql");

//establecer los parametros de la conexion
var mi_conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "clave8916", // la clave que parametrizamos
  database: "db_example_nodejs", // la que paenrametrizamos dudas  workbench y verifican
});

// nos conectamos a la base
mi_conection.connect();

//agregar nuevo registro
mi_conection.query(
  'insert into clientes values (1,"pedro", 1, 3217497543, "cra 1 #56")',
  function (error, resultado) {
    if (error) throw error;
    console.log(resultado);
  }
);

//realizar consulta a la tabla

//cerrar conexion a la base
mi_conection.end();
