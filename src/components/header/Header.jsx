import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'; // Import useState for handling menu toggle
import './header.css';
import ThemeButton from '../theme-btn/ThemeButton';
import site_logo from '../../img/site-logo.png';
import { Link } from 'react-router-dom';
import resume_dev from '../../files/resume_dev.pdf';
import resume_design from '../../files/resume_design.pdf';
import { LuMenu, LuX } from 'react-icons/lu'; // Import hamburger and close icons

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className='site-logo'>
        <img src={site_logo} alt="site logo" />
      </div>
      
      {/* Hamburger Menu Icon for mobile */}
      <div className='hamburger-icon' onClick={toggleMenu}>
        {isMenuOpen ? <LuX size={30} /> : <LuMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
            <li>        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
            </li>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              projects
            </NavLink>
          </li>
          <li className='dropdown-item'>
            <a className='resume-dropdown'>resume</a>
            <ul className='dropdown'>
              <li><a href={resume_dev} target='_blank'>dev resume</a></li>
              <li><a href={resume_design} target='_blank'>design resume</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Desktop Menu */}
      <div className='header-right'>
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

        {/* Dropdown for resumes */}
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