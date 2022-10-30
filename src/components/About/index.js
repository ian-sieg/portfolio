import React, {useEffect, useState} from 'react'
import 'aos/dist/aos.css'
import './style.css'

export default function About() {
    const [width, setWidth] = useState(window.innerWidth)

    const updateWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    })

    const langCardComp = `https://github-readme-stats.vercel.app/api/top-langs/?username=ian-sieg&card_width=${width/2.25}&layout=compact&langs_count=6&title_color=ADEFD1FF&text_color=f5f5f5&icon_color=14b8a6&bg_color=171717&hide_border=true&locale=en&custom_title=Top%20%Languages`

    const langCardMobile = `https://github-readme-stats.vercel.app/api/top-langs/?username=ian-sieg&card_width=${width*0.8}&layout=compact&langs_count=6&title_color=ADEFD1FF&text_color=f5f5f5&icon_color=14b8a6&bg_color=171717&hide_border=true&locale=en&custom_title=Top%20%Languages`

    return(
        <section id='about' className='about-sect'>
        
        </section>
        //     {width >= 990 ?
        //         <div>
        //             <Grid relaxed padded doubling>
        //                 <Grid.Row verticalAlign='middle'>
        //                     <Grid.Column width={5}>
        //                         <Image src={headshot} data-aos='fade-right' data-aos-duration='1000'/>
        //                     </Grid.Column>
        //                     <Grid.Column width={11} data-aos='fade-left' data-aos-duration='1000' floated='right'>
        //                         <Segment basic vertical>
        //                             <p>
        //                                 Full stack web application developer and dynamic problem solver with a background in graphic design and communications. A quick-study who enjoys working collaboratively to build accessible, secure websites and develop creative solutions to issues. Strong organization and leadership abilities.
        //                             </p>
        //                         </Segment>
        //                         <Segment basic vertical>
        //                             <a href="https://github.com/ian-sieg" target='_blank' rel='noreferrer'><img src={langCardComp} alt="Ian Sieg's Top Languages" className='lang-card' /></a>
        //                         </Segment>
        //                         <Segment.Group horizontal className='segment-group-style'>
        //                             <Segment vertical className='segment-style-l'>
        //                                 <hr/>
        //                                 <h1>contact</h1>
        //                                 <a href='mailto:ianmsieg@gmail.com'><p>ianmsieg@gmail.com</p></a>
        //                             </Segment>
        //                             <Segment vertical className='segment-style-r'>
        //                                 <hr/>
        //                                 <h1>location</h1>
        //                                 <p>chicago, il</p>
        //                             </Segment>
        //                         </Segment.Group>
        //                     </Grid.Column>
        //                 </Grid.Row>
        //             </Grid>
        //         </div> :

        //         <div>
        //             <Grid relaxed padded>
        //                 <Grid.Row verticalAlign='bottom'>
        //                     <Grid.Column mobile={8}>
        //                         <Image src={headshot} data-aos='fade-right' data-aos-duration='1000'/>
        //                     </Grid.Column>
                            
        //                     <Grid.Column mobile={8}>
        //                         <Grid.Column data-aos='fade-left' data-aos-duration='1000'>
        //                                 <hr/>
        //                                 <h1>contact</h1>
        //                                 <p>ianmsieg@gmail.com</p>
        //                             </Grid.Column>
        //                             <Grid.Column data-aos='fade-left' data-aos-duration='1000'>
        //                                 <hr/>
        //                                 <h1>location</h1>
        //                                 <p>chicago, il</p>
        //                             </Grid.Column>
        //                     </Grid.Column>
        //                 </Grid.Row>
        //                 <Grid.Row>
        //                     <Grid.Column data-aos='fade-up' data-aos-duration='1000'>
        //                         <p>
        //                         Full stack web application developer and dynamic problem solver with a background in graphic design and communications, administration, and resource development. A quick-study who enjoys working collaboratively to build accessible, secure websites and develop creative solutions to issues. Strong organization and leadership abilities.
        //                         </p>
        //                         <br/>
        //                         <a href="https://github.com/ian-sieg" target='_blank' rel='noreferrer'><Image src={langCardMobile} alt="Ian Sieg's Top Languages" className='lang-card' /></a>
        //                     </Grid.Column>
        //                 </Grid.Row>
        //             </Grid>
        //         </div>
        //     }
        // </section>
    )
}