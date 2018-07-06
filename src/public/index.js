import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom'
import React, {Component} from 'react';
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom';
import Special from '../components/Special.js';
import LandingPage from '../components/LandingPage';
import LoginForm from '../components/LoginForm.js';
import PrivateRoute from '../components/PrivateRoute.js';


class App extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/foo" component={Special}/>
                    <PrivateRoute path="/bar" component={Special} />
                    <Route exact path="/" component={LandingPage}/>
                </Switch>
            </div>
          );
    }
}

ReactDOM.render(<Router><App/></Router>,document.getElementById('root'));
