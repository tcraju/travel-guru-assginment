import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Place.css'
import Location from '../Location/Location';
import { Row, Col, Button } from 'react-bootstrap';

import { ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
 


const Place = () => {

    const first3 = fakeData.slice(0, 3);
    const [place, setPlace] = useState(first3);

    return (
        <>
            <Row>
                <Col md={5} id='place-info'>
                    
                        <h1>{place[0].name}</h1>
                        <p>{place[0].description}</p>
                        {/* <Button className='booking-btn'><span id='place-1'>Booking</span> <FontAwesomeIcon icon={faArrowRight} /></Button> */}
                        {/* <Link to={`/booking/${place.id}`}><Button  className='booking-btn'><span id='place-1'>Booking</span> <ArrowRight/></Button></Link> */}
                        <Link to={`/place-1`}><Button  className='booking-btn'><span id='place-1'>Booking</span> <ArrowRight/></Button></Link>
                   
                </Col>
                <Col md={7} >
                    <Row>
                        {
                            place.map(pls =>
                                <Location pls={pls}>
                                </Location>)
                        }
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Place;
