import React from 'react';

// used for testing purposes
class Special extends React.Component {
    componentWillMount() {
        console.log("in special");
    }
    render() {
        return <h1>Special page</h1>
    }
};

export default Special;
