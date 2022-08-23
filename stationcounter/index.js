//document.getElementById("count-el").innerText = 5
//-----------------------------------------------------------
// let count = 0
// console.log(count)
//-----------------------------------------------------------
// 1. Create a variable, myAge, and set its value to your age
// let myAge = 19

// 2. Log the myAge variable to the console
// console.log(myAge)
//-----------------------------------------------------------
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)
//-----------------------------------------------------------
// 1. Create two variables, myAge and humanDogRatio
//let myAge = 19
//let humanDogRatio = 7
// 2. Multiply the two together and store the result in myDogAge
//let myDogAge = myAge * humanDogRatio
// 3. Log myDogAge to the console
//console.log(myDogAge)
//-----------------------------------------------------------
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
//-----------------------------------------------------------
/* 
function callNumber() {
    console.log(42)
}

callNumber()
*/
//-----------------------------------------------------------
/*
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
function log() {
  console.log(lap1 + lap2 + lap3);
}

log();
*/
//-----------------------------------------------------------
/*
let lapsCompleted = 0
function finishLap() {
    lapsCompleted++;
}

finishLap();
finishLap();
finishLap();
console.log(lapsCompleted);
*/
//-----------------------------------------------------------
// let username = "per";
// let message = "You have three new notifications";
// console.log(message + ", " + username + "!");
//-----------------------------------------------------------
//let name = "Justin Chen";
//let greeting = "Hi, my name is ";
//let myGreeting = greeting + name;
//console.log(myGreeting);
//-----------------------------------------------------------
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count++;
  //can also use this, count += 1
  countEl.innerText = count;
}

function save() {
  let store = count + " - ";
  saveEl.innerText += " " + store;
  //can use, .textContent instead to utilize lost "spaces"
  count = 0;
  countEl.innerText = 0;
}


