import React from 'react'
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';

const ItemList = ({product}) =>{
    
    console.log(product);
    
    return(
        <div className="text-center">
            {product.length ? (
                product.map((product) => <Item product={product} />)
            ) : (
                <Spinner animation="border" variant="primary" />
            )}
        </div>
    )
}

export default ItemList