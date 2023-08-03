import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from 'components/App';
import './index.css';

axios.defaults.baseURL = 'https://your-pets-backend.onrender.com/api/';
// axios.defaults.baseURL = 'http://localhost:8000/api/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/yourPet">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
