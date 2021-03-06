import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../page/Event/Event.css';
import { IoMdPin, IoMdText, IoMdCalendar } from 'react-icons/io';
import { MdDescription} from 'react-icons/md';

function EventItem(props) {
    return (

        <Container>
        <div className="content">
            <div className="cardd">
                    <div className="firstinfo"><img className="imgev" src={`http://localhost:8080/images/${props.value.eventImg}`} />
                    <div className="profileinfo">
                        
                            <h1><span>Location:</span> {props.value.location}</h1>
                            <h3><span>Date:</span> {props.value.date}</h3>
                            <p className="bio"><span>Description:</span> {props.value.description}</p>
                    </div>
                </div>
            </div></div>

        </Container>
    );
} export default EventItem;