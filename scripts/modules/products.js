const imagePath = "../../assets/imgs/";

export const products = [
  {
    id: "brasb",
    pName: "Wireless Headphone",
    image: new URL(`${imagePath}headPhone-img.jpg`, import.meta.url).href,
    price: 50,
    topTitle: "AUDIO",
    subTitle: "Rich Sound, all-day comfort",
    description:
      "Enjoy crystal-clear sound with rich bass and immersive audio. Designed for all-day comfort and a seamless listening experience.",
    productCount: 0,
    stockStatus: "in Stock",
    shippingBenefit: "Free shipping on orders over $50",
    img2: new URL(`${imagePath}headphone-2.jpg`, import.meta.url).href,
    img3: new URL(`${imagePath}headphone-3.jpg`, import.meta.url).href,
    img4: new URL(`${imagePath}headphone-4.jpg`, import.meta.url).href,
  },
  {
    id: "zkjyv",
    pName: "Everyday Sneakers",
    image: new URL(`${imagePath}mens-air-jordan-shoes.jpeg`, import.meta.url)
      .href,
    price: 80,
    topTitle: "FOOT WEAR",
    subTitle: "Fresh steps, effortless style",
    description:
      "Step into comfort and style with every stride. Perfect for everyday wear, combining durability with a modern design.",
    productCount: 0,
    stockStatus: "in Stock",
    shippingBenefit: "Free shipping on orders over $50",
    img2: new URL(`${imagePath}shoes-2.jpg`, import.meta.url).href,
    img3: new URL(`${imagePath}shoes-3.jpg`, import.meta.url).href,
    img4: new URL(`${imagePath}shoes-4.jpg`, import.meta.url).href,
  },
  {
    id: "czcqw",
    pName: "Classic Wristwatch",
    image: new URL(`${imagePath}watch-img.jpg`, import.meta.url).href,
    price: 120,
    topTitle: "ACCESSORIES",
    subTitle: "Timeless Looks For Everyday",
    description:
      "A perfect blend of elegance and functionality. Keep track of time while adding a stylish touch to your everyday look.",
    productCount: 0,
    stockStatus: "in Stock",
    shippingBenefit: "Free shipping on orders over $50",
    img2: new URL(`${imagePath}watch-2.jpg`, import.meta.url).href,
    img3: new URL(`${imagePath}watch-3.jpg`, import.meta.url).href,
    img4: new URL(`${imagePath}watch-4.jpg`, import.meta.url).href,
  },
  {
    id: "qobuz",
    pName: "Urban Backpack",
    image: new URL(`${imagePath}bag-img.webp`, import.meta.url).href,
    price: 35,
    topTitle: "LIFESTYLE",
    subTitle: "Made For Wherever You Go",
    description:
      "Carry your essentials with ease and confidence. Featuring a spacious design and practical compartments for everyday use.",
    productCount: 0,
    stockStatus: "in Stock",
    shippingBenefit: "Free shipping on orders over $50",
    img2: new URL(`${imagePath}bag-2.jpg`, import.meta.url).href,
    img3: new URL(`${imagePath}bag-3.jpg`, import.meta.url).href,
    img4: new URL(`${imagePath}bag-4.jpg`, import.meta.url).href,
  },
];
