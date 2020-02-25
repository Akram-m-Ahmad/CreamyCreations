import React, { Component } from 'react'
import { Modal, Button, Row, col, Form } from 'react-bootstrap';

export class AddEventForm extends Component {

    constructor(props) {
        super(props);

    }


    async handleSubmit(event) {

        event.preventDefault()

        const responseO = await fetch('http://localhost:8080/Events/create/?date=${this.state.date}&description=${this.state.description}&Location=${this.state.Location}&${this.stat.eventImg}');
        const result = await responseO.json();
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
                <Modal.Body>
                    <div className="container">
                        <form onSubmit={this.handleSubmit}><br />
                            <label>  Description:<textarea type="text" /></label><hr />
                            <label>  Location:<input type="text" /></label><hr />
                            <label>  Date:<input type="text" /></label><hr />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

        );
    }
}