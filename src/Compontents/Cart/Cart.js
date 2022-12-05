import React, { useContext } from "react";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let totalAmount = 0;
  cartCtx?.items?.forEach((item) => {
    totalAmount = totalAmount + item.price;
  });

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li className={classes.coloumn}>
          <CartItems
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );

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
      {CartItems}
      <h2 className={classes.h2}> Total ${totalAmount} </h2>

      <button className={classes.button}>PURCHASE </button>
    </Modal>
  );
};

export default Cart;