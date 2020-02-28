import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Row, Col,  Image } from 'react-bootstrap';


  function newsItem (props) {
    return (
 
      <Container>
        <div className="content">
          <div className="cardd">
            <div className="firstinfo"><img className="imgev" src={`http://localhost:8080/images/${props.value.newsImg}`} />
              <div className="profileinfo">

                <h1><span>Description:</span>{props.value.description}</h1>

                <h3><span>Date:</span> {props.value.date}</h3>
               </div>
            </div>
          </div></div>

      </Container>
    );
  }


export default  newsItem;
