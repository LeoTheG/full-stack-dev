# Full-Stack Development

Aim to create a site with user registration, authentication, api, and front-end displaying data through api calls. Current plan is employee management site where managers & employees can log in for scheduling and other uses.

## Parts

### Back-end
- nodejs
- express
- mongodb
- auth0
### Front-end
- react

### Other stuff
- babel: transform code to make compilable
- webpack: module bundler for usage in browser
- webpack dev server: development server with live reloading for client-side code
- nodemon: monitors changes in server source code & automatically restarts
- react router for front-end routing, express for server side (like api)

Initial core from tutorial https://hackernoon.com/full-stack-web-application-using-react-node-js-express-and-webpack-97dbd5b9d708

## Currently

Webpack dev server listens on port 3000 and proxies  page from express (on port 8081). MongoDB + express backend filled with random data filled with random data. Uses auth0 for authentication.

## TODO

- create subdomains for api using vhost
- authenticate site (user login, registration)
