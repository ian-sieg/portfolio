import React from "react"
import { useHorizontalScroll } from "../../assets/utils/horizontalScroll"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './style.css'

export default function Projects (props) {
    const scrollRef = useHorizontalScroll()
    //TODO: finish this so the overlay doesn't show up unless on mouseover
    const mouseEvent = (e) => {
        console.log(e)
    }
    return(
            <div ref={scrollRef} className='container-scroll'>
                <div className="row-scroll">
                {props.projArr.map(proj => 
                    <Card className='card-sizing' onMouseEnter={mouseEvent} key={proj.id}>
                        <Card.Img src={proj.image} className='img-sizing'/>
                        <Card.ImgOverlay className="card-content">
                            <Card.Body>
                                <Card.Title>{proj.title}</Card.Title>
                                <Card.Text>{proj.info}</Card.Text>
                                <Button href={proj.repo} target='_blank'><i className="fa-brands fa-github"/></Button>
                                <Button href={proj.link} target='_blank'><i className="fa-solid fa-link"/></Button>
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