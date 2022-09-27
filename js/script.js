let initialBudget = 1000;
let h1 = document.querySelector("h1");
h1.innerHTML = initialBudget;

let costs = [100, 200, 300, 400];
let container = document.getElementById("container");

for (let i = 0; i < costs.length; i++) {
  container.innerHTML += `<button onclick="subtract(${costs[i]})"> EUR ${costs[i]} </button>`;
}

//Non sono riuscito a smuovermi dall'impostazione iniziale fornitami
