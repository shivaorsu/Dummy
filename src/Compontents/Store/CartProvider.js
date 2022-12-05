// import React,{useState} from "react";
// import CartContext from "./cart-context";

import {  useState } from "react";
import CartContext from "./cart-context";



const CartProvider = (props) => {
  //const CartCtx = useContext(CartContext);
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems([...items, item]);
  };
  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;




// const CartProvider = (props) => {

//   const [items, setItems] = useState([]);

//     const addCartHandler = (item) => {
//         setItems((prev)=>[...prev, item]);
//     }
//     const cartContext = {
//         items: items,
//         totalAmount: 0,
//         onAddCart:addCartHandler,
//     }
//     return <CartContext.Provider value={cartContext} >
//         {props.children}
//     </CartContext.Provider>
// }

// export default CartProvider;
  