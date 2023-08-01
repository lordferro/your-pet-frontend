import { lazy } from 'react';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PriveteRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Addpet from 'pages/Add-pet/Add-pet';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from 'hooks';
import { Layout } from './Layout';
const MainPage = lazy(() => import('pages/MainPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));
const RegistrationForm = lazy(() => import('./RegisterForm/RegisterForm'));
const UserPage = lazy(() => import('pages/UserPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />}>
          <Route path="sell" element={<NoticesPage />} />
          <Route path="lost-found" element={<NoticesPage />} />
          <Route path="for-free" element={<NoticesPage />} />
        </Route>

        <Route
          path="/notices/favorite"
          element={<PrivateRoute component={NoticesPage} redirectTo="/login" />}
        />
        <Route
          path="/notices/own"
          element={<PrivateRoute component={NoticesPage} redirectTo="/login" />}
        />

        <Route path="/friends" element={<OurFriendsPage />} />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/user" component={LoginForm} />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/user" component={RegistrationForm} />
          }
        />
        <Route
          path="/user"
          element={<PrivateRoute component={UserPage} redirectTo="/login" />}
        />
        <Route
          path="/add-pet"
          element={<PrivateRoute component={Addpet} redirectTo="/login" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
