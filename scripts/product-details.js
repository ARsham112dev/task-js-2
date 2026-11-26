import { selectedProduct } from "../scripts/modules/selected-product.js";
import { cartCount } from "../scripts/modules/selected-product.js";
// add to cart btn replace with Quantity box
function addToCartHiding() {
  productAddToCartBtn.classList.add("dis-none");
  productQuantityBox.classList.remove("dis-none");
  productQuantityBox.classList.add("dis-flex");
}
// shopping Count Increase
function cartCountIncrease() {
  cartCount++;
  myCartCartCount.textContent = cartCount;
}
// DOM
const myCartCartCount = document.getElementById("my-cart-number");
const productSection = document.getElementById("product");
const productImgs = document.getElementById("product-imgs");
const productDetails = document.getElementById("product-details");
const tabsContainer = document.querySelector("tabs");
const overviewTab = document.getElementById("overview-tab");
const reviewsTab = document.getElementById("reviews-tab");
const specificationsTab = document.getElementById("specifications-tab");
// creating Product Imgs Elements
const creatMainImgContainer = document.createElement("section");
const creatMainImg = document.createElement("img");
const creatGalleryImage = document.createElement("section");
const creatThumbnail1 = document.createElement("img");
const creatThumbnail2 = document.createElement("img");
const creatThumbnail3 = document.createElement("img");
const creatThumbnail4 = document.createElement("img");

const mainImgContainer = productImgs.appendChild(creatMainImgContainer)
mainImgContainer.className = "main-img-container"
const mainImg = mainImgContainer.appendChild(creatMainImg)
mainImg.className = "main-img"
mainImg.src = selectedProduct.image
mainImg.alt = "Main Image"
const galleryImage = productImgs.appendChild(creatGalleryImage)
galleryImage.className = "gallery-image"
const thumbnail1 = galleryImage.appendChild(creatThumbnail1)
thumbnail1.className = "thumbnail";
thumbnail1.src = selectedProduct.image
thumbnail1.alt = "thumbnail 1"
const thumbnail2 = galleryImage.appendChild(creatThumbnail2)
thumbnail2.className = "thumbnail";
thumbnail2.src = selectedProduct.img2
thumbnail2.alt = "thumbnail 2"
const thumbnail3 = galleryImage.appendChild(creatThumbnail3)
thumbnail3.className = "thumbnail";
thumbnail3.src = selectedProduct.img3
thumbnail3.alt = "thumbnail 3"
const thumbnail4 = galleryImage.appendChild(creatThumbnail4)
thumbnail4.className = "thumbnail";
thumbnail4.src = selectedProduct.img4
thumbnail4.alt = "thumbnail 4"
// creating Product Details Elements
const creatProductTitle = document.createElement("div");
const creatProductTag = document.createElement("div");
const creatProductName = document.createElement("h2");
const creatProductDescriptionContainer = document.createElement("div");
const creatProductPrice = document.createElement("p");
const creatProductDescription = document.createElement("p");
const creatProductHighlightsContainer = document.createElement("div");
const creatProductStockStatus = document.createElement("div");
const creatProductStockVale = document.createElement("p");
const creatProductStockIcon = document.createElement("img");
const creatProductShippingStatus = document.createElement("div");
const creatProductShippingVale = document.createElement("p");
const creatProductShippingIcon = document.createElement("img");
const creatProductFooter = document.createElement("div");
const creatProductAddToCartBtn = document.createElement("button");
const creatProductQuantityBox = document.createElement("div");
const creatProductQuantityIncreaseBtn = document.createElement("button");
const creatProductQuantityValue = document.createElement("p");
const creatProductQuantityDecreaseBtn = document.createElement("button");

////// Rendering the Product Details Elements \\\\\\\

// Render Product Title
const productTitle = productDetails.appendChild(creatProductTitle);
productTitle.className = "product-title";
const productTag = productTitle.appendChild(creatProductTag);
productTag.textContent = selectedProduct.topTitle;
productTag.className = "product-tag";
const productName = productTitle.appendChild(creatProductName);
productName.textContent = selectedProduct.pName;
productName.className = "product-name";
const productDescriptionContainer = productDetails.appendChild(
  creatProductDescriptionContainer,
);
// Render Description Container
productDescriptionContainer.className = "product-description-container";
const productPrice = productDescriptionContainer.appendChild(creatProductPrice);
productPrice.textContent = `$${selectedProduct.price}`;
productPrice.className = "product-price";
const productDescription = productDescriptionContainer.appendChild(
  creatProductDescription,
);
productDescription.textContent = selectedProduct.description;
productDescription.className = "product-description";
// Render Highlights Container
const productHighlightsContainer = productDescriptionContainer.appendChild(
  creatProductHighlightsContainer,
);
productHighlightsContainer.className = "product-highlights-container";
const productStockStatus = productHighlightsContainer.appendChild(
  creatProductStockStatus,
);
productStockStatus.className = "product-stock-status";
const productStockVale = productStockStatus.appendChild(creatProductStockVale);
productStockVale.textContent = selectedProduct.stockStatus;
productStockVale.className = "product-stock-vale";
const productStockIcon = productStockStatus.appendChild(creatProductStockIcon);
productStockIcon.src = "../assets/icons/check-circle-svgrepo-com.svg";
const productShippingStatus = productHighlightsContainer.appendChild(
  creatProductShippingStatus,
);
productShippingStatus.className = "product-shipping-status";
const productShippingVale = productShippingStatus.appendChild(
  creatProductShippingVale,
);
productShippingVale.textContent = selectedProduct.shippingBenefit;
productShippingVale.className = "productShippingStatus";
const productShippingIcon = productShippingStatus.appendChild(
  creatProductShippingIcon,
);
// Render Product Footer
productShippingIcon.src = "../assets/icons/shipping-truck-svgrepo-com.svg";
const productFooter = productDetails.appendChild(creatProductFooter);
productFooter.className = "product-footer";
const productAddToCartBtn = productFooter.appendChild(creatProductAddToCartBtn);
productAddToCartBtn.textContent = "+ Add to Cart";
productAddToCartBtn.className = "product-add-to-cart-btn";
productAddToCartBtn.id = selectedProduct.id;
// Render Quantity Box
const productQuantityBox = productFooter.appendChild(creatProductQuantityBox);
productQuantityBox.className = "product-quantity-box";
productQuantityBox.classList.add("dis-none");
const productQuantityIncreaseBtn = productQuantityBox.appendChild(
  creatProductQuantityIncreaseBtn,
);
productQuantityIncreaseBtn.textContent = "+";
productQuantityIncreaseBtn.className = "product-quantity-increasebtn";
productQuantityIncreaseBtn.id = selectedProduct.id;
const productQuantityValue = productQuantityBox.appendChild(
  creatProductQuantityValue,
);
productQuantityValue.textContent = selectedProduct.productCount;
const productQuantityDecreaseBtn = productQuantityBox.appendChild(
  creatProductQuantityDecreaseBtn,
);
productQuantityDecreaseBtn.textContent = "-";
productQuantityDecreaseBtn.className = "product-quantity-decreasebtn";
productQuantityDecreaseBtn.id = selectedProduct.id;

// Add to Cart Event Listener

if (selectedProduct.productCount > 0) {
  addToCartHiding();
} else {
  productAddToCartBtn.addEventListener("click", () => {
    addToCartHiding();
    cartCountIncrease();
  });
}

