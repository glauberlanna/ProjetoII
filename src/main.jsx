import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { createBrowserRouter } from 'react-router-dom';
import Criarconta from './routes/Criarconta';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Criarconta",
    element: <Criarconta />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
