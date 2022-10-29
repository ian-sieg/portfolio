import React from "react"
import { Card, Image } from "semantic-ui-react"
import { useHorizontalScroll } from "../../assets/horizontalScroll"

import './style.css'

export default function Projects (props) {
    const scrollRef = useHorizontalScroll()
    return(
            <div ref={scrollRef} style={{width: '100%', overflow: 'auto'}}>
                <div style={{whiteSpace: 'nowrap', display: 'flex', flexDirection: 'row'}}>
                {props.projArr.map(proj => 
                    <Card className="margin">
                        <Image src={proj.image} />
                        <Card.Content>
                            <Card.Header>{proj.title}</Card.Header>
                        </Card.Content>
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