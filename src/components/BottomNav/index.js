import github from '../../assets/images/github-logo.png'
import linkedin from '../../assets/images/linkedin-circle.png'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import './style.css'

export default function BottomNav() {
    return(
        <Navbar as='aside' className='bottom-nav'>
            <a href='https://github.com/ian-sieg' target='_blank' rel='noreferrer' >
                <img src={github} alt='GitHub logo' className='logo-links'/></a>
            <a href='https://www.linkedin.com/in/ian-sieg/' target='_blank' rel='noreferrer'>
                <img src={linkedin} alt='LinkedIn logo' className='logo-links logo-links-last'/></a>
        </Navbar>
    )
}