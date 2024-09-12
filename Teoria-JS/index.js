/* VARIABLES
var miVarible = "24";
console.log("mi edad ahora es 24");

miVarible = 12;
console.log("mi edad ahora es 12");

const miConstante = 3;
console.log("el valor de mi constante es" + miConstante);

var op1 = 2;
var op2 = 3;
var resultado = op1 + op2;
console.log("resultado vale:" + resultado); */

/*BUCLES
let miNumero2 = 0;
if (miNumero2 > 0) {
  console.log("Mi numero es positivo");
} else if (miNumero2 === 0) {
  console.log("Mi numero es zero");
} else {
  console.log("Mi numero es negativo");
}

let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador = contador + 1;
}

for (let i = 0; i >= 10; i++) {
  console.log(i);
}*/

/*OBJETOS
let persona = {
  nombre: "kevin",
  edad: 19,
  masculino: true,
};
let persona2 = {
  nombre: "maria",
  edad: 25,
  masculino: false,
}; */

/* VARIABLE CONSTANTE

const precio = 200;
document.write("precio: ", precio); // es una contante por lo tanto no se puede modificar

document.write("<br>"); // salto de linea

precio = 300;
document.write("Nuevo Precio: ", precio); // el valor no puede ser asignado porque es una contante 

 Precio2 = 300;
document.write("Nuevo precio: ", Precio2); // en este caso se puede ya que es una nueva variable y no es constante */

/*OPERADORES MATEMATICOS
let a, b, sum, res, mult, div, resid, poten;

// pedir datos al usuario
//a = prompt("INGRESE VALOR 1..."); // me lo concatena
//b = prompt("INGRESE VALOR 2...");

a = parseInt(prompt("INGRESE VALOR 1...")); // me conviente el numero en entero (solo en suma)
b = parseInt(prompt("INGRESE VALOR 2..."));

//SUMA
sum = a + b;
//RESTA
res = a - b;
//MULTIPLICACION
mult = a * b;
//DIVICION
div = a / b;
// MODULO
resid = a % b;
//EXPONENCIAL
poten = a ** b;

document.write("La suma es: ", sum);
document.write("<br>");
document.write("La resta es: ", res);
document.write("<br>");
document.write("La multiplicacion es: ", mult);
document.write("<br>");
document.write("La divicion es: ", div);
document.write("<br>");
document.write("El modulo es: ", resid);
document.write("<br>");
document.write("El exponencial es: ", poten);
document.write("<br>"); */

/* OPERADORES ASIGNACION, INCREMENTO Y DECREMENTO
let a = 1;
// OPERADOR INCREMENTO
document.write("Valor de a: ", a);
document.write("<br>");
a++; //aumenta valor en 1
document.write("Valor de a: ", a);
document.write("<br>");
a += 5; // aumento variable

//OPERADOR DECREMENTO
document.write("Valor de a: ", a);
document.write("<br>");
a--; // resta valor en 1
document.write("Valor de a: ", a);
document.write("<br>");
a -= 3; //resta variable
document.write("Valor de a: ", a);
document.write("<br>");

// a*a me multiplica el ultimo valor con el actual
a *= 2;
document.write("Valor de a: ", a);
document.write("<br>");

// a/a me divide el ultimo valor con el actual
a /= 3;
document.write("Valor de a: ", a);
document.write("<br>");

// eleva la potencia de a al numero que yo coloque
a **= 3;
document.write("Valor de a: ", a);
document.write("<br>"); */

/*OPERADORES DE COMPARACION
let valor1, valor2;
valor1 = 20;
valor2 = 10;

document.write(valor1 > valor2);
document.write("<br>");
document.write(valor1 < valor2);
document.write("<br>");
document.write(valor1 == valor2); //operador de comparacion
document.write("<br>");
document.write(valor1 != valor2); // valor diferente
document.write("<br>");
document.write(valor1 <= valor2); // valor menor o igual
document.write("<br>");
document.write(valor1 >= valor2); // valor mayor o igual
document.write("<br>"); */

