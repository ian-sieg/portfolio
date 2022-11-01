import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'

import projArr from '../../assets/utils/projArr'
import Projects from '../Projects'

export default function Portfolio() {

    return(
        <section id='portfolio' className='portfolio-sect'>
            <div className='section-title'>
                <h1>portfolio</h1>
                <hr/>
            </div>
            <Projects projArr={projArr} />
        </section>
    )
}