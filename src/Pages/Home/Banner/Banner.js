import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner5 from '../../../images/banner/b-1.1.jpg';

import banner6 from '../../../images/banner/b-6.jpg';
import banner7 from '../../../images/banner/b-7.jpg';


import './Banner.css'



const Banner = () => {
    return (
        <>
            <>
                <Carousel className="banner-container mx-auto ">
                    <Carousel.Item>
                        <img 
                            className="d-block w-100 img"
                            src={banner5}
                            alt="First slide"
                        />
                        <Carousel.Caption className="caption1">
                            <h3>Drone Aerial Photography and
                                Videography</h3>
                            <p>The Ultraportal Drone is the Best for the Video</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img"
                            src={banner6}
                            alt="Second slide"
                        />

                        <Carousel.Caption className="caption2">
                            <h3>Drone Aerial Photography and
                                Videography</h3>
                            <p>The Ultraportal Drone is the Best for the Video</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img"
                            src={banner7}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="caption3">
                            <h3>Drone Aerial Photography and
                                Videography</h3>
                            <p>The Ultraportal Drone is the Best for the Video</p>
                        </Carousel.Caption>
                        
                    </Carousel.Item>
                    
                </Carousel>
            </>
        </>
    );
};

export default Banner;