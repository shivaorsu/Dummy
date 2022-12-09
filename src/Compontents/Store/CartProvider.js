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
        // axios.delete(
        //   `https://crudcrud.com/api/21eb06cae255450f902224de607507c5/cart${email}/${id}`
        // );
      };

    // }
    // const removeItemHandler = (id) => {
    //   let itemToRemove = items.findIndex((item) => item.id === id);
    //   const i = [...items];
    //   const updatedItems = i.splice(itemToRemove, 1);
    //   console.log(itemToRemove, i, updatedItems);
  
    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem:addCartHandler,
        removeItem:removeItemHandler


    }
    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
  