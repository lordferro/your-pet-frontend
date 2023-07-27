import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import MainPage from 'pages/MainPage';
import NewsPage from 'pages/NewsPage';
import NoticesPage from 'pages/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage';
import PageNotFound from 'pages/PageNotFound';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegisterForm/RegisterForm';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operation';
import { useAuth } from 'hooks';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'fetching user data'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
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
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
