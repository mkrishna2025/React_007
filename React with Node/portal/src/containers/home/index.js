import React, { Component } from 'react';
import './home.css';

import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        var queryparams = new URLSearchParams(this.props.location.search);
        return (
        <div> 
            Welcome to Home, { this.props.location.params && this.props.location.params.username}, {queryparams.get('area')}, {queryparams.get('city')}
            <Link to={{
                pathname: '/google.com',
                search: 'username=karthik',
                params: { secretAccessKey: '123456' }
                }}> Google </Link>
            <input type='button' value='Back' onClick={() => {
                this.props.history.goBack()
            }} />
        </div>
        ) 
    }
}