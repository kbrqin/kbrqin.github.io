import Resume from '../resume/Resume';
import './footer.css';

const Footer = () => {
    return (
        <div className='f'>
            <div className="f-wrapper">
                <div className="f-credits-wrapper">
                    <div className="f-email">Reach out to me at <a href='mailto:kim.guo@uwaterloo.ca' target="_blank">kim.guo@uwaterloo.ca</a>!</div>
                    <div className="f-divider">-</div>
                    <div className="f-inspo">Inspired by <a href='https://berman.xyz/' target="_blank">https://berman.xyz/.</a></div>
                    <div className="f-self-cr">Made with React and ♡ by Kim Guo</div>
                </div>
                <div className="f-contact-wrapper">
                    <div className="f-contact-heading">Contact</div>
                    <div className="f-contact f-github">
                        <a href='https://github.com/kbrqin' target="_blank">GitHub</a>
                    </div>
                    <div className="f-contact f-email">
                        <a href='mailto:kim.guo@uwaterloo.ca' target="_blank">Email</a>
                    </div>
                    <div className="f-contact f-resume">
                        <Resume/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;