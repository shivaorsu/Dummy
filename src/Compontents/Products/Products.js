import React from "react";
import AvailableProducts from "./AvailableProducts";
import classes from './Products.module.css';

const Products = (props) => {
    return(
      <div className={classes.wraper}>
      {/* <h2>MUSIC </h2> */}

      <AvailableProducts />;
    </div>
    )
  
};

export default Products;