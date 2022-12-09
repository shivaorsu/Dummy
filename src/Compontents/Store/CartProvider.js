import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {

  const [items, setItems] = useState([]);

    const addCartHandler = (item) => {
        setItems((prev)=>[...prev, item]);
        console.log("Adding" , item)
    }
    const removeItemHandler = (id) => {
        let itemToRemove = items.findIndex((item) => item.id === id);
        const i = [...items];
        const updatedItems = i.splice(itemToRemove, 1);
        console.log(itemToRemove, i, updatedItems);
        setItems(i);
      };
    //   const emptyCartHandler = () => {
    //     setItems([]);
    //   };
    
    //   const initializeCartHandler = (items) => {
    //     setItems(items);
    //   };
    
    //   const mapIDHandler = (id) => {
    //     items.id = id;
    //   };
  
    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem:addCartHandler,
        removeItem:removeItemHandler,
        // emptyCart: emptyCartHandler,
        // initilizeCart: initializeCartHandler,
        //    mapID: mapIDHandler


    }
    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
  
