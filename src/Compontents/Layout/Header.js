import React, { Fragment, useContext,useEffect,useState } from "react";
import classes from "./Header.module.css";
//import CartButton from "../Cart/CartButton";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import CartContext from "../Store/cart-context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(cartCtx?.items?.length || 0);
  }, [cartCtx.items]);

  //console.log(quantity);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/auth");
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.container}>
          <NavLink className={classes.navlink} to="/">
            <span>HOME</span>
          </NavLink>
          <NavLink className={classes.navlink} to="/store">
            <span>STORE</span>
          </NavLink>
          <NavLink className={classes.navlink} to="/about">
            <span>ABOUT</span>
          </NavLink>
          <NavLink className={classes.navlink} to="/contact_us">
            <span>CONTACT US</span>
          </NavLink>
        </div>
        {/* <button>Cart</button> */}

        <button className={classes.btn1} onClick={props.onShowCart}>
          {" "}
          Cart {quantity}
        </button>
        <button className={classes.btn2} onClick={logoutHandler}>
          Logout
        </button>
      </header>
    </Fragment>
  );
};

export default Header;
