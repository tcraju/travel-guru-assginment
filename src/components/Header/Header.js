import React, { useContext } from 'react';
import { Col, Container, Nav,  Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logo from '../../images/logo-white.png'
import { UserContext } from '../../App';
import { handleSignOut } from '../Login/LoginManager';



const Header = (props) => {



    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container className='app-bar-padding'>
         
            <Row className='app-bar'>
                <Nav>
                    <Col>
                        <Nav.Item>
                            <Nav.Link href="/home"><img id='logo-img' src={props.img || logo} alt="" /></Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item>
                            <Nav.Link><input type="text" name="" id="search-box" placeholder='Search..' style={{ color:`${props.color}`}}/></Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Link href="/news" style={{ color:`${props.color}`}}> News</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="/destination" style={{ color:`${props.color}`}}> Destination</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="/blog" style={{ color:`${props.color}`}}>Blog</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="/contact" style={{ color:`${props.color}`}}>Contact</Nav.Link>
                    </Col>
                    <Col>
                        {loggedInUser.email ? <Nav.Link> <button className='login-btn' onClick={()=> setLoggedInUser({})}>Sign Out</button> </Nav.Link>
                        :<Nav.Link href="/login"> <button className='login-btn' >Login</button> </Nav.Link>}
                    </Col>
                </Nav>
            </Row>


        </Container>
    );
};

export default Header;