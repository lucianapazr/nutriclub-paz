import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
    return (
        <article className="item">
            <h2>{product.title} - {product.author}</h2>
            <img className="w-25" variant="top" src={product.pictureUrl} alt={product.title} />
            <h3>${product.cost}</h3>
            <ItemCount stock={product.stock} initial={0}/>
            <p>Stock: {product.stock}</p>         
            <p>{product.description}</p>
        </article>
    );
}

export default ItemDetail;