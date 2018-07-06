import React from 'react';
import {login, logout, isLoggedIn} from '../client/AuthService';
import LoggedInMain from './LoggedInMain';
import LoginForm from './LoginForm';

export default class LandingPage extends React.Component {
    render(){
        if(isLoggedIn()){
            return <LoggedInMain />
        }
        else return <LoginForm />
    }
}