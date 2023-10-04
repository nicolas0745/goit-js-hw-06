const inputToValidate = document.getElementById("validation-input");

const validateInput = () => {
  const value = inputToValidate.value.trim();
  const lengthToCompare = inputToValidate.dataset.length;
  inputToValidate.className = "";
  if (value.length) {
    if (value.length >= lengthToCompare) {
      inputToValidate.classList.add("valid");
      return;
    }
    inputToValidate.classList.add("invalid");
  }
};

inputToValidate.addEventListener("blur", validateInput);
