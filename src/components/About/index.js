import React, {useEffect, useState} from 'react'
import 'aos/dist/aos.css'
import './style.css'
import headshot from '../../assets/images/small-headshot.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function About() {
    const [width, setWidth] = useState(window.innerWidth)

    const updateWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    })

    const langCardComp = `https://github-readme-stats.vercel.app/api/top-langs/?username=ian-sieg&card_width=${width/2.25}&layout=compact&langs_count=6&title_color=FFF&text_color=f5f5f5&icon_color=14b8a6&bg_color=0C1B00AA&hide_border=true&locale=en&custom_title=Top%20%Languages`

    const langCardMobile = `https://github-readme-stats.vercel.app/api/top-langs/?username=ian-sieg&card_width=${width*0.8}&layout=compact&langs_count=6&title_color=FFF&text_color=f5f5f5&icon_color=14b8a6&bg_color=0C1B00AA&hide_border=true&locale=en&custom_title=Top%20%Languages`

    return(
        <section id='about' className='about-sect'>
            {width >= 992 ?
            <>
            <div className='section-title'>
                <h1>about</h1>
                <hr/>
            </div>
                <Row className='grid-align-comp'>
                    <Col xl='4' lg='5' xs='6' data-aos='fade-down' data-aos-duration='1500'><Image fluid rounded src={headshot}/></Col>
                    <Col>
                        <p data-aos='fade-up' data-aos-duration='1000'>Full stack web application developer and dynamic problem solver with a background in graphic design and communications. A quick-study who enjoys working collaboratively to build accessible, secure websites and develop creative solutions to issues. Strong organization and leadership abilities.</p>

                        <a href="https://github.com/ian-sieg" target='_blank' rel='noreferrer'><img src={langCardComp} alt="Ian Sieg's Top Languages" className='lang-card' data-aos='fade-up' data-aos-duration='1250' /></a>
                        <Row data-aos='fade-up' data-aos-duration='1500'>
                            <Col>
                                <hr/>
                                <b>Contact</b>
                                <p>ianmsieg@gmail.com</p>
                            </Col>
                            <Col>
                                <hr/>
                                <b>location</b>
                                <p>chicago, il</p>
                            </Col>
                        </Row>
                    </Col>
                </Row> 
                </>
                :
                <Container>
                    <div>
                        <h1>about</h1>
                        <hr/>
                    </div>
                    <Row className='grid-align-mobile' data-aos='fade-up' data-aos-duration='1000'>
                        <Col s='6'><Image fluid rounded className='mb-3' src={headshot}/></Col>
                        <Col s='6'>
                            <b>Contact</b>
                            <p>ianmsieg@gmail.com</p>
                            <hr/>
                            <b>location</b>
                            <p>chicago, il</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p data-aos='fade-up' data-aos-duration='1250'>Full stack web application developer and dynamic problem solver with a background in graphic design and communications. A quick-study who enjoys working collaboratively to build accessible, secure websites and develop creative solutions to issues. Strong organization and leadership abilities.</p>

                            <a href="https://github.com/ian-sieg" target='_blank' rel='noreferrer'><img src={langCardMobile} alt="Ian Sieg's Top Languages" className='lang-card' data-aos='fade-up' data-aos-duration='1500'/></a>
                        </Col>
                    </Row>
                </Container>
            }
        </section>
    )
}