import React from "react"
import { useHorizontalScroll } from "../../assets/utils/horizontalScroll"
import Card from 'react-bootstrap/Card'

import './style.css'

export default function Projects (props) {
    const scrollRef = useHorizontalScroll()
    return(
            <div ref={scrollRef} style={{width: '100%', overflow: 'auto'}}>
                <div style={{whiteSpace: 'nowrap', display: 'flex', flexDirection: 'row'}}>
                {props.projArr.map(proj => 
                    <Card className="text-dark">
                        <Card.Header>{proj.title}</Card.Header>
                        <Card.Img src={proj.image} />
                    </Card>
                )}
                </div>
            </div>

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