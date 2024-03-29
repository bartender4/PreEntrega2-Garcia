import { Button, Card } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return(
       <Row xs={1} md={2} className="g-4">
            <Col>
                <Card style={{ width: '23rem' }}>
                    <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Img variant="top" img src={img}  alt={name}/> 
                    <Card.Text>
                        <p> precio: ${price} </p>
                        <p> Stock disponible {stock} </p>
                    </Card.Text>
                    <footer className="card-footer">
                        <Link to={`/item/${id}`} className='btn btn-dark' >Ver detalle</Link>
                    </footer>
                    </Card.Body>
                </Card>
            </Col>
       </Row>
    )
}

export default Item