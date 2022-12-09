import React, { Fragment } from "react";
import classes from './ProductDetails.module.css';

// import React from "react";
// import classes from './ProductDetails.module.css';

// const ProductDetail = (props) => {
//     return (
//         <div className={classes.wraper}>
//             <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" alt="Website"></img>
//             <h1>COLOURS</h1>
//         </div>
//     )
// }

// export default ProductDetail;
const ProductDetail = (props) => {
    return (
      <Fragment>
        <section className={classes.section}>
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            alt="Website"
            className={classes.img}
          ></img>
          <div>
  
          <h3 className={classes.reviews}> Reviews </h3>
          <p className={classes.reviews}> @yushi216 </p>
          <p>⭐⭐⭐⭐</p>
          <p> Great product. Must buy</p>
          <p className={classes.reviews}> rhea43 </p>
          <p>⭐⭐</p>
          <p> Do not buy this</p>
          <p className={classes.reviews}> aryanshi178 </p>
          <p>⭐⭐⭐⭐</p>
          <p> Excellent will buy again</p>
         
          </div>
          <h1>More products like this</h1>
        </section>
  
        <h1 className={classes.title}>COLOURS</h1>
      </Fragment>
    );
  };
  
  export default ProductDetail;