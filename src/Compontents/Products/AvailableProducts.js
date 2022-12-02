import React from "react";
import Product from "./Product";



const AvailableProducts = (props) => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  console.log(productsArr);
  return (
    <section>
      <ul>{productsArr.map((prod) => {
    console.log(prod);
    return (
      <Product title={prod.title} price={prod.price} image={prod.imageUrl} />
    );
  })}</ul>
    </section>
  );
};

export default AvailableProducts;