const products = [
  {
    id: "brasb",
    name: "Wireless Headphone",
    image: "./assets/imgs/headPhone-img.jpg",
    price: 50,
    upTitle: "AUDIO",
    subTitle: "Rich Sound, all-day comfort",
  },
  {
    id: "zkjyv",
    name: "Everyday Sneakers",
    image: "./assets/imgs/mens-air-jordan-shoes.jpeg",
    price: 80,
    upTitle: "FOOT WEAR",
    subTitle: "Fresh steps, effortless style",
  },
  {
    id: "czcqw",
    name: "Clasic Wriswatch",
    image: "./assets/imgs/watch-img.jpg",
    price: 120,
    upTitle: "ACCSESORIES",
    subTitle: "Timeless Looks For Everyday",
  },
  {
    id: "qobuz",
    name: "Urban Backpack",
    image: "./assets/imgs/bag-img.webp",
    price: 35,
    upTitle: "LIFESTYLE",
    subTitle: "Made For Wherever You Go",
  },
];
let SubTotalPrice = [];
let productInCartBtn;
let addToCartBtn;
let cartCount = 0;
const cart = document.getElementById("cart");
const productsSec = document.getElementById("products");
const cartValueNumber = document.getElementById("cart-value-number");
const myCartNumber = document.getElementById("my-cart-number");
const clearAllBtn = document.getElementById("clear-all-btn");
const emptyState = document.getElementById("empty-state");
const subTotal = document.getElementById("sub-total");
const SubTotalPriceP = document.getElementById("sub-total-price");

const result = products.map((product) => {
  const creatImg = document.createElement("img");
  const creatProductSec = document.createElement("section");
  const creatH3 = document.createElement("h3");
  const creatP = document.createElement("p");
  const creatFirstP = document.createElement("p");
  const creatSecP = document.createElement("p");
  const creatPriceP = document.createElement("p");
  const creatDiv = document.createElement("div");
  const creatBtn = document.createElement("button");
  const productSec = productsSec.appendChild(creatProductSec);
  productSec.className = "product";
  const img = productSec.appendChild(creatImg);
  img.src = product.image;
  img.className = "product-img";
  const firstP = productSec.appendChild(creatFirstP);
  firstP.textContent = product.upTitle;
  firstP.className = "product-upTitle";
  const h3 = productSec.appendChild(creatH3);
  h3.textContent = product.name;
  const secP = productSec.appendChild(creatSecP);
  secP.textContent = product.subTitle;
  secP.className = "product-subTitle";
  const priceDiv = productSec.appendChild(creatDiv);
  priceDiv.className = "product-priceDiv";
  const priceP = priceDiv.appendChild(creatPriceP);
  priceP.textContent = `$${product.price}`;
  priceP.className = "product-priceP";
  addToCartBtn = priceDiv.appendChild(creatBtn);
  addToCartBtn.textContent = "+ Add to cart";
  addToCartBtn.id = product.id;
  addToCartBtn.addEventListener("click", () => {
    if (SubTotalPrice.includes(product.id)) return;
    clearAllBtn.style.display = "block"
    emptyState.style.display = "none";
    const creatProductInCartDiv = document.createElement("div");
    const creatProductInCartNameP = document.createElement("p");
    const creatProductInCartPrice = document.createElement("p");
    const creatProductInCartPriceRemDiv = document.createElement("div");
    const creatProductInCartBtn = document.createElement("button");
    const productInCartDiv = cart.appendChild(creatProductInCartDiv);
    productInCartDiv.className = "product-in-cart";
    if (cartCount < products.length) {
      cartCount++;
      cart.style.flexDirection = "column";
      cartValueNumber.textContent = cartCount;
      const productInCartName = productInCartDiv.appendChild(
        creatProductInCartNameP,
      );
      productInCartName.textContent = product.name;
      productInCartName.className = "product-in-cart-name";
      const productInCartPriceRemDiv = productInCartDiv.appendChild(
        creatProductInCartPriceRemDiv,
      );
      productInCartPriceRemDiv.className =
        "creat-product-in-cart-price-rem-div";
      const productInCartPrice = productInCartPriceRemDiv.appendChild(
        creatProductInCartPrice,
      );
      productInCartPrice.textContent = `$${product.price}`;
      productInCartPrice.className = "creat-product-in-cart-price";
      const productInCartBtn = productInCartPriceRemDiv.appendChild(
        creatProductInCartBtn,
      );
      productInCartBtn.textContent = "Remove";
      productInCartBtn.className = "product-in-cart-btn";
      myCartNumber.textContent = cartCount;
      subTotal.style.display = "flex";
      SubTotalPrice.push(product.id);
      const sumSubtotalPrices = SubTotalPrice.reduce((sum, id) => {
        return sum + products.find((p) => p.id === id).price;
      }, 0);
      SubTotalPriceP.textContent = `$${sumSubtotalPrices}`;
      SubTotalPriceP.textContent = `$${sumSubtotalPrices}`;

      productInCartBtn.addEventListener("click", () => {
        SubTotalPrice = SubTotalPrice.filter((id) => id !== product.id);

        const total = SubTotalPrice.reduce((sum, id) => {
          return sum + products.find((p) => p.id === id).price;
        }, 0);
        SubTotalPriceP.textContent = `$${total}`;
        productInCartDiv.remove();
        cartCount--;
        myCartNumber.textContent = cartCount;
        cartValueNumber.textContent = cartCount;

        if (cartCount === 0) {
          clearAllBtn.style.display = "none"
          cart.style.flexDirection = "row";
          emptyState.style.display = "flex";
          subTotal.style.display = "none";
        }
      });
    }
  });
});

clearAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".product-in-cart").forEach((item) => {
    item.remove();
  });
  SubTotalPrice.splice(0, SubTotalPrice.length);
  cartCount = 0;
            clearAllBtn.style.display = "none"
  SubTotalPriceP.textContent = "$0";
  emptyState.style.display = "flex";
  myCartNumber.textContent = cartCount;
  cartValueNumber.textContent = cartCount;
  cart.style.flexDirection = "row";
  subTotal.style.display = "none";
  n = 1;
  n2 = 1;
});
