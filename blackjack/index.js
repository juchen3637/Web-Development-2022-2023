let player = {
  name: "Justin",
  chips: 100,
};

let cards = [];
let isAlive = false;
let hasBlackjack = false;
let sum = 0;
let playerEl = document.getElementById("player-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

playerEl.textContent = player.name + ": $" + player.chips;

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13 + 1);

  if (randomNumber == 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    messageEl.textContent = "Do you want to draw another card?";
  } else if (sum == 21) {
    hasBlackjack = true;
    messageEl.textContent = "Blackjack!";
  } else {
    isAlive = false;
    messageEl.textContent = "Bust!";
  }
}

function newCard() {
  if (isAlive == true && hasBlackjack == false) {
    let newCard = randomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}
