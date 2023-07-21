import React from 'react';
import logo from "../../images/logo-desktop.svg"
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/"><img src={logo} alt="logo"/></Link>
      
    </div>
  );
};

export default Logo;