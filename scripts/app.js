// Products Data
import { products } from "./modules/products.js";

// Shopping Cart Variables
const shoppingCart = [];
let subTotalPrice = 0;
let productInCartRemBtn;
let addToCartBtn;
let cartCount = 0;
let productInCartDiv;
let productInCartFooter;
let allAddButtons;
let allIncreaseBtns;
let allDecreaseBtns;
let allRedirectLinks;
let isEmptyCart = true;

// DOM Elements
const cart = document.getElementById("cart");
const productsSec = document.getElementById("products");
const cartValueCount = document.getElementById("cart-value-number");
const myCartCartCount = document.getElementById("my-cart-number");
const clearAllBtn = document.querySelector(".clear-all-btn");
const emptyState = document.querySelector(".empty-state");
const subTotal = document.querySelector(".sub-total");
const wholeCartPrice = document.querySelector(".sub-total-price");

// Product Quantity Management
function productCountIncrease(event) {
  const productId = event.target.id;
  const selectedProduct = products.find((p) => p.id === productId);
  selectedProduct.productCount++;
  document.getElementById(`${productId}-count`).textContent =
    selectedProduct.productCount;
}
function getEventId(event) {
  return event.target.id;
}

// Cart Item Management
function addToShoppingCart(id) {
  const item = products.find((P) => P.id === id);
  shoppingCart.push(item);
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  if (isEmptyCart) {
    clearAllBtn.classList.add("dis-block");
    emptyState.classList.remove("dis-flex");
    emptyState.classList.add("dis-none");
    cart.classList.remove("dir-row");
    isEmptyCart = false;
  }
}

// Cart Price Management
function cartPriceIncreas(event) {
  const productId = event.target.id;
  const selectedProduct = products.find((p) => p.id === productId);
  subTotalPrice += selectedProduct.price;
  subTotal.classList.add("dis-flex");
  wholeCartPrice.textContent = `$${subTotalPrice}`;
}

// Cart Counter Management
function shoppingCountIncrease() {
  cartCount++;
  localStorage.setItem("cartCount", cartCount)
  cart.classList.add("dir-column");
  cartValueCount.textContent = cartCount;
  myCartCartCount.textContent = cartCount;
}

// Cart Item Rendering
function productNaming(event) {
  const creatProductInCartName = document.createElement("p");
  const productInCartName = productInCartDiv.appendChild(
    creatProductInCartName,
  );
  const productId = event.target.id;
  const selectedProduct = products.find((p) => p.id === productId);
  productInCartName.textContent = selectedProduct.pName;
  productInCartName.className = "product-in-cart-name";
}
function renderCartItemFooter() {
  const creatProductInCartfooter = document.createElement("div");
  productInCartFooter = productInCartDiv.appendChild(creatProductInCartfooter);
  productInCartFooter.className = "creat-product-in-cart-price-rem-div";
}
function renderCartItemBox(event) {
  const creatProductInCartDiv = document.createElement("div");
  productInCartDiv = cart.appendChild(creatProductInCartDiv);
  productInCartDiv.className = "product-in-cart";
  const productId = event.target.id;
  const selectedProduct = products.find((p) => p.id == productId);
  productInCartDiv.id = selectedProduct.id;
  return productInCartDiv;
}
function renderCartItemPrice(event) {
  const creatProductInCartPrice = document.createElement("p");
  const productInCartPrice = productInCartFooter.appendChild(
    creatProductInCartPrice,
  );
  const productId = event.target.id;
  const selectedProduct = products.find((p) => p.id === productId);
  productInCartPrice.textContent = `$${selectedProduct.price}`;
  productInCartPrice.className = "creat-product-in-cart-price";
}
function renderCartItemRem(event) {
  const creatProductInCartRemBtn = document.createElement("button");
  productInCartRemBtn = productInCartFooter.appendChild(
    creatProductInCartRemBtn,
  );
  const productId = event.target.id;
  const selectedProduct = products.find((p) => p.id === productId);
  productInCartRemBtn.textContent = "Remove";
  productInCartRemBtn.id = selectedProduct.id;
  productInCartRemBtn.className = "product-in-cart-btn";
}
function renderCartItemCount(event) {
  const creatCartItemCount = document.createElement("p");
  const cartItemCount = productInCartFooter.appendChild(creatCartItemCount);
  const productId = event.target.id;
  const selectedProduct = shoppingCart.find((p) => p.id === productId);
  cartItemCount.textContent = selectedProduct.productCount;
  cartItemCount.id = `${productId}-cart-count`;
}

// Cart Counter Decrease
function shoppingCountDecrease() {
  cartCount--;
  localStorage.setItem("cartCount", cartCount)
  myCartCartCount.textContent = cartCount;
  cartValueCount.textContent = cartCount;
}

