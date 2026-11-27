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
    tabContent:
      "Enjoy your favorite music with clear, balanced sound and deep bass. These wireless headphones offer a comfortable fit for long listening sessions. Their wireless design gives you more freedom while working, studying, or relaxing. A great choice for everyday use and entertainment.",
    specifications:
      "Type: Wireless Headphones | Connectivity: Bluetooth | Design: Over-Ear | Sound: Stereo Sound | Microphone: Built-in | Usage: Music, Calls & Gaming",
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
    tabContent:
      "Step into comfort and style with these versatile everyday sneakers. Designed for daily activities, they provide a comfortable feel and a modern look. Their lightweight design makes them suitable for walking, casual outings, and everyday wear. Easily match them with your favorite outfits.",
    specifications:
      "Type: Casual Sneakers | Material: Synthetic Leather | Sole: Rubber | Closure: Lace-Up | Design: Modern & Casual | Usage: Daily Wear & Walking",
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
    tabContent:
      "Add a touch of elegance to your everyday style with this classic wristwatch. Its timeless design makes it suitable for both casual and formal occasions. The easy-to-read display helps you keep track of time throughout the day. A stylish accessory for any wardrobe.",
    specifications:
      "Type: Analog Watch | Display: Analog | Movement: Quartz | Strap Material: Stainless Steel | Case Shape: Round | Style: Classic",
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
    tabContent:
      "Carry your daily essentials with ease using this practical urban backpack. Its spacious interior provides room for your everyday belongings, making it ideal for school, work, or travel. The comfortable design makes it convenient for daily use. A perfect combination of functionality and modern style.",
    specifications:
      "Type: Everyday Backpack | Material: Polyester | Closure: Zipper | Compartments: Multiple Pockets | Carrying Style: Shoulder Straps | Usage: School, Work & Travel",
  },
];
