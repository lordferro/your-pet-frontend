import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import MainPage from 'pages/MainPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
};
