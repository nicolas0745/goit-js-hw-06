const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulIngredients = document.getElementById("ingredients");
ingredients.forEach((e) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.innerHTML = e;
  ulIngredients.append(li);
});