/*FUNCIONES MATEMATICAS

// (round) redondear a siguiente entero en decimal .5
var precio = Math.round(399.53);
document.write("Precio redondeado: ", precio);
document.write("<br>");

// (ceil) redondear sin importar decimal hacia arriba
var precio = Math.ceil(299.9);
document.write("Precio redondeado: ", precio);
document.write("<br>");

// (floor) redondear sin importar decimal hacia abajo
var precio = Math.floor(540.9);
document.write("Precio redondeado: ", precio);
document.write("<br>");

//(sin) calcular el seno de un angulo
var seno = Math.sin(45);
document.write("Seno de 45: ", seno);
document.write("<br>");

//(exp) calcular el exponencial de un numero
var expo = Math.exp(2);
document.write("Exponencial de 2: ", expo);
document.write("<br>");

//(log) calcular el logaritmo de un numero
var logaritmo = Math.log(10);
document.write("Logaritmo de 10: ", logaritmo);
document.write("<br>");

//(abs) valor absoluto de un numero
var absoluto = Math.abs(-10);
document.write("V absoluto de -10: ", absoluto);
document.write("<br>");

//(max) calcular valor maximo de una secuencia
var maximo = Math.max(10, 50, 600, 1, 8);
document.write("Mayor valor: ", maximo);
document.write("<br>");

//(min) calcular valor maximo de una secuencia
var minimo = Math.min(10, 50, 600, 1, 8);
document.write("Minimo valor: ", minimo);
document.write("<br>");

//(ramdon) traer en pantalla valor aleatorio
var aleatorio = Math.round(Math.random() * 10);
document.write("Valor aleatorio: ", aleatorio);
document.write("<br>");

//(sqrt) raiz cuadrada de un numero
var valor = Math.sqrt(81);
document.write("Raiz de 81: ", valor);
document.write("<br>");

//(pow)calcular el exponente de un numero
var exponente = Math.pow(4, 2);
document.write("Valor de 4 a la 2: ", exponente);
document.write("<br>"); */

/* CADENAS DE TEXTO
let texto1 = "javaScript";
let texto2 = "JS es muy bueno";
let texto3 = 'Eso es "la verdad" de todo';
let texto4 =
  "Esto es una cadena muy larga " +
  "<br>" +
  "que necesita que dividamos en varias lineas " +
  "<br>" +
  "de lo contrario, el codigo es ilegible.";
let texto5 =
  "Esto es una cadena muy larga \
  que necesita que dividamos en varias lineas \
  de lo contrario, el codigo es ilegible.";
document.write(texto1);
document.write("<br>");
document.write(texto2);
document.write("<br>");
document.write(texto3);
document.write("<br>");
document.write("<br>");
document.write(texto4);
document.write("<br>");
document.write("<br>");
document.write(texto5);
document.write("<br>"); */

/* FUNCIONES STRINGS
let palabra = "JavaScript";
document.write("La palabra es: ", palabra);
document.write("<br>");

document.write("Cantidad de letras: ", palabra.length); // ver tamaño de un texto
document.write("<br>");

document.write("Primeras 4 letras: ", palabra.slice(0, 4)); // ver caracteres especificos en un texto
document.write("<br>");
document.write("Primeras 4 letras: ", palabra.substring(0, 4));
document.write("<br>");

let saludo = "hola a todos";
saludo = saludo.replace("hola", "adios"); // cambiar valores en un texto
document.write(saludo);
document.write("<br>");

document.write("En mayusculas: ", palabra.toUpperCase()); // poner en mayusculas
document.write("<br>");

document.write("En minusculas: ", palabra.toLowerCase()); // poner en minusculas
document.write("<br>");

let palabra2 = "Curso de ";
document.write("unir palabras: ", palabra2.concat(palabra)); // Unir texto
document.write("<br>");

let palabra3 = "     Hola     ";
document.write(palabra3); // acortar espacios entre textos
document.write("<br>");
document.write(palabra3.trim()); // ((trim) quitar espacios de la derecha y de la izquierda), ((trimEnd) quitar espacios lado izquierdo), ((trimStart)quitar espacios lado derecho)
document.write("<br>");

document.write(palabra.split("Script")); // cortar cantidad de caracteres
document.write("<br>"); */

