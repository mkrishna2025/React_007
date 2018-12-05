import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginScreen from './containers/login';
import HomeScreen from './containers/home';
import UnImplementedScreen from './containers/unimplemented';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={LoginScreen} />
                <Route path="/home" component={HomeScreen} />
                <Route path="*" component={UnImplementedScreen} />
            </Switch>
        );
    }
}

export default App;