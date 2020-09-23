import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
// import Header from '../../Header/Header';
import logo from '../../images/logo-black.png'
import './LocationDetail.css'
import { StarFill} from 'react-bootstrap-icons';
import Header from '../Header/Header';
import LocationMap from '../LocationMap/LocationMap';

const LocationDetail = () => {
    const { id } = useParams();
    let bookingPlace = fakeData.find((pls) => pls.id === id);
    if (!bookingPlace){bookingPlace= fakeData[0]}
    const {suit1, suit2, suit3 } =bookingPlace
    console.log(suit1, suit2, suit3);


    return (
        <>
        <Header img={logo} color="black"></Header>
        <Container>
            
            <p> 252 stays Apr 13-17 3 guest</p>
            <h3>Stay in {bookingPlace.name}</h3>
            <Row>
                <Col md={7}>
                    <Row className='suit-area'>
                        <Col md={5} className='suit-pic'>
                            <img src={suit1.pic}  alt=""/>                            
                        </Col>
                        <Col md={7} className='suit-detail'>
                            <h5>{suit1.title}</h5>                            
                            <p><span>{suit1.guest} guests</span> <span>{suit1.bedroom} bedrooms</span> <span>{suit1.bed} beds</span> <span>{suit1.bath} baths</span></p>
                            <p>Wifi Air conditioning kitchen</p>
                            <p>Cancellation flexibility available</p>
                            <p> <StarFill className='star'/> <span>{suit1.rating}</span> <span>${suit1.rate}/night</span></p>
                        </Col>
                    </Row>
                    <Row className='suit-area'> 
                        <Col md={5} className='suit-pic'>
                            <img src={suit2.pic}  alt=""/>                            
                        </Col>
                        <Col md={7} className='suit-detail'>
                            <h5>{suit2.title}</h5>                            
                            <p><span>{suit2.guest} guests</span> <span>{suit2.bedroom} bedrooms</span> <span>{suit2.bed} beds</span> <span>{suit2.bath} baths</span></p>
                            <p>Wifi Air conditioning kitchen</p>
                            <p>Cancellation flexibility available</p>
                            <p> <StarFill className='star'/> <span>{suit2.rating}</span> <span>${suit2.rate}/night</span></p>
                        </Col>
                    </Row>
                    <Row className='suit-area'>
                    <Col md={5} className='suit-pic'>
                            <img src={suit3.pic}  alt=""/>                            
                        </Col>
                        <Col md={7} className='suit-detail'>
                            <h5>{suit3.title}</h5>                            
                            <p><span>{suit3.guest} guests</span> <span>{suit3.bedroom} bedrooms</span> <span>{suit3.bed} beds</span> <span>{suit3.bath} baths</span></p>
                            <p>Wifi Air conditioning kitchen</p>
                            <p>Cancellation flexibility available</p>
                            <p> <StarFill className='star'/> <span>{suit3.rating}</span> <span>${suit3.rate}/night</span></p>
                        </Col>
                    </Row>
                </Col>
                <Col md={5}>
                    <LocationMap></LocationMap>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default LocationDetail;