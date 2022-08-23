let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let currentHome = 0;
let currentGuest = 0;

function add1Home() {
  currentHome++;
  homeScore.textContent = currentHome;
}

function add2Home() {
  currentHome += 2;
  homeScore.textContent = currentHome;
}

function add3Home() {
  currentHome += 3;
  homeScore.textContent = currentHome;
}

function add1Guest() {
  currentGuest++;
  guestScore.textContent = currentGuest;
}

function add2Guest() {
  currentGuest += 2;
  guestScore.textContent = currentGuest;
}

function add3Guest() {
  currentGuest += 3;
  guestScore.textContent = currentGuest;
}

function reset() {
  currentHome = 0;
  currentGuest = 0;
  homeScore.textContent = currentHome;
  guestScore.textContent = currentGuest;
}
