import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import 'bootstrap/dist/css/bootstrap.css';
import libros from './productos.json'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products,setProducts] = useState([])
    const { id: idCategory } = useParams();

    useEffect(() => {
        const getItems = () => {
        return new Promise((res,rej) => {
            setTimeout(() => {
                if (idCategory) {
                    const filtroCategory = libros.filter(
                        (item) => item.categoria === idCategory
                    );
                    res(filtroCategory);
                } else {
                    res(libros);
                }

                rej('Error al traer productos');
            }, 2000);
        });
    };
        getItems()
            .then((res) => setProducts(res))
            .catch((Error) => console.log(Error));
    }, [idCategory]);
    

    return (
        <div className="container">
            <ul>
                <ItemList product={products} />
            </ul>
        </div>
    ) 

}

export default ItemListContainer