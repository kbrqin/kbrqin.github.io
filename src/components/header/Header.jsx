import { NavLink } from 'react-router-dom';
import React from 'react';
import './header.css';
import ThemeButton from '../theme-btn/ThemeButton';
import site_logo from '../../img/site-logo.png';
import { Link } from 'react-router-dom';
import resume_dev from '../../files/resume_dev.pdf';
import resume_design from '../../files/resume_design.pdf';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
        <div className='site-logo'>
            <img src={site_logo} alt="site logo" />
        </div>
        <div className='header-right'> {/* Add a container for nav and theme button */}
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/"
                            end
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            projects
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='dropdown-container'>
    <a className='resume-dropdown'>resume</a>
    <ul className='dropdown'>
        <li><a href={resume_dev}>development</a></li>
        <li><a href={resume_design}>design</a></li>
    </ul>
</div>
            <ThemeButton theme={theme} toggleTheme={toggleTheme} /> 
        </div>
    </header>
  );
};

export default Header;