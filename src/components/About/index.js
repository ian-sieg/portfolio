import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'

import headshot from '../../images/small-headshot.jpg'

AOS.init()

export default function About() {
    return(
            <section id='about'>
                <div className='comp-about'>
                    <Grid relaxed padded doubling columns={3}>
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column>
                                <Image src={headshot} data-aos='fade-right' data-aos-duration='1000'/>
                            </Grid.Column>
                            <Grid.Column data-aos='fade-left' data-aos-duration='1000'>
                                <hr/>
                                <h1>contact</h1>
                                <p>ianmsieg@gmail.com</p>
                            </Grid.Column>
                            <Grid.Column data-aos='fade-left' data-aos-duration='1000'>
                                <hr/>
                                <h1>location</h1>
                                <p>chicago, il</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>

                <div className='mobile-about'>
                    <Grid relaxed padded>
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column mobile={8}>
                                <Image src={headshot} data-aos='fade-right' data-aos-duration='1000'/>
                            </Grid.Column>
                            
                            <Grid.Column mobile={8}>
                                <Grid.Column data-aos='fade-left' data-aos-duration='1000'>
                                        <hr/>
                                        <h1>contact</h1>
                                        <p>ianmsieg@gmail.com</p>
                                    </Grid.Column>
                                    <Grid.Column data-aos='fade-left' data-aos-duration='1000'>
                                        <hr/>
                                        <h1>location</h1>
                                        <p>chicago, il</p>
                                    </Grid.Column>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </section>
    )
}