import React from 'react'
import classes from './CartButton.module.css'

const CartButton = () => {
    return (
        <div className={classes.cartbutton} >
            <div className={classes.button} >
                Cart
            </div>
            <div className={classes.badge}>
                0
            </div>

        </div>
    )
}

export default CartButton