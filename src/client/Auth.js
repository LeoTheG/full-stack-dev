import auth0 from 'auth0-js';
import history from '../client/History';

export default class Auth {
    constructor() {

        this.auth = new auth0.WebAuth({
            domain: 'workplacemanagement.auth0.com',
            clientID: 'C-jriIsfTLdp1fS_1jDNPeQn9PFczUkY',
            redirectUri: 'http://localhost:3000/callback',
            audience: 'https://workplacemanagement.auth0.com/userinfo',
            responseType: 'token id_token',
            scope: 'openid'
        });
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }
    login() {
        /*
        this.auth.authorize({},(err,authResult)=>{
            console.log("authorized");
        });
        */
       this.auth.authorize();
    }

    handleAuthentication() {
        this.auth.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace('/');
            } else if (err) {
                history.replace('/');
                console.log(err);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        history.replace('/');
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        history.replace('/');
    }

    isAuthenticated() {
        // Check whether the current time is past the 
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}