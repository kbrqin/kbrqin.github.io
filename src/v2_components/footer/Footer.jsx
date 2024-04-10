import './footer.css';
import resume from '../../files/resume.pdf';

const Footer = () => {
    return (
        <div className='f'>
            <div className="f-wrapper">
                <div className="f-credits-wrapper">
                    <div className="f-email">Reach out to me at <a href='mailto:kim.guo@uwaterloo.ca' target="_blank" className='f-email'>kim.guo@uwaterloo.ca</a>!</div>
                    <div className="f-divider">-</div>
                    <div className="f-self-cr">Made with React and ♡ by Kim Guo</div>
                </div>
                <div className="f-contact-wrapper">
                    <div className="f-contact-heading">Contact</div>
                    <div className="f-contact f-github">
                        <a href='https://github.com/kbrqin' target="_blank" className='f-link'>GitHub</a>
                    </div>
                    <div className="f-contact f-email">
                        <a href='https://linkedin.com/in/kbrqin' target="_blank" className='f-link'>LinkedIn</a>
                    </div>
                    <div className="f-contact f-resume">
                        <a href={resume} className='f-link'>Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;