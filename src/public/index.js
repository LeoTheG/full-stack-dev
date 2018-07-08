import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Special from '../components/Special.js';
import LandingPage from '../components/LandingPage';
import LoginForm from '../components/LoginForm.js';
import PrivateRoute from '../components/PrivateRoute.js';
import Callback from '../components/Callback.js';
import Auth from '../client/Auth';
import history from '../client/History';
import Menu from '../components/Menu';

const auth = new Auth();



class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/foo" render={() => (auth.isAuthenticated() ? (<div>User authenticated</div>) : (<div>Not authenticated</div>))} />
                    <Route exact path="/callback" component={Callback} />
                    <PrivateRoute exact path="/bar" component={Special} />
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<Router history={history}><App /></Router>, document.getElementById('root'));
/*

                    <Route path="/callback" render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} />
                    }} />

*/