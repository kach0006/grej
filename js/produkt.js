const productPresentation = document.querySelector(".product-presentation");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const current = document.querySelector("#current");

console.log("mit id fra URL" + id);

fetch(`https://dummyjson.com/products/${id}`)
.then((res) => res.json())
.then((data) => showProduct(data));


  function showProduct(product) {
    current.textContent = product.title;

  
productPresentation.innerHTML = `
<div class="single-view-image">
<img src="${product.images[0]}" alt="produktbillede" />
</div>
<div class="single-view-product-info">
<h2 class="single-view-title">${product.title}</h2>
<p class="single-view-description">${product.description}</p>

<div class="product-prices">
<p class="single-view-price ${product.discountPercentage && "scratch-price"}>${product.price} KR</p>
<div class="no-discount ${product.discountPercentage && "single-view-discount"}">
<p class="single-view-discount-price">${Math.round(product.price - product.price * product.discountPercentage / 100)} KR</p>
</div>

<div class="basket-button-div">
<a class="basket-button" href="">TILFØJ TIL KURV</a>
</div>
<details class="details-accordian">
<summary>Detaljer
<div class="details-accordion-arrow"></div>
</summary>
<div class="stock-div">
  <p class="availability-status">${product.availabilityStatus}</p>
</div>
<div class="rating-div">
  <h3>Rating</h3>
  <p class="rating-info">${product.rating}</p>
</div>
<div class="product-dimension-div">
  <h3>Dimensions</h3>
  <p class="dimensions-title">Width:</p>
  <p class="product-width">${product.dimensions.width} cm</p>
  <p class="dimensions-title">Height:</p>
  <p class="product-height">${product.dimensions.height} cm</p>
  <p class="dimensions-title">Depth:</p>
  <p class="product-depth">${product.dimensions.depth} cm</p>
</div>

<div class="shipping-info-div">
  <h3>Shipping information</h3>
  <p class="shipping-info">${product.shippingInformation}</p>
</div>
<div class="warranty-and-return-info-div">
<h3>Warranty and return policy</h3>
  <p class="warranty-info">${product.warrantyInformation}</p>
  <p class="return-policy">${product.returnPolicy}</p>
</div>
</details>
</div>
`;
  }
;