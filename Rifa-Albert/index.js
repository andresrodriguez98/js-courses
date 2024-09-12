const boxNumber = document.getElementsByClassName("numbers")[0];
let content = "";

const numbers =[
    {
        "number": 0,
        "wasSold": true,
        "person": "Tatiana Berrio",
        "wasPayed": true
    },
    {
        "number": 1,
        "wasSold": true,
        "person": "Marinela",
        "wasPayed": true
    },
    {
        "number": 2,
        "wasSold": true,
        "person": "Doña Nuria",
        "wasPayed": true
    },
    {
        "number": 3,
        "wasSold": true,
        "person": "Milagrito",
        "wasPayed": true
    },
    {
        "number": 4,
        "wasSold": true,
        "person": "Camila Restrepo",
        "wasPayed": true
    },
    {
        "number": 5,
        "wasSold": true,
        "person": "Negro",
        "wasPayed": true
    },
    {
        "number": 6,
        "wasSold": true,
        "person": "Doña Nuria",
        "wasPayed": true
    },
    {
        "number": 7,
        "wasSold": true,
        "person": "Jaimito Correa",
        "wasPayed": true
    },
    {
        "number": 8,
        "wasSold": true,
        "person": "Allan David Vecina",
        "wasPayed": true
    },
    {
        "number": 9,
        "wasSold": true,
        "person": "Rodolfo",
        "wasPayed": true
    },
    {
        "number": 10,
        "wasSold": true,
        "person": "Don Pedro",
        "wasPayed": true
    },
    {
        "number": 11,
        "wasSold": true,
        "person": "Argeni",
        "wasPayed": true
    },
    {
        "number": 12,
        "wasSold": true,
        "person": "Herminso",
        "wasPayed": true
    },
    {
        "number": 13,
        "wasSold": true,
        "person": "Tia Amparo",
        "wasPayed": true
    },
    {
        "number": 14,
        "wasSold": true,
        "person": "Nancy Manrrique",
        "wasPayed": true
    },
    {
        "number": 15,
        "wasSold": true,
        "person": "Elias Capera",
        "wasPayed": true
    },
    {
        "number": 16,
        "wasSold": true,
        "person": "Juan Betancourt",
        "wasPayed": true
    },
    {
        "number": 17,
        "wasSold": true,
        "person": "familia",
        "wasPayed": false
    },
    {
        "number": 18,
        "wasSold": true,
        "person": "Jaime Berrio",
        "wasPayed": true
    },
    {
        "number": 19,
        "wasSold": true,
        "person": "Dolly",
        "wasPayed": true
    },
    {
        "number": 20,
        "wasSold": true,
        "person": "Jenny Medellin",
        "wasPayed": true
    },
    {
        "number": 21,
        "wasSold": true,
        "person": "Doña Carolina",
        "wasPayed": true
    },
    {
        "number": 22,
        "wasSold": true,
        "person": "Argeni",
        "wasPayed": true
    },
    {
        "number": 23,
        "wasSold": true,
        "person": "Liliana Vasquez",
        "wasPayed": true
    },
    {
        "number": 24,
        "wasSold": true,
        "person": "Yadira",
        "wasPayed": false
    },
    {
        "number": 25,
        "wasSold": true,
        "person": "Doña Nuria",
        "wasPayed": true
    },
    {
        "number": 26,
        "wasSold": true,
        "person": "Camila Restrepo",
        "wasPayed": true
    },
    {
        "number": 27,
        "wasSold": true,
        "person": "Lina Cortes",
        "wasPayed": true
    },
    {
        "number": 28,
        "wasSold": true,
        "person": "Sofia Galindo",
        "wasPayed": true
    },
    {
        "number": 29,
        "wasSold": true,
        "person": "Tio Alvaro",
        "wasPayed": true
    },
    {
        "number": 30,
        "wasSold": true,
        "person": "Doña Paula Medellin",
        "wasPayed": true
    },
    {
        "number": 31,
        "wasSold": true,
        "person": "Jose Rodriguez",
        "wasPayed": true
    },
    {
        "number": 32,
        "wasSold": true,
        "person": "Helenita Duarte",
        "wasPayed": true
    },
    {
        "number": 33,
        "wasSold": true,
        "person": "Luz Marina",
        "wasPayed": true
    },
    {
        "number": 34,
        "wasSold": true,
        "person": "Henrri",
        "wasPayed": true
    },
    {
        "number": 35,
        "wasSold": true,
        "person": "Hilda",
        "wasPayed": true
    },
    {
        "number": 36,
        "wasSold": true,
        "person": "Lilia Berrio",
        "wasPayed": true
    },
    {
        "number": 37,
        "wasSold": true,
        "person": "Shellsy",
        "wasPayed": true
    },
    {
        "number": 38,
        "wasSold": true,
        "person": "Fabian Ayala",
        "wasPayed": true
    },
    {
        "number": 39,
        "wasSold": true,
        "person": "Fabio Vecino",
        "wasPayed": false
    },
    {
        "number": 40,
        "wasSold": true,
        "person": "Mochito",
        "wasPayed": true
    },
    {
        "number": 41,
        "wasSold": true,
        "person": "Nenuco",
        "wasPayed": true
    },
    {
        "number": 42,
        "wasSold": true,
        "person": "Rubiela Rodriguez",
        "wasPayed": true
    },
    {
        "number": 43,
        "wasSold": true,
        "person": "Marlon",
        "wasPayed": true
    },
    {
        "number": 44,
        "wasSold": true,
        "person": "Tia Amparo",
        "wasPayed": true
    },
    {
        "number": 45,
        "wasSold": true,
        "person": "Nancy Manrrique",
        "wasPayed": true
    },
    {
        "number": 46,
        "wasSold": true,
        "person": "Sarita Don Alonso",
        "wasPayed": true
    },
    {
        "number": 47,
        "wasSold": true,
        "person": "Jaimito",
        "wasPayed": true
    },
    {
        "number": 48,
        "wasSold": true,
        "person": "Doña Mari",
        "wasPayed": true
    },
    {
        "number": 49,
        "wasSold": true,
        "person": "Gladis Medellin",
        "wasPayed": true
    },
    {
        "number": 50,
        "wasSold": true,
        "person": "Karen Rodriguez",
        "wasPayed": true
    },
    {
        "number": 51,
        "wasSold": true,
        "person": "Jose Gulupa",
        "wasPayed": true
    },
    {
        "number": 52,
        "wasSold": true,
        "person": "Julian Lula",
        "wasPayed": true
    },
    {
        "number": 53,
        "wasSold": true,
        "person": "Rosabel Perez",
        "wasPayed": true
    },
    {
        "number": 54,
        "wasSold": true,
        "person": "Rubiela Rodriguez",
        "wasPayed": true
    },
    {
        "number": 55,
        "wasSold": true,
        "person": "Rubencho",
        "wasPayed": true
    },
    {
        "number": 56,
        "wasSold": true,
        "person": "Jorge Andrea",
        "wasPayed": true
    },
    {
        "number": 57,
        "wasSold": true,
        "person": "Argenis",
        "wasPayed": true
    },
    {
        "number": 58,
        "wasSold": true,
        "person": "Elsa Rodriguez",
        "wasPayed": true
    },
    {
        "number": 59,
        "wasSold": true,
        "person": "Danilo Manrrique",
        "wasPayed": true
    },
    {
        "number": 60,
        "wasSold": true,
        "person": "Marta Tienda",
        "wasPayed": true
    },
    {
        "number": 61,
        "wasSold": true,
        "person": "Camila Restrepo",
        "wasPayed": true
    },
    {
        "number": 62,
        "wasSold": true,
        "person": "Jose Gulupa",
        "wasPayed": true
    },
    {
        "number": 63,
        "wasSold": true,
        "person": "Chucho",
        "wasPayed": true
    },
    {
        "number": 64,
        "wasSold": true,
        "person": "Argeni",
        "wasPayed": true
    },
    {
        "number": 65,
        "wasSold": true,
        "person": "Don Justo",
        "wasPayed": true
    },
    {
        "number": 66,
        "wasSold": true,
        "person": "Nicolas Duarte",
        "wasPayed": true
    },
    {
        "number": 67,
        "wasSold": true,
        "person": "Argenis",
        "wasPayed": true
    },
    {
        "number": 68,
        "wasSold": true,
        "person": "Viviana Bardock",
        "wasPayed": true
    },
    {
        "number": 69,
        "wasSold": true,
        "person": "Jefe Lorena",
        "wasPayed": true
    },
    {
        "number": 70,
        "wasSold": true,
        "person": "Olga Ibague",
        "wasPayed": true
    },
    {
        "number": 71,
        "wasSold": true,
        "person": "Sebastian Seleita",
        "wasPayed": true
    },
    {
        "number": 72,
        "wasSold": true,
        "person": "Luisa Pulido",
        "wasPayed": true
    },
    {
        "number": 73,
        "wasSold": true,
        "person": "Rosabel Perez",
        "wasPayed": true
    },
    {
        "number": 74,
        "wasSold": true,
        "person": "Andrea Varela",
        "wasPayed": true
    },
    {
        "number": 75,
        "wasSold": true,
        "person": "Paula Rodriguez",
        "wasPayed": true
    },
    {
        "number": 76,
        "wasSold": true,
        "person": "Valentina Ortegon",
        "wasPayed": true
    },
    {
        "number": 77,
        "wasSold": true,
        "person": "Jose Gulupa",
        "wasPayed": true
    },
    {
        "number": 78,
        "wasSold": true,
        "person": "Camila Restrepo",
        "wasPayed": true
    },
    {
        "number": 79,
        "wasSold": true,
        "person": "Oscar Gas",
        "wasPayed": true
    },
    {
        "number": 80,
        "wasSold": true,
        "person": "Felipe Urrea",
        "wasPayed": true
    },
    {
        "number": 81,
        "wasSold": true,
        "person": "Gladis Medellin",
        "wasPayed": true
    },
    {
        "number": 82,
        "wasSold": true,
        "person": "Diego Rodriguez",
        "wasPayed": true
    },
    {
        "number": 83,
        "wasSold": true,
        "person": "Luz Marina",
        "wasPayed": true
    },
    {
        "number": 84,
        "wasSold": true,
        "person": "Jhoanna",
        "wasPayed": true
    },
    {
        "number": 85,
        "wasSold": true,
        "person": "Hernes Rodriguez",
        "wasPayed": true
    },
    {
        "number": 86,
        "wasSold": true,
        "person": "Yaneth",
        "wasPayed": true
    },
    {
        "number": 87,
        "wasSold": true,
        "person": "Doña Paola",
        "wasPayed": true
    },
    {
        "number": 88,
        "wasSold": true,
        "person": "Viviana Bardock",
        "wasPayed": true
    },
    {
        "number": 89,
        "wasSold": true,
        "person": "Jenny Medellin",
        "wasPayed": true
    },
    {
        "number": 90,
        "wasSold": true,
        "person": "Maritza",
        "wasPayed": false
    },
    {
        "number": 91,
        "wasSold": true,
        "person": "Yimena",
        "wasPayed": true
    },
    {
        "number": 92,
        "wasSold": true,
        "person": "Lorena Chamorro",
        "wasPayed": true
    },
    {
        "number": 93,
        "wasSold": true,
        "person": "Freddy Popocha",
        "wasPayed": true
    },
    {
        "number": 94,
        "wasSold": true,
        "person": "Jefe Lorena",
        "wasPayed": true
    },
    {
        "number": 95,
        "wasSold": true,
        "person": "Maria Yate",
        "wasPayed": true
    },
    {
        "number": 96,
        "wasSold": true,
        "person": "Casar",
        "wasPayed": true
    },
    {
        "number": 97,
        "wasSold": true,
        "person": "Natalia Cancelado",
        "wasPayed": true
    },
    {
        "number": 98,
        "wasSold": true,
        "person": "Pachon",
        "wasPayed": true
    },
    {
        "number": 99,
        "wasSold": true,
        "person": "Viviana Bardock",
        "wasPayed": true
    }
]
// Cargar el estado de Local Storage si existe
const savedNumbers = JSON.parse(localStorage.getItem("numbers"));

