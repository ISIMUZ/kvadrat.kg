import React, { useEffect } from 'react';
import './Loader.scss';

const Loader = ({ onLoadComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
};

export default Loader;
