import './style.css'
import React, {Component} from 'react'
import nameGif from '../../images/name-gif.gif'
import {Menu, Image} from 'semantic-ui-react'

var prevScroll = window.scrollY

window.onscroll = function() {
    const curScroll = window.scrollY
    if(prevScroll > curScroll) {
        document.getElementById('navbar').style.top='0'
    } else {
        document.getElementById('navbar').style.top='-50px'
    }
    prevScroll = curScroll
}

export default class Nav extends Component {

    render() {
        return(
            <Menu id='navbar' className='navbar' fixed='top'>
                <Menu.Item className='nav-icon'>
                    <Image src={nameGif} fluid alt='a gif of Ian Sieg being typed out and deleted as if it were on a command line or terminal'/>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='about'
                        href='#about'
                        content='About'
                        className='nav-item'
                    />
                    <Menu.Item
                        name='portfolio'
                        href='#portfolio'
                        content='Portfolio'
                        className='nav-item'
                    />
                    <Menu.Item
                        name='contact'
                        href='#contact'
                        content='Contact'
                        className='nav-item'
                    />
                </Menu.Menu>
            </Menu>
        )
    }

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
}