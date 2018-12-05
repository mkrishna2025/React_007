import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default class Master extends React.Component {
    render(){
        return (
            <div id="background">
                <div id="page">
                    <Header/>
                    {this.props.children}
                    <Footer />
                </div>
            </div>
        );
    }
}