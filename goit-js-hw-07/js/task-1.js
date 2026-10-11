const categorie = document.querySelectorAll(".item");
console.log("Number og categories: ", categorie.length);
categorie.forEach(item => {
  const titleElement = item.querySelector('h2');
  const title = titleElement.textContent;
  const subItems = item.querySelectorAll('ul li');
  const subItemsCount = subItems.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${subItemsCount}`);
});