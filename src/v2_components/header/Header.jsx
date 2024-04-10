import './header.css';
import logo from '../../img/main_logo.png';
import resume from '../../files/resume.pdf';
import Homepage from '../homepage/Homepage';
import Drafts from '../drafts/Drafts';
import About from '../about/About';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='head' id='header'>
            <div className="head-wrapper">
                <div className='head-logo-wrapper'>
                    <img src={logo} alt='kim logo' className='head-logo'></img>
                </div>
                <div className="head-home">
                    <Link to="/" className="head-link-home">Home</Link>
                </div>
                <div className="head-drafts">
                    <Link to="/drafts" className="head-link-drafts">Drafts</Link>
                </div>
                <div className="head-about">
                    <Link to="/about" className="head-link-about">About</Link>
                </div>
                <div className="head-resume">
                    <a href={resume} className='head-res'>Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Header;