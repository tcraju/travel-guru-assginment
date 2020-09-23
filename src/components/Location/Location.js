import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Col } from 'react-bootstrap';
import './Location.css'


const Location = (props) => {

    const { image, name, id, description } = props.pls
    // console.log(props.pls);

    const clickHandler = () => {
        const placeInfo = document.getElementById('place-info');
        placeInfo.innerHTML = `  <h1>${name}</h1>
                                 <p>${description}</p>
                                 <a href='/${id}'>
                                 <Button className='booking-btn btn-primary' style="color:black;width: 150px;background-color: #F9A51A; border-radius: 10px;height: 35px;
                                 border:none"><span id=${id}>Booking</span>
                                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                                 </Button> 
                                 </a>`;
    }
    
    return (

        <Col md={4} sm={4} className='single-location' key={id} onClick={() => clickHandler()}>

            <img id={id} src={image} alt="" />

            <h5>{name}</h5>

        </Col>
    );
};

export default Location;