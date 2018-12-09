import React, { Component } from 'react';
import SlideComponent from './slidecomponent.js';

export default class DemoCarousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            slides: []
        }
    }
    render() {
        return (
            <div>
                <input type='button' value='Load' onClick={() => this.setState({
                    slides: [
                        { text: 'Legend 1', path: 'assets/images/1.jpeg' },
                        { text: 'Legend 2', path: 'assets/images/2.jpeg' },
                        { text: 'Legend 3', path: 'assets/images/3.jpeg' },
                        { text: 'Legend 4', path: 'assets/images/4.jpeg' },
                        { text: 'Legend 5', path: 'assets/images/5.jpeg' }
                    ]
                })}/>
            <SlideComponent slides={this.state.slides} />
            </div>
        );
    }
}