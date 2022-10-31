import './style.css'
import nameGif from '../../assets/images/name-gif.gif'

import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

var prevScroll = window.scrollY

window.onscroll = function() {
    const curScroll = window.scrollY
    if(prevScroll > curScroll) {
        document.getElementById('navbar').style.top='0'
    } else {
        document.getElementById('navbar').style.top='-60px'
    }
    prevScroll = curScroll
}

export default function Topnav() {
    return(
        <Navbar id='navbar' bg='primary' expand='lg' fixed='top' className='topnav'>
            <Navbar.Brand><Image fluid src={nameGif} alt='a gif of Ian Sieg being typed out and deleted as if it were on a command line or terminal'/></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                    <Nav>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
                        <Nav.Link href='#resume'>Resumé</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}


            // <Menu id='navbar' className='navbar' fixed='top'>
            //     <Menu.Item className='nav-icon'>
            //         <Image className='img-pad' src={nameGif} fluid alt='a gif of Ian Sieg being typed out and deleted as if it were on a command line or terminal'/>
            //     </Menu.Item>

            //     <Menu.Menu position='right'>
            //         <Menu.Item
            //             name='about'
            //             href='#about'
            //             content='About'
            //             className='nav-item'
            //         />
            //         <Menu.Item
            //             name='portfolio'
            //             href='#portfolio'
            //             content='Portfolio'
            //             className='nav-item'
            //         />
            //         <Menu.Item
            //             name='contact'
            //             href='#contact'
            //             content='Contact'
            //             className='nav-item'
            //         />
            //     </Menu.Menu>
            // </Menu>

    // (
        
        // <nav>
        //     <div>
        //         <img src={nameGif} className='animated-gif' alt='a gif of Ian Sieg being typed out and deleted as if it were on a command line or terminal'></img>
        //         <div>
        //             <div id="navbarSupportedContent">
        //                 <ul>
        //                     <li>
        //                         <a href="#about">About</a>
        //                     </li>
        //                     <li>
        //                         <a href="#work">Work</a>
        //                     </li>
        //                     <li>
        //                         <a href="#contact">Contact</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    // )
