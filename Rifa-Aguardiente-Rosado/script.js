const boxNumber = document.getElementsByClassName("numbers")[0];
let content = "";

const numbers = [
  {
    number: 0,
    wasSold: true,
    person: "robert pantoja",
    wasPayed: false,
  },
  {
    number: 1,
    wasSold: true,
    person: "don brayan",
    wasPayed: true,
  },
  {
    number: 2,
    wasSold: true,
    person: "pipe",
    wasPayed: false,
  },
  {
    number: 3,
    wasSold: true,
    person: "jose ratuy",
    wasPayed: false,
  },
  {
    number: 4,
    wasSold: true,
    person: "jhon edinson",
    wasPayed: false,
  },
  {
    number: 5,
    wasSold: true,
    person: "eliecer rodriguez",
    wasPayed: false,
  },
  {
    number: 6,
    wasSold: true,
    person: "diego",
    wasPayed: false,
  },
  {
    number: 7,
    wasSold: true,
    person: "karen",
    wasPayed: false,
  },
  {
    number: 8,
    wasSold: true,
    person: "jhon edinson",
    wasPayed: false,
  },
  {
    number: 9,
    wasSold: true,
    person: "shellsy",
    wasPayed: false,
  },
  {
    number: 10,
    wasSold: true,
    person: "hilda",
    wasPayed: true,
  },
  {
    number: 11,
    wasSold: true,
    person: "argenis",
    wasPayed: true,
  },
  {
    number: 12,
    wasSold: true,
    person: "ruben",
    wasPayed: false,
  },
  {
    number: 13,
    wasSold: true,
    person: "paula",
    wasPayed: false,
  },
  {
    number: 14,
    wasSold: true,
    person: "reyna",
    wasPayed: true,
  },
  {
    number: 15,
    wasSold: true,
    person: "dolly",
    wasPayed: true,
  },
  {
    number: 16,
    wasSold: true,
    person: "don brayan",
    wasPayed: true,
  },
  {
    number: 17,
    wasSold: true,
    person: "jose ratuy",
    wasPayed: false,
  },
  {
    number: 18,
    wasSold: true,
    person: "lula",
    wasPayed: true,
  },
  {
    number: 19,
    wasSold: true,
    person: "jhon edinson",
    wasPayed: false,
  },
  {
    number: 20,
    wasSold: true,
    person: "sandra beltran",
    wasPayed: false,
  },
  {
    number: 21,
    wasSold: true,
    person: "marily",
    wasPayed: true,
  },
  {
    number: 22,
    wasSold: true,
    person: "rodolfo",
    wasPayed: false,
  },
  {
    number: 23,
    wasSold: true,
    person: "hilda",
    wasPayed: true,
  },
  {
    number: 24,
    wasSold: true,
    person: "paula",
    wasPayed: false,
  },
  {
    number: 25,
    wasSold: true,
    person: "mugelito",
    wasPayed: true,
  },
  {
    number: 26,
    wasSold: true,
    person: "argenis",
    wasPayed: true,
  },
  {
    number: 27,
    wasSold: true,
    person: "shellsy",
    wasPayed: false,
  },
  {
    number: 28,
    wasSold: true,
    person: "kevin",
    wasPayed: true,
  },
  {
    number: 29,
    wasSold: true,
    person: "nancy",
    wasPayed: false,
  },
  {
    number: 30,
    wasSold: true,
    person: "cesar rodriguez",
    wasPayed: false,
  },
  {
    number: 31,
    wasSold: true,
    person: "nancy",
    wasPayed: false,
  },
  {
    number: 32,
    wasSold: true,
    person: "reyna",
    wasPayed: true,
  },
  {
    number: 33,
    wasSold: true,
    person: "robert pantoja",
    wasPayed: false,
  },
  {
    number: 34,
    wasSold: true,
    person: " estrellita",
    wasPayed: false,
  },
  {
    number: 35,
    wasSold: true,
    person: "sandra beltran",
    wasPayed: false,
  },
  {
    number: 36,
    wasSold: true,
    person: " eduar primo",
    wasPayed: true,
  },
  {
    number: 37,
    wasSold: true,
    person: "fabian",
    wasPayed: true,
  },
  {
    number: 38,
    wasSold: true,
    person: " marily",
    wasPayed: true,
  },
  {
    number: 39,
    wasSold: true,
    person: "jhoan celeita",
    wasPayed: true,
  },
  {
    number: 40,
    wasSold: true,
    person: "diego",
    wasPayed: false,
  },
  {
    number: 41,
    wasSold: true,
    person: "valentina pollito",
    wasPayed: false,
  },
  {
    number: 42,
    wasSold: true,
    person: "fabian",
    wasPayed: true,
  },
  {
    number: 43,
    wasSold: true,
    person: "marlon",
    wasPayed: false,
  },
  {
    number: 44,
    wasSold: true,
    person: "jhoanna",
    wasPayed: true,
  },
  {
    number: 45,
    wasSold: true,
    person: "nini",
    wasPayed: true,
  },
  {
    number: 46,
    wasSold: true,
    person: "hilda",
    wasPayed: true,
  },
  {
    number: 47,
    wasSold: true,
    person: " sandra beltran",
    wasPayed: false,
  },
  {
    number: 48,
    wasSold: true,
    person: "eliecer rodriguez",
    wasPayed: false,
  },
  {
    number: 49,
    wasSold: true,
    person: "lula",
    wasPayed: true,
  },
  {
    number: 50,
    wasSold: true,
    person: "cesar",
    wasPayed: false,
  },
  {
    number: 51,
    wasSold: true,
    person: "oswaldo",
    wasPayed: true,
  },
  {
    number: 52,
    wasSold: true,
    person: "fabian",
    wasPayed: true,
  },
  {
    number: 53,
    wasSold: true,
    person: " silvia pachon",
    wasPayed: false,
  },
  {
    number: 54,
    wasSold: true,
    person: "diego",
    wasPayed: false,
  },
  {
    number: 55,
    wasSold: true,
    person: "fabian",
    wasPayed: true,
  },
  {
    number: 56,
    wasSold: true,
    person: "argenis",
    wasPayed: true,
  },
  {
    number: 57,
    wasSold: true,
    person: "rodolfo",
    wasPayed: false,
  },
  {
    number: 58,
    wasSold: true,
    person: "manuel",
    wasPayed: true,
  },
  {
    number: 59,
    wasSold: true,
    person: " fernando torres",
    wasPayed: false,
  },
  {
    number: 60,
    wasSold: true,
    person: "maritza",
    wasPayed: false,
  },
  {
    number: 62,
    wasSold: true,
    person: "shellsy",
    wasPayed: true,
  },
  {
    number: 61,
    wasSold: true,
    person: "hilda",
    wasPayed: true,
  },
  {
    number: 63,
    wasSold: true,
    person: "fabian",
    wasPayed: true,
  },
  {
    number: 64,
    wasSold: true,
    person: "lula",
    wasPayed: true,
  },
  {
    number: 65,
    wasSold: true,
    person: " estrellita",
    wasPayed: false,
  },
  {
    number: 66,
    wasSold: true,
    person: "robert pantoja",
    wasPayed: false,
  },
  {
    number: 67,
    wasSold: true,
    person: "argenis",
    wasPayed: true,
  },
  {
    number: 68,
    wasSold: true,
    person: "diego",
    wasPayed: false,
  },
  {
    number: 69,
    wasSold: true,
    person: " jose gulupa",
    wasPayed: true,
  },
  {
    number: 70,
    wasSold: true,
    person: "jaimito duran",
    wasPayed: false,
  },
  {
    number: 71,
    wasSold: true,
    person: "jhoan celeita",
    wasPayed: true,
  },
  {
    number: 72,
    wasSold: true,
    person: "jhonatan morales",
    wasPayed: true,
  },
  {
    number: 73,
    wasSold: true,
    person: "fabian",
    wasPayed: true,
  },
  {
    number: 74,
    wasSold: true,
    person: "jaimito duran",
    wasPayed: false,
  },
  {
    number: 75,
    wasSold: true,
    person: " cristian",
    wasPayed: true,
  },
  {
    number: 76,
    wasSold: true,
    person: "lula",
    wasPayed: true,
  },
  {
    number: 77,
    wasSold: true,
    person: "karen",
    wasPayed: false,
  },
  {
    number: 78,
    wasSold: true,
    person: "oswaldo",
    wasPayed: true,
  },
  {
    number: 79,
    wasSold: true,
    person: "jhoanna",
    wasPayed: true,
  },
  {
    number: 80,
    wasSold: true,
    person: "rodolfo",
    wasPayed: false,
  },
  {
    number: 81,
    wasSold: true,
    person: "henrri",
    wasPayed: true,
  },
  {
    number: 82,
    wasSold: true,
    person: "fabian",
    wasPayed: true,
  },
  {
    number: 83,
    wasSold: true,
    person: "eliecer rodriguez",
    wasPayed: false,
  },
  {
    number: 84,
    wasSold: true,
    person: " cristian",
    wasPayed: true,
  },
  {
    number: 85,
    wasSold: true,
    person: "",
    wasPayed: false,
  },
  {
    number: 86,
    wasSold: true,
    person: "laura",
    wasPayed: true,
  },
  {
    number: 87,
    wasSold: true,
    person: "hilda",
    wasPayed: true,
  },
  {
    number: 88,
    wasSold: true,
    person: "henrry",
    wasPayed: true,
  },
  {
    number: 89,
    wasSold: true,
    person: "jose ratuy",
    wasPayed: false,
  },
  {
    number: 90,
    wasSold: true,
    person: "sofia duran",
    wasPayed: false,
  },
  {
    number: 91,
    wasSold: true,
    person: "mocho",
    wasPayed: false,
  },
  {
    number: 92,
    wasSold: true,
    person: "jose gulupa",
    wasPayed: true,
  },
  {
    number: 93,
    wasSold: true,
    person: "fernando torres",
    wasPayed: false,
  },
  {
    number: 94,
    wasSold: true,
    person: "laura",
    wasPayed: true,
  },
  {
    number: 95,
    wasSold: true,
    person: "fabian",
    wasPayed: true,
  },
  {
    number: 96,
    wasSold: true,
    person: "pagote",
    wasPayed: true,
  },
  {
    number: 97,
    wasSold: true,
    person: "jhonatan morales",
    wasPayed: true,
  },
  {
    number: 98,
    wasSold: true,
    person: "pachon",
    wasPayed: true,
  },
  {
    number: 99,
    wasSold: true,
    person: "maritza",
    wasPayed: false,
  },
];

// Cargar el estado de Local Storage si existe
const savedNumbers = JSON.parse(localStorage.getItem("numbers"));

console.log(savedNumbers);

if (savedNumbers) {
  // Actualizar el array `numbers` con los valores guardados en Local Storage
  savedNumbers.forEach((item, index) => {
    numbers[index].wasSold = item.wasSold;
  });
}

const totalSales = numbers.filter((element) => {
  return !element.wasSold;
});
console.log(totalSales.length);

for (let index = 0; index < numbers.length; index++) {
  const numbersValue = numbers[index].number.toString();
  const formatNumber =
    numbersValue.length === 1 ? `0${numbersValue}` : numbersValue;

  const availableNumber = numbers[index].wasSold === true ? `X` : formatNumber;

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
      if (buyerName.trim().length > 0) {
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

//numbers[75].wasPayed = true;

// Guardar el nuevo estado en Local Storage
//localStorage.setItem("numbers", JSON.stringify(numbers));
