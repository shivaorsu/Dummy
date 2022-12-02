import React, { Fragment } from "react";
import classes from "./Header.module.css";
//import CartButton from "../Cart/CartButton";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>

      <header className={classes.header}>
        
        <NavLink to ="/home"><span>HOME</span></NavLink>
        <NavLink to ="/store"><span>STORE</span></NavLink>
        <NavLink to ="/about"><span>ABOUT</span></NavLink>
        <button className={classes.button} onClick={props.onShowCart}> Cart </button>
        <span> 3 </span>
        

      </header>
      <h1 className={classes.h1}> The Generics </h1>

    </Fragment>
    
    )
}

export default Header