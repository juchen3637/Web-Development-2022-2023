/*
1 meter = 3.281 feet (multiply 3.281)
1 liter = 0.264 gallon (divide by 3.785)
1 kilogram = 2.204 pound (multiply 2.205)
1 pound = 0.454 kg (divide by 2.205)
1 gallon = 4.546 litre (multiply by 3.785)
1 ft = 0.305 meter (divide by 3.281)
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document
  .querySelector(".bottom-container-1")
  .querySelector("#length-el");
const volumeEl = document
  .querySelector(".bottom-container-2")
  .querySelector("#volume-el");
const massEl = document
  .querySelector(".bottom-container-3")
  .querySelector("#mass-el");
let result = 0;

convertBtn.addEventListener("click", function () {
  lengthEl.textContent = `${inputEl.value} meters = ${meterToFeet(
    inputEl.value
  )} feet | ${inputEl.value} feet = ${feetToMeter(inputEl.value)} meters`;
  volumeEl.textContent = `${inputEl.value} liters = ${literToGallon(
    inputEl.value
  )} gallons | ${inputEl.value} gallons = ${gallonToLiter(
    inputEl.value
  )} liters`;
  massEl.textContent = `${inputEl.value} kilos = ${kiloToPound(
    inputEl.value
  )} pounds | ${inputEl.value} pounds = ${poundToKilo(inputEl.value)} kilos`;
});

function meterToFeet(num) {
  result = num * 3.281;
  result = result.toFixed(3);
  return result;
}

function feetToMeter(num) {
  result = num / 3.281;
  result = result.toFixed(3);
  return result;
}

function literToGallon(num) {
  result = num / 3.785;
  result = result.toFixed(3);
  return result;
}

function gallonToLiter(num) {
  result = num * 3.785;
  result = result.toFixed(3);
  return result;
}

function poundToKilo(num) {
  result = num / 2.205;
  result = result.toFixed(3);
  return result;
}

function kiloToPound(num) {
  result = num * 2.205;
  result = result.toFixed(3);
  return result;
}
