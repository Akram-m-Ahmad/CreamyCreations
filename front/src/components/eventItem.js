import React from 'react';
import * as bootstrap from 'react-bootstrap';
import '../page/Event/Event.css';


function EventItem(props) {
    return (
        <bootstrap.Col>
            <bootstrap.Image
                className="pic"
                src={`/Image/${props.value.eventImg}`}

                 
                width="200px"
                height="200px"
            />

            <div class="desc">
                <p><span class="name">Name:</span><large>{props.value.description}</large></p>
                <p><span class="name">Price:</span><large>{props.value.location}</large></p>
                <p><span class="name">Ingredients:</span><large>{props.value.date}</large></p>
            </div>
        </bootstrap.Col>

    );
} export default EventItem;