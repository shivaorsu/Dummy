import React, { Fragment } from "react";
import classes from "./Header.module.css";
//import CartButton from "../Cart/CartButton";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>

      <header className={classes.header}>
        <div className={classes.container}>
        <NavLink className={classes.navlink} to ="/"><span>HOME</span></NavLink>
        <NavLink className={classes.navlink} to ="/store"><span>STORE</span></NavLink>
        <NavLink  className={classes.navlink}to ="/about"><span>ABOUT</span></NavLink>
        <NavLink  className={classes.navlink}to ="/contact_us"><span>CONTACT US</span></NavLink>
        </div>
        {/* <button>Cart</button> */}

        <button className={classes.btn} onClick={props.onShowCart}> Cart <span> 3 </span> </button>
        
       
        

      </header>
      <h1 className={classes.h1}> The Generics </h1>

    </Fragment>
    
    )
}

export default Header