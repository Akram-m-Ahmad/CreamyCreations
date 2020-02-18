import React, { Component } from 'react';
import * as bootstrap from 'react-bootstrap';
import '../page/Event/Event.css';


function EventItem(props){
    return (
        <bootstrap.Col>
        <bootstrap.Image
            class="pic"
            src={props.source}
            alt={props.alt}
            roundedCircle
            width="200px"
            height="200px"
                    />
        <div class="desc">
            <p><span class="name">Name:</span><large>{props.name}</large></p>
            <p><span class="name">Price:</span><large>{props.price}</large></p>
            <p><span class="name">Ingredients:</span><large>{props.ingredients}</large></p>
        </div>
    </bootstrap.Col>

    );
} export default EventItem;