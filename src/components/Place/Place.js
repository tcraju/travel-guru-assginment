import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Place.css'
import Location from '../Location/Location';
import { Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Place = () => {

    const first3 = fakeData.slice(0, 3);
    const [place, setPlace] = useState(first3);

    return (
        <Row>
            <Col md={5} id='place-info'>

                <h1>{place[0].name}</h1>
                <p>{place[0].description}</p>
                <Link to={`/place-1`} className='booking-btn'><span id='place-1'>Booking</span> <ArrowRight /></Link>

            </Col>
            <Col md={7}>
                <Row>
                    {
                        place.map(pls =>
                            <Location pls={pls}>
                            </Location>)
                    }
                </Row>
            </Col>
        </Row>
    );
};

export default Place;

