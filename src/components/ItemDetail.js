import ItemCount from './ItemCount'
import { Container, Row, Col } from 'react-bootstrap'

const ItemDetail = ({ product }) => {
    return (
        <Container>
            <h2 className="text-center">{product.title} - {product.author}</h2>
            <Row className="justify-content-md-center">
                <Col xs lg="2">            
                    <img className="w-100" variant="top" src={product.pictureUrl} alt={product.title} />         
                </Col>
                <Col md="auto">
                    <p>{product.description}</p>
                    <h3 className="text-center">${product.cost}</h3>
                    <ItemCount stock={product.stock} initial={0}/>
                    <p className="text-center">Stock: {product.stock}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;