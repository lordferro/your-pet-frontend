import React from 'react';
import logo from '../../images/logo-desktop.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" width={162} />
      </Link>
    </div>
  );
};

export default Logo;
