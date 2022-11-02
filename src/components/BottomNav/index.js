import github from '../../assets/images/github-logo.png'
import linkedin from '../../assets/images/linkedin-logo.png'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import './style.css'

export default function BottomNav() {
    return(
        <Navbar fixed='bottom'>
            <div>
                <a href='https://github.com/ian-sieg' target='_blank' rel='noreferrer'><img src={github} alt='GitHub logo' /></a>
                <a href='https://www.linkedin.com/in/ian-sieg/' target='_blank' rel='noreferrer'><img src={linkedin} alt='GitHub logo' /></a>
            </div>
        </Navbar>
    )
}