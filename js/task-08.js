const formAcces = document.querySelector(".login-form");
const validateForm = (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const { email, password } = form.elements;
  if (!email.value.length || !password.value.length) {
    alert("No debe debe dejar espacios en blanco.");
    return;
  }
  const userObj = {
    email: email.value,
    password: password.value,
  };
  console.log(userObj);
  form.reset();
};
formAcces.addEventListener("submit", validateForm);
