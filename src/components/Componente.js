import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const Componente = (props) => {
    const {texto, numero} = props;
    return (
        numero<1 ?
        <>
            <h1 className="lead">{texto} está vacío</h1>
        </>
        :
        <>
        <h1 className="btn btn-warning">{texto} tiene elementos</h1>
        </>
    )
}

export default Componente;