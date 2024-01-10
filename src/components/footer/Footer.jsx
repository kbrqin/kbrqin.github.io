import resume from '../../files/resume.pdf';
import Resume from '../resume/Resume';
import './footer.css';

const Footer = () => {
    return (
        <div className='f'>
            <div className="f-wrapper">
                <div className="f-credits-wrapper">
                    <div className="f-email">Reach out to me at <a href='mailto:kim.guo@uwaterloo.ca' target="_blank" className='f-link'>kim.guo@uwaterloo.ca</a>!</div>
                    <div className="f-divider">-</div>
                    <div className="f-inspo">Inspired by <a href='https://berman.xyz/' target="_blank" className='f-link'>https://berman.xyz/.</a></div>
                    <div className="f-self-cr">Made with React and ♡ by Kim Guo</div>
                </div>
                <div className="f-contact-wrapper">
                    <div className="f-contact-heading">Contact</div>
                    <div className="f-contact f-github">
                        <a href='https://github.com/kbrqin' target="_blank" className='f-link'>GitHub</a>
                    </div>
                    <div className="f-contact f-email">
                        <a href='mailto:kim.guo@uwaterloo.ca' target="_blank" className='f-link'>Email</a>
                    </div>
                    <div className="f-contact f-resume">
                        <a href={resume}>Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;