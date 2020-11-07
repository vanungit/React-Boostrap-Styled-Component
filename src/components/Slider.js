import React from 'react'
import {Carousel} from "react-bootstrap";
import {img} from '../Utils/img/index'



export default function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item >
                    <img
                        src={img.img3}
                        className='d-block w-100 '
                        alt='First image'
                        style={{'height':'500px'}}
                    />
                    <Carousel.Caption>
                        <h3>Select your place</h3>
                        <p> Wishing you all a Happy Fall Weekend </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        src={img.img2}
                        className='d-block w-100'
                        alt='First image'
                        style={{'height':'500px'}}
                    />
                    <Carousel.Caption>
                        <h3>Select your place</h3>
                        <p> Wishing you all a Happy Fall Weekend </p>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item >
                    <img
                        src={img.img1}
                        className='d-block w-100'
                        alt='First image'
                        style={{'height':'500px'}}
                    />
                    <Carousel.Caption>
                        <h3>Select your place</h3>
                        <p> Wishing you all a Happy Fall Weekend </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}