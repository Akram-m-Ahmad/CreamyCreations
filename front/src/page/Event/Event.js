import React, { Component } from 'react';
import './Event.css';
import * as bootstrap from 'react-bootstrap'

import EventItem from '../../components/eventItem';


class Events extends Component {

    render() {
        return (
            <div class="images">
                <div class="top">
                    <div class="title-container"><h1 class="title">Events</h1></div>


                    <bootstrap.Container>

                        <bootstrap.Row class="wrapper">
                            <EventItem name="crepe banana" source={require('../../Image/img1.jpg')} alt="First cake" price="10$" ingredients="banana, choclate, darkchoclate" />
                            <EventItem name="crepe strawberry" source={require("../../Image/img2.jpg")} alt="Second cake" price="10$" ingredients="banana, choclate, strawberry whitechoclate" />

                        </bootstrap.Row>

                    </bootstrap.Container>
                </div>
            </div>
        );
    }
}
export default Events;