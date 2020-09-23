import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/index'
import Header from '../Header/Header';
import './Booking.css'

const Booking = () => {

    const { id } = useParams();

    let bookingPlace = fakeData.find((pls) => pls.id === id);
    if (!bookingPlace){bookingPlace= fakeData[0]}
    // console.log(name, description);
    const [date, setDate] = useState(new Date());
    const datePicker = () => {

        const handleCalendarClose = () => console.log("Calendar closed");
        const handleCalendarOpen = () => console.log("Calendar opened");

        return (
            <ReactDatePicker
                selected={date}
                onChange={date => setDate(date)}
                onCalendarClose={handleCalendarClose}
                onCalendarOpen={handleCalendarOpen}
            />
        );
    };
    const history=useHistory()
    const submitHandler =(e)=>{
        e.preventDefault()
        history.push(`/${id}/booking`)
    }

    return (
        <div className='booking-page'>
            <div className='color-shed'>
                <Header></Header>
                <Container >
                    <Row>
                        <Col md={5} className='place-info'>
                            <h1>{bookingPlace.name}</h1>
                            <p>{bookingPlace.description}</p>
                        </Col>
                        <Col md={7}>
                            <Form ClassName='booking-form' onSubmit={submitHandler} >

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label >Origin</Form.Label>

                                    <Form.Control placeholder="Insert Location" required/>
                                </Form.Group>

                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control placeholder={bookingPlace.name} required/>
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>From</Form.Label>
                                        <Form.Control type="date" id="start" name="trip-start" onClick={() => datePicker()} required />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>To</Form.Label>
                                        <Form.Control type="date" id="end" name="trip-end" onClick={() => datePicker()}/>
                                    </Form.Group>
                                </Form.Row>


                                {/* <Link to = {`/${id}/booking`}> */}
                                    <Button variant="primary" type="submit">
                                        Start Booking
                                    </Button>
                                {/* </Link> */}
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Booking;