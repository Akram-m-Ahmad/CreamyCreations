import React, { Component } from 'react'
import { Modal, Button, Row, col, Form } from 'react-bootstrap';

export class AddEventForm extends Component {

    constructor(props) {
        super(props);
        this.state = {


            description: '',
            location: '',
            date: '',
             

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    async handleSubmit(event) {
        event.preventDefault() 
        //Multer......................................
          const body = new FormData();
        body.append('image', event.target.file.files[0]);
        body.append('description', this.state.description);
        body.append('location', this.state.location);
        body.append('date', this.state.date);
        const response = await fetch("http://localhost:8080/formEvents", {
            method: 'POST',
            
            body:body
        });
        const result = await response.json();
      
//multer..........  ..................................
          window.location.reload();
     }

    render() {
        return (

            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>  Fill the from To add a new Event</h3>
                    </Modal.Title>
                </Modal.Header>
              
                    <div className="container">
                    <form onSubmit={this.handleSubmit}>


                            <Form.Group  >
                                <Form.Label>description</Form.Label>
                                <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group  >
                                <Form.Label>location</Form.Label>
                                <Form.Control value={this.state.location} name="location" type="text" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Date</Form.Label>
                                <Form.Control name="date" type="date" value={this.state.date} onChange={this.handleChange} />
                            </Form.Group>
                            
                        <input type='file' name='file' />
                 
 
                            <Button variant="danger" size="lg" value='OK' block="block" type="submit">
                                Create Events
        </Button>
                        </form>


                    </div>

               
            </Modal>

        );
    }
}