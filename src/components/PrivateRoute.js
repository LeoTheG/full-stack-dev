import React from 'react';
import { requireAuth, isLoggedIn } from '../client/AuthService';
import { Redirect, Route } from 'react-router-dom';

// Wrapper allowing only authenticated users to access certain pages
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            isLoggedIn() ? (<Component {...props} />)
                : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
        )}
        />
    )
}
export default PrivateRoute;