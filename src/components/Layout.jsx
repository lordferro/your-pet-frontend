import { Outlet } from 'react-router';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Suspense } from 'react';
import Loader from './Loader/Loader';

import BackgroundColor from '../components/shared/BackgroundColor';

export const Layout = () => {
  return (
    <BackgroundColor>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </BackgroundColor>
  );
};
