import React from 'react';

export default class Header extends React.Component {
    render(){
        return (
            <div id="header">
                <ul class="navigation">
                    <li><a href="food">OUR FOOD</a></li>
                    <li><a href="beer">OUR BEER</a></li>
                </ul>
                <a id="logo" href="/"><img src="images/logo.jpg" width="276" height="203" alt="" /></a>
                <ul id="navigation">
                    <li><a href="reservation">RESERVATION</a></li>
                    <li><a href="contact">CONTACT US</a></li>
                </ul>
            </div>
        );
    }
}