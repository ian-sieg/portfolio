import github from '../../assets/images/github-logo.png'
import linkedin from '../../assets/images/linkedin-logo.png'

export default function BottomNav() {
    return(
        <div>
            <div>
                <a href='https://github.com/ian-sieg' target='_blank' rel='noreferrer'><img src={github} alt='GitHub logo' /></a>
                <a href='https://www.linkedin.com/in/ian-sieg/' target='_blank' rel='noreferrer'><img src={linkedin} alt='GitHub logo' /></a>
            </div>
        </div>
    )
}