import './style.css'
import nameGif from '../../images/name-gif.gif'

export default function Nav() {
    return(
        <nav>
            <div>
                <img src={nameGif} className='animated-gif' alt='a gif of Ian Sieg being typed out and deleted as if it were on a command line or terminal'></img>
                <div>
                    <div id="navbarSupportedContent">
                        <ul>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#work">Work</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}