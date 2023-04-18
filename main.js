let myCard1;
let myCard2;

const carta = [
  { value: 1, name: "as" },
  { value: 2, name: "dos" },
  { value: 3, name: "tres" },
  { value: 4, name: "cuatro" },
  { value: 5, name: "cinco" },
  { value: 6, name: "seis" },
  { value: 7, name: "siete" },
  { value: 8, name: "ocho" },
  { value: 9, name: "nueve" },
  { value: 10, name: "diez" },
  { value: 11, name: "jota" },
  { value: 12, name: "reina" },
  { value: 13, name: "rey" },
];

console.log(carta.value);
const deck = [];

const totalDeck = (palo) => {
  for (i = 0; i < 13; i++) {
    deck.push({
      symbol: palo,
      value: carta[i].value,
      name: carta[i].name,
    });
  }
};

totalDeck("heart");
totalDeck("spades");
totalDeck("clovers");
totalDeck("diamonds");

console.log(deck);
console.log(deck.value);

const getRandomCard1 = () => {
  let randomCard1 = Math.floor(Math.random() * 52);
  myCard1 = deck[randomCard1];
  console.log(myCard1);
  //console.log(deck[randomCard1]); Es igual que myCArd1
  console.log(`Tu carta es ${myCard1.value} ${myCard1.symbol}`);
  console.log(myCard1.value); //saca el número en consola
  //console.log(typeof myCard1.value) //(nümero)
};

const getRandcomCard2 = () => {
  let randomCard2 = Math.floor(Math.random() * 52);
  myCard2 = deck[randomCard2];
  console.log(myCard2);
  console.log(`La segunda carta es ${myCard2.value} ${myCard2.symbol}`);
};

let count = 0;

const askToUserIfTheCardIsMinorOrMayor = () => {
  const answer = prompt(
    "Bienvenido usuario esta es tu carta. ¿Crees que la siguiente carta será mayor o menor. Escribe mayor o menor, por favor"
  );
  if (answer === null && answer === "" && answer === undefinded) {
    alert(`Escriba, por favor, una de las dos opciones: mayor o menor`);
    askToUserIfTheCardIsMinorOrMayor();
  }
  getRandcomCard2();
  if (
    (answer.toUpperCase() === "MAYOR" && myCard1.value < myCard2.value) ||
    (answer.toUpperCase() === "MENOR" && myCard1.value > myCard2.value)
  ) {
    alert(`Enhorabuena. ¡Has acertado!`);
    count++;
    alert(`Tienes ${count} puntos`);
  }
  if (
    (answer.toUpperCase() === "MAYOR" && myCard1.value > myCard2.value) ||
    (answer.toUpperCase() === "MENOR" && myCard1.value < myCard2.value)
  ) {
    alert(`Esta vez no ha habido suerte.`);
  }
};
/askToUserIfTheCardIsMinorOrMayor();/;

const allGame = () => {
  totalDeck();
  getRandomCard1();
  askToUserIfTheCardIsMinorOrMayor();
};

allGame();