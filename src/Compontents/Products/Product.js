import React from "react";

// import AvailableProducts from "./AvailbleProducts";
import classes from "../Cart/CartButton.module.css";

const Product = (props) => {
    return <li>
        <div>
        <h3>{props.title}</h3>
            
            <img src={props.image} alt="some images"></img>
            <h1>{props.price}</h1>
            <button className={classes.click}>Add To Cart</button>
        </div>
    </li>
}

export default Product

// import React from 'react'
// //import classes from './Product.module.css'

// const Product = (props) => {
//     return (
//         <div>
//             <img src={props.image} alt='img' />
//             <div>
//                 {props.price}
//                 <div>
//                     Add to Add
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Product;