import React from 'react'
import { useContext } from 'react';
import {Link} from "react-router-dom";
import {CartContext} from "./CartContext";
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget(props) {

    ///const {contador} = useContext(CartContext);

    return (
        <>
        </>
        //<div  style={{visibility: contador === 0 ? "hidden" : "visible",}} className={'d-flex align-items-center'}>
          //  <li>
            //    <Link to={'Cart'} className="cartIcon"><FaShoppingCart /></Link>
            //</li>
           // <span style={{color: "white"}}>
           //     {contador}
            //</span>

        //</div>
    );
}

export default CartWidget;