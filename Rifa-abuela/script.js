const table = document.getElementById("table");
const tbody = table.querySelector("tbody");

const people = [
  "Argenis",
  "Cesar",
  "David",
  "Diego",
  "Hilda",
  "Jhoanna",
  "Jose",
  "Karen",
  "Laura",
  "Lucho",
  "Maria",
  "Marlon",
  "Paula",
  "Rodolfo",
  "Yuri", // 14
];
const numberTickets = [
  0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 16, 17, 18, 21, 23, 24, 26, 27, 30, 31,
  32, 33, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53,
  54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
  74, 75, 76, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
  95, 96, 97, 99,
];

const totalPeople = people.length; //15
const totalNumbers = numberTickets.length; //83

let colorSection = "red";

for (let index = 0; index < totalNumbers; index++) {
  if (index === 0) people.sort(sortPeople);

  // Vueltas: 0 - 14
  let currentPerson = people[index];

  if (index > totalPeople - 1) {
    if (index === 15) {
      people.sort(sortPeople);
      colorSection = "blue";
    }

    //Vueltas: 15 - 29
    currentPerson = people[index - totalPeople];
  }

  if (index > totalPeople * 2 - 1) {
    if (index === 30) {
      people.sort(sortPeople);
      colorSection = "green";
    }

    //Vueltas: 30 - 44
    currentPerson = people[index - totalPeople * 2];
  }

  if (index > totalPeople * 3 - 1) {
    if (index === 45) {
      people.sort(sortPeople);
      colorSection = "pink";
    }

    //Vueltas: 45 - 59
    currentPerson = people[index - totalPeople * 3];
  }

  if (index > totalPeople * 4 - 1) {
    if (index === 60) {
      people.sort(sortPeople);
      colorSection = "yellow";
    }

    //Vueltas: 60 - 74
    currentPerson = people[index - totalPeople * 4];
  }

  if (index > totalPeople * 5 - 1) {
    if (index === 75) {
      people.sort(sortPeople);
      colorSection = "orange";
    }

    //Vueltas: 75 - 89
    currentPerson = people[index - totalPeople * 5];
  }

  const digitQuantity = numberTickets[index].toString().length;
  const number = numberTickets[index];

  tbody.innerHTML += `
  <tr class='${colorSection}'>
    <td>${digitQuantity === 1 ? `0${number}` : number}</td>
    <td>${currentPerson}</td>
    <td></td>
    <td></td>
  </tr>
  `;
}

function sortPeople() {
  return Math.random() - 0.5;
}

/*
1. Guardar el nombre del color *
2. Cambiar el valor de la variable cada que empieza un paquete
3. Colocar la variable en el tr *
4. Crear los colores en CSS o en el mismo tr */
