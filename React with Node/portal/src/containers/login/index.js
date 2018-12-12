import React, { Component } from 'react';
import './login.css';
import $ from 'jquery';

import logo from '../../assets/images/logo.png';

export default class Login extends Component {

    componentDidMount(){
        var button = $('#login')[0];
        if(button){
            button.style.background = 'yellow';
        }
    }

    onLogin(){
        //this.props.history.push('home');

        localStorage.setItem('role', 'Admin');
        sessionStorage.setItem('isAuthorized', 'true');

       
        //  localStorage.clear();

        /*this.props.history.push({
            pathname: 'home',
            params: { username: this.username}, // params - hidden variables
            search: 'area=Ameerpet&city=Hyderabad' // search - query string
        });*/

        var formData = new FormData();
        formData.append('username', this.username);
        formData.append('password', this.password);

        var me = this;

        fetch('http://trainingkit.azurewebsites.net/api/Users/CheckUserExists', {
            method: 'POST',
            body: formData
        })
        .then( response => {
            return response.json()
        }).then(response => {
            if(response.data && response.success){
                me.props.history.push({
                    pathname: 'home',
                    params: { username: this.username}, // params - hidden variables
                    search: 'area=Ameerpet&city=Hyderabad' // search - query string
                });
            } else {
                alert('Invalid Credentials');
            }
        })
        .catch(error => {

        })

    }
    render() { 
        return (
        <div> 
            <img src={logo} />
            Welcome to Login
            <br/>
            User: <input type='text' onChange={ (event) => this.username = event.target.value } />
            <br/>
            Password: <input type='text' onChange={ event => this.password = event.target.value } />
            <br/>
            <input id='login' type='button' value='Login' onClick={this.onLogin.bind(this)}/>
        </div>
    );
 }
}