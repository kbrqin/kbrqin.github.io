import React from 'react';
import './footer.css'; // Import styles if needed
import { LuSparkle } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Footer = ({ theme }) => {
    return (
        <div className={`footer ${theme}`}>
            <div className="footer-left">
                <p>
                    made with <span className='purple'>react</span> and <span className='purple'>♡</span> by kim guo
                </p>
                <p className='last-updated'>last updated: 2024-10-15</p>
            </div>
            <div className="footer-right">
                <div className="footer-slash-sect">
                    <div className="footer-slash-desc">
                        <span><LuSparkle className='icon'/></span>
                        <span className='footer-slash-category'>quick links /</span>
                    </div>
                    <div className="footer-slash-list">
                        <span><Link to="/">home</Link></span> ⋅ <span><Link to="/projects">projects</Link></span>
                    </div>
                </div>
                <div className="footer-slash-sect">
                    <div className="footer-slash-desc">
                        <span><LuSparkle className='icon'/></span>
                        <span className='footer-slash-category'>contact /</span>
                    </div>
                    <div className="footer-slash-list">
                        <span><Link to="mailto:kim.guo@uwaterloo.ca">email</Link></span> ⋅ <span><Link to="https://www.linkedin.com/in/kbrqin/">linkedin</Link></span> ⋅ <span><Link to="https://github.com/kbrqin/">github</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;