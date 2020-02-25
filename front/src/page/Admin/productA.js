import React from 'react';
import './productA.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
export default class AdminProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Products: []
        };

    }
    async componentDidMount() {
        const response1 = await fetch('http://localhost:8080/Products/');
        const result = await response1.json();
        console.log(result);
        this.setState({
            Products: result
        })
    }
    render() {
        return (
            <>
                <Container>

                    <Row>
                        {this.state.Products.map((product, index) =>
                            <Col >
                                <Card style={{ width: '20rem' }, { margin: '20px' }}>
                                    <Card.Img variant="top" src={`/Image/${product.proImg}`} />
                                    <Card.Header>{product.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{product.price} $</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Button variant="info"
                                            style={{ width: "100px" }}
                                        ><MdModeEdit />
                                        </Button>
                                        <Button
                                            className="operation"
                                            variant="danger"
                                            style={{ width: "100px" }}

                                        ><MdDeleteForever />
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                        }

                    </Row>
                </Container>

            </>
        );
    }
}

