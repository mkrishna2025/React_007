import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginScreen from './containers/login';
import HomeScreen from './containers/home';
import SlideScreen from './containers/slideshow';
import MapScreen from './containers/maps';
import UnImplementedScreen from './containers/unimplemented';
import MaterialScreen from './containers/material';
import MaterialScreen2 from './containers/material/demo2';
import MaterialScreen3 from './containers/material/demo3';
import AntScreen from './containers/ant';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={LoginScreen} />
                <Route path="/home" component={HomeScreen} />
                <Route path="/slides" component={SlideScreen} />
                <Route path="/map" component={MapScreen} />
                <Route path="/materialdemo1" component={MaterialScreen} />
                <Route path="/materialdemo2" component={MaterialScreen2} />
                <Route path="/materialdemo3" component={MaterialScreen3} />
                <Route path="/ant" component={AntScreen} />
                <Route path="*" component={UnImplementedScreen} />
            </Switch>
        );
    }
}

export default App;