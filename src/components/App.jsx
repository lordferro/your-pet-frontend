import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import MainPage from 'pages/MainPage';
import NewsPage from 'pages/NewsPage';
import NoticesPage from 'pages/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage';
import PageNotFound from 'pages/PageNotFound';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegisterForm/RegisterForm';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/registration' element={<RegistrationForm/>} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};
