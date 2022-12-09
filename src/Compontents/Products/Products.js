import React,{Fragment} from "react";
import AvailableProducts from "./AvailableProducts";
import classes from './Products.module.css';

const Products = (props) => {
    return(
      <Fragment>
        <h2 className={classes.music}>Colors</h2>
      <AvailableProducts />;
      </Fragment>
    )
  
};

export default Products;