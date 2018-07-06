import React from 'react';
import { logout } from '../client/AuthService';

export default class LoggedInMain extends React.Component {
    render() {
        return (
            <div>
                <h1>You are logged in</h1>
                <button className="btn btn-danger log" onClick={() => logout()}>Log Out</button>
            </div>
        );
    }
}