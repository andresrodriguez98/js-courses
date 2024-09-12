const numbersContainer = document.getElementById("numbers");
let content = "";

const people = [
  "Argenis",
  "Cesar",
  "David",
  "Diego",
  "Dolly",
  "Hilda",
  "Jhoanna",
  "Jose",
  "Karen",
  "Laura",
  "Lucho",
  "Maria",
  "Marlon",
  "Negro",
  "Paula",
  "Pipe",
  "Rodolfo",
  "Yuri", // 18
];
const numberTickets = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98, 99,
];

const totalPeople = people.length; //18
const totalNumbers = numberTickets.length; //100

let colorSection = "red";

for (let index = 0; index < totalNumbers; index++) {
  if (index === 0) people.sort(sortPeople);

  // Vueltas: 0 - 17
  let currentPerson = people[index];

  if (index > totalPeople - 1) {
    if (index === 17) {
      people.sort(sortPeople);
      colorSection = "blue";
    }

    //Vueltas: 18 - 35
    currentPerson = people[index - totalPeople];
  }

  if (index > totalPeople * 2 - 1) {
    if (index === 35) {
      people.sort(sortPeople);
      colorSection = "green";
    }

    //Vueltas: 36 - 53
    currentPerson = people[index - totalPeople * 2];
  }

  if (index > totalPeople * 3 - 1) {
    if (index === 53) {
      people.sort(sortPeople);
      colorSection = "pink";
    }

    //Vueltas: 54 - 71
    currentPerson = people[index - totalPeople * 3];
  }

  if (index > totalPeople * 4 - 1) {
    if (index === 71) {
      people.sort(sortPeople);
      colorSection = "yellow";
    }

    //Vueltas: 72 - 89
    currentPerson = people[index - totalPeople * 4];
  }

  if (index > totalPeople * 5 - 1) {
    if (index === 89) {
      people.sort(sortPeople);
      colorSection = "orange";
    }

    //Vueltas: 89 - 100
    currentPerson = people[index - totalPeople * 5];
  }

  const digitQuantity = numberTickets[index].toString().length;
  const number = numberTickets[index];

  content += `
  <div class="num-container">
  <div class='num ${colorSection}'>
  ${digitQuantity === 1 ? `0${number}` : number}
  </div>
  <span>${currentPerson}</span>
  </div>
  `;
  //<td>${currentPerson}</td>
}
console.log(numbersContainer);
numbersContainer.innerHTML = content;

function sortPeople() {
  return Math.random() - 0.5;
}
