import React from 'react';
import Auth from '../client/Auth';
import user from '../components/User';
import axios from 'axios';
import Calendar from 'rc-calendar';
import TimePicker from 'rc-time-picker/lib/Panel';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

const auth = new Auth();

/*
    Displayed when user is logged in (on root /)
    Performs /userinfo API call once to grab user info
*/
export default class LoggedInMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            axios: {
                url: "https://workplacemanagement.auth0.com/userinfo",
                data: {},
                config: {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                        'Content-Type': 'application/json'
                    }
                }
            },
            user: {
                email: '',
                name: {
                    first: '',
                    last: ''
                }
            },
            style: {
                'marginTop': '5rem'
            },
            timePickerElement : <TimePicker 
                showSecond={false}
                defaultValue = {moment().hour(0).minute(0)}
            />
        };
    }
    componentDidMount() {
        if(user.info.email==''){
            // post request to /userinfo for basic user info
            axios.post(this.state.axios.url, this.state.axios.data, this.state.axios.config)
                .then((res) => {
                    const userInfo = {
                        email: res.data.email,
                        name: {
                            first: res.data.given_name,
                            last: res.data.family_name
                        }
                    }
                    user.setInfo(userInfo);
                    this.forceUpdate();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    render() {
        return (
            <div>
                <center>
                    <h1>Hello, {user.info.name.first}</h1>
                    <Calendar timePicker={this.state.timePickerElement} style={this.state.style} />
                </center>
            </div>
        );
    }
}