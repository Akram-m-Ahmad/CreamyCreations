import React from 'react';
import './order.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Orders: [],
            Products: [],
            images: []



        };

    }





    async componentDidMount() {
        //Orders
        const response = await fetch('http://localhost:8080/ImagId/');
        const result = await response.json();
        console.log(result);
        this.setState({
            Orders: result

        })
    }



    render() {

        return (

            <>


                {this.state.Orders.map(Order =>

                    <Row className="row">

                        <Col calssName="col" sm={2}>

                            <img
                                width={170}
                                height={170}
                                className="mr-3 img_product"
                                src={`/Image/${Order.proImg}`}
                                alt="Generic placeholder"

                            />
                            {/* )}     */}
                        </Col>
                        <Col className="col" sm={8}>

                            <p><span>Name:</span> {Order.username}</p>
                            <p><span>Phone:</span> {Order.userPhone}</p>
                            <p><span>Date:</span> {Order.date} </p>
                        </Col>
                        <Col className="col" sm>
                            <div className="icon">
                                <div className="lid" />
                                <div className="lidcap" />
                                <div className="bin" />
                            </div>

                            <span class="icon-trash" onClick={this.del = async () => {
                                if (window.confirm('Are you sure you wish to delete this item?')) {
                                    window.location.reload();
                                    const responsep = await fetch(`http://localhost:8080/Orders/delete/${Order.ID}`);
                                    const resultp = await responsep.json();
                                    console.log(resultp);
                                }

                            }} className="icon-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 40" width={40} height={40}>
                                <path className="trash-lid" fillRule="evenodd" d="M6 15l4 0 0-3 8 0 0 3 4 0 0 2 -16 0zM12 14l4 0 0 1 -4 0z" />
                                <path className="trash-can" d="M8 17h2v9h8v-9h2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
                            </span>



                        </Col>
                    </Row>


                )

                }




            </>
        );
    }
}

