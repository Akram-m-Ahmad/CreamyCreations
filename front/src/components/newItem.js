import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Row, Col,  Image } from 'react-bootstrap';


  function newsItem (props) {
    return (
    <Container className="container" >
            <Row className="Rowcss">
                        <Col xs={12} md={12}>
                            <Image  className="imagesCss" src={`/Image/${props.value.newsImg}`}/>
                            <h3 className="h3CssInNewsUser" >Description:</h3><p>{props.value.description}</p>

    <h2 className="h3CssInNewsUser">Date: <time>{props.value.date}</time></h2>
                        </Col>
                </Row>
      </Container>
    );
  }


export default  newsItem;
