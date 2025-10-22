const productCards = document.querySelector(".product-cards");

const products = document.querySelectorAll(".product");

fetch("https://dummyjson.com/products/category/kitchen-accessories?limit=0")
  .then((res) => res.json())
  .then((data) => {
    allData = currentData = data.products;
    showProducts(allData);
  });

function showProducts(product) {
  productCards.innerHTML = "";
  product.forEach((element) => {
    productCards.innerHTML += `
     <a href="produkt.html?id=${element.id}"><article class="product-card" data-category="kitchen-accessories">
     <div class="product-card-tag">Tag</div>
           <div class="image-container"><img src="${element.thumbnail}" alt="Billede af ${
      element.title
    }" /></div>
           <div class="product-title-price">
           <h3>${element.title}</h3>
           <div class="product-card-price">${Math.ceil(element.price)} KR</div>
           </div>
         </article>
         </a>`;
  });
}

const mainCategories = document.querySelectorAll(".main-categories");

mainCategories.forEach((category) => {
  category.addEventListener("click", showFiltered);
});

function showFiltered(event) {
  const mainCategory = event.target.closest(".main-category");
  if (!mainCategory) return; // Afslut funktionen hvis klikket ikke tilhører en main-category class.
  const subCategory = mainCategory.dataset.subcategory;
  console.log(mainCategory.dataset.subcategory);
  currentData = allData.filter((product) => product.tags.includes(subCategory)); // Filtrer til produkter, hvor arrayet tags indeholder den subcategory, som er defineret under data i HTML'en.
  showProducts(currentData);
}

// sorting buttons
document.querySelector(".sorting").addEventListener("click", showSorted);

function showSorted(event) {
  const direction = event.target.dataset.direction;
  if (direction=="low-high"){
    currentData.sort((a, b) => a.price - b.price);
  } else {
    currentData.sort((a, b) => b.price - a.price);
  }
  showProducts(currentData);
}

let allData, currentData;