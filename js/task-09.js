function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector(".color");
const buttonChange = document.querySelector(".change-color");
const changeColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
};

buttonChange.addEventListener("click", changeColor);
