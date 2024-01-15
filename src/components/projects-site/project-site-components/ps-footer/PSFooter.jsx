import resume from '../../../../files/resume.pdf';
import './psfooter.css';

const PSFooter = () => {
    return (
        <div className='psf'>
            <div className="psf-wrapper">
                <div className="psf-credits-wrapper">
                    <div className="psf-email">Reach out to me at <a href='mailto:kim.guo@uwaterloo.ca' target="_blank" className='psf-link'>kim.guo@uwaterloo.ca</a>!</div>
                    <div className="psf-divider">-</div>
                    <div className="psf-inspo">Inspired by <a href='https://berman.xyz/' target="_blank" className='psf-link'>https://berman.xyz/.</a></div>
                    <div className="psf-self-cr">Made with React and ♡ by Kim Guo</div>
                </div>
                <div className="psf-contact-wrapper">
                    <div className="psf-contact-heading">Contact</div>
                    <div className="psf-contact psf-github">
                        <a href='https://github.com/kbrqin' target="_blank" className='psf-link'>GitHub</a>
                    </div>
                    <div className="psf-contact psf-email">
                        <a href='mailto:kim.guo@uwaterloo.ca' target="_blank" className='psf-link'>Email</a>
                    </div>
                    <div className="psf-contact psf-resume">
                        <a href={resume}>Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PSFooter;