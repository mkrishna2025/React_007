import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Testing the routes
//import App from './App_RoutingSample';

// All components in single place
//import App from './App_old';

import App from './App';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter, HashRouter } from 'react-router-dom';

//ReactDOM.render(<App />, document.getElementById('root'));

/*ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));*/

ReactDOM.render(
    <HashRouter><App /></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
