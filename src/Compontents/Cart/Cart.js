import React, { useContext } from "react";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let totalAmount = 0;
  cartCtx?.items?.forEach((items) => {
    totalAmount = totalAmount + items.price;
  });

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx?.items?.map((item) => (
        <li>
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
    <Modal>
      <section className={classes.section}>
        <h2 className={classes.cart}> CART </h2>
        <button className={classes.cancel}onClick={props.onClose}> x </button>
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
