import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import 'bootstrap/dist/css/bootstrap.css';

const ItemListContainer = () => {
    const [products,setProducts] = useState([])
    let productos = [
        {id: 0, title:"Basta de dietas", author:'Estefanía Beltrami', stock:45, cost:1500, pictureUrl:"https://entelequia.com.ar/wp-content/uploads/2021/06/123412-29.jpg"},
        {id: 1, title:"Más de 100 ideas para tus comidas", author:'Estefanía Beltrami', stock:18, cost:1200, pictureUrl:"https://kbimages1-a.akamaihd.net/abb79229-1e99-4d05-bf52-39fa5c04a76d/1200/1200/False/mas-de-100-ideas-para-tus-comidas.jpg"},
        {id: 2, title:"Recetas saludables", author:'Estefanía Beltrami', stock:6, cost:600, pictureUrl:"https://lh3.googleusercontent.com/proxy/WnYnDH591PtyRw7dug8bbeNmXspGvlxxuHMknIpoovSy19rBVXB_uVOYYWUHHeJ7CqiyJF5yisC0D1BH10DUC738_z_1nzUD_xJ1d1cBIHtX2C3u87ICWQBvKeiYozxH"},
        {id: 3, title:"Guía semanal", author:'Estefanía Beltrami', stock:23, cost:500, pictureUrl:"https://1.bp.blogspot.com/-chCNzRwuuKM/W1VCraBX7PI/AAAAAAAA99w/9RilFkpW2o86_5pJLcxwACrESU8_je54wCLcBGAs/s1600/Meal%2Bprep%2BGu%25C3%25ADa%2Bsemanal%2Bpara%2Bplanificar%2Btus%2Bcomidas-1.jpg"},
        {id: 4, title:"Fiestas: Recetario salado", author:'Estefanía Beltrami', stock:10, cost:600, pictureUrl:""},
        {id: 5, title:"Fiestas: Recetario dulce", author:'Estefanía Beltrami', stock:8, cost:600, pictureUrl:""}

    ];

    useEffect(() => {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
            }, 2000);
        })
        promise.then(response =>
            (setProducts(response)
        )).catch(error => {
            console.error('Error', error);
        });
    }, []);
    console.log(products);
    

    return (
        <div className="container">
            <Catalogo text='Catálogo' />
            <ItemList product={products} />
        </div>
    ) 

}

const Catalogo = (props) => {
    const jsx = <h1>{props.text}</h1>;
    return jsx;
}

export default ItemListContainer
