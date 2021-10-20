import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import libros from './productos.json'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getItems = () => {
        return new Promise((res, rej) => {
            const buscarProducto = libros.find(
                (item) => item.id === parseInt(id)
            );
            setTimeout(() => {
                res(buscarProducto);
                rej('error al traer productos');
            }, 2000);
        });
    };
        getItems()
        .then((res) => setProduct(res))
        .catch((Error) => console.log(Error));
    }, [id]);

    return <ItemDetail product={product}/>;
}

export default ItemDetailContainer;