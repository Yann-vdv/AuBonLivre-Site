import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { AuthProvider } from './context/Auth';
import Index from './pages';
import { RequestInterceptor } from './api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RequestInterceptor>
        <Index/>
      </RequestInterceptor>
    </AuthProvider>
  </React.StrictMode>
);