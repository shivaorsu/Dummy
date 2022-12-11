import React,{useContext,useEffect} from "react";
import Product from "./Product";
import axios from "axios";
import CartContext from "../Store/cart-context";
import classes from './AvailableProducts.module.css';



const AvailableProducts = () => {
  const cartCtx = useContext(CartContext);
  const productsArr = [
    {
      id: "1",

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "2",

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "3",

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "4",

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/faae72b079de4bd79023fcb94065ebe9/cart${email}`
      ).then((res) => {
          cartCtx.initilizeCart(res.data);
          
      })
      
        
  },[]);

  return (
    <section className={classes.wraper}>
      <ul>
        {productsArr.map((prod) => {
          return (
            <Product
              
              key={Math.random()}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              image={prod.imageUrl}
              quantity= {1}
              _id= {prod._id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableProducts;
