import React, {Fragment, useContext, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import { Spinner } from 'react-bootstrap';
import CartContext from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {

    let history = useHistory();

    const [contadorDetail, setContadorDetail] = useState(0);
    const {setCarrito, carrito, setContador, contador} = useContext(CartContext);

    const handleClick = (cantidad) => {
        setContadorDetail(cantidad)
    }

    const onAdd = (cantidad) => {
        const itemConCantidad = {...product, cantidad}

        let flag = false;
        let counter = 0

        if (cantidad !== 0) {
            if (carrito.length > 0) {
                counter = 0
                carrito.forEach(item => {
                    if (itemConCantidad.id === item.id) {
                        item.cantidad += itemConCantidad.cantidad
                        setCarrito(carrito)
                        handleClick(cantidad)
                        flag = true
                    }
                    counter += item.cantidad
                })
                setContador(counter)
                if (!flag) {
                    counter = contador
                    counter += cantidad
                    setContador(counter)
                    setCarrito([...carrito, itemConCantidad])
                    handleClick(cantidad)
                }
            } else {
                setContador(itemConCantidad.cantidad)
                setCarrito([itemConCantidad])
                handleClick(cantidad)
            }

        } else {
            alert("NO HAY PRODTOS PARA AGREGAR AL CARRITO")
        }
    }

    let pathDefault = '/'
    let pathCart = '/Cart'

    if (product) {
        return (
            <div className="container mt-3">
                
                <div className="item-detail-container">
                    <div className="image-container">
                        <img src={product.image} alt={product.title} className={'image-product'}/>
                    </div>
                    <div className="description-container">
                        <h1>{product.title}</h1>
                        <h5>Descripción: {product.description}</h5>
                        <h5>Precio: {product.price}</h5>
                        {contadorDetail === 0 &&
                        <ItemCount stock={product.stock} initial={0} onAdd={onAdd}/>
                        }
                        {contadorDetail !== 0 &&
                        <Fragment>
                            <h5>Cantidad seleccionada: {contadorDetail}</h5>
                            <Link className="btn btn-success m-3" to={pathCart}>Terminar mi compra</Link>
                        </Fragment>
                        }

                    </div>
                </div>
                <button className={'btn btn-primary m-3'} onClick={() => history.goBack()}>
                    Volver
                </button>
                <Link className="btn btn-primary m-3" to={pathDefault}>Home</Link>
            </div>
        );
    } else {
        return (
            <Spinner/>
        )
    }
}

export default ItemDetail;