/*El objetivo del juego es adivinar si la siguiente carta en el mazo es mayor o menor que la carta actual. Se utiliza un mazo de cartas 
francesas que consta de 52 cartas, divididas en 4 palos: ♠️ (espadas), ♣️ (tréboles), ♦️ (diamantes) y ♥️ (corazones). Cada palo tiene 13 cartas 
con los siguientes valores: 2, 3, 4, 5, 6, 7, 8, 9, 10, J (jota), Q (reina), K (rey) y A (as).

El juego consta de las siguientes funcionalidades:

1. Generación de cartas: Las cartas se generan combinando los valores y palos disponibles en el mazo de cartas francesas.

2. Obtención de una carta aleatoria: Se implementa una función para obtener una carta aleatoria del array de cartas generado previamente.

3. Inicio de un nuevo juego: Se inicia un nuevo juego generando un nuevo array de cartas y barajándolas. Se muestra la carta inicial en la consola, incluyendo su valor. Se solicita al jugador que elija si la siguiente carta será mayor o menor ingresando "mayor" o “menor”  para menor. (No puede ser case sensitive). 

4. Verificación de la respuesta del jugador: Cuando el jugador ingresa su elección, se genera una nueva carta y se compara con la carta actual. Si la respuesta del jugador es correcta, se muestra un mensaje indicando que acertó y se actualiza la puntuación. Si la respuesta es incorrecta, se muestra un mensaje indicando que falló y se muestra la carta actual y la nueva carta en la consola. El jugador puede reiniciar un nuevo juego después de cada respuesta.

5. Fin del juego: Tras cada partida se le pregunta al jugador si quiere terminar la partida y de ser así, se le muestra la puntuación final con las rondas.



//Generacion de cartas
const cards = [
  {
    number: 2,
    suit: "swords",
    status: 0,
  },
  {
    number: 3,
    suit: "swords",
    status: 0,
  },
  {
    number: 4,
    suit: "swords",
    status: 0,
  },
  {
    number: 5,
    suit: "swords",
    status: 0,
  },
  {
    number: 6,
    suit: "swords",
    status: 0,
  },
  {
    number: 7,
    suit: "swords",
    status: 0,
  },
  {
    number: 8,
    suit: "swords",
    status: 0,
  },
  {
    number: 9,
    suit: "swords",
    status: 0,
  },

  {
    number: 10,
    suit: "swords",
    status: 0,
  },
  {
    number: "J",
    suit: "swords",
    status: 0,
  },
  {
    number: "Q",
    suit: "swords",
    status: 0,
  },
  {
    number: "K",
    suit: "swords",
    status: 0,
  },
  {
    number: "A",
    suit: "swords",
    status: 0,
  },
  {
    number: 2,
    suit: "clovers",
    status: 0,
  },
  {
    number: 3,
    suit: "clovers",
    status: 0,
  },
  {
    number: 4,
    suit: "clovers",
    status: 0,
  },
  {
    number: 5,
    suit: "clovers",
    status: 0,
  },
  {
    number: 6,
    suit: "clovers",
    status: 0,
  },
  {
    number: 7,
    suit: "clovers",
    status: 0,
  },
  {
    number: 8,
    suit: "clovers",
    status: 0,
  },
  {
    number: 9,
    suit: "clovers",
    status: 0,
  },
  {
    number: 10,
    suit: "clovers",
    status: 0,
  },
  {
    number: "J",
    suit: "clovers",
    status: 0,
  },
  {
    number: "Q",
    suit: "clovers",
    status: 0,
  },
  {
    number: "K",
    suit: "clovers",
    status: 0,
  },
  {
    number: "A",
    suit: "clovers",
    status: 0,
  },
  {
    number: 2,
    suit: "diamonds",
    status: 0,
  },
  {
    number: 3,
    suit: "diamonds",
    status: 0,
  },
  {
    number: 4,
    suit: "diamonds",
    status: 0,
  },
  {
    number: 5,
    suit: "diamonds",
    status: 0,
  },
  {
    number: 6,
    suit: "diamonds",
    status: 0,
  },
  {
    number: 7,
    suit: "diamonds",
    status: 0,
  },
  {
    number: 8,
    suit: "diamonds",
    status: 0,
  },
  {
    number: 9,
    suit: "diamonds",
    status: 0,
  },
  {
    number: 10,
    suit: "diamonds",
    status: 0,
  },
  {
    number: "J",
    suit: "diamonds",
    status: 0,
  },
  {
    number: "Q",
    suit: "diamonds",
    status: 0,
  },
  {
    number: "K",
    suit: "diamonds",
    status: 0,
  },
  {
    number: "As",
    suit: "diamonds",
    status: 0,
  },
  {
    number: 2,
    suit: "hearts",
    status: 0,
  },
  {
    number: 3,
    suit: "hearts",
    status: 0,
  },
  {
    number: 4,
    suit: "hearts",
    status: 0,
  },
  {
    number: 5,
    suit: "hearts",
    status: 0,
  },
  {
    number: 6,
    suit: "hearts",
    status: 0,
  },
  {
    number: 7,
    suit: "hearts",
    status: 0,
  },
  {
    number: 8,
    suit: "hearts",
    status: 0,
  },
  {
    number: 9,
    suit: "hearts",
    status: 0,
  },

  {
    number: 10,
    suit: "hearts",
    status: 0,
  },
  {
    number: "J",
    suit: "hearts",
    status: 0,
  },
  {
    number: "Q",
    suit: "hearts",
    status: 0,
  },
  {
    number: "K",
    suit: "hearts",
    status: 0,
  },
  {
    number: "A",
    suit: "hearts",
    status: 0,
  },
];

//obtencion de carta aleatoria
const getRandomCard = (cards) => {
  let randomNumber = Math.floor(Math.random() * cards.length);
  let chooseRandomCards = cards[randomNumber];
  let chooseCard = [];
};
getRandomCard(cards);

//Welcome User
const askUsernameToUser = () => {
  let newUserName = prompt("Welcome to the play cards, Whats its your name");
  if (newUserName === null || newUserName === "") {
    alert("Type your username, please.");
    askUsernameToUser();
  } else {
    alert(`welcome ${newUsername} !\n Shall we start `);
  }
};
askUsernameToUser();
*/
