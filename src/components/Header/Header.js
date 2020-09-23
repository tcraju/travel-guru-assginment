import React, { useContext } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logo from '../../images/logo-white.png'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';



const Header = (props) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container className='app-bar-padding'>

            <Row className='app-bar'>
                <Nav>
                    <Col>
                        <Nav.Item>
                            <Link to="/home"><img id='logo-img' src={props.img || logo} alt="" /></Link>
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item>
                            <Link><input type="text" name="" id="search-box" placeholder='Search..' style={{ color: `${props.color}` }} /></Link>
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Link to="/news" style={{ color: `${props.color}` }}> News</Link>
                    </Col>
                    <Col>
                        <Link to="/destination" style={{ color: `${props.color}` }}> Destination</Link>
                    </Col>
                    <Col>
                        <Link to="/blog" style={{ color: `${props.color}` }}>Blog</Link>
                    </Col>
                    <Col>
                        <Link to="/contact" style={{ color: `${props.color}` }}>Contact</Link>
                    </Col>
                    <Col>
                        {loggedInUser.email ? <Link> <button className='login-btn' onClick={() => setLoggedInUser({})}>Sign Out</button> </Link>
                            : <Link to="/login"> <button className='login-btn' >Login</button> </Link>}
                    </Col>
                </Nav>
                {loggedInUser.email && <p id='user-name' style={{ color: `${props.color}` }}> {loggedInUser.name}</p>}
            </Row>
        </Container>
    );
};

export default Header;