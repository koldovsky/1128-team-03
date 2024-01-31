let employeeCounter = 208;
function displayAndChangeCounter() {
  const randomChance = Math.random();
  if (randomChance <= 0.25) {
    employeeCounter--;
  } else if (randomChance > 0.25 && randomChance <= 0.75) {
    employeeCounter++;
  } else {
  }
  document.getElementById('employeeCounterDisplay').textContent = `Лічильник співробітників: ${employeeCounter}`;
  setTimeout(displayAndChangeCounter, 3500);
}
displayAndChangeCounter();