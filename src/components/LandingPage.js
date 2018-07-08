import React from 'react';
import LoggedInMain from './LoggedInMain';
import Auth from '../client/Auth';

let auth = new Auth();

export default class LandingPage extends React.Component {
    render(){
        if(!auth.isAuthenticated()){
            return (
                <div>
                    <h1 className="welcomeHeader">Please log in</h1>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={()=>auth.login()}>Log In</button>
                    </div>
                </div>
            )
        }
        else return <LoggedInMain />
    }
}