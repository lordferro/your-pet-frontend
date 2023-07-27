import React from 'react';
import BigLogo from '../../images/logo-desktop.svg';
import MobileLogo from '../../images/Logo-mobile.svg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Logo = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      <Link to="/main">
        {isMobile ? (
          <img src={MobileLogo} alt="Mobile logo" width={116} />
        ) : (
          <img src={BigLogo} alt="Desktop logo" width={162} />
        )}
      </Link>
    </div>
  );
};

export default Logo;
