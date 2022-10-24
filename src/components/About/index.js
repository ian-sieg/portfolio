import React, {useEffect, useState} from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'
import 'aos/dist/aos.css'
import './style.css'

import headshot from '../../images/small-headshot.jpg'

export default function About() {
    const [width, setWidth] = useState(window.innerWidth)

    const updateWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    })

    return(
        <section id='about' className='about-sect'>
            {width >= 990 ?
                <div>
                    <Grid relaxed padded doubling>
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column width={4}>
                                <Image src={headshot} data-aos='fade-right' data-aos-duration='1000'/>
                            </Grid.Column>
                            <Grid.Column width={12} data-aos='fade-left' data-aos-duration='1000'>
                                <Segment basic vertical>
                                    <p>
                                        Full stack web application developer and dynamic problem solver with a background in graphic design and communications, administration, and resource development. A quick-study who enjoys working collaboratively to build accessible, secure websites and develop creative solutions to issues. Strong organization and leadership abilities.
                                    </p>
                                </Segment>
                                <Segment.Group horizontal className='segment-group-style'>
                                    <Segment vertical className='segment-style-l'>
                                        <hr/>
                                        <h1>contact</h1>
                                        <p>ianmsieg@gmail.com</p>
                                    </Segment>
                                    <Segment vertical className='segment-style-r'>
                                        <hr/>
                                        <h1>location</h1>
                                        <p>chicago, il</p>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div> :

                <div>
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
                        <Grid.Row>
                            <Grid.Column data-aos='fade-up' data-aos-duration='1000'>
                                <p>
                                Full stack web application developer and dynamic problem solver with a background in graphic design and communications, administration, and resource development. A quick-study who enjoys working collaboratively to build accessible, secure websites and develop creative solutions to issues. Strong organization and leadership abilities.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            }
        </section>
    )
}