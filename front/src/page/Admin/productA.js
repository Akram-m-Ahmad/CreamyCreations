import React from 'react';
import './productA.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { MdFolder, MdMonetizationOn, MdCake, MdModeEdit, MdDeleteForever } from 'react-icons/md';
import AddProduct from './add-product';
import { MDBSwitch } from 'mdbreact';
import { TiDocumentText } from 'react-icons/ti'



export default class AdminProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
            addModalShow: false,
            mode: ''
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
        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <div id="wrapper">
                {/* <Form.Check 
    type="switch"
    id="custom-switch"
    label="Admin"
    onClick = {this.admin = (e) => {
        if(!this.state.admin)
        if(prompt ("Password to enter the admin mode: ") == "LamaCodiB05")
        this.setState({
            admin: true
        })
        else if(this.state.admin){this.setState({
            admin: false
        })}
        else
        alert("Password is invalid!")
    }}
    style={{float: 'right'}}
  /> */}
                <Container
                    style={{ fontFamily: 'Times New Roman' }}>
                    <Button
                        variant="outline-warning"
                        onClick={() => this.setState({ mode: "Add New Produt", product: null }, () => this.setState({ addModalShow: true }))}
                        style={{ width: '100%', borderRadius: '50PX', margin: '20px' }}
                    >Add New Product</Button>
                    <AddProduct
                        mode={this.state.mode}
                        value={this.state.product}
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    />
                    <Row>
                        {this.state.Products.map((product, index) =>
                            <Col>
                                <Card bg="light" style={{ width: '400px', margin: '20px' }}>
                                    <Card.Img variant="top" src={`/Image/${product.proImg}`}
                                        style={{ height: '300px', width: "400px" }}
                                    />
                                    <Card.Header><span style={{ fontSize: '45px', color: '#386464' }}><MdCake /></span>{product.name}</Card.Header>
                                    <Card.Body><Card.Title><span style={{ fontSize: '25px', color: '#386464' }}><MdMonetizationOn /></span>{product.price} $</Card.Title>
                                        <Card.Text><span style={{ fontSize: '25px', color: '#386464' }}><TiDocumentText /></span>{product.description}</Card.Text></Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col>
                                                <Button variant="info"
                                                    id={product.ID}
                                                    style={{ width: "100px" }}
                                                    onClick={() => this.setState({ product: product, mode: "Update Product" }, () => this.setState({ addModalShow: true }))}
                                                ><MdModeEdit />
                                                </Button></Col><Col>
                                                <Button
                                                    className="operation"
                                                    variant="danger"
                                                    style={{ width: "100px" }}
                                                    onClick={this.del = async () => {
                                                        if (window.confirm('Are you sure you want to delete this product?')) {
                                                            window.location.reload();
                                                            const responsep = await fetch(`http://localhost:8080/Products/delete/${product.ID}`);
                                                            const resultp = await responsep.json();
                                                            console.log(resultp);
                                                        }
                                                    }
                                                    }><MdDeleteForever />
                                                </Button></Col></Row></Card.Footer>
                                </Card>
                            </Col>
                        )
                        }

                    </Row>

                </Container>

            </div>
        );
    }
}

