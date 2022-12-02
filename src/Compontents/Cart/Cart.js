import React,{useContext} from "react";

import Modal from "../UI/Modal";

import classes from './Cart.module.css';
import CartContext from "../Store/cart-context";

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
  const cartCtx=useContext(CartContext);
  let totalAmount = 0;
   cartCtx?.items?.forEach((items) => {
    totalAmount = totalAmount + items.price;
  });

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx?.items?.map((item) => (
        <li>
          <CartItems key={item.id} id= {item.id} img={item.img} title={item.title} quantity={item.quantity} price={item.price} />
        </li>
      ))}
    </ul>
  );
  // let total = 0;
  // total = total + cartElements[0].price;
  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
      <h2 className={classes.cart}> CART </h2>
        <button classname={classes.cancel} onClick={props.onClose}> x </button>
      </section>
      <div className={classes.div}>
        <span> ITEM </span>
        <span> PRICE </span>
        <span> QUANTITY </span>
      </div>
      {CartItems}
      <h2 className={classes.h2}> Total ${totalAmount} </h2>

      <button className={classes.button}>PURCHASE </button>
    </Modal>
  );
};

export default Cart;