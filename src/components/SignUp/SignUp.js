import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    



    return (
        <form className='offset-md-4 '>
            <h3>Create an account</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" name='first-name' placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" name='first-name' placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" name='email' placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name='password' placeholder="Enter password" />
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" name='password-confirm' placeholder="Enter password" />
            </div>

            <div className="form-group">                
                <input type="submit" className="form-control" value='Create an Account' />
            </div>
            <p className="forgot-password text-right">
                Already have an account?<Link to="/login">Login</Link>
            </p>
        </form>
    );
};

export default SignUp;