/*ARREGLOS ARRAYS
let miArreglo = ["David", "Fernando", "Kevin", "Carla"];

for (let i = 0; i < 4; i++) {
  console.log("Accediendo al indice: " + i);
  let mostrar = miArreglo[i];
  console.log(mostrar);
}

declaracion de un array
let numeros = [15, 80, 650, 70, 10];
document.write("Elementos: ", numeros);
document.write("<br>");
document.write("primer elemento: ", numeros[0]);
document.write("<br>");
numeros[0] = 14;
document.write("Elementos: ", numeros);
document.write("<br>");
let frutas = ["manzanas", "peras", "naranjas", "mangos"];
document.write("<br>");
document.write("Frutas: ", frutas);
document.write("<br>");
document.write("<br>");
//METODOS DE LOS ARRAYS

//ver cantidad de Elementos
document.write("Cantidad num: ", numeros.length); // devuelve el numero de elementos
document.write("<br>");
document.write("Cantidad frut: ", frutas.length);
document.write("<br>");
document.write("<br>");

// saber ultimo elemento
document.write("Ultimo elemento: ", numeros[numeros.length - 1]);
document.write("<br>");
document.write("Ultimo elemento: ", frutas[frutas.length - 1]);
document.write("<br>");

document.write("En string: ", numeros.toString()); // arrays en tipo texto
document.write("<br>");
document.write("<br>");

// unir tipos de arrays
let letras = ["a", "b", "c", "d"];
let numeros2 = ["1", "2", "3", "4"];
document.write("Alfanumerico: ", letras.concat(numeros2)); // combina uno o mas arrays y devuelve un nuevo array
document.write("<br>");
document.write("<br>");

numeros.pop(); // borrar el ultimo elemento de mi arrary
document.write(numeros);
document.write("<br>");
document.write("<br>");

numeros.push(200); // agregar elemento al final
document.write(numeros);
document.write("<br>");
document.write("<br>");

numeros.shift(); // elimina el primer elemento de mi arrary
document.write(numeros);
document.write("<br>");
document.write("<br>");

numeros.unshift(14); // añade uno o mas elementos al inicio del array
document.write(numeros);
document.write("<br>");
document.write("<br>");

numeros.splice(2, 3); // elimina elementos a partir de un punto
document.write(numeros);
document.write("<br>");
document.write("<br>");

let cantidades = [100, 200, 300, 400, 500];
let copia = cantidades.slice(1, 4); // copia de elementos de un array
document.write("array copia: ", copia);
document.write("<br>");
document.write("<br>");

document.write(frutas.sort()); // ordena alfabeticamente mis arrays
document.write("<br>");
document.write("<br>");

document.write(frutas.reverse()); // ordena alfabeticamente mis arrays en modo reversa
document.write("<br>");
document.write("<br>");

const autos = ["Mercedez", "Audi", "BMW"]; // crear array con valores inalterables
document.write("Autos: ", autos);
document.write("<br>");
autos[0] = "Toyota";
document.write("Autos: ", autos); */

