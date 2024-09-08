import './header.css';
import logo from '../../img/main_logo.png';
import resume from '../../files/resume.pdf';
import Homepage from '../homepage/Homepage';
import Drafts from '../works/Works';
import About from '../about/About';
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    // return (
    //     <div className='head' id='header'>
    //         <div className="head-wrapper">
    //             <div className='head-logo-wrapper'>
    //                 <Link to="/"> 
    //                     <img src={logo} alt='kim logo' className='head-logo'></img>
    //                 </Link>
    //             </div>
    //             <div className="head-text-nav-wrapper">
    //                 <div className="head-home">
    //                     <Link to="/" className="head-link">Home</Link>
    //                 </div>
    //                 <div className="head-drafts">
    //                     <Link to="/works" className="head-link">Works</Link>
    //                 </div>
    //                 <div className="head-about">
    //                     <Link to="/about" className="head-link">About</Link>
    //                 </div>
    //                 <div className="head-resume">
    //                     <a href={resume} className='head-link head-res'>Resume &#8599;</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    const hideNavbar =()=>{
        navRef.current.classList.remove("responsive_nav")
    }

	return (
		<header>
			<div className="site-logo">
                <img src={logo} alt="site logo"></img>
            </div>
			<nav ref={navRef}>
				<Link to="/" onClick={hideNavbar}>Home</Link>
                <Link to="/works" onClick={hideNavbar}>Works</Link>
                <Link to="/about" onClick={hideNavbar}>About</Link>
                <a href={resume} onClick={hideNavbar}>Resume &#8599;</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;