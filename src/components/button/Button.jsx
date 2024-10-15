import React from 'react';
import './button.css'; // Make sure to import the CSS file

const Button = ({ variant = 'primary', children, onClick }) => {
    return (
        <button
            className={`button ${variant}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;