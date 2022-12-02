import React from "react";

import Modal from "../UI/Modal";

import classes from './Cart.module.css'

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartElements.map((item) => (
        <li>
          {<img className= {classes.img} src={item.imageUrl} alt="Some pic"></img>} {item.title}
          {item.price} {item.quantity}
          <button> Remove </button>
        </li>
      ))}
    </ul>
  );
  let total = 0;
  total = total + cartElements[0].price;
  return (
    <Modal>
      <section className={classes.section}>
        <span> CART </span>
        <button onClick={props.onClose}> x </button>
      </section>
      <div className={classes.div}>
        <span> ITEM </span>
        <span> PRICE </span>
        <span> QUANTITY </span>
      </div>
      {CartItems}
      <h2 className={classes.h2}> Total ${total} </h2>

      <button className={classes.button}>PURCHASE </button>
    </Modal>
  );
};

export default Cart;