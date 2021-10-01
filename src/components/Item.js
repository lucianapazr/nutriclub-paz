import React from 'react'
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap';

const Item = ({product}) =>{

    return (
        <div>
            <Card className="text-center my-2">
                <Card.Header>{product.title} - {product.author}</Card.Header>
                <Card.Body>
                    <Card.Img className="w-25" variant="top" src={product.pictureUrl} alt={product.title} />
                    <Card.Text>${product.cost}</Card.Text>
                    <ItemCount stock={product.stock} initial={0}/>
                </Card.Body>
                <Card.Footer className="text-muted">Stock: {product.stock}</Card.Footer>
            </Card>           
        </div>
    )
}

export default Item