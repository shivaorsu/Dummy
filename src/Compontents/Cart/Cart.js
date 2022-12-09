import React, { useContext } from "react";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context";
import CartItems from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let totalAmount = 0;
  cartCtx?.items?.forEach((item) => {
    totalAmount = totalAmount + item.price;
  });
  console.log(cartCtx.item);
  
  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
        <span> CART </span>
        <button onClick={props.onClose} className={classes.cancel}>
          x
        </button>
      </section>
      <div className={classes.div}>
        <span className={classes.item}> ITEM </span>
        <span className={classes.item}> PRICE </span>
        <span className={classes.item}> QUANTITY </span>
      </div>
      {cartCtx.items.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          img={item.image}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
      <h2 className={classes.h2}> Total ${totalAmount} </h2>

      <button className={classes.button}>PURCHASE </button>
    </Modal>
  );
};

export default Cart;
