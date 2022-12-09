import { Fragment, useContext } from "react";
import CartContext from "../Store/cart-context";
import classes from "./CartItem.module.css";

const CartItems = (props) => {
  const cartCntx = useContext(CartContext);
  const onAddHandler = (props) => {
    console.log(props);
    cartCntx.addItem(props);
  };

  return (
    <li id={`cart-item-${props.id}`}>
      <Fragment>
        <h2 className={classes.title}>{props.title}</h2>
        <img src={props.img} alt="Icon" className={classes.img}></img>
        <span className={classes.price}> ${props.price}</span>
        <button onClick={onAddHandler} className={classes.button}>
          +
        </button>
      </Fragment>
    </li>
  );
};
export default CartItems;
