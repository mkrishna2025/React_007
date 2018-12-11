import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
    onLogin(){
        //this.props.history.push('home');

        localStorage.setItem('role', 'Admin');
        sessionStorage.setItem('isAuthorized', 'true');

       
        //  localStorage.clear();

        this.props.history.push({
            pathname: 'home',
            params: { username: this.username}, // params - hidden variables
            search: 'area=Ameerpet&city=Hyderabad' // search - query string
        });
    }
    render() { 
        return (
        <div> 
            Welcome to Login
            <br/>
            User: <input type='text' onChange={ (event) => this.username = event.target.value } />
            <br/>
            Password: <input type='text' />
            <br/>
            <input type='button' value='Login' onClick={this.onLogin.bind(this)}/>
        </div>
    );
 }
}