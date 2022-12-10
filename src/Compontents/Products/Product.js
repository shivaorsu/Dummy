import React, { Fragment, useContext } from "react";
import CartContext from "../Store/cart-context";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  let email= localStorage.getItem("email").replace(".","").replace("@","")

  const addItemToCart = (event) => {
    event.preventDefault();
    cartCtx.addItem({...props})
    axios
    .post(`https://crudcrud.com/api/7259e54426de4ccf8de2c77cbc9765c2/cart${email}`,props

    )
    .then((res)=>{
      console.log(res.data,"successfull")
    })
    .catch((error)=>{
      alert(error)
    })

    
  };
  return (
    <Fragment>
      <li className={classes.list}>
      <Link to={{
               pathname: "/store/productDetails",
           
            }}>
          <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt="some images"></img>
            <span>
              <h1>${props.price}</h1>
              <button className={classes.button1} onClick={addItemToCart}>
                Add To Cart
              </button>
            </span>
          </div>
        </Link>
      </li>
    </Fragment>
  );
};

export default Product;
