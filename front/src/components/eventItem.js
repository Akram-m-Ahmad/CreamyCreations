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
                    <div className="firstinfo"><img className="imgev" src={`/Image/${props.value.eventImg}`} />
                        <div className="profileinfo">
                            <h1><span><IoMdPin style={{fontSize: "50px"}, {color: "#215c5c"}}/></span> {props.value.location}</h1>
                            <h3><span><IoMdCalendar style={{fontSize: "50px"}, {color: "#215c5c"}}/></span> {props.value.date}</h3>
                            <h4 className="bio"><span><MdDescription style={{fontSize: "50px"}, {color: "#215c5c"}}/></span> {props.value.description}</h4>
                        </div>
                    </div>
                </div>
{/*                 <div className="badgescard"> <span className="devicons devicons-django" /><span className="devicons devicons-python"> </span><span className="devicons devicons-codepen" /><span className="devicons devicons-javascript_badge" /><span className="devicons devicons-gulp" /><span className="devicons devicons-angular" /><span className="devicons devicons-sass"> </span></div>
 */}            </div>

        </Container>
    );
} export default EventItem;