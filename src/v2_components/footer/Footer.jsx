import './footer.css';
import resume from '../../files/resume.pdf';
import github_icon from '../../img/v3_img/github_icon.png';
import linkedin_icon from '../../img/v3_img/linkedin_icon.png';

const Footer = () => {
    return (
        <div className='f'>
            <div className="f-wrapper">
                <div className="f-credits-wrapper">
                    <p className="f-email">Reach out to me at <a href='mailto:kim.guo@uwaterloo.ca' target="_blank" className='f-email'>kim.guo@uwaterloo.ca</a>!</p>
                    <p className="f-divider">&mdash;</p>
                    <p className="f-self-cr">Made with <b className='text-purple'>React</b> and <b className='text-purple'>♡</b> by Kim Guo</p>
                    <p className="f-update-time">Last updated: 2024-09-08</p>
                </div>
                <div className="f-contact-wrapper">
                    <div className="f-contact-heading">Contact</div>
                    <div className="f-resume">
                        <a href={resume} className='f-link'>Resume ↗</a>
                    </div>
                    <div className="f-sm-icons">
                        <div className="f-sm-icon">
                            <a href="https://github.com/kbrqin"><img src={github_icon} alt="github icon"></img></a>
                        </div>
                        <div className="f-sm-icon">
                        <a href="https://www.linkedin.com/in/kbrqin/"><img src={linkedin_icon} alt="linkedin icon"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;