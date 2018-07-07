import React from 'react';
//import { setIdToken, setAccessToken } from '../client/AuthService';
import Auth from '../client/Auth';

const auth = new Auth();

class Callback extends React.Component {
    constructor() {
        console.log("callback called");
        super();
    }
    componentDidMount() {
        console.log("mounted callback component");
        auth.handleAuthentication();
    }

    render() {
        const style = {
            textAlign: 'center'
        };
        return (
            <div style={style}>
                <h1>Loading</h1>
            </div>
        )
    }

}

export default Callback;