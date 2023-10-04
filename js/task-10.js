function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.getElementById("controls");
const buttonCreate = controls.querySelector("button[data-create]");
const buttonDestroy = controls.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");
const createBoxes = () => {
  const numberOfBoxes = controls.querySelector("input").value;
  // boxes.innerHTML = "";
  if (numberOfBoxes) {
    let size = 30;
    for (let i = 1; i <= numberOfBoxes; i++) {
      const newDiv = document.createElement("div");
      newDiv.style.width = `${size}px`;
      newDiv.style.height = `${size}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      boxes.append(newDiv);
      size += 10;
    }
  }
};
buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", () => (boxes.innerHTML = ""));
