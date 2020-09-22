import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';







const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
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
        if (newUser && user.password !==user.passwordConfirm){
            alert("Password no match");
            e.preventDefault();
            
        } else
        
        if (newUser && user.email && user.password) {            
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
        console.log(user.passwordConfirm, user.password);

    }


    const handleSignIn = (e) => {
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }


    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name" />}
                <br />
                <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                <br />
                <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
            </form> */}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="name" onBlur={handleBlur} placeholder="First Name" required/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" className='password-int' onBlur={handleBlur} placeholder="Your Password" required />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Password Confirm</Form.Label>
                    <Form.Control type="password" name="passwordConfirm"  className='password-confirm' onBlur={handleBlur}  placeholder="Confirm Password"  required />
                </Form.Group>
                <Form.Group controlId="formSubmit">
                    
                    <Form.Control type="submit" value="Create Account" />
                </Form.Group>
            </Form>




        </div>
    );
};

export default Login;