import './style.css'
import github from '../../images/github-logo.png'
import linkedin from '../../images/linkedin-logo.png'

export default function Nav() {
    return(
        <div className='nav justify-content-between'>
            <h1>ian <br></br> sieg</h1>
            <ul className='nav-list'>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#work'>Work</a>
                </li>
                <li>
                    <a href='#resume'>Resume</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            <ul className='link-list'>
                <li>
                    <a href='https://github.com/ian-sieg' target='_blank' rel='noreferrer'><img src={github} alt='GitHub logo' /></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/ian-sieg-670675212/' target='_blank' rel='noreferrer'><img src={linkedin} alt='GitHub logo' /></a>
                </li>
            </ul>
        </div>
    )
}