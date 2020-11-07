import React from 'react'
import {Carousel} from "react-bootstrap";
import img1 from '../Utils/img/sun_rays_through_the_forest_trees_road-wallpaper-1366x768.jpg'
import img2 from '../Utils/img/spirit_island_maligne_lake_jasper_national_park_alberta_canada-wallpaper-1366x768.jpg'
import img3 from '../Utils/img/path_forest_bluebells_spring-wallpaper-1366x768.jpg'


export default function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item >
                    <img
                        src={img3}
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
                        src={img2}
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
                        src={img1}
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