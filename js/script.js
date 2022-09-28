let initialBudget = 1000;
let displayBudget = document.querySelector("h1");
//let remainingBudget = initialBudget;
displayBudget.innerHTML = initialBudget;

let costs = [100, 200, 300, 400];
let container = document.getElementById("container");

for (let i = 0; i < costs.length; i++) {
  container.innerHTML += `<button onclick="subtract(${initialBudget}, ${costs[i]})"> EUR ${costs[i]} </button>`;
}

function subtract(Number1, Number2) {
  let remainingBudget = (Number1 -= Number2);
  displayBudget.innerHTML = remainingBudget;
}
