import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import MainPage from 'pages/MainPage';
import NewsPage from 'pages/NewsPage';
import NoticesPage from 'pages/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
