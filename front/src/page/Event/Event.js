import React, { Component } from 'react';
import './Event.css';
import * as bootstrap from 'react-bootstrap'

import EventItem from '../../components/eventItem';


class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Events: []
        };
    }

    async componentDidMount() {
        //Events
        const response = await fetch('http://localhost:8080/Events/');
        const result = await response.json();
        console.log(result);

        this.setState({
            Events: result, error: "none",
        });
    }
    render() {
        return (
            <div class="imagess">
                <div class="top">
                    <div class="title-container"><h1 class="title">Events</h1></div>


                    <bootstrap.Container>

                        <bootstrap.Row class="wrapper">


                            {this.state.Events.map(event => (
                                <EventItem value={event} />
                            )
                            )
                            }
                        </bootstrap.Row>

                    </bootstrap.Container>
                </div>
            </div>
        );
    }
}
export default Events;