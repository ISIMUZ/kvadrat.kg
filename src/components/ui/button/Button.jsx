import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, onClick, href, className = '', ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }

    if (href) {
      navigate(href);
    }
  };

  return (
    <button
      className={`btn ${className}`}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string
};

export default Button;
