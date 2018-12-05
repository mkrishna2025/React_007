import React from 'react';

export default class Footer extends React.Component {
    render(){
        return (
            <div id="footer">
                <ul>
                <li class="first">
                    <ul>
                    <li><a href="index">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="menu">Menu</a></li>
                    <li><a href="beer">Beer</a></li>
                    <li><a href="blog">Blog</a></li>
                    <li><a href="contact">Contact Us</a></li>
                    </ul>
                </li>
                <li> <span>Follow us:</span> <a href="#" class="facebook">&nbsp;</a> <a href="#" class="twitter">&nbsp;</a> </li>
                </ul>
                <p>Copyright &copy; 2012 <a href="#">Company Name</a> All rights reserved | Website Template By <a target="_blank" href="http://www.freewebsitetemplates.com/">freewebsitetemplates.com</a></p>
          </div>
        );
    }
}