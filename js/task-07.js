const inputRange = document.getElementById("font-size-control");
const spanToSize = document.getElementById("text");

const changeSizeOfText = () => {
  const newFontSize = inputRange.value;
  spanToSize.style.fontSize = `${newFontSize}px`;
};
console.log(inputRange.value);
inputRange.addEventListener("input", changeSizeOfText);
