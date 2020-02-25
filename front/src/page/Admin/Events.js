import React from 'react';
import './Events.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddEventForm } from '../../components/AddEventForm';
// import Modal from "./Modal";

export default class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Description: [],
            Location: [],
            Date: [],
            Events: [],
            addModalShow: false,
        };
    }
    async componentDidMount() {
        //Events
        const response = await fetch('http://localhost:8080/Events/');
        const result = await response.json();
        console.log(result);

        this.setState({
            Events: result
        })
    }


    async handleSubmit(event) {

        event.preventDefault()
        const responseO = await fetch(`http://localhost:8080/Events/create/?date=${this.state.date}&description=${this.state.description}&Location=${this.state.Location}&Events_ID=dw`);
        const result = await responseO.json();
        window.location.reload();

    }







    render() {
        let addModalClose = () => this.setState({ addModalShow: false });

        return (
            <>


                <ButtonToolbar>
                    <Button
                        variant="primary"
                        onClick={() => this.setState({ addModalShow: true })}
                    > Add New Event </Button>

                    <AddEventForm
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    />


                </ButtonToolbar>
                {this.state.Events.map(Event =>

                    <Row className="row">

                        <Col calssName="col" sm={2}>
                            <img
                                width={170}
                                height={170}
                                className="mr-3 img_product"
                                alt="Generic placeholder"
                                src={`/Image/${Event.eventImg}`}
                            />

                        </Col>

                        <Col className="col" sm={8}>
                            <span>Description: {Event.description}</span><br /><hr />
                            <span>Location: {Event.location}</span><br /><hr />
                            <span>Date: {Event.date}</span><br />

                        </Col>

                        <Col className="col" sm>
                            <div className="icon">

                                <div className="lid" />
                                <div className="lidcap" />
                                <div className="bin" />

                            </div>
                            <svg onClick={this.del = async () => {
                                window.confirm('Are you sure you wish to delete this item?')
                                window.location.reload();
                                const responsep = await fetch(`http://localhost:8080/Events/delete/${Event.ID}`);
                                const resultp = await responsep.json();
                                console.log(resultp);


                            }} className="icon-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 40" width={40} height={40}>
                                <path className="trash-lid" fillRule="evenodd" d="M6 15l4 0 0-3 8 0 0 3 4 0 0 2 -16 0zM12 14l4 0 0 1 -4 0z" />
                                <path className="trash-can" d="M8 17h2v9h8v-9h2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
                            </svg>
                        </Col>

                    </Row>

                )}


            </>
        );
    }
}