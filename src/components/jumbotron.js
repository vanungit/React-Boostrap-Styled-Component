import React from 'react'
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import styled from 'styled-components'
import img from '../Utils/img/spirit_island_maligne_lake_jasper_national_park_alberta_canada-wallpaper-1366x768.jpg'

const Styles = styled.div`
 .jumbo{
 background:url(${img}) no-repeat fixed bottom !important;
 background-size:cover;
 color:#efefef;
 height:400px;
 position:relative;
 z-index:-2;
 }
`

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className='jumbo'>
                <div className="overlay">
                    <Container>
                        <h1>For more information</h1>
                        <p>Like most people in Russia, self-isolation also affected me.
                            The first couple of weeks were unusual, but bearable. The
                            weather in Moscow maximally contributed not to leave the house.
                            I watched films for which there was no time before, took things apart,
                            threw away everything unnecessary. But then the restriction of freedom
                            began to oppress and the inability to walk did not have the best effect on
                            the state of health. Taking out the trash and going to the store became
                            a holiday, but very short-term.
                        </p>
                    </Container>
                </div>

            </Jumbo>
        </Styles>
    )
}
export default Jumbotron