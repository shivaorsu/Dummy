import React, { Fragment,useContext } from "react";
import classes from "./Header.module.css";
//import CartButton from "../Cart/CartButton";
import { NavLink,useHistory } from "react-router-dom";
import AuthContext from "../Store/AuthContext";

const Header = (props) => {
  let number=3
  const authCtx=useContext(AuthContext);
  const history=useHistory();
  const logoutHandler=()=>{
    authCtx.logout();
    history.replace("/auth");
  }
  return (
    <Fragment>

      <header className={classes.header}>
        <div className={classes.container}>
        <NavLink className={classes.navlink} to ="/"><span>HOME</span></NavLink>
        <NavLink className={classes.navlink} to ="/store"><span>STORE</span></NavLink>
        <NavLink  className={classes.navlink} to ="/about"><span>ABOUT</span></NavLink>
        <NavLink  className={classes.navlink} to ="/contact_us"><span>CONTACT US</span></NavLink>
        </div>
        {/* <button>Cart</button> */}

        <button className={classes.btn1} onClick={props.onShowCart}> Cart {number} </button>
        <button className={classes.btn2}  onClick={logoutHandler}>Logout</button>

        
      </header>
      
      

    </Fragment>
    
    )
}

export default Header