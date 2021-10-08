import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Item = ({product}) =>{

    return (
        <div>
            <Link to={`/item/${product.id}`}>
                <Card className="text-center my-2">
                    <Card.Header>{product.title} - {product.author}</Card.Header>
                    <Card.Body>
                        <Card.Img className="w-25" variant="top" src={product.pictureUrl} alt={product.title} />
                        <Card.Text>${product.cost}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Stock: {product.stock}</Card.Footer>
                </Card>
            </Link>         
        </div>
    )
}

export default Item