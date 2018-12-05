import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Login extends Component {
    render() { return (<div> Welcome to Login</div>) }
}
class Home extends Component {
    render() { return (<div> Welcome to Demo</div>) }
}
class UnImplemented extends Component {
    render() { return (<div> Need to Implement</div>) }
}

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="*" component={UnImplemented} />
            </Switch>
        );
    }
}

export default App;