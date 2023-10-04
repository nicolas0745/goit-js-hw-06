const items = document.querySelectorAll(".item");
const objOfCategories = [];
items.forEach((e) => {
  const elements = e.querySelector("ul").childElementCount;
  objOfCategories.push({
    category: e.querySelector("h2").textContent,
    elements,
  });
});

console.log(`Number of categories: ${items.length}`);

objOfCategories.forEach((e) => {
  console.log(`
        Category: ${e.category}
        Elements: ${e.elements}
    `);
});
