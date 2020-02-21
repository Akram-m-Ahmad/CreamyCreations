import React from 'react';
import '../page/Products/Products.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col } from 'react-bootstrap';

function ProdectsItem(props) {

  return (
    <>

      <Col calssName="col cl" sm>

        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="ImagePr" src="/image.jpg" alt="Paris" />
            </div>
            <div className="flip-box-back">
              <h2 className='topicPro'>Akram</h2>
              <p  ><span>Name:</span> {props.value.name}</p>
              <p><span>Description:</span> {props.value.description}</p>
              <p><span>Price:</span> {props.value.price} $</p>

              <Button className='add add2' onClick={e => this.modalOpen(e)} size="lg" variant="danger">Add new product</Button>

            </div>
          </div>
        </div>

      </Col>


    </>
  )
}

export default ProdectsItem;