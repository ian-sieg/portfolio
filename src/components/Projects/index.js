import React from "react"
import { useHorizontalScroll } from "../../assets/utils/horizontalScroll"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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

    return(
            <div ref={scrollRef} className='container-scroll'>
                <div className="row-scroll">
                {props.projArr.map(proj => 
                    <Card className='card-sizing' key={proj.id}>
                        <Card.Img src={proj.image} className='img-sizing' onMouseEnter={mouseEnter}/>
                        <Card.ImgOverlay className="card-content invis"  onMouseLeave={mouseExit} >
                            <Card.Body>
                                <Card.Title className='mb-3'>{proj.title}</Card.Title>
                                <Card.Text><b>Description:</b> {proj.info}</Card.Text>
                                <Card.Text><b>Tools:</b> {proj.tools}</Card.Text>
                                {proj.resp ? <Card.Text><b>Core Responsibilities:</b> {proj.resp}</Card.Text> : null}
                                <Button href={proj.repo} target='_blank' rel='noreferrer' className="card-btns"><i className="fa-brands fa-github"/></Button>
                                <Button href={proj.link} target='_blank' rel='noreferrer' className="card-btns"><i className="fa-solid fa-link"/></Button>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                )}
                </div>
            </div>

// {/* <Card className="text-dark test">
// <Card.Header>{proj.title}</Card.Header>
// <Card.Img src={proj.image} className='imgtest' />
// </Card> */}

        // <Grid className="test">
        //     <Grid.Row verticalAlign="middle" columns={5}>
        //         {props.projArr.map(proj => 
        //             <Grid.Column className="height margin">
        //                 <Reveal animated="move right" className="height">
        //                     <Reveal.Content visible>
        //                         <Image src={proj.image} />
        //                     </Reveal.Content>
        //                     <Reveal.Content hidden>
        //                         <p>{proj.info}</p>
        //                     </Reveal.Content>
        //                 </Reveal>
        //             </Grid.Column>
        //         )}
        //     </Grid.Row>
        // </Grid>
    )

}