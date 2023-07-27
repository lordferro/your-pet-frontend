import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from './MobileHeader/MobileHeader';
import TabletHeader from './TabletHeader/TabletHeader';
import DesktopHeader from './DesktopHeader/DesktopHeader';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <header>
      {isMobile && <MobileHeader />}
      {isTablet && <TabletHeader />}
      {isDesktop && <DesktopHeader />}
    </header>
  );
};

export default Header;
