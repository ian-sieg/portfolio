import React, {useState, useEffect} from "react"
import { useHorizontalScroll } from "../../assets/utils/horizontalScroll"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './style.css'

export default function Projects (props) {
    const scrollRef = useHorizontalScroll()

    const mouseEnter = (e) => {
        if (e.target.nextSibling.classList.contains('card-content')) {
            e.target.nextSibling.classList.toggle('invis')
        }
    }
    const mouseExit = (e) => {
        if (e.target.classList.contains('card-content')){
            e.target.classList.toggle('invis')
        } else if (e.target.offsetParent.classList.contains('card-content')){
            e.target.offsetParent.classList.toggle('invis')
        }
    }

    const [width, setWidth] = useState(window.innerWidth)

    const updateWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    })

    return(
        <>
            {width >= 992 ? 
            <>
                <div className='section-title'>
                    <h1>portfolio</h1>
                    <hr/>
                </div>
                <div ref={scrollRef} className='container-scroll' data-aos='fade-left' data-aos-duration='1500'>
                <div className="row-scroll">
                {props.projArr.map(proj => 
                    <Card className='card-sizing' key={proj.id}>
                        <Card.Img src={proj.image} className='img-sizing' onMouseEnter={mouseEnter}/>
                        <Card.ImgOverlay className="card-content invis"  onMouseLeave={mouseExit} >
                            <Card.Body>
                                <Card.Title className='mb-3'><b>{proj.title}</b></Card.Title>
                                <hr/>
                                <Card.Text><b>Description:</b> {proj.info}</Card.Text>
                                <Card.Text><b>Tools:</b> {proj.tools}</Card.Text>
                                {proj.resp ? <Card.Text><b>Core Responsibilities:</b> {proj.resp}</Card.Text> : null}
                                <Button href={proj.repo} target='_blank' rel='noreferrer' className="card-btns" variant="dark"><i className="fa-brands fa-github"/></Button>
                                <Button href={proj.link} target='_blank' rel='noreferrer' className="card-btns" variant="dark"><i className="fa-solid fa-link"/></Button>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                )}
                </div>
            </div>
            </>
            :
            <Container>
                <div>
                    <h1>portfolio</h1>
                    <hr/>
                </div>
                {props.projArr.map(proj =>
                        <Row>
                            <Col>
                                <Card className="mobile-proj-card" text="white" key={proj.id} data-aos='fade-up' data-aos-duration='1250'>
                                    <Card.Img variant="top" src={proj.image} />
                                    <Card.Body>
                                        <Card.Title>{proj.title}</Card.Title>
                                        <Card.Text><b>Description:</b> {proj.info}</Card.Text>
                                        <Card.Text><b>Tools:</b> {proj.tools}</Card.Text>
                                        {proj.resp ? <Card.Text><b>Core Responsibilities:</b> {proj.resp}</Card.Text> : null}
                                        <Button href={proj.repo} target='_blank' rel='noreferrer' className="card-btns" variant="dark"><i className="fa-brands fa-github"/></Button>
                                <Button href={proj.link} target='_blank' rel='noreferrer' className="card-btns" variant="dark"><i className="fa-solid fa-link"/></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
            </Container>
            }
        </>
    )

}