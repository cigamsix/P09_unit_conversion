/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputNumber = document.querySelector("#point");
inputNumber.addEventListener("change", convertUnit);

let convertBtn = document.querySelector("#convert");
convertBtn.addEventListener("click", convertUnit);

let lengthPara = document.querySelector("#length-para");
let volumePara = document.querySelector("#volume-para");
let massPara = document.querySelector("#mass-para");

//20 meters = 65.616 feet | 20 feet = 6.096 meters

function convertUnit() {
  let point = inputNumber.value;

  lengthPara.textContent = `${point} meters = ${(point * 3.281).toFixed(
    3
  )} feet | ${point} feet = ${(point / 3.281).toFixed(3)} meters`;

  volumePara.textContent = `${point} liters = ${(point * 0.264).toFixed(
    3
  )} gallons | ${point} gallons = ${(point / 0.264).toFixed(3)} liters`;

  massPara.textContent = `${point} kilos = ${(point * 2.204).toFixed(
    3
  )} pounds | ${point} pounds = ${(point / 2.204).toFixed(3)} kilos`;
}
