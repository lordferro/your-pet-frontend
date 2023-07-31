import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import MainPage from 'pages/MainPage';
import NewsPage from 'pages/NewsPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage';
import PageNotFound from 'pages/PageNotFound';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegisterForm/RegisterForm';
import UserPage from 'pages/UserPage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PriveteRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from 'hooks';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/main" index element={<MainPage />} />
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
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