// Cart Price Decrease
function cartPriceIDecrease(event) {
  const productId = event.target.id;
  const selectedProduct = shoppingCart.find((p) => p.id === productId);
  subTotalPrice -= selectedProduct.price * selectedProduct.productCount;
  const index = shoppingCart.findIndex((p) => p.id === productId);
  shoppingCart.splice(index, 1);
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  wholeCartPrice.textContent = `$${subTotalPrice}`;
}

// Remove Cart Item
function cartItemRem(event) {
  const productId = event.target.id;
  const selectedProduct = products.find((p) => p.id === productId);
  selectedProduct.productCount = 0;
  const productInCartDiv = document.querySelector(
    `.product-in-cart[id="${productId}"]`,
  );
  const addButton = document.querySelector(
    `.add-to-cart-btn[id="${productId}"]`,
  );
  const productCard = addButton.closest(".product");
  const quantityBox = productCard.querySelector(".quantity-box");
  quantityBox.classList.remove("dis-flex");
  quantityBox.classList.add("dis-none");
  const button = document.querySelector(`.add-to-cart-btn[id=${productId}]`);
  button.classList.remove("dis-none");
  productInCartDiv.remove();
}

// Empty Cart State
function emptyByRemBtn() {
  isEmptyCart = true;
  clearAllBtn.classList.remove("dis-block");
  clearAllBtn.classList.add("dis-none");
  cart.classList.remove("dir-column");
  cart.classList.add("dir-row");
  emptyState.classList.remove("dis-none");
  emptyState.classList.add("dis-flex");
  subTotal.classList.remove("dis-flex");
  subTotal.classList.add("dis-none");
  wholeCartPrice.textContent = "$0";
}

// Clear All Cart Items
function emptyCartByClearBtn() {
  allAddButtons.forEach((button) => {
    button.classList.remove("dis-none");
    const productCard = button.closest(".product");
    productCard.querySelector(".quantity-box").classList.remove("dis-flex");
    productCard.querySelector(".quantity-box").classList.add("dis-none");
    const selectedProduct = products.find((p) => p.id === button.id);
    selectedProduct.productCount = 0;
  });
  document.querySelectorAll(".product-in-cart").forEach((item) => {
    item.remove();
  });
  shoppingCart.length = 0;
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

  subTotalPrice = 0;
  cartCount = 0;
  localStorage.setItem("cartCount", cartCount)
  isEmptyCart = true;
  clearAllBtn.classList.remove("dis-block");
  clearAllBtn.classList.add("dis-none");
  cart.classList.remove("dir-column");
  cart.classList.add("dir-row");
  emptyState.classList.remove("dis-none");
  emptyState.classList.add("dis-flex");
  subTotal.classList.remove("dis-flex");
  subTotal.classList.add("dis-none");
  myCartCartCount.textContent = "0";
  cartValueCount.textContent = "0";
  wholeCartPrice.textContent = "$0";
}
function increaseButton(event) {
  const productId = event.target.id;
  const selectedProduct = products.find((p) => p.id === productId);
  selectedProduct.productCount++;
  document.getElementById(`${productId}-count`).textContent =
    selectedProduct.productCount;
  document.getElementById(`${productId}-cart-count`).textContent =
    selectedProduct.productCount;
  subTotalPrice += selectedProduct.price;
  wholeCartPrice.textContent = `$${subTotalPrice}`;
}
function decreaseButton(event) {
  const productId = event.target.id;
  const selectedProduct = products.find((p) => p.id === productId);
  if (selectedProduct.productCount > 0) {
    selectedProduct.productCount--;
    document.getElementById(`${productId}-count`).textContent =
      selectedProduct.productCount;
    document.getElementById(`${productId}-cart-count`).textContent =
      selectedProduct.productCount;
    subTotalPrice -= selectedProduct.price;
    wholeCartPrice.textContent = `$${subTotalPrice}`;
  }
}
function productCountZero(button, event) {
  const productId = event.target.id;
  const selectedProduct = products.find((p) => p.id === productId);
  if (selectedProduct.productCount === 0) {
    isEmptyCart = true;
    shoppingCountDecrease();
    const productCard = button.closest(".product");
    productCard.querySelector(".quantity-box").classList.remove("dis-flex");
    productCard.querySelector(".quantity-box").classList.add("dis-none");
    productCard.querySelector(".add-to-cart-btn").classList.remove("dis-none");

    document.querySelector(`.product-in-cart[id="${productId}"]`).remove();
    const index = shoppingCart.findIndex((p) => p.id === productId);
    shoppingCart.splice(index, 1);
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }
}

