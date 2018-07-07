import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from '../client/Auth';

const auth = new Auth();

// Wrapper allowing only authenticated users to access certain pages
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            auth.isAuthenticated() ? (<Component {...props} />)
                : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
        )}
        />
    )
}
export default PrivateRoute;