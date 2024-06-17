import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { createBrowserRouter } from 'react-router-dom';
import Criarconta from './routes/Criarconta';
import { RouterProvider } from 'react-router';
import Login from './routes/Login';
import Categorias from './routes/Categorias';
import UsuarioLogado from './routes/UsuarioLogado';
import PainelUsuario from './routes/PainelUsuario';
import CategoriasLogado from './routes/CategoriasLogado';
import PainelNovo from './routes/PainelNovo';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Categorias",
    element: <Categorias />
  },
  {
    path: "/Criarconta",
    element: <Criarconta />
  },
  {
    path: "/Login",
    element: <Login />
  },

  {
    path: "/UsuarioLogado",
    element: <UsuarioLogado />
  },

  {
    path: "/PainelUsuario",
    element: <PainelUsuario />
  },

    {
      path: "/PainelNovo",
      element: <PainelNovo />
    },

  {
    path: "/CategoriasLogado",
    element: <CategoriasLogado />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
