import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ItemCount = ({stock,initial}) =>{
    const [value,setValue] = useState(initial)
    const onAdd = () => value<stock ? (setValue(value+1)) : console.log("limite de stock");
    const onSubstract = () => value>initial ? (setValue(value-1)) : console.log ("limite es 0");
    
    return (
        <div>
            <div className="my-2">
                <div className="btn-group">
                    <button className="btn btn-outline-success" type="button" onClick={onSubstract}>-</button>
                    <h5 className="mx-5">{value}</h5>
                    <button className="btn btn-outline-success" type="button" onClick={onAdd}>+</button>
                </div>
            </div>
            <button className="my-1 px-4 btn btn-outline-success">Añadir al carrito</button>
        </div>
    )
}

export default ItemCount;