/*CONDICIONALES
let miNumero = 6;
let miNombre = "David";

let resultadopregunta = miNumero == 7;
console.log(resultadopregunta);

if (miNumero < 2 || miNombre == "kevin") {
  console.log("si mi numero vale 6");
} else {
  console.log("no mi numero no vale 6");
}

let nombre, edad;
nombre = prompt("INGRESE SU NOMBRE....");
edad = prompt("INGRESE SU EDAD...");
edad = parseInt(edad);

if (edad >= 18) {
  document.write("BIENVENIDO! ", nombre);
} else {
  if (edad < 18) {
    document.write(nombre, " eres menor de edad ");
  } else {
    document.write(" NO HAS INGRESADO DATOS ");
  }
} */

/*OPERADORES LOGICOS

// OPERADOR && (Y)
let continente, edad;
continente = prompt("INGRESE SU CONTINENTE...");

if (continente == "America" && edad >= 18) {
  document.write("eres un adulto americano");
} else {
  document.write("o no eres adulto, o no eres americano");
}

// OPERADOR ||
let dia, mes, anio;
dia = prompt("INGRESE DIA...");
mes = prompt("INGRESE MES...");
anio = prompt("INGRESE AÑO...");

if (mes == 1 || mes == 2 || mes == 3) {
  document.write("Pertenece al primer trimestre");
} else {
  document.write("No pertenece al primer trimestre");
} */

/* SWITCH - CASE
 let valor;
valor = parseInt(prompt("Ingrese valor entre 1 y 3"));
switch (valor) {
  case 1:
    document.write("ingresó uno");
    break;
  case 2:
    document.write("ingresó dos");
    break;
  case 3:
    document.write("ingresó tres");
    break;

  default:
    document.write("no es número valido");
    break;
}

let color;
color = prompt("INGRESE UN COLOR: ROJO/VERDE/AZUL");

switch (color) {
  case "rojo":
    document.write("ingresó rojo");
    break;
  case "verde":
    document.write("ingresó verde");
    break;
  case "azul":
    document.write("ingresó azul");
    break;

  default:
    document.write("No ingreso color ");
    break;
} */

/*WHILE
let f = 1;
while (f <= 10) {
  document.write("Vuelta No. ", f);
  document.write("<br>");
  f++;
}
document.write("Fin del Bucle");

let b = 10;
while (b >= 0) {
  document.write("Vuelta No. ", b);
  document.write("<br>");
  b--;
}
document.write("Fin del Bucle"); 

let f = 1;
let suma = 0;
let valor;

while (f <= 5) {
  valor = parseInt(prompt("Ingrese valor"));
  suma = suma + valor;
  f++;
}
document.write("la suma es: ", suma, "<br>"); */

/* DO-WHILE
let valor;
do {
  valor = parseInt(prompt("Ingrese valor 1 para salir.."));
  document.write("Ingresó valor: ", valor);
  document.write("<br>");
} while (valor != 1);
document.write("Fin del Bucle");

let usuario, clave, control;

control = 0;
usuario = prompt("INGRESE USUARIO.....");
clave = prompt("INGRESE SU CONTRASEÑA");

do {
  if (clave != "MIacceso33%") {
    clave = prompt("CONTRASEÑA INCORRECTA\n" + "INTENTE DE NUEVO...");
    control = 0;
  } else {
    control = 1;
  }
} while (control != 1);
document.write("ACCESO CORRECTO!"); */

/* FOR
for (let f = 1; f <= 20; f += 2) {
  document.write("Valor de f: ", f);
  document.write("<br>");
}
document.write("FIN DE BUCLE!");
document.write("<br>");
document.write("<br>");
for (let f = 1; f <= 20; f += 2) {
  if (f === 15) {
    document.write("Aqui el valor es: ", f);
  }
}
document.write("<br>");
document.write("FIN DE BUCLE!"); 

const frutas = [
  "Manzanas",
  "Peras",
  "Uvas",
  "Naranjas",
  "Melon",
  "Mango",
  "Papayas",
  "Sandias",
  "Kiwis",
  "Fresas",
  "Piñas",
  "Guanabanas",
];

for (let f = 0; f < frutas.length; f++) {
  document.write("Fruta: ", f, "=", frutas[f]);
  document.write("<br>");
}*/

