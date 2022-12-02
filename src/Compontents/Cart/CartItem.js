import React from "react";

const CartItem = (props) => {
  //const cartCntx = useContext(CartContext);
  const onAddHandler = (props) => {};


return (
    <li id={`cart-item-${props.id}`}>
      <div>
        <h2>{props.title}</h2>
          <span> {props.img} </span>
          <span> {props.price}</span>
          <span >x {props.quantity}</span>
      </div>
      <div>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
)

};

export default CartItem;