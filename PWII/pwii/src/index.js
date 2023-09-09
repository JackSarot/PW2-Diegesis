import React, { Profiler } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider,  Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './componentes/Home';
import { LoginSesion } from './componentes/LoginSesion';
import { RegistrarUsuario } from './componentes/RegistrarUsuario';

const router = createBrowserRouter([
  {

    path: '/',
    element: <Home/>,
    //errorElement: <ErrorPage/>,

  },
  {
    path: '/componentes/Login',
    element: <LoginSesion/>,
    //errorElement: <ErrorPage/>,
    //loader: customerLoader,
  },
  {
    path: '/componentes/Registro',
    element: <RegistrarUsuario/>,
    //errorElement: <ErrorPage/>,
    //loader: customerLoader,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider router={router}/>

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
