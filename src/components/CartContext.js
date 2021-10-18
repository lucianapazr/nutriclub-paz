import {createContext, useState} from "react";
export const CartContext = createContext()
//const {Provider} = CartContext

export const ProviderCustomizado = ({children}) => {

    const [carrito, setCarrito] = useState([]);
   // const [contador, setContador] = useState(0);

    //const valorDelContexto = {
      //  carrito,
        //setCarrito,
        //contador,
        //setContador
    //}

    return(
        <CartContext.Provider value={{carrito, setCarrito}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext