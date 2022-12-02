//import React, { Fragment } from "react";
import classes from "./Header.module.css";
import CartButton from "../Cart/CartButton";

const Header = (props) => {
  return (
    <div className={classes.allheader}>
            <div className={classes.header}>
                <div className={classes['header-links']}>
                    <h3>Home</h3>
                    <h3>Store</h3>
                    <h3>About</h3>
                </div>
                <CartButton/>
            </div>
            <div className={classes.generics}>
                <h1 >The Generics </h1>

            </div>
            <div className={classes.music}>
              <h2>Music</h2>
            </div>
        </div>
    )
}

export default Header