const productPresentation = document.querySelector(".product-presentation");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("mit id fra URL" + id);

fetch(`https://dummyjson.com/products/category/kitchen-accessories/${id}`)
.then((res) => res.json())
.then((product) => {

productPresentation.innerHTML = `
<div>
<img class="single-view-image" src="https://cdn.dummyjson.com/product-images/kitchen-accessories/${product.id}/1.webp" alt="produktbillede" />
</div>
<div class="single-view-product-info">
<h2 class="single-view-title">${product.title}</h2>
<p class="single-view-description">${product.description}</p>
<div class="product-prices"></div>
<p class="single-view-price">${product.price}</p>
<p class="single-view-discount"></p>
</div>
<div class="basket-button-div">
<a class="basket-button" href="">TILFØJ TIL KURV</a>
</div>
<details class="details-accordian">
<summary>Detaljer</summary>
<div class="stock-div">
  <p class="availability-status">${product.availabilityStatus}</p>
</div>
<div class="rating-div">
  <h3>Rating</h3>
  <p class="rating-info">${product.rating}</p>
</div>
<div class="product-dimension-div">
  <h3>Dimensions</h3>
  <p class="product-width">${product.dimensions.width}</p>
  <p class="product-height">${product.dimensions.height}</p>
  <p class="product-depth">${product.dimensions.depth}</p>
</div>

<div class="shipping-info-div">
  <h3>Shipping information</h3>
  <p class="shipping-info">${product.shippingInformation}</p>
</div>
<div class="warranty-and-return-info-div">
  <p class="warranty-info">${product.warrantyInformation}</p>
  <p class="return-policy">${product.returnPolicy}</p>
</div>
</details>
`;

});