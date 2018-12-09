import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slideshow.css';

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
            <Carousel showArrows={false} showThumbs={false} onChange={() => alert('Changed')}>
                {this.state.slides.map(item => <div>
                    <img src={item.path} />
                    <p className="legend">{item.text}</p>
                </div>)}
            </Carousel>
            </div>
        );
    }
}