if (savedNumbers) {
  // Actualizar el array `numbers` con los valores guardados en Local Storage
  savedNumbers.forEach((item, index) => {
    numbers[index].wasSold = item.wasSold;
  });
}

const totalSales = numbers.filter((element) => {
  return !element.wasSold;
});
console.log("DISPONIBLES:", totalSales.length);

for (let index = 0; index < numbers.length; index++) {
  // recuperamos el valor de la propiedad(number) del elemento actual(index) del array de los numeros(numbers[]) para recuperar el numero convertido en string
  const numbersValue = numbers[index].number.toString();

  //evalua si el numero actual tiene un digito(.length) para concatenar un 0 al camienzo
  const formatNumber =
    numbersValue.length === 1 ? `0${numbersValue}` : numbersValue;

  //validamos si el numero fue vendido o no para colocar la x o el numero
  const availableNumber = numbers[index].wasSold === true ? `X` : formatNumber;

  //creamos el contenido que se inyectara al html
  content += `<div class="num${
    availableNumber === `X` ? " red" : ""
  }" data-index="${index}">${availableNumber}</div>`;
}

// inyecta divs al html
boxNumber.innerHTML = content;

// obtiene todos los divs con clases num en un array
const numElements = document.querySelectorAll(".num");

// recorre todos los elementos obtenidos por la constante 'numElements'
numElements.forEach((element) => {
  // validamos los elementos que NO contengan la clase red
  if (!element.classList.contains("red")) {
    // asociamos un evento de tipo click al elemento
    element.addEventListener("click", (event) => {
      // obtenemos el valor del atributo 'data-index' del elemento clickeado
      const index = event.target.getAttribute("data-index");

      //disparamos ventana de confirmacion para ingresar un nombre
      const buyerName = prompt("Ingrese el nombre del comprador:");

      // validamos que se haya escrito algo en el prompt
      if (buyerName !== null && buyerName.trim().length > 0) {
        // actualizamos el texto del div por una X y agregamos la clase 'red'
        event.target.innerHTML = "X";
        event.target.classList.add("red");

        // modificamos las propiedades del array original (numbers)
        numbers[index].wasSold = true;
        numbers[index].person = buyerName;

        // Guardar el nuevo estado en Local Storage
        localStorage.setItem("numbers", JSON.stringify(numbers));
      }
    });
  }
});

numbers[24].wasPayed = true;

//numbers[44].wasSold = true;
//numbers[44].person = "Tia Amparo";
localStorage.setItem("numbers", JSON.stringify(numbers));

console.log("ARRAY LocalStorage:", savedNumbers);
