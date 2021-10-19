import {CartContext} from "./CartContext";
import {useContext} from "react";
import {Link} from "react-router-dom";

function Cart(props) {

    const {carrito, setCarrito, setContador, contador} = useContext(CartContext);

    const totalCarrito = [0]
    let carritoProductos = []

    function removeProduct(item) {
        carritoProductos = carritoProductos.filter(producto => producto.id !== item.id)
        setCarrito(carritoProductos)
        let counter = 0
        carritoProductos.map(item2=>{
             counter += item2.cantidad
        })
        setContador(counter)
    }

    function removeAll() {
        setCarrito([])
        setContador(0)
    }

    if (contador){
        return (
            <div>
                <h1> CARRITO </h1>
                <ul>
                    {
                        carrito.map((item, index) => {
                            console.log(item)
                            const totalProducto = item.cantidad * item.price
                            carritoProductos.push(item)
                            totalCarrito.push(totalProducto)
                            return (
                                <div>
                                    <li key={index} className={'d-flex'}>
                                        <p className={'m-1 fw-bold'}>{item.title}</p>
                                        <p className={'m-1'}>Precio unitario: ${item.price} - </p>
                                        <p className={'m-1'}>Cantidad: {item.cantidad} - </p>
                                        <p className={'m-1'}>Precio Total: ${totalProducto} - </p>
                                        <button className={'btn btn-danger'} onClick={() => removeProduct(item)}> X</button>
                                    </li>
                                </div>
                            )
                        })
                    }
                    {carrito.length > 0 && <button className={'btn btn-danger m-2'} onClick={removeAll}>BORRAR TODO</button>}
                </ul>
                <h3>Total: ${totalCarrito.reduce((prev, next) => prev + next)}</h3>
            </div>
        );
    }else{
        return (
            <div>
                <h1> Carro vacío!</h1>
                <Link className={'btn btn-warning m-2'} to={"/"} > Seleccionar productos </Link>
            </div>
            )
    }

}

export default Cart;