// Render Product Cards
products.map((product) => {
  const creatImg = document.createElement("img");
  const creatProductSection = document.createElement("section");
  const creatProductDetailesLink = document.createElement("a");
  const creatProductCardName = document.createElement("h3");
  const creattopTitle = document.createElement("p");
  const creatSubTitle = document.createElement("p");
  const creatPrice = document.createElement("p");
  const creatProductFooter = document.createElement("div");
  const creatAddToBtn = document.createElement("button");
  const creatQuantityBox = document.createElement("div");
  const creatQuantityIncrease = document.createElement("button");
  const creatQuantityBoxValue = document.createElement("p");
  const creatQuantityDecrease = document.createElement("button");
  const productSection = productsSec.appendChild(creatProductSection);
  productSection.className = "product";
  const productDetailesLink = productSection.appendChild(
    creatProductDetailesLink,
  );
  productDetailesLink.id = product.id;
  productDetailesLink.className = "product-detailes-link";
  productDetailesLink.href = "./pages/product-details.html";
  const img = productDetailesLink.appendChild(creatImg);
  img.src = product.image;
  img.className = "product-img";
  const topTitle = productDetailesLink.appendChild(creattopTitle);
  topTitle.textContent = product.topTitle;
  topTitle.className = "product-topTitle";
  const productCardName = productDetailesLink.appendChild(creatProductCardName);
  productCardName.textContent = product.pName;
  const subTitle = productDetailesLink.appendChild(creatSubTitle);
  subTitle.textContent = product.subTitle;
  subTitle.className = "product-subTitle";
  const productFooter = productSection.appendChild(creatProductFooter);
  productFooter.className = "product-footer";
  const price = productFooter.appendChild(creatPrice);
  price.textContent = `$${product.price}`;
  price.className = "product-price";
  addToCartBtn = productFooter.appendChild(creatAddToBtn);
  addToCartBtn.textContent = "+ Add to cart";
  addToCartBtn.className = "add-to-cart-btn";
  addToCartBtn.id = product.id;
  const quantityBox = productFooter.appendChild(creatQuantityBox);
  quantityBox.className = "quantity-box";
  quantityBox.classList.add("dis-none");
  const quantityIncrease = quantityBox.appendChild(creatQuantityIncrease);
  quantityIncrease.className = "quantity-increase";
  quantityIncrease.id = product.id;
  quantityIncrease.textContent = "+";
  const quantityBoxValue = quantityBox.appendChild(creatQuantityBoxValue);
  quantityBoxValue.textContent = product.productCount;
  quantityBoxValue.id = `${product.id}-count`;
  const quantityDecrease = quantityBox.appendChild(creatQuantityDecrease);
  quantityDecrease.id = product.id;
  quantityDecrease.className = "quantity-decrease";
  quantityDecrease.textContent = "-";
});
allRedirectLinks = document.querySelectorAll(".product-detailes-link")
allRedirectLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // adding selected product to local storage
    const productId = link.id;
    const selectedProduct = products.find((product) => product.id === productId)
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct))
    
    // set the URL search params
    const url = new URL(link.href)
    url.searchParams.append("product", selectedProduct.id);
    url.searchParams.append("name", selectedProduct.pName)
    link.href = url.href
  })
})
// Add to Cart Event Listener
allAddButtons = document.querySelectorAll(".add-to-cart-btn");
allAddButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    button.classList.add("dis-none");
    const productCard = button.closest(".product");
    const quantityBox = productCard.querySelector(".quantity-box");
    quantityBox.classList.remove("dis-none");
    quantityBox.classList.add("dis-flex");
    shoppingCountIncrease();
    const id = getEventId(event);
    addToShoppingCart(id);
    productCountIncrease(event);
    renderCartItemBox(event);
    productNaming(event);
    renderCartItemFooter();
    renderCartItemPrice(event);
    renderCartItemRem(event);
    renderCartItemCount(event);
    cartPriceIncreas(event);
  });
});

// Increase Quantity Event Listener
allIncreaseBtns = document.querySelectorAll(".quantity-increase");
allDecreaseBtns = document.querySelectorAll(".quantity-decrease");
allIncreaseBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    increaseButton(event);
  });
});

// Decrease Quantity Event Listener
allDecreaseBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    decreaseButton(event);
    productCountZero(button, event);
    if (shoppingCart.length === 0) {
      emptyByRemBtn();
    }
  });
});

// Remove Item Event Listener
cart.addEventListener("click", (event) => {
  if (event.target.classList.contains("product-in-cart-btn")) {
    shoppingCountDecrease();
    cartPriceIDecrease(event);
    cartItemRem(event);
    if (cartCount === 0) {
      emptyByRemBtn();
    }
  }
});

// Clear All Event Listener
clearAllBtn.addEventListener("click", () => {
  emptyCartByClearBtn();
});
