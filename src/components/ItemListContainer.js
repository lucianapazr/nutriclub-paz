import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const ItemListContainer = () => {
    const {text, number} = props;
    return (
        number<1 ?
        <>
            <h3>{text} está vacío</h3>
        </>
        :
        <>
            <h3>{text} tiene elementos</h3>
        </>
    )
}

export default ItemListContainer
