import React from 'react';
import { login } from '../client/AuthService';

class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <h1 className="welcomeHeader">Welcome to Leo's Workplace Management</h1>
                <div className="row align-items-center justify-content-center">
                    <form className="loginForm">
                        <div className="form-group">
                            <label htmlFor="userEmail">Email address</label>
                            <input type="email" className="form-control" id="loginEmail" placeholder="Enter email">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userPassword">Password</label>
                            <input type="password" className="form-control" id="loginPassword" placeholder="Password">
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={()=>login()}>Log In</button>
                    </form>
                </div>
                    <h3 className="registerText">Don't have an account? <a href="/register">register</a>!</h3>
            </div>
        );
    }
};


export default LoginForm;
