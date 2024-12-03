import React from 'react';
import './Navigation.scss'

const Navigation = ({ children, link, onClick, ...props }) => {
  return (
    <a href={link} className='navigation' onClick={onClick} {...props}>
      {children}
    </a>
  );
}

export default Navigation;
