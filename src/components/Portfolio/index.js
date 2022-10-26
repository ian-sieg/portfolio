import React from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'

import projArr from '../../assets/projArr'
import Projects from '../Projects'

export default function Portfolio() {

    return(
        <section id='portfolio' className='portfolio-sect'>
            <Projects projArr={projArr} />
        </section>
    )
}