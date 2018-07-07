import React from 'react';
import Auth from '../client/Auth';

const auth = new Auth();

export default class LoggedInMain extends React.Component {
    render() {
        return (
            <div>
                <center>
                <h1>You are logged in</h1>
                <button className="btn btn-danger log" onClick={() => auth.logout()}>Log Out</button>
                </center>
            </div>
        );
    }
}