/*FOR IN
let palabra = "Javascript";
for (let f in palabra) {
  document.write(palabra[f]);
}

let palabra = "murcielago";
let vocal = 0;

for (let f in palabra) {
  if (
    palabra[f] == "a" ||
    palabra[f] == "e" ||
    palabra[f] == "i" ||
    palabra[f] == "o" ||
    palabra[f] == "u"
  ) {
    vocal++;
  }
}
document.write("Cantidad de vocales: ", vocal);
document.write("<br>"); */

/*BREAK - CONTINUE

for (let f = 0; f < 10; f++) {
  document.write(f);
  document.write("<br>");
  if (f == 3) {
    document.write("Aqui es la vuelta: ", f);
    document.write("<br>");
    break;
  }
}

let palabra = "Javascript";
let resultado = "";

for (let f in palabra) {
  if (palabra[f] == "a") {
    continue;
  } else {
    resultado += palabra[f];
  }
}
document.write(resultado);

let palabra = "murcielgo";
let resultado = "";

for (let f in palabra) {
  if (
    palabra[f] == "a" ||
    palabra[f] == "e" ||
    palabra[f] == "i" ||
    palabra[f] == "o" ||
    palabra[f] == "u"
  ) {
    continue;
  } else {
    resultado += palabra[f];
  }
}
document.write(resultado); */

/* FUNCIONES
function saludar(nombre, edad) {
  console.log("Hola mi nombre es:" + nombre);
  console.log("Y mi edad es:", edad);
}

function multiplicar(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}
let recibidor = multiplicar(2, 5);
console.log(recibidor);

function saludar() {
  document.write("Hola a todos");
}
saludar();
document.write("<br>");

function despedir() {
  document.write("Adios a todos");
}
despedir();
document.write("<br>"); */

/* FUNCIONES CON PARAMETROS
let resultado;
function suma(valor1, valor2) {
  valor1 = parseInt(prompt("INGRESE VALOR 1..."));
  valor2 = parseInt(prompt("INGRESE VALOR 2..."));
  resultado = valor1 * valor2;
  alert("RESULTADO: " + resultado);
}
suma();*/

/*FUNCIONES CON RETURN
let resultado;
function divicion(a, b) {
  resultado = a / b;
  return resultado;
}
document.write(divicion(30, 40));
document.write("<br>");

function saludar() {
  return "Hola a todos!";
}
var mensaje = saludar();
document.write(mensaje);
document.write("<br>");

function Vercolor(valor) {
  valor = parseInt(prompt("INGRESE VALOR 1 / 3..."));
  switch (valor) {
    case 1:
      return "ROJO";
    case 2:
      return "VERDE";
    case 3:
      return "AMRILLO";
    default:
      return "VALOR INCORRECTO!";
  }
}
document.write(Vercolor()); */

/*FORM,BOTONES
let contador = 0;
function incrementar() {
  contador++;
  alert("VALOR: " + contador);
}*/

/*FORM CONTROL TEXT
let conrol = 0;
let contraseña = "acceso01";
function verificar() {
  let clave = document.getElementById("clave").value;
  if (clave != contraseña || clave == "") {
    alert("Clave Incorrecta o Vacia, Intente de Nuevo");
    conrol++;
    if (conrol >= 3) {
      alert(
        "Intentos Agotados, Acceso Bloqueado\
                        Contactar a Soporte Tecnico"
      );
    }
  } else {
    window.open("http://www.google.com");
  }
}*/

/*FORM, CONTROL SELECT INDEX
function cambiarcolor() {
  let seleccion = document.getElementById("select1");
  document.getElementById("text1").value = seleccion.selectedIndex;
  document.getElementById("text2").value =
    seleccion.options[seleccion.selectedIndex].text;
  document.getElementById("text3").value =
    seleccion.options[seleccion.selectedIndex].value;
}*/
