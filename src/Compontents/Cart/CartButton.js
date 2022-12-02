import React from 'react'
import classes from './CartButton.module.css'

const CartButton = (props) => {
    return (
        <div className={classes.cartbutton} >
            <div className={classes.button} >
                Cart
            </div>
            <div className={classes.badge}>
            </div>

        </div>
    )
}

export default CartButton