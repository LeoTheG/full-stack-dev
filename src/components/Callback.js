import React from 'react';
import {setIdToken, setAccessToken} from '../client/AuthService';

class Callback extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        setAccessToken();
        setIdToken();
        window.location.href='/';
    }

    render(){
        return null;
    }
}

export default Callback;