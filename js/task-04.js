const plusButton = document.querySelector('button[data-action="increment"]');
const restButton = document.querySelector('button[data-action="decrement"]');
const value = document.getElementById("value");
let counterValue = parseInt(value.textContent);

const increment = () => (value.textContent = ++counterValue);

const decrement = () =>
  counterValue !== 0 ? (value.textContent = --counterValue) : counterValue;

plusButton.addEventListener("click", increment);
restButton.addEventListener("click", decrement);
