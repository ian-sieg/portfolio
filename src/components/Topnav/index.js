import './style.css'
import nameGif from '../../assets/images/name-gif.gif'

import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'

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
        <Navbar id='navbar' expand='sm' fixed='top' className='topnav'>
            <Container fluid>
                <Navbar.Brand><Image fluid src={nameGif} alt='a gif of Ian Sieg being typed out and deleted as if it were on a command line or terminal'/></Navbar.Brand>
                <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />
                    <Navbar.Offcanvas id='offcanvasNavbar-expand-sm' placement='end' aria-labelledby='offcanvasNavbarLabel-expand-sm'>
                        <Offcanvas.Header>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-sm'><Image fluid src={nameGif} alt='a gif of Ian Sieg being typed out and deleted as if it were on a command line or terminal' /></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='justify-content-end'>
                            <Nav className='flex-grow pe-3'>
                                <Nav.Link href='#about'>About</Nav.Link>
                                <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
                                <Nav.Link href='#resume'>Resumé</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
