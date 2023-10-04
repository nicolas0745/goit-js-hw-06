const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const updateOutput = () => {
  const inputValue = nameInput.value.trim();
  inputValue !== ""
    ? (nameOutput.innerHTML = inputValue)
    : (nameOutput.innerHTML = "Anonymous");
};

nameInput.addEventListener("input", updateOutput);
