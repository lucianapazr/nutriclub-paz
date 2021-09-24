import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


const CartWidget = (props) => {
    const {number} = props;
    return (
        <span>
            <i>
                <FaShoppingCart />{number}
            </i>
        </span>
    )
}

export default CartWidget
