import React, { useContext, useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import './Login.css'
import Header from '../Header/Header';
import logo from '../../images/logo-black.png'






const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        photo: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })

    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;

            setUser(newUserInfo);
            console.log(user);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.password !== user.passwordConfirm) {
            alert("Password doesn't match");
            e.preventDefault();

        } else

            if (newUser && user.email && user.password) {
                createUserWithEmailAndPassword(user.firstName, user.lastName, user.email, user.password)
                    .then(res => {
                        handleResponse(res, true);
                    })
            }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();


    }


    return (
        <> 
        <Header img={logo} color="black"></Header>
        <Container>
            
            <Row className="justify-content-center container">

                <Form onSubmit={handleSubmit} className='form-area'>
                    {newUser &&
                        <Form.Group>                            
                            <Form.Control type="text" name="firstName" onBlur={handleBlur} placeholder="First Name" required />
                        </Form.Group>}
                    {newUser &&
                        <Form.Group>                            
                            <Form.Control type="text" name="lastName" onBlur={handleBlur} placeholder="Last Name" required />
                        </Form.Group>
                    }
                    <Form.Group controlId="formBasicEmail">                        
                        <Form.Control type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">                        
                        <Form.Control type="password" name="password" className='password-int' onBlur={handleBlur} placeholder="Your Password" required />
                    </Form.Group>
                    {newUser &&
                        <Form.Group controlId="formConfirmPassword">                            
                            <Form.Control type="password" name="passwordConfirm" className='password-confirm' onBlur={handleBlur} placeholder="Confirm Password" required />
                        </Form.Group>}
                    <Form.Group controlId="formSubmit">
                        {newUser ?
                            <Form.Control type="submit" value="Create Account" /> : <Form.Control type="submit" value="Sign In" />
                        }
                    </Form.Group>
                    <Form.Group>
                        {newUser ?
                            <p>Already have an account? <Link onClick={() => setNewUser(!newUser)}>Sign in</Link ></p> : <p>New User? <Link onClick={() => setNewUser(!newUser)}>Sign Up</Link></p>
                        }
                    </Form.Group>
                </Form>
            </Row>
            <div className='additional-area'>
                <div className="separator"> <p>Or</p> </div>
                <Link><div className='other-login-method' onClick={fbSignIn}> <img src="https://iili.io/2RYbON.png" alt=""/> <span>Continue with facebook</span> </div></Link>
                <Link><div className='other-login-method' onClick={googleSignIn}> <img src="https://iili.io/2RYDRp.png" alt=""/> <span>Continue with Google</span> </div></Link>
            </div>
            


        </Container>
        </>
    );
};

export default Login;