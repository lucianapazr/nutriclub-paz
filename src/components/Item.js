import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';

const Item = ({product}) =>{

    return (
        <Fragment>
            <div className="card m-4">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">
                        {product.title} - {product.author}
                    </h5>
                    <li className="list-group-item m-2">Stock: {product.stock}</li>
                    <li className="list-group-item m-2">$ {product.price}</li>
                    <Link to={`/item/${product.id}`} className="btn btn-primary">
                        Ver más
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Item