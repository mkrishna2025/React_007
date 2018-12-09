import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slideshow.css';

export default ({ slides }) => 
    <Carousel showArrows={false} showThumbs={false}>
    {slides.map(item => <div>
        <img src={item.path} />
        <p className="legend">{item.text}</p>
    </div>)}
    </Carousel>