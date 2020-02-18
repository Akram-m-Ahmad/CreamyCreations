import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Row, Col,  Image } from 'react-bootstrap';


class newsItem extends React.Component {
  render() {

    return (
    <Container className="container">
            <Row className="Rowcss">
                        <Col xs={12} md={12}>
                            <Image  className="imagesCss" src={require("../Image/lama.jpg" )}/>
                            <h3 className="h3CssInNewsUser" >Description:</h3><p>Debouncing ensures that a function will not be executed until
                                after a certain amount of time has passed since it was last called. 
                                This can be useful when you have to perform some expensive calculation 
                                in response to an event that might dispatch rapidly 
                                (eg scroll or keyboard events). The example below debounces text input with a 250ms delay.</p>

                            <h3 className="h3CssInNewsUser">Date: <time>10/02/2020</time></h3>
                        </Col>
                </Row>
      </Container>
    );
  }
}

export default  newsItem;
