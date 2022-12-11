import { Fragment, useContext } from "react";
import CartContext from "../Store/cart-context";
import classes from "./CartItem.module.css";
import axios from "axios";

const CartItem = (props) => {
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  const cartCntx = useContext(CartContext);
  const onAddHandler = () => {
    console.log(props);
    cartCntx.addItem(props);
  };

  const onRemoveHandler = (event) => {
    console.log(props);
    cartCntx.removeItem(props);
    cartCntx.removeItem(props);
    const id= (props._id);
    console.log(id)
    axios.delete( `https://crudcrud.com/api/faae72b079de4bd79023fcb94065ebe9/cart${email}/${id}`)

  };

  return (
    <li id={`cart-item-${props.id}`}>
      <Fragment>
        <h2 className={classes.title}>{props.title}</h2>
        <img src={props.img} alt="Icon" className={classes.img}></img>
        <span className={classes.price}> ${props.price}</span>
        <span> x {props.quantity}</span>
        <button onClick={onAddHandler} className={classes.button}>
          +
        </button>
        <button onClick={onRemoveHandler} className={classes.button}>
          -
        </button>
      </Fragment>
    </li>
  );
};
export default CartItem;

// const CartItems = (props) => {
//   const cartCntx = useContext(CartContext);
//   const onAddHandler = (props) => {
//     console.log(props);
//     cartCntx.addItem(props);
//   };

//   return (
//     <li id={`cart-item-${props.id}`}>
//       <Fragment>
//         <h2 className={classes.title}>{props.title}</h2>
//         <img src={props.img} alt="Icon" className={classes.img}></img>
//         <span className={classes.price}> ${props.price}</span>
//         <button onClick={onAddHandler} className={classes.button}>
//           +
//         </button>
//       </Fragment>
//     </li>
//   );
// };
// export default CartItems;
