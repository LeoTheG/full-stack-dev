import ReactDOM from 'react-dom';
import React from 'react';

import LoginForm from '../components/LoginForm';

class App extends React.Component{

    render(){
        return(
            <div>
                <LoginForm />
            </div>